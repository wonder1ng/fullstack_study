import java.io.IOException;

public class ex01 {
    public static void main(String[] args) throws IOException {
        System.out.print("Hello print");
        System.out.println("Hello println");
        System.out.printf("Hello printf");
        System.out.print("Hello print\n");
        System.out.println("Hello println");
        System.out.printf("%nHello %s%n\n", "printf\n%n");
        int a;
        int b = 10;
        final int CONSTANT_NUMBER = 100;
        // CONSTANT_NUMBER = 1;
        // java: cannot assign a value to final variable CONSTANT_NUMBER
        System.out.println(b);
        System.out.println(CONSTANT_NUMBER);
        // System.out.println(a);
        // java: variable a might not have been initialized
        a = 2;
        System.out.println(a);
        int a1, a2, a3;
        int b1 = 1, b2 = 1, b3 = 3;


        byte c1 = 0;
        short c2 = 1;
        int c3 = 2;
        long c4 = 3L;
        System.out.println(c1);
        System.out.println(c2);
        System.out.println(c3);
        System.out.println(c4);

        System.out.println(System.in.read());
    }
}