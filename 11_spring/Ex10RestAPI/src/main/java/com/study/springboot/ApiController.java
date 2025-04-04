package com.study.springboot;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // @Controller + @ResponseBody
@RequestMapping("/api/v1")
public class ApiController {
    // http://localhost:8080/api/v1/hello
    @RequestMapping("/hello")
    public String hello() {
        return "API 서버입니다.";
    }

    // 클라 ---> 서버
    //     JSON -> DTO 클래스 매핑
    //  <- JSON
    @PostMapping("/login")
    public ResDto login(@RequestBody ReqDto reqDto) {
        System.out.println("username = " + reqDto.getUsername());
        System.out.println("password = " + reqDto.getPassword());

        // DB에서 select 해서 같은 id/pw 있으면 OK, 없으면 Fail해야 됨.

        ResDto resDto = new ResDto();
        resDto.setStatus("Ok");
        resDto.setMessage("로그인 성공!");

        return resDto; // HTTP 응답을 Body에 실어 보냄.
    }
}
