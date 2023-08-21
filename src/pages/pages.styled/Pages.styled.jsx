import styled from 'styled-components';

import bgImgD from '../../images/home-bg-d.png';
import bgImgD2 from '../../images/home-bg-d@2x.png';
import bgImgM from '../../images/home-bg-m.png';
import bgImgM2 from '../../images/home-bg-m@2x.png';
import bgImgT from '../../images/home-bg-t.png';
import bgImgT2 from '../../images/home-bg-m@2x.png';

import bgImgNotfoundM from '../../images/notfound-bg-m.png';
import bgImgNotfoundM2 from '../../images/notfound-bg-m@2x.png';
// import bgImgNotfoundD from '../../images/notfound-bg-d.png';
// import bgImgNotfoundD2 from '../../images/notfound-bg-d@2x.png';
// import bgImgNotfoundT from '../../images/notfound-bg-t.png';
// import bgImgNotfoundT2 from '../../images/notfound-bg-t@2x.png';

// Home
export const HomeWrapper = styled.div`
  height: 600px;
  background-image: url('${bgImgM}');
  padding: 20px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${bgImgM2}');
  }

  @media screen and (min-width: 768px) {
    height: 1024px;
    background-image: url('${bgImgT}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bgImgT2}');
    }
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 768px;
    background-image: url('${bgImgD}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bgImgD2}');
    }
  }
`;
// TitlePages
export const HomeTitle = styled.h1`
  width: 280px;
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  @media screen and (min-width: 768px) {
    width: 588px;
    font-size: 68px;
    font-weight: 600;
  }

  @media screen and (min-width: 1280px) {
    width: 500px;
    font-size: 68px;
    font-weight: 800;
  }
`;
// Nwes
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:40px;
  gap: 24px;
`;


export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32.78px;
  text-align: center;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 65.57px;
  }
`;

export const NwesPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
`;

export const SearchContainer = styled.div`
  position: relative;
`;
export const SearchIcon = styled.span`
  position: absolute;
  top: 55%;
  right: 10px;
  transform: translateY(-50%);
  
  fill: var(--blue);
`;
export const SearchInput = styled.input`
  width: 280px;
  height: 44px;
  font-size: 16px;
  padding-left: 20px;
  border: 1px solid var(--blue);
  border-radius:50px;
  cursor: pointer;
  color: var(--blue);
  &::placeholder {
    font-size: 14px;
    line-height: 16.94px;
    
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    font-size: 18px;
    &::placeholder {
    font-size: 20px;
    line-height: 24.2px;
    
  }
  }
`;

export const SponsorWrap = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

`
  //Notfound
export const Notfound = styled.div`
    
    height: 600px;
    width: 320px;
    background-image: url('${bgImgNotfoundM}');
    background-repeat: no-repeat;
    background-position: center;
    background-position: bottom -100px right -50px;
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${bgImgNotfoundM2}');
  }
`;
