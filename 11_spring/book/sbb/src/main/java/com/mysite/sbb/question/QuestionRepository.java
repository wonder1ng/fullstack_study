package com.mysite.sbb.question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Integer>{
	// JPA는 리포지터리의 메서드명을 분석하여 쿼리를 만들고 실행함.
	Question findBySubject(String subject);
	Question findBySubjectAndContent(String subject, String content);
	List<Question> findBySubjectLike(String subjecy);
}
