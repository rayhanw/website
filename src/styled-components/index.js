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

export const HeaderTextContainer = styled.div`
  h2 {
    color: #96979c;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  h1 {
    margin-top: 0;
    margin-right: 2rem;
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
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
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
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
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

export const ProjectCard = styled.div`
  padding: 1rem 2rem;
  justify-self: center;
  border-radius: 12px;
  background-size: cover;
  background-position: center top;
  transition: 0.25s ease-in-out;
  width: 340px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    text-align: center;
  }
`

export const ProjectGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto;
  justify-content: center;
`

export const ProjectActionBar = styled.div`
  display: inline-block;
  > :first-child {
    margin-right: 1rem;
  }
  a,
  i {
    font-size: 28px;
  }
`
