package com.study.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
    @GetMapping("/")
    @ResponseBody
    public String main() {
        return "스프링부트 웹서버입니다.";
    }

    // 1. 필드 주입
    @Autowired
    private Member member;

    @GetMapping("/member")
    @ResponseBody
    public String member() {
        member.setName("이순신");
        return "member.getName() = " + member.getName();
    }

    @Autowired
    @Qualifier("cardToss")
    ICard iCard; // 인터페이스 구현 객체를 주입하라
    // 구현객체가 2개(BCCard, TossCard)라 오류 발생
    // 구현 객체 선택법:
    // @Qualifier: @Autowired와 함께 쓰이며 어떤 빈을 주입할지 지정함.
    // @Primary: @Component와 함께 쓰이며 기본 빈을 지정함.
    @GetMapping("/card")
    @ResponseBody
    public String card() {
        member.setiCard(iCard);
        member.getiCard().buy("Bag");
        return "MainController.card()";
    }
}
