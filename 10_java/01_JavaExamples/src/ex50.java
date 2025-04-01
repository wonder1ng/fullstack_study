import java.util.ArrayList;
import java.util.Scanner;

class Student {
    String name;
    int kor;
    int eng;
    int math;

    public Student(String name, int kor, int eng, int math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setKor(int kor) {
        this.kor = kor;
    }

    public void setEng(int eng) {
        this.eng = eng;
    }

    public void setMath(int math) {
        this.math = math;
    }
}


public class ex50 {
    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        boolean flag = true;
        String name = "";
        while (flag) {
            System.out.println("-----------성적 관리 프로그램-------------");
            System.out.print("1.입력 2.전체출력 3.검색 4.수정 5.삭제 6.종료: ");
            int cate = Integer.parseInt(scanner.nextLine());

            switch (cate) {
                case 1:
                    System.out.print("이름 입력: ");
                    name = scanner.nextLine();
                    System.out.print("국어 점수 입력: ");
                    int kor = Integer.parseInt(scanner.nextLine());
                    System.out.print("영어 점수 입력: ");
                    int eng = Integer.parseInt(scanner.nextLine());
                    System.out.print("수학 점수 입력: ");
                    int math = Integer.parseInt(scanner.nextLine());
                    Student tmp = new Student(name, kor, eng, math);
                    students.add(tmp);
                    break;
                case 2:
                    if (students.size() == 0) {
                        System.out.println("학생 정보가 없습니다.");
                    } else {
                        for (Student student : students) {
                            int total = student.kor + student.eng + student.math;
                            System.out.printf("이름: %s, 국어: %d, 영어: %d, 수학: %d, 총점: %d, 평균: %.1f%n", student.name, student.kor, student.eng, student.math, total, (double) total / 3);
                        }
                    }
                    break;
                case 3:
                    if (students.size() == 0) {
                        System.out.println("학생 정보가 없습니다.");
                    } else {
                    System.out.print("검색할 사람의 이름: ");
                    name = scanner.nextLine();
                        boolean target = true;
                        for (Student student : students) {
                            if (student.name.equals(name)) {
                                target = false;
                                int total = student.kor + student.eng + student.math;
                                System.out.printf("이름: %s, 국어: %d, 영어: %d, 수학: %d, 총점: %d, 평균: %.1f%n", student.name, student.kor, student.eng, student.math, total, (double) total / 3);
                            }
                        }
                        if (target) {
                            System.out.println(name + " 힉생 정보가 없습니다.");
                        }
                    }
                    break;
                case 4:
                    if (students.size() == 0) {
                        System.out.println("학생 정보가 없습니다.");
                    } else {
                    System.out.print("수정할 사람의 이름: ");
                    name = scanner.nextLine();
                        boolean target = true;
                        for (Student student : students) {
                            if (student.name.equals(name)) {
                                target = false;
                                System.out.print("수정할 내용은? 1.국어 2.영어 3.수학: ");
                                int cate2 = Integer.parseInt(scanner.nextLine());
                                if (cate2 == 1) {
                                    System.out.print("국어 점수 수정: ");
                                    student.kor = Integer.parseInt(scanner.nextLine());
                                } else if (cate2 == 2) {
                                    System.out.print("영어 점수 수정: ");
                                    student.eng = Integer.parseInt(scanner.nextLine());
                                } else if (cate2 == 3) {
                                    System.out.print("수학 점수 수정: ");
                                    student.math = Integer.parseInt(scanner.nextLine());
                                }
                            }
                        }
                        if (target) {
                            System.out.println(name + " 힉생 정보가 없습니다.");
                        }
                    }
                    break;
                case 5:
                    if (students.size() == 0) {
                        System.out.println("학생 정보가 없습니다.");
                    } else {
                    System.out.print("삭제할 사람의 이름: ");
                    name = scanner.nextLine();
                        boolean target = true;
                        for (Student student : students) {
                            if (student.name.equals(name)) {
                                target = false;
                            }
                        }
                        if (target) {
                            System.out.println(name + " 힉생 정보가 없습니다.");
                        } else {
                            String finalName = name;
                            students.removeIf(s -> s.name.equals(finalName));
                            System.out.println(name + " 힉생 정보가 삭제되었습니다.");
                        }
                    }
                    break;
                case 6:
                    flag = !flag;
                    System.out.println("종료!!");
                    break;
                default:
                    System.out.println("입력이 잘못 되었습니다.");
            }
        }
    }
}
