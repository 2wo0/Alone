import React from "react";
import styled from "styled-components";

export default function DetailList() {
  return (
    <DetailWrap>
      <Title>백팩 & 멀티팩</Title>
    </DetailWrap>
  );
}

const DetailWrap = styled.section``;

const Title = styled.h2`
  ${(props) => props.theme.flexStart};
  width: 1200px;
  height: 87px;
  padding: 22px auto 16px auto;
  margin: 0 auto;
  font-size: 33px;
`;
