import React from "react";
import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <HeaderWrap>
      <MenuOutlined />
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  width: 1425px;
  height: 130px;
  margin: 0 auto;
  padding-top: 23px;
  border: 1px solid black;
`;
