package com.mysite.sbb;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest // 스프링 부트의 테스트 클래스임을 의미
class Sbb2ApplicationTests {
	
	@Autowired // 의존성 주입: 스프링이 객체를 대신 생성하여 주입
	// 아래 두 코드는 동일
	// private QuestionRepository questionRepository = new QuestionRepository ();
	private QuestionRepository questionRepository;
	
	@Test // 테스트 메서드임을 의미
	void testJpa1() {
		Question q1 = new Question();
		q1.setSubject("sbb가 무엇인가요?");
		q1.setContent("sbb에 대해서 알고 싶습니다.");
		q1.setCreateDate(LocalDateTime.now());
		this.questionRepository.save(q1);

		Question q2 = new Question();
		q2.setSubject("스프링 부트 모델 질문입니다.");
		q2.setContent("id는 자동으로 생성되나요?");
		q2.setCreateDate(LocalDateTime.now());
		this.questionRepository.save(q2);
	}
	@Test
	void testJpa2() {
		List<Question> all = this.questionRepository.findAll();
		// assertEquals(v1(기댓값), v2(실젯값)): v1과 v2가 다르면 실패 
		assertEquals(2, all.size());
		
		Question q = all.get(0);
		assertEquals("sbb가 무엇인가요?", q.getSubject());
	}
	@Test
	void testJpa3() {
		// Optional: null값을 유연하게 처리하기 위한 클래스
		// `OptionalisPresent()`: 값이 존재하는지 확인
		Optional<Question> oq = this.questionRepository.findById(1);
		if(oq.isPresent()) {
			Question q = oq.get();
			assertEquals("sbb가 무엇인가요?", q.getSubject());
		}
	}
	@Test
	void testJpa4() {
		Question q = this.questionRepository.findBySubject("sbb가 무엇인가요?");
		assertEquals(1, q.getId());
	}
	@Test
	void testJpa5() {
		Question q = this.questionRepository.findBySubjectAndContent("sbb가 무엇인가요?", "sbb에 대해서 알고 싶습니다.");
		assertEquals(1, q.getId());
	}
}
