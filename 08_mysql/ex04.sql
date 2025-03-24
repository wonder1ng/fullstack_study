-- 연습문제
-- 1. '배재용' 사원의 부서명을 보이시오.
-- 서브쿼리 또는 조인 방법으로 해결하시오.
-- 2. 한번도 주문한 적이 없는 제품의 정보를 보이시오.
-- 서브쿼리 또는 조인 방법으로 해결하시오.
-- 3. 담당자명, 고객회사명, 주문건수, 최초주문일과 최종주문일을 보이시오.

-- 실전문제
-- 1. 제품 테이블에 있는 제품 중 단가가 가장 높은 제품명은 무엇인가?
-- 2. 제품 테이블에 있는 제품 중 단가가 가장 높은 제품의 주문수량합은 얼마인가?
-- 3. '아이스크림' 제품의 주문수량합은 얼마인가?
-- 4. '서울특별시' 고객들에 대한 주문년도별 주문건수를 보이시오.

USE 세계무역;
SELECT 부서명, 이름 FROM 사원 JOIN 부서 ON 사원.부서번호 = 부서.부서번호 WHERE 이름 = "배재용";
SELECT * FROM 제품 LEFT JOIN 주문세부 ON 제품.제품번호 = 주문세부.제품번호 WHERE 주문수량 IS NULL;
SELECT 고객.담당자명, 고객.고객회사명, count(주문번호) AS 주문건수, MIN(주문일) AS 최초주문일, MAX(주문일) AS 최종주문일
FROM 고객 JOIN 주문 ON 고객.고객번호 = 주문.고객번호 GROUP BY 주문.고객번호;

SELECT * FROM 제품 ORDER BY 단가 DESC LIMIT 1;
SELECT COUNT(주문번호) as 주문수량합 FROM 주문세부 JOIN 제품 ON 제품.제품번호 = 주문세부.제품번호 WHERE 제품.단가 = (SELECT 단가 FROM 제품 ORDER BY 단가 DESC LIMIT 1 );
SELECT COUNT(주문번호) as 주문수량합 FROM 주문세부 JOIN 제품 ON 제품.제품번호 = 주문세부.제품번호 WHERE 제품명 LIKE "%아이스크림%";
SELECT YEAR(주문일) as 주문년도, COUNT(주문번호) as 주문건수 FROM 주문 JOIN 고객 ON 고객.고객번호 = 주문.고객번호 WHERE 도시 = "서울특별시" GROUP BY 주문년도;