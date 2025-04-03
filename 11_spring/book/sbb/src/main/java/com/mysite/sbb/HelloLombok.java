package com.mysite.sbb;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
public class HelloLombok {
    private String greeting;
    private int lombok;

    public static void main(String[] args) {
        HelloLombok helloLombok = new HelloLombok();
        helloLombok.setGreeting("hello");
        helloLombok.setLombok(5);

        System.out.println(helloLombok.getGreeting());
        System.out.println(helloLombok.getLombok());
    }
}
