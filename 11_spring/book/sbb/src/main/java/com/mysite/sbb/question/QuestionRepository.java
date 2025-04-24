package com.mysite.sbb.question;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface QuestionRepository extends JpaRepository<Question, Integer>{
	// JPA는 리포지터리의 메서드명을 분석하여 쿼리를 만들고 실행함.
	Question findBySubject(String subject);
	Question findBySubjectAndContent(String subject, String content);
	List<Question> findBySubjectLike(String subjecy);
	Page<Question> findAll(Pageable pageable);
	// Page: 페이징 클래스
	// Pageable: 페이징 처리 인터페이스
	Page<Question> findAll(Specification<Question> spec, Pageable pageable);
	
	// @Query: 직접 쿼리 입력(Entity 기준으로 테이블명 등 작성)
	@Query("select "
			+ "distinct q "
			+ "from Question q "
			+ "left outer join SiteUser u1 on q.author=u1 "
			+ "left outer join Answer a on a.question=q "
			+ "left outer join SiteUser u2 on a.author=u2 "
			+ "where "
			+ " q.subject like %:kw% "
			+ " or q.content like %:kw% "
			+ " or u1.username like %:kw% "
			+ " or a.content like %:kw% "
			+ " or u2.username like %:kw%")
	// @Param: @Query에 들어갈 값 입력 `:kw` = `kw`
	Page<Question> findAllByKeyword(@Param("kw") String kw, Pageable pageable);
}