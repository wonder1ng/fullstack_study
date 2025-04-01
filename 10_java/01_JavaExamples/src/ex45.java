public class ex45 {
    public static void main(String[] args) {
        // 예외 처리 (Exception Handling)
        // 1. try catch문
        // 2. throw문

        // 패턴
        // try {
        //     예외가 발생할만한 실행문
        // } catch (예외클래스 객체) {
        //      예외 발생 시 처리하는 실행문 - 오류 내용 출력
        // }

        String name = null;
        System.out.println(name);

        try {
            // java.lang.NullPointerException
            System.out.println(name.toLowerCase());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace(); // System.err 출력(가장 마지막에 출력됨)
        } finally {
            System.out.println("예외 처리 구문");
        }

        try {
            int[] nums = {10,20,30};
            //System.out.println( nums[3] );
            //System.out.println( 10 / 0 );
            String str = null;
            //str.toLowerCase();
        }
        catch (ArrayIndexOutOfBoundsException e){
            System.out.println("인덱스 예외발생!");
            e.printStackTrace();
        }
        catch (ArithmeticException e){
            System.out.println("산술 예외발생!");
            e.printStackTrace();
        }
        catch (Exception e){
            System.out.println("그외의 예외발생!");
            e.printStackTrace();
        }
        finally {
            //예외가 발생하든 안하든 무조건 호출되는 블럭
            // 마무리 정리하는 코드
            System.out.println("정리하는 코드");
        }
    }
}