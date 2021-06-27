import React from "react";
import styled from "styled-components";
import OutdoorLine from "./OutdoorLine";

export default function Category() {
  return (
    <CategoryWrap>
      <OutdoorLine />
    </CategoryWrap>
  );
}

const CategoryWrap = styled.div`
  width: 1100px;
  height: 50px;
  margin: 0 auto;
  border: 1px solid black;
`;
