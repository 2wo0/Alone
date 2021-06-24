import React from "react";
import styled from "styled-components";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import Category from "./Category";
import logo from "../../Image/logo.jpg";

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderTab>
        <MenuWrap>
          <MenuOutlined style={{ fontSize: "20px", color: "#08c" }} />
        </MenuWrap>
        <Logo src={logo} alt="logo" />
        <UserTab>
          <SearchOutlined style={{ fontSize: "25px", color: "#08c" }} />
          <Login>LOGIN</Login>
          <Join>JOIN</Join>
          <MyPage>MYPAGE</MyPage>
          <CartWrap>
            <Cart>CART</Cart>
            <Count>0</Count>
          </CartWrap>
        </UserTab>
      </HeaderTab>
      <Category></Category>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  width: 1425px;
  height: 130px;
  margin: 0 auto;
  padding-top: 23px;
`;

const HeaderTab = styled.div`
  ${(props) => props.theme.flexSpaceBetweenCenter};
  width: 1425px;
  height: 59px;
  border: 1px solid black;
`;

const MenuWrap = styled.div`
  width: 50px;
  margin-left: 20px;
`;

const Logo = styled.img`
  width: 150px;
  margin-left: 160px;
  object-fit: cover;
`;

const UserTab = styled.div`
  ${(props) => props.theme.flexSpaceBetweenCenter};
  width: 315px;
  height: 28px;
`;

const Login = styled.div`
  line-height: 10px;
`;

const Join = styled.div``;

const MyPage = styled.div``;

const CartWrap = styled.div`
  position: relative;
`;

const Cart = styled.div`
  display: inline-block;
  width: 40px;
`;

const Count = styled.div`
  display: inline-block;
  position: absolute;
  width: 18px;
  height: 18px;
  top: -3px;
  left: 41px;
  text-align: center;
  line-height: 18px;
  border: 1px solid black;
  border-radius: 50%;
`;
