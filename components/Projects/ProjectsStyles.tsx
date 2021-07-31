import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding: 3rem 0;
  place-items: center;
  column-gap: 2rem;
  gap: 3rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 350px;
  transition: 0.3s ease;
  background-color: ${({ theme }) => theme.colors.background2};
  border-radius: 5px;
  :hover {
    transform: scale(1.1);
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 0 0;
  font-size: 3rem;
  font-weight: 600;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 15px auto;
  border: 0;
  background: ${({ theme }) => theme.colors.lime};
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  margin-right: 20px;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.malibu};
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  font-weight: 600;
  transition: 0.3s ease;
  display: inline-block;
  &:hover {
    background: ${({ theme }) => theme.colors.malibu};
    color: ${({ theme }) => theme.colors.background2};
  }
`;

export const TagList = styled.p`
  text-align: left;
  color: ${({ theme }) => theme.colors.malibu};
`;
