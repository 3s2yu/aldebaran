import React, { Component } from "react";
import styled from 'styled-components/native';

const HeaderView = styled.Image`
  background: yellow;
  height: 80;
`;

class Header extends Component {
  render() {
    return <HeaderView />;
  }
}

export default Header;
