import styled from 'styled-components';

interface Button {
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
}

export const LeftSection = styled.div`
  width: 100%;
  padding: 15rem 0;
  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 12rem 0;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 5rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const LeftSectionText = styled.h3`
  color: ${({ theme }) => theme.colors.malibu};
  font-size: ${({ theme }) => theme.xlFontSize.contentTitle};
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
  font-size: ${({ theme }) => theme.xlFontSize.navLink};
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  font-weight: 600;
  transition: 0.3s ease;
  display: inline-block;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.lime};
    color: ${({ theme }) => theme.colors.background1};
  }
  &:focus {
    outline: none;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: fit-content;
  }
`;
