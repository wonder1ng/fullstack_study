package com.mysite.sbb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
	@GetMapping("/sbb")
	@ResponseBody
	public String index() {
		System.out.println("index"); // 서버 콘솔창에 출력
		// 페이지 <body>태그 안에 출력
		return "<h1>결과가 궁금해</h1>"
				+ "<h2 style='color: green;'>녹색</h2>"
				+ "<br/>그냥 출력";
	}
}
