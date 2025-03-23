-- 실전문제
-- 1. 제품 테이블에서 세계무역이 취급하는 제품 중에서 '주스' 제품에 대한 모든 정보를 검색하시오.
-- 2. 제품 테이블에서 단가가 5,000원 이상 10,000원 이하인 '주스'제품에는 무엇이 있는지 검색하시오.
-- 3. 제품 테이블에서 제품번호가 1,2,4,7,11,20인 제품의 모든 정보를 보이시오.
-- 4. 제품 테이블에서 재고금액이 높은 상위 10개 제품에 대해 제품번호, 제품명, 
-- 단가, 재고, 재고금액(단가 * 재고)을 보이시오.

USE 세계무역;
SELECT sum(주문수량) as 주문수량합, sum(주문수량 * 단가) as 주문금액합 from 주문세부;
SELECT 주문번호, 제품번호, sum(주문수량 * 단가) as 주문금액합 from 주문세부 GROUP BY 주문번호, 제품번호 ORDER BY 주문번호;
SELECT 고객번호, count(주문번호) as 주문건수 from 주문 WHERE YEAR(주문일) = 2021 GROUP BY 고객번호 ORDER BY 주문건수 DESC limit 3;
SELECT 직위, count(사원번호) as 사원수, 이름 from 사원 GROUP BY 직위, 이름;
