import styled from 'styled-components';

export const AnimationBox = styled.div`
  display: flex;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;
