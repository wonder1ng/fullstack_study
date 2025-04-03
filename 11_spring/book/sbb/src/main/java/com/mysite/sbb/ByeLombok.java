package com.mysite.sbb;

public class ByeLombok {
    private String greeting;
    private int lombok;
    
    public ByeLombok() {
    }

    public void setGreeting(String greeting) {
        this.greeting = greeting;
    }

    public void setLombok(int lombok) {
        this.lombok = lombok;
    }

    public String getGreeting() {
        return this.greeting;
    }

    public int getLombok() {
        return this.lombok;
    }

    public static void main(String[] args) {
        ByeLombok helloLombok = new ByeLombok();
        helloLombok.setGreeting("bye");
        helloLombok.setLombok(5);

        System.out.println(helloLombok.getGreeting());
        System.out.println(helloLombok.getLombok());
    }
}
