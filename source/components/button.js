import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableHighlight`
  width: 130;
  height: 40;
  borderRadius: 5;
  justifyContent: center;
  alignItems: center;
`;

const Text = styled.Text`
  fontSize: 20;
`;

class Button extends Component {
  render() {
    const { text, onPress, theme } = this.props;

    return (
      <ButtonContainer underlayColor={{}} onPress={onPress}>
        <Text>{text}</Text>
      </ButtonContainer>
    );
  }
}

export default withTheme(Button);
