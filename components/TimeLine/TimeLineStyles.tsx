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

  @media ${({ theme }) => theme.breakpoints.sm} {
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

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
  }
`;

export const CarouselItem = styled.div<{
  index?: number;
  active?: number | undefined;
}>`
  border-radius: 3px;
  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 124px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0e131f;
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
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 2rem;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 1.6rem;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.primary};
  padding-right: 16px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.4rem;
    line-height: 20px;
    margin-bottom: 4px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 12px;
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

  @media ${({ theme }) => theme.breakpoints.sm} {
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
