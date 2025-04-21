package com.mysite.sbb;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.mysite.sbb.answer.Answer;
import com.mysite.sbb.answer.AnswerRepository;
import com.mysite.sbb.question.Question;
import com.mysite.sbb.question.QuestionRepository;
import com.mysite.sbb.question.QuestionService;

import jakarta.transaction.Transactional;

@SpringBootTest // 스프링 부트의 테스트 클래스임을 의미
class SbbApplicationTests {
	
	@Autowired // 의존성 주입: 스프링이 객체를 대신 생성하여 주입
	// 아래 두 코드는 동일
	// private QuestionRepository questionRepository = new QuestionRepository ();
	private QuestionRepository questionRepository;
	
	@Test // 테스트 메서드임을 의미
	void testJpa01() {
		Question q1 = new Question();
		q1.setSubject("sbb가 무엇인가요?");
		q1.setContent("sbb에 대해서 알고 싶습니다.");
		q1.setCreateDate(LocalDateTime.now());
		q1.desc();
		this.questionRepository.save(q1);

		Question q2 = new Question();
		q2.setSubject("스프링 부트 모델 질문입니다.");
		q2.setContent("id는 자동으로 생성되나요?");
		q2.setCreateDate(LocalDateTime.now());
		q2.desc();
		this.questionRepository.save(q2);
	}
	@Test
	void testJpa02() {
		List<Question> all = this.questionRepository.findAll();
		// assertEquals(v1(기댓값), v2(실젯값)): v1과 v2가 다르면 실패 
		assertEquals(2, all.size());
		
		Question q = all.get(0);
		assertEquals("sbb가 무엇인가요?", q.getSubject());
	}
	@Test
	void testJpa03() {
		// Optional: null값을 유연하게 처리하기 위한 클래스
		// `OptionalisPresent()`: 값이 존재하는지 확인
		Optional<Question> oq = this.questionRepository.findById(1);
		if(oq.isPresent()) {
			Question q = oq.get();
			assertEquals("sbb가 무엇인가요?", q.getSubject());
		}
	}
	@Test
	void testJpa04() {
		Question q = this.questionRepository.findBySubject("sbb가 무엇인가요?");
		assertEquals(1, q.getId());
	}
	@Test
	void testJpa05() {
		Question q = this.questionRepository.findBySubjectAndContent("sbb가 무엇인가요?", "sbb에 대해서 알고 싶습니다.");
		assertEquals(1, q.getId());
	}
	@Test
	void testJpa06() {
		List<Question> qList = this.questionRepository.findBySubjectLike("sbb%");
		Question q = qList.get(0);
		assertEquals("sbb가 무엇인가요?", q.getSubject());
	}
	
	// Answer Entity test code
	@Test
	void testJpa07() {
		Optional<Question> oq = this.questionRepository.findById(1);
		assertTrue(oq.isPresent());
		Question q = oq.get();
		q.setSubject("수정된 제목");
		this.questionRepository.save(q);
	}
	@Test
	void testJpa08() {
		assertEquals(2, this.questionRepository.count());
		Optional<Question> oq = this.questionRepository.findById(1);
		assertTrue(oq.isPresent());
		Question q = oq.get();
		this.questionRepository.delete(q);
		assertEquals(1, this.questionRepository.count());
	}
	
	@Autowired
	private AnswerRepository answerRepository;
	
	@Test
	void testJpa09() {
		Optional<Question> oq = this.questionRepository.findById(2);
		assertTrue(oq.isPresent());
		Question q = oq.get();
		
		Answer a = new Answer();
		a.setContent("네 자동으로 생성됩니다.");
		a.setQuestion(q);
		a.setCreateDate(LocalDateTime.now());
		this.answerRepository.save(a);
	}
	@Test
	void testJpa10() {
		Optional<Answer> oa = this.answerRepository.findById(1);
		assertTrue(oa.isPresent());
		Answer a = oa.get();
		assertEquals(2, a.getQuestion().getId());
	}
	
	@Transactional // 해당 메서드가 완로되어야 트랜잭션 실행
	@Test
	void testJpa11() {
		Optional<Question> oq = this.questionRepository.findById(2);
		// @Test에서는 객체 조회 후 DB 세션이 끊어짐
		assertTrue(oq.isPresent());
		Question q = oq.get();
		List<Answer> answerList = q.getAnswerList();
		
		assertEquals(1, answerList.size());
		assertEquals("네 자동으로 생성됩니다.", answerList.get(0).getContent());
	}

    @Autowired
    private QuestionService questionService;
    @Test
    void testJpa12() {
        for (int i = 1; i <= 300; i++) {
            String subject = String.format("테스트 데이터입니다:[%03d]", i);
            String content = "내용무";
            this.questionService.create(subject, content);
        }
    }
}