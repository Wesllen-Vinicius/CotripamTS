import styled from "styled-components";
function NotFoundPage() {
  return (
    <Content404>
      <Title>.404 NOT FOUND</Title>
      <Button>
        <MenuLink href="/">Go to Home</MenuLink>
      </Button>
    </Content404>
  );
}
export default NotFoundPage;

const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;


const Content404 = styled.div`
  display: flex;
  align-items: center;
`;

const MenuLink = styled.a`
  text-decoration: none;
  margin-right: 1em;
  color: white;
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
  }
`;
