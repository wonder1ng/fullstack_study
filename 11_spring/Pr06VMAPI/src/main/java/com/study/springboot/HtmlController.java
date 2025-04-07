package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HtmlController {
    @GetMapping("/")
    public String main() {
        return "index";
    }
    @GetMapping("/add")
    public String add() {
        return "add";
    }
    @GetMapping("/edit")
    public String edit() {
        return "edit";
    }
}
