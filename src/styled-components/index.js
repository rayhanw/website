import styled from "styled-components"
import { Link } from "gatsby"

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 2rem;
  }
`

export const HeaderContainer = styled.div`
  h2 {
    color: #96979c;
  }
`

export const BlogBox = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  width: 100%;
  background-color: rgba(200, 200, 200, 0.1);
  margin-bottom: 1rem;
  border-radius: 4px;
  transition: background-color 0.25s ease;
  text-decoration: none;
  &:hover {
    background-color: rgba(200, 200, 200, 0.3);
  }
  > span {
    margin-bottom: 1rem;
  }
  > a {
    margin-bottom: 0.4rem;
  }
  > h3 {
    margin: 0;
    margin-bottom: 0.5rem;
  }
`

export const HeaderBox = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
  > ul {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    > li {
      display: inline-block;
      margin: 0;
      padding: 0;
      margin-right: 0.5rem;
    }
  }
`

export const StyledLink = styled(Link)`
  transition: color 0.25s ease;
  &:hover {
    color: var(--textHoverLink);
  }
`
