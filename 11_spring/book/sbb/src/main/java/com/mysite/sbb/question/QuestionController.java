package com.mysite.sbb.question;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor // 상수와 @NotNull 변수 생성자 주입	
@Controller
public class QuestionController {
	
	private final QuestionRepository questionRepository;
	
	@GetMapping("/question/listEx") // Get 방식으로 매핑
	@ResponseBody // response를 body에 넣음
	public String listEx() {
		return "questionList"; // body에 들어갈 response
	}
	
	@GetMapping("/question/list")
	public String list(Model model) {
		List<Question> questionList = this.questionRepository.findAll();
		model.addAttribute("questionList", questionList);
		// Model: 클래스와 템플릿 간 연결 고리 역할로 Model에 값을 담으면 템플릿에서 그 값을 사용할 수 있음.
		return "questionList"; // 템플릿 파일명과 동일
	}
}
