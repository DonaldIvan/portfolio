import styled from 'styled-components';

export const CarouselContainer = styled.ul`
  max-width: 100%;
  background: #0f1624;
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
export const CarouselMobileScrollNode = styled.div<{ final: boolean }>`
  flex-grow: 1;
  flex-basis: 0;

  @media ${({ theme }) => theme.breakpoints.lg} {
    display: flex;
    min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
  }
`;

export const CarouselItem = styled.div<{
  index?: number;
  active?: number | undefined;
}>`
  border-radius: 3px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin-left: 32px;
    width: 200px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${(props) =>
      props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 150px;
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: ${({ theme }) => theme.xlFontSize.navLink};
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ theme }) => theme.xlFontSize.navLink};
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.mdFontSize.navLink};
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CarouselItemText = styled.p`
  font-size: ${({ theme }) => theme.xlFontSize.default};
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.primary};
  padding-right: 16px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    line-height: 20px;
    margin-bottom: 4px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.mdFontSize.default};
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;

  @media ${({ theme }) => theme.breakpoints.lg} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

export const CarouselButton = styled.button<{
  index?: number;
  active?: number | undefined;
}>`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) =>
    props.active === props.index ? `scale(1.6)` : `scale(1)`};
  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div<{ active: number | undefined }>`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;
