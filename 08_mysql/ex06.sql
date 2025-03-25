USE 세계무역;
ALTER TABLE 제품 ADD CONSTRAINT CHECK(재고 >= 0);
ALTER TABLE 제품 ADD COLUMN 재고금액 INT AS (단가 * 재고) STORED;
ALTER TABLE 주문세부 ADD CONSTRAINT 제품번호 FOREIGN KEY (제품번호) REFERENCES 제품(제품번호) ON DELETE CASCADE;

CREATE TABLE 영화 (
    영화번호 CHAR(5) PRIMARY KEY,
    타이틀 VARCHAR(100) NOT NULL,
    장르 ENUM("코미디", "드라마", "다큐", "SF", "액션", "역사", "기타") NOT NULL,
    배우 VARCHAR(100) NOT NULL,
    감독 VARCHAR(50) NOT NULL,
    제작사 VARCHAR(150) NOT NULL,
    개봉일 DATE,
    등록일 DATE DEFAULT(CURDATE())
);

CREATE TABLE 평점관리 (
    번호 INT PRIMARY KEY AUTO_INCREMENT,
    평가자닉네임 VARCHAR(50) NOT NULL,
    영화번호 CHAR(20) NOT NULL REFERENCES 영화(영화번호),
    평점 INT NOT NULL CHECK(평점 BETWEEN 1 AND 5),
    평가 VARCHAR(200) NOT NULL,
    등록일 DATE DEFAULT(CURDATE())
);

INSERT INTO 영화 (영화번호, 타이틀, 장르, 배우, 감독, 제작사, 개봉일) VALUES 
("00001", "파묘", "드라마", "최민식,김고은", "장재현", "쇼박스", "2024-02-22"),
("00002", "듄:파트2", "액션", "티모시 살라메,젠데이아", "드니 뵐뇌브", "레전더리 픽처스", "2024-02-28");

INSERT INTO 평점관리 (번호, 평가자닉네임, 영화번호, 평점, 평가) VALUES 
(1, "영화광", "00001", 5, "미치도록 스릴이 넘쳐요"),
(2, "무비러브", "00002", 4, "장엄한 스케일이 좋다");

INSERT INTO 평점관리 (번호, 평가자닉네임, 영화번호, 평점, 평가) VALUES (3, "영화광", "00003", 5, "미치도록 스릴이 넘쳐요"),
DELETE FROM 영화 WHERE 영화번호="00001"
ALTER TABLE 평점관리 ADD CONSTRAINT 영화번호 FOREIGN KEY (영화번호) REFERENCES 영화(영화번호) ON DELETE CASCADE;