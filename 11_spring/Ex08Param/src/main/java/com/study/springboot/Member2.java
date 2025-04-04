package com.study.springboot;

import lombok.*;
import org.springframework.stereotype.Component;

//@Value의 용도
//1. springframework의 @Value
//  1) application의 설정값을 주입하는 용도
//2. lombok의 @Value
//  1) final, private, getter, equals, toString 등이 생성됨.

//@Component
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
@Value
public class Member2 {

    String username;
    String password;
}