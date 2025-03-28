public class ex03 {
    public static void main(String[] args) {
        //데이터 타입(자료형)
        //기본자료형 8개
        //정수형 : int(4) long(8) short(2) byte(1)
        //실수형 : float(4) double(8)
        //논리형 : boolean(1)
        //문자형(내부적으로 숫자형) : char(2)
        
        // 문자열형 : String(가변길이)
        
        // 변수 선언 시 타입 지정 필요
        int myInt = 10;
        System.out.println("myInt = " + myInt);
        long myLong = 20L; // 뒤에 L 또는 l 넣어야함. 가독성 위해 대문자 L 넣음.
        System.out.println("myLong = " + myLong);
        short myShort = 30;
        System.out.println("myShort = " + myShort);
        byte myByte = 40;
        System.out.println("myByte = " + myByte);

        //실수형
        float myFloat = 3.14f; //뒤에 f 또는 F 넣어야 됨.
        System.out.println("myFloat = " + myFloat);
        double myDouble = 6.14;
        System.out.println("myDouble = " + myDouble);

        //논리형
        boolean myBool = true;
        System.out.println("myBool = " + myBool);

        //문자형 char
        char myChar = '가';  // 작은따옴표로 해야함
        System.out.println("myChar = " + myChar);
        //정수형으로 변환이 가능하다.
        System.out.println( (int)myChar ); //44032 0xAC00
        System.out.println( (char)0xAC00 ); //가
        //문자코드표 - 아스키코드표, 유니코드표
        System.out.println( (char)65 );
        System.out.println( (int)'A' );
        
        //문자열형 String
        String myString = "가나다";    // 큰따옴표로 해야 함
        System.out.println("myString = " + myString);
        String myCharFake = "가";    // myChar와 같아 보이나 자료형이 다름
        System.out.println(((Object)myChar).getClass().getSimpleName());
        System.out.println(myCharFake.getClass().getSimpleName());
    }
}