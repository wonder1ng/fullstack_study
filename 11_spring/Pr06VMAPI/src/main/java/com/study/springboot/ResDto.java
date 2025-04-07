package com.study.springboot;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResDto {
    private String name;
    private int price;
    private String endDate;
}
