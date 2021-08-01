import styled from 'styled-components';

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${({ theme }) => theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: #212d45;
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
    height: 135px;
    padding: 16px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
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
    font-size: 28px;
    line-height: 32px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.xlFontSize.navLink};
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
    font-size: 28px;
    line-height: 32px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.xlFontSize.navLink};
    line-height: 26px;
  }
`;

export const BoxText = styled.p<{ description?: boolean }>`
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.primary};
  flex-grow: ${({ theme, description }) => description && '1'};

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 10px;
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
