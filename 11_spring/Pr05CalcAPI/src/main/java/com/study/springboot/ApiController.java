package com.study.springboot;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class ApiController {
    @PostMapping("/calc")
    public ResDto calc(@RequestBody ReqDto req) {
        ResDto res = new ResDto();
        int cond = req.getCond();
        if (cond == 0) {
            res.setNumR(req.getNumA() + req.getNumB());
        } else if (cond == 1) {
            res.setNumR(req.getNumA() - req.getNumB());
        } else if (cond == 2) {
            res.setNumR(req.getNumA() * req.getNumB());
        } else if (cond == 3) {
            res.setNumR(req.getNumA() / req.getNumB());
        } else res.setNumR(null);
        res.setStatus("Ok");
        res.setMessage("전송 성공!");
        return res;
    }
}
