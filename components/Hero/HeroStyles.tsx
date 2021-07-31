import styled from 'styled-components';

interface Button {
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
}

export const LeftSection = styled.div`
  width: 100%;
  padding: 15rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const LeftSectionText = styled.h3`
  color: ${({ theme }) => theme.colors.malibu};
  font-size: 2.5rem;
  background: ${({ theme }) => theme.colors.malibu};
  background: linear-gradient(
    90deg,
    rgba(119, 207, 255, 1) 0%,
    rgba(119, 207, 255, 0.1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Button = styled.a<Button>`
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.lime};
  padding: 10px 20px;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  font-weight: 600;
  transition: 0.3s;
  display: inline-block;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.lime};
    color: ${({ theme }) => theme.colors.background1};
  }
  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? '20px' : '16px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
