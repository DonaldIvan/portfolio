import styled from 'styled-components';

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem;
  margin: 3rem 5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 3rem 3rem;
    gap: 4rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const ListIconContainer = styled.div`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.regalBlue};
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 75px;
  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 65px;
    width: 65px;
    min-width: 65px;
  }
`;

export const ListTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: ${({ theme }) => theme.xlFontSize.contentTitle};
  line-height: 25px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.mdFontSize.contentTitle};
    line-height: 28px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.smFontSize.contentTitle};
    line-height: 28px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const ListParagraph = styled.p`
  font-size: ${({ theme }) => theme.xlFontSize.default};
  line-height: 25px;
  color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.mdFontSize.default};
    line-height: 28px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ListItem = styled.li`
  max-width: 500px;
  display: flex;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 320px;
    flex-direction: row;
  }
`;

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;
