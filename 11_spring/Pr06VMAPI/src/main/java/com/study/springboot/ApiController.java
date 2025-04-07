package com.study.springboot;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/product")
public class ApiController {
    ArrayList<ResDto> products = new ArrayList<>();

    @GetMapping("")
    public ArrayList<ResDto> list() {
        System.out.println("products = " + products);
        return products;
    }
    @PostMapping("")
    public void add(@RequestBody ReqDto req) {
        System.out.println("products = " + products);
        products.add(new ResDto(req.getName(), req.getPrice(), req.getEndDate()));
        System.out.println("products = " + products);
    }
    @PutMapping("")
    public void edit(@RequestBody ReqDto req) {
        System.out.println("products = " + products);
        products.set(req.getNum(), new ResDto(req.getName(), req.getPrice(), req.getEndDate()));
        System.out.println("products = " + products);
    }
    @DeleteMapping("/{num}")
    public void delete(@PathVariable int num) {
        System.out.println("products = " + products);
        products.remove(num);
        System.out.println("products = " + products);
    }
}
