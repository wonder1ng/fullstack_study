package com.study.springboot;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

//Java코드에서 UI템플릿(타임리프,JSP,머스테치)으로 데이타 전달
//1. request객체, session객체
//2. GET, POST 파라미터
//3. Model 객체
//4. ModelAndView 객체

//내장객체별 수명주기
//applicaton : 웹브라우저를 닫을 때까지
//session : 로그아웃하기 까지
//request : 요청에 대한 응답하기까지
//model : request와 동일함.

@Controller
public class MainController { // HttpServlet 클래스를 상속 받아 서블릿으로 등록.
    @GetMapping("/") // Request Mapping 코드
    public String main() { //Servlet Method
//        return "redirect:/index"; // URL 변경
        return "forward:/index"; // URL 동일
    }

    @GetMapping("/index")
    public String index(HttpServletRequest request, HttpServletResponse response, HttpSession session) {
        return "index"; // index.html로 응답
    }

    @GetMapping("/model1")
    public String model1(HttpServletRequest request) {
        request.setAttribute("name", "홍길동");
        request.setAttribute("age", "30");
        request.getSession().setAttribute("isLogin", "true");
        return "index";
    }

    @PostMapping("/post-form")
    public String postForm() {
        return "postForm"; // postForm.html 파일 반환.
    }

    @GetMapping("/model2") //GET localhost:8080/model2?name=변사또&age=40
    @PostMapping("/model2")
    public String model2(HttpServletRequest request) {
        String param_name = request.getParameter("name");
        String param_age = request.getParameter("age");
        request.setAttribute("name", param_name);
        request.setAttribute("age", param_age);
        return "index";
    }

    // get 없는 방법
    @PostMapping("/model3")
    public String model3(@RequestParam String name, @RequestParam String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "index";
    }

    @PostMapping("/model4")
    public String model4(@RequestParam String name, @RequestParam String age, HttpServletRequest request) {
        request.setAttribute("name", name);
        request.setAttribute("age", age);
        return "index";
    }

    //ModelAndView : 모델(데이터)와 View(HTML)을 동시에 저장하는 객체
    @RequestMapping("/model5") //localhost:8080/model3
    public ModelAndView model5(ModelAndView mv) {
        mv.addObject("name", "춘향이");
        mv.addObject("age", "18");
        mv.setViewName("index");
        return mv;
    }
}
