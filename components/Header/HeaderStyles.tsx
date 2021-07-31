import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 2rem 0;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 6 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.4s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)<{ isOpen: boolean }>`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const PortfolioLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  font-size: 2rem;
`;
