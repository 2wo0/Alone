import React from "react";
import styled from "styled-components";
import banner from "../../Image/banner.jpg";
import { useHistory } from "react-router-dom";

export default function Banner() {
  const history = useHistory();

  const page = () => {
    history.push("/detailList");
  };

  return <BannerWrap onClick={page} src={banner} alt={banner}></BannerWrap>;
}

const BannerWrap = styled.img`
  width: 1425px;
  object-fit: cover;
  cursor: pointer;
`;
