import React from "react";
import styled from "styled-components";
import banner from "../../Image/banner.jpg";

export default function Banner() {
  return <BannerWrap src={banner} alt={banner}></BannerWrap>;
}

const BannerWrap = styled.img`
  width: 1425px;
  height: 900px;
  object-fit: cover;
`;
