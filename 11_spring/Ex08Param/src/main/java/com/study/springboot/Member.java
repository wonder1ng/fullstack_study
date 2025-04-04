package com.study.springboot;

import lombok.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

// @Value의 용도
// `org.springframework.beans.factory.annotation.Value`: 설정값 주입
// `lombok.Value`: class와 모든 필드를 final로 만들고 필드에 아래의 기본 메서드 생성
//  @Getter @FieldDefaults(makeFinal=true, level=AccessLevel.PRIVATE) @AllArgsConstructor @ToString @EqualsAndHashCod
@Component
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    @Value("username") // 기본값 설정
    private String username;
    @Value("password")
    private String password;
}
