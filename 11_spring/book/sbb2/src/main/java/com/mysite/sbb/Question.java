package com.mysite.sbb;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter // 실무에서는 엔티티에 @Setter 미사용, 생성자와 추가 정의 메서드 사용
@Entity
public class Question {
	@Id // 기본키 지정
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	// 값 자동 증가(이 속성만 별도로 값 증가)
	private Integer id;
	
	@Column(length = 200) // 열의 길이 200
	// 테이블의 열로 지정(생략 시 자동 적옹)
	private String subject;
	
	@Column(columnDefinition = "TEXT")
	// 글자 수 제한 없는 경우?
	private String content;
	
	// @Column 미기재 시 자동 적용
	private LocalDateTime createDate;
	// db에서는 createDate(카멜)가 create_date(스네이크)로 변환됨. 
	
	@Transient // 테이블의 열이 아닌 클래스의 속성으로 사용
	private void desc() {
		System.out.println("Integer id(@GeneratedValue(strategy = GenerationType.IDENTITY)), String subject(length = 200), String content(columnDefinition = \"TEXT\"), LocalDateTime createDate")
	}
}
