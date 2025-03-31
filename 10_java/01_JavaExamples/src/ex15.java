public class ex15 {
    public static void main(String[] args) {
        // 이중 반복문
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.println("i, j = " + i + ", " + j);
            }
        }

        int[][] nums = {{1, 2}, {3, 4}};
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.println("nums[i][j] = " + nums[i][j]);
            }
        }

        //별찍기
        //*****
        //*****
        //*****
        //*****
        //*****
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        //출력 예)
        //    *
        //   **
        //  ***
        // ****
        //*****
        //출력 예)
        //*******
        //*    **
        //*   * *
        //*  *  *
        //* *   *
        //**    *
        //*******
        for (int i = 1; i != 6; i++) {
            System.out.printf("%5s%n", "*".repeat(i));
        }
        System.out.println("*******");
        for (int i = 0; i != 5; i++) {
            System.out.printf("*%5s*%n", "*" + " ".repeat(i));
        }
        System.out.println("*******");
    }
}