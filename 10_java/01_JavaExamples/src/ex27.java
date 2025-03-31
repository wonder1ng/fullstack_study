// 생성자 함수(Constructor): 인스턴스 생성 시 초기화하는 자동 호출 메서드

class Book {
    int price = 1000;
    //생성자 함수
    //패턴 : public 반환타입X 클래스이름(){ }
    public Book() {
        System.out.println("생성자 호출됨!");
        this.price = 2000;
    }
    void read () {
        System.out.println("읽는다.");
    }
}

public class ex27 {
    public static void main(String[] args) {
        Book book = new Book();
        System.out.println( book.price );
    }
}