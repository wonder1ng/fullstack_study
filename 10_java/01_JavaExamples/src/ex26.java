//연습문제 - 싱글톤 만들기
//클래스 이름 : tossAccount
//  필드(private) : 계좌번호(1234), 고객이름(홍길동), 잔액(1000), 이자율(년3%)
//  메소드 : 입금(+100), 출금(-100), 이자계산(1년후 잔액), 잔액조회

public class ex26 {
    public static void main(String[] args) {
        //싱글톤을 호출후
        //1. 입금 메소드 호출
        //2. 출금 메소드 호출
        //3. 이자계산은 이자율을 읽어서 참조한다.
        //   이자계산후 잔액 증가한다.
        //4. 최종 잔액을 출력한다.
        BankAccount a1 = BankAccount.getInstance();
        BankAccount a2 = BankAccount.getInstance();
        System.out.println( a1 ); //119d7047
        System.out.println( a2 ); //119d7047
        a1.deposit(50000);
        System.out.println( a1.getBalance() );
        System.out.println( a2.getBalance() );
        a1.withdraw(950000);
        System.out.println( a1.getBalance() );
        System.out.println( a2.getBalance() );
        a2.interest(10);
        System.out.println( a1.getBalance() );
        System.out.println( a2.getBalance() );
    }
}

class BankAccount {
    private int balance = 1000000;
    private double interestRate = 0.02;
    private static BankAccount singleton;
    static BankAccount getInstance() {
        if (singleton == null) {
            singleton = new BankAccount();
        }
        return singleton;
    }

    public int getBalance() {
        return balance;
    }

    public double getInterestRate() {
        return interestRate;
    }

    public void deposit(int amount) {
        this.balance += amount;
    }

    public void withdraw(int amount) {
        this.balance -= amount;
    }

    public void interest(int year) {
        int interest = (int) Math.ceil(this.balance * (Math.pow(1 + this.interestRate, year) - 1));
        System.out.println("interest = " + interest);
        this.balance += interest;
        System.out.println("balance = " + this.balance);
    }
}