import * as React from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const ButtonSplit = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-width: 400px;
  max-height: 100vh;
`;

const BaseSidebar = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;
`;

const Button = styled.div`
  padding: 7.5px 10px;
  color: cornflowerblue;
  border-radius: 20px;
  text-align: top;
  transition: 0.3s ease all;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: #5682d2;
  }
`;

export const Title = styled.div`
  font-size: 1.3em;
  margin: 10px;
  padding: 15px;
`;

export class Sidebar extends React.Component {
  public state = {
    isOpen: true
  };

  public renderSidebar() {
    return this.state.isOpen ? (
      <ButtonSplit>
        <BaseSidebar> {this.props.children} </BaseSidebar>
        <div>
          <Button onClick={() => this.toggleSidebar()}>
            <FaTimes />
          </Button>
          {""}
        </div>
      </ButtonSplit>
    ) : (
      <Button onClick={() => this.toggleSidebar()}>
        <FaBars />
      </Button>
    );
  }

  public toggleSidebar = () => {
    const open = !this.state.isOpen;
    this.setState({
      isOpen: open
    });
  };

  public render() {
    return <div className="SidebarContainer">{this.renderSidebar()}</div>;
  }
}
