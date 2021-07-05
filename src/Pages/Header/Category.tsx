import React from "react";
import styled from "styled-components";
import OutdoorLine from "./OutdoorLine";
import HomeLine from "./HomeLine";
import TacticalLine from "./TacticalLine";
import Accessories from "./Accessories";
import Special from "./Special";
import Terg from "./Terg";
import Recommendation from "./Recommendation";
import Media from "./Media";
import Information from "./Information";

export default function Category() {
  return (
    <CategoryWrap>
      <OutdoorLine />
      <HomeLine />
      <TacticalLine />
      <Accessories />
      <Special />
      <Terg />
      <Recommendation />
      <Media />
      <Information />
    </CategoryWrap>
  );
}

const CategoryWrap = styled.div`
  ${(props) => props.theme.flexSpaceBetweenCenter};
  width: 1100px;
  height: 50px;
  margin: 0 auto;
  border: 1px solid black;
`;
