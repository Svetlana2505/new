import React from "react";
import styled from "styled-components";

import phone from "../images/phone.jpg";
import phonex2 from "../images/phone@2x.jpg";
import tablet from "../images/tablet.jpg";
import tabletx2 from "../images/tablet@2x.jpg";
import desktop from "../images/desktop.jpg";
import desktopx2 from "../images/desktop@2x.jpg";

const StyledHero = styled.div`
  background-repeat: no-repeat;
  background-size: cover;

  border-image: url(${phone});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${phonex2});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${tablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletx2});
    }
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${desktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktopx2});
    }
  }
`;

export const Hero = (props) => {
  return <StyledHero {...props} />;
};
