import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 850px;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 670px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    padding: 0 15px;
  }
`;
