package com.mysite.sbb.question;

import java.security.Principal;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

import com.mysite.sbb.answer.AnswerForm;
import com.mysite.sbb.user.SiteUser;
import com.mysite.sbb.user.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequestMapping("/question") // URL prefix: 메서드 url의 접두사
@RequiredArgsConstructor // 상수와 @NotNull 변수 생성자 주입	
@Controller
public class QuestionController {
	
	private final QuestionRepository questionRepository;
	private final UserService userService;
	
	@GetMapping("/listEx") // Get 방식으로 매핑
	@ResponseBody // response를 body에 넣음
	public String listEx() {
		return "questionList"; // body에 들어갈 response
	}
	
	@GetMapping("/list2")
	public String list2(Model model) {
		List<Question> questionList = this.questionRepository.findAll();
		model.addAttribute("questionList", questionList);
		// Model: 클래스와 템플릿 간 연결 고리 역할로 Model에 값을 담으면 템플릿에서 그 값을 사용할 수 있음.
		return "questionList"; // 템플릿 파일명과 동일
	}
	
	private final QuestionService questionService;
	
	@GetMapping("/list")
	public String list(Model model, @RequestParam(value="page", defaultValue="0") int page,
			@RequestParam(value = "kw", defaultValue = "") String kw) {
		Page<Question> paging = this.questionService.getList(page, kw);
		model.addAttribute("paging", paging);
		model.addAttribute("kw", kw);
		return "questionList";
	}
	
	// 중괄호 안은 값이 들어갈 변수명
	@GetMapping(value = "/detail/{id}")
	// @PathVariable이 url과 연결해줌
	public String detail(Model model, @PathVariable("id") Integer id, AnswerForm answerForm) {
		Question question = this.questionService.getQuestion(id);
		model.addAttribute("question", question);
		return "questionDetail";
	}
	
    @GetMapping("/create")
    @PreAuthorize("isAuthenticated()") // 로그인한 경우에만 실행 
    public String questionCreate(QuestionForm questionForm) {
        return "questionForm";
    }
    
    @PostMapping("/create")
    @PreAuthorize("isAuthenticated()")
    public String questionCreate(@Valid QuestionForm questionForm, BindingResult bindingResult, Principal principal) {
    	// @Valid: 검증 기능 작동
    	// BindingResult: @Valid의 검증 결과를 반환하는 객체로 @Valid 매개 변수 바로 뒤에 위치.
    	if (bindingResult.hasErrors()) {
    		return "questionForm";
    	}
    	SiteUser siteUser = this.userService.getUser(principal.getName());
    	this.questionService.create(questionForm.getSubject(), questionForm.getContent(), siteUser);
        return "redirect:/question/list";
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/modify/{id}")
    public String questionModify(QuestionForm questionForm, @PathVariable("id") Integer id, Principal principal) {
    	Question question = this.questionService.getQuestion(id);
    	if (!question.getAuthor().getUsername().equals(principal.getName())) {
    		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정 권한이 없습니다.");
    	}
    	questionForm.setSubject(question.getSubject());
    	questionForm.setContent(question.getContent());
    	return "questionForm";
    }
    
    @PreAuthorize("isAuthenticated()")
    @PostMapping("/modify/{id}")
    public String questionModify(@Valid QuestionForm questionForm, BindingResult bindingResult,
    			Principal principal, @PathVariable("id") Integer id) {
    	if (bindingResult.hasErrors()) {
    		return "questionForm";
    	}
    	Question question = this.questionService.getQuestion(id);
    	if (!question.getAuthor().getUsername().equals(principal.getName())) {
    		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정 권한이 없습니다.");
    	}
    	this.questionService.modify(question, questionForm.getSubject(), questionForm.getContent());
    	return String.format("redirect:/question/detail/%s", id);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/delete/{id}")
    public String questionDelete(Principal principal, @PathVariable("id") Integer id) {
    	Question question = this.questionService.getQuestion(id);
    	if (!question.getAuthor().getUsername().equals(principal.getName())) {
    		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "삭제 권한이 없습니다.");
    	}
    	this.questionService.delete(question);
    	return "redirect:/";
    }
    
    @PreAuthorize("isAuthenticated()")
    @GetMapping("/vote/{id}")
    public String questionVote(Principal principal, @PathVariable("id") Integer id) {
    	Question question = this.questionService.getQuestion(id);
    	SiteUser siteUser = this.userService.getUser(principal.getName());
    	this.questionService.vote(question, siteUser);
    	return String.format("redirect:/question/detail/%s", id);
    }
    
}
