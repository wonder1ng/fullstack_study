package com.mysite.sbb.question;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Integer>{
	// JPA는 리포지터리의 메서드명을 분석하여 쿼리를 만들고 실행함.
	Question findBySubject(String subject);
	Question findBySubjectAndContent(String subject, String content);
	List<Question> findBySubjectLike(String subjecy);
	Page<Question> findAll(Pageable pageable);
	// Page: 페이징 클래스
	// PageRequest: 페이징 요청 클래스
	// Pageable: 페이징 처리 인터페이스
}
