// 제네릭(Generic)
//      : 형(Type)에 따른 데이터 전송(타입 선언)을 편하게(가변적 타입 선언) 하기 위해 JDK 1.5버전부터 지원
// 주요 JDK 버전: 1.8(8버전), 11버전, 17버전
class Keyboard1 {
    // Object: 모든 타입의 객체를 담을 수 있지만(다형성) 다운캐스팅(강제 형변환)해야 함.
    private Object object;

    public Object getObject() {
        return object;
    }

    public void setObject(Object object) {
        this.object = object;
    }
}

class Keyboard2<T> {
    private T object;

    public T getObject() {
        return object;
    }

    public void setObject(T object) {
        this.object = object;
    }
}

public class ex51 {
    public static void main(String[] args) {
        Keyboard1 k1 = new Keyboard1();
        k1.setObject("키보드1");   // 업캐스팅 변경
        String str = (String) k1.getObject();   // 다운캐스팅
        System.out.println("str = " + str);

        Keyboard2<String> k2 = new Keyboard2<>();
        k1.setObject("키보드2");
        String str2 = k2.getObject();
        System.out.println("str2 = " + str2);

        Keyboard2<Integer> k3 = new Keyboard2<>();
        k3.setObject(10);
        Integer i = k3.getObject();
        System.out.println("i = " + i);
    }
}