import styled from 'styled-components';

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    row-gap: 6rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 10px;
    row-gap: 4rem;
  }
`;

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.background2};
  border-radius: 5px;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 270px;
  @media ${({ theme }) => theme.breakpoints.lg} {
    min-height: 310px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 500px;
    min-height: 200px;
    padding: 16px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 12px;
    min-height: 170px;
  }
`;
export const BoxCompany = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.xlFontSize.contentTitle};
  line-height: 30px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.mdFontSize.contentTitle};
    line-height: 32px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.smFontSize.navLink};
    line-height: 26px;
  }
`;

export const BoxRole = styled.h6`
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.xlFontSize.navLink};
  line-height: 40px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.lime};
  margin-bottom: 8px;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.mdFontSize.navLink};
    line-height: 32px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.smFontSize.navLink};
    line-height: 26px;
  }
`;

export const BoxText = styled.p<{ description?: boolean }>`
  font-size: ${({ theme }) => theme.xlFontSize.default};
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.primary};
  flex-grow: ${({ description }) => description && '1'};

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.mdFontSize.default};
    line-height: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.smFontSize.default};
    line-height: 14px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: ${({ theme }) => theme.xlFontSize.navLink};
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${({ theme }) => theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
