//package com.study.springboot;
//
//import org.junit.jupiter.api.Test;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//class Member2Test {
//
//    @Test
//    void getUsername() {
//        // given
//        String username = "testUser";
//        String password = "1234";
//
//        // when
//        Member2 member2 = new Member2(username, password);
//
//        // then
//        assertEquals("testUser", member2.getUsername());
//        assertEquals("1234", member2.getPassword());
//    }
//
//    @Test
//    void getPassword() {
//    }
//}

package com.study.springboot;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class Member2Test {

    @Autowired
    private Member member;

    @Test
    public void testMemberValues() {
        // Given: application.properties에 정의된 값들이 @Value를 통해 주입될 것입니다.
        // When: Member 객체의 username과 password 값이 주입되었는지 확인
        String expectedUsername = "username";
        String expectedPassword = "password";

        // Then: 값들이 올바르게 주입되었는지 확인
        assertThat(member.getUsername()).isEqualTo(expectedUsername);
        assertThat(member.getPassword()).isEqualTo(expectedPassword);
    }
}
