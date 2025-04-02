public class ex64 {
    public static void main(String[] args) {
        // 연습문제 1
        // 1부터 N까지의 합계를 출력하시오.
        //  int n = 5;
        //  sum( n )을 호출하면, 5+4+3+2+1 까지의 합이 반환된다.
        int n = 5;
        System.out.println("sum(n) = " + sum(n));

        // 연습문제 2
        //  십진정수를 2진수로 변환하여 출력하시오.
        //  printBin( int n )
        //  printBin( 10 ) 호출시, 1010으로 출력됨.
        //    2 )  10
        //          5 - 0
        //          2 - 1
        //          1 - 0

        n = 10;
        System.out.println("n = " + Integer.toBinaryString(n));
        System.out.println("printBin(n) = " + printBin(n));

        // 연습문제 3
        //  문자열을 역으로 출력하기
        //  예) "abcde" => "edcba"

        System.out.println(Reverse("abcde"));
    }

    static int sum(int n) {
        if (n <= 1) {
            return n;
        } else {
            return n + sum(--n);
        }
    }

    static String printBin(int n) {
        if (n <= 1) {
            return Integer.toString(n);
        } else {
            return printBin(n / 2) + (n % 2);
        }
    }

    static String Reverse(String str) {
        if (str.length() == 1) {
            return str;
        } else {
            return Reverse(str.substring(1)) + str.charAt(0);
        }
    }
}