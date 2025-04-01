import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class ex41 {
    public static void main(String[] args) throws ClassNotFoundException {
        // Class 클래스: 클래스 정보를 담고 있는 클래스
        //            : 멤버변수, 멤버함수, 어노테이션 정보 등
        Class c1 = String.class;
        System.out.println("c1 = " + c1);
        String str = new String();
        System.out.println("str = " + str.getClass());
        Class c2 = str.getClass();
        System.out.println("c2 = " + c2);
        Class c3 = Class.forName("java.lang.String");
        System.out.println("c3 = " + c3);

        Constructor[] cons = c3.getConstructors();
        System.out.println("Constructor list ------------------");
        for (Constructor con: cons) {
            System.out.println( con);
        }

        Method[] methods = c3.getMethods();
        System.out.println("Method list ------------------");
        for (Method m: methods) {
            System.out.println(m);
        }

        Annotation[] annotations = c3.getAnnotations();
        System.out.println("Annotation list ------------------");
        for (Annotation a: annotations) {
            System.out.println(a);
        }

        Field[] fields = c3.getFields();
        System.out.println("Field list ------------------");
        for (Field f: fields) {
            System.out.println(f);
        }
    }
}