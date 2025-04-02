public class ex63 {
    public static void main(String[] args) {
        // 재귀함수로 팩토리얼(Factorial)을 구현해보자.
        // int n = 5;
        // 5! = 5 * 4 * 3 * 2 * 1
        // 형식: int result = factorial(n)
        int n = 5;
        int result = factorial(n);
        System.out.println("result = " + result);
    }
    static int factorial(int n) {
        // 탈출조건
        if (n == 2) {
            System.out.println("n: " + n);
            System.out.println("n-1: " + (n - 1) );
            System.out.println("n: 1");
            return 2;
        }
        System.out.println("n: " + n);
        System.out.println("n-1: " + (n - 1) );
        return n * factorial(n - 1);
    }
}