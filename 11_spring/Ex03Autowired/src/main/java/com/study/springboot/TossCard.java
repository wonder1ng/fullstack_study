package com.study.springboot;

import org.springframework.stereotype.Component;

@Component("cardToss")
public class TossCard implements ICard {
    @Override
    public void buy(String itemName) {
        System.out.println("TossCard itemName = " + itemName);
    }
}