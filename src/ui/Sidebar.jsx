import styled from "styled-components"

const StyledAside = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-200);

  grid-row: 1/-1;
`

export default function Sidebar() {
  return <StyledAside>SideBar SideBar SideBar SideBar SideBar</StyledAside>
}
