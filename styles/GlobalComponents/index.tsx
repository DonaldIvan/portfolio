import styled from 'styled-components';

interface Section {
  row?: boolean;
  grid?: boolean;
  withBg?: boolean;
}

interface SectionTitle {
  main?: boolean;
  center?: boolean;
}
interface Link {
  large?: boolean;
  nav?: boolean;
}

export const Section = styled.section<Section>`
  display: ${({ grid }) => (grid ? 'grid' : 'flex')};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  margin: 0 auto;
  margin-top: ${({ grid }) => !grid && '60px'};
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  border-radius: 5px;
  background: ${({ theme, withBg }) =>
    withBg ? theme.colors.background2 : 'transparent'};
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
    grid-template-columns: ${({ grid }) => grid && '1fr'};
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2<SectionTitle>`
  font-weight: 800;
  font-size: ${({ main, theme }) =>
    main ? theme.xlFontSize.banner : theme.xlFontSize.sectionTitle};
  text-align: ${({ main }) => (main ? 'left' : 'center')};
  line-height: ${({ main, theme }) =>
    main ? theme.xlFontSize.banner : theme.xlFontSize.sectionTitle};
  color: ${({ main, theme }) =>
    main ? theme.colors.lime : theme.colors.primary};
  width: 100%;
  max-width: 100%;
  background: ${({ main, theme }) =>
    main &&
    `linear-gradient(
    90deg,
    rgba(164, 255, 0, 1) 0%,
    rgba(164, 255, 0, 0.5) 100%
  )`};
  -webkit-background-clip: ${({ main }) => main && 'text'};
  -webkit-text-fill-color: ${({ main }) => main && 'transparent'};
  margin-bottom: 16px;
  padding: ${({ main }) => (main ? '10px 0 0' : '50px 0 0')};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ main }) => (main ? '56px' : '48px')};
    line-height: ${({ main }) => (main ? '56px' : '48px')};
    margin-bottom: 12px;
    padding: ${({ main }) => (main ? '40px 0 12px' : '0')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${({ main }) => (main ? '28px' : '32px')};
    line-height: ${({ main }) => (main ? '32px' : '40px')};
    margin-bottom: 8px;
    padding: 20px 0 0;
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: ${({ theme }) => theme.xlFontSize.navLink};
  line-height: 35px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: ${({ theme }) => theme.colors.primary};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: ${({ theme }) => theme.xlFontSize.contentTitle};
  line-height: 32px;
  color: ${({ theme }) => theme.colors.primary};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const SecondaryBtn = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.xlFontSize.contentTitle};
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const LinkContainer = styled.div<Link>`
  margin-left: ${({ large }) => (large ? '24px' : '16px')};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? '16px' : '8px')};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? '0' : '8px')};
  }
`;

export const LinkIconImg = styled.div<Link>`
  display: flex;
  height: ${({ large }) => (large ? '32px' : '24px')};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => (nav ? '16px' : '24px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => (large ? '32px' : '16px')};
  }
`;
