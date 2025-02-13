import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const tablet = "959px";
const mobile = "768px";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const SiteHeader = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`;
const BrandLogo = styled.div`
  font-size: 24px;
  color: #2664eb;
  font-weight: bold;
  padding: 0 20px;
  display: flex;
`;
const MainNav = styled.div`
  display: flex;
  @media screen and (max-width: ${mobile}) {
    visibility: hidden;
    display: none;
  }
`;
const PrimaryMenu = styled.ul`
  display: flex;
  flex-direction: row;
`;
const PrimaryMenuLi = styled.li`
  list-style: none;
  padding: 0 30px;
  position: relative;
  &:hover > ul {
    display: block;
  }
`;
const Submenu = styled.ul`
  display: none;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 47px;
  left: 20px;
`;
const SubmenuLi = styled.li`
  display: block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  text-align: left;
  &:hover {
    background-color: #eff7ff;
  }
`;
const MainNavA = styled.a`
  color: rgb(0, 0, 0);
  text-decoration: none;
`;
const MainContent = styled.div`
  background-color: #f3f5f7;
  flex-grow: 100;
  height: 100%;
`;
const PageTitle = styled.div`
  display: flex;
  flex: 1 100%;
  padding: 30px 20px;
`;
const ContentGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 20px;
  gap: 30px;
  justify-content: center;
`;
const ProductBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;

  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    flex: 1 40%;
  }
  @media screen and (max-width: ${mobile}) {
    flex: 1 100%;
  }
`;
const HiddenBox = styled(ProductBox)`
  display: none;
  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    visibility: hidden;
    display: block;
  }
`;
const ProductTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
`;
const ProductName = styled.div`
  display: flex;
  font-weight: bold;
`;
const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #2664eb;
`;
const ProductDescription = styled.div`
  padding: 20px 0;
  font-size: 16px;
`;
const ProductFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ProductCategory = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-radius: 10px;
  background-color: #eff7ff;
  color: #2664eb;
`;
const AddItem = styled.div`
  background-color: #2664eb;
  color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border: none;
`;

export function Recommand() {
  const [showUl, setShowUl] = useState(false);
  return (
    <>
      <GlobalStyle />
      <div>
        <Wrapper>
          <SiteHeader>
            <BrandLogo>TechStore</BrandLogo>
            <MainNav>
              <PrimaryMenu>
                <PrimaryMenuLi
                  onMouseEnter={() => setShowUl(true)}
                  onMouseLeave={() => setShowUl(false)}
                >
                  <MainNavA href="#">제품</MainNavA>
                  <Submenu>
                    <SubmenuLi>
                      <MainNavA href="#">전자기기</MainNavA>
                    </SubmenuLi>
                    <SubmenuLi>
                      <MainNavA href="#">의류</MainNavA>
                    </SubmenuLi>
                    <SubmenuLi>
                      <MainNavA href="#">도서</MainNavA>
                    </SubmenuLi>
                    <SubmenuLi>
                      <MainNavA href="#">액세사리</MainNavA>
                    </SubmenuLi>
                  </Submenu>
                </PrimaryMenuLi>
                <PrimaryMenuLi>
                  <MainNavA href="#">서비스</MainNavA>
                  <Submenu>
                    <SubmenuLi>
                      <MainNavA href="#">컨설팅</MainNavA>
                    </SubmenuLi>
                    <SubmenuLi>
                      <MainNavA href="#">교육</MainNavA>
                    </SubmenuLi>
                    <SubmenuLi>
                      <MainNavA href="#">고객지원</MainNavA>
                    </SubmenuLi>
                    <SubmenuLi>
                      <MainNavA href="#">유지보수</MainNavA>
                    </SubmenuLi>
                  </Submenu>
                </PrimaryMenuLi>
                <PrimaryMenuLi>
                  <MainNavA href="#">회사소개</MainNavA>
                  <Submenu>
                    <SubmenuLi>
                      <MainNavA href="#">회사정보</MainNavA>
                    </SubmenuLi>
                    <SubmenuLi>
                      <MainNavA href="#">팀 소개</MainNavA>
                    </SubmenuLi>
                    <SubmenuLi>
                      <MainNavA href="#">채용정보</MainNavA>
                    </SubmenuLi>
                    <SubmenuLi>
                      <MainNavA href="#">연락처</MainNavA>
                    </SubmenuLi>
                  </Submenu>
                </PrimaryMenuLi>
              </PrimaryMenu>
            </MainNav>
          </SiteHeader>
          <MainContent>
            <PageTitle>
              <h1>추천 제품</h1>
            </PageTitle>
            <ContentGrid>
              <ProductBox>
                <ProductTop>
                  <ProductName>프리미엄 노트북</ProductName>
                  <ProductPrice>1,599.000원</ProductPrice>
                </ProductTop>
                <ProductDescription>
                  최신 사양의 고성능 노트북
                </ProductDescription>
                <ProductFooter>
                  <ProductCategory>전자기기</ProductCategory>
                  <AddItem>장바구니 담기</AddItem>
                </ProductFooter>
              </ProductBox>
              <ProductBox>
                <ProductTop>
                  <ProductName>무선 헤드폰</ProductName>
                  <ProductPrice>299.000원</ProductPrice>
                </ProductTop>
                <ProductDescription>
                  프리미엄 사운드의 노이즈 캔슬링 헤드폰
                </ProductDescription>
                <ProductFooter>
                  <ProductCategory>전자기기</ProductCategory>
                  <AddItem>장바구니 담기</AddItem>
                </ProductFooter>
              </ProductBox>
              <ProductBox>
                <ProductTop>
                  <ProductName>스마트 워치</ProductName>
                  <ProductPrice>399.000원</ProductPrice>
                </ProductTop>
                <ProductDescription>
                  피트니스 트래킹과 스마트 연결 가능
                </ProductDescription>
                <ProductFooter>
                  <ProductCategory>액세사리</ProductCategory>
                  <AddItem>장바구니 담기</AddItem>
                </ProductFooter>
              </ProductBox>
              <HiddenBox>
                <ProductTop>
                  <ProductName>스마트 워치</ProductName>
                  <ProductPrice>399.000원</ProductPrice>
                </ProductTop>
                <ProductDescription>
                  피트니스 트래킹과 스마트 연결 가능
                </ProductDescription>
                <ProductFooter>
                  <ProductCategory>액세사리</ProductCategory>
                  <AddItem>장바구니 담기</AddItem>
                </ProductFooter>
              </HiddenBox>
            </ContentGrid>
          </MainContent>
        </Wrapper>
      </div>
    </>
  );
}
