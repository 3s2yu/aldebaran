import React, { Component } from 'react';
import styled from 'styled-components/native';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
`;

class HomeScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>Home</TitleText>
      </ContainerView>
    );
  }
}

export default HomeScreen;
