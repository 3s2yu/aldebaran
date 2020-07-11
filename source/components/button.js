import React, { Component } from 'react';
import styled from 'styled-components/native';

class Button extends Component {
  static defaultProps = {
    bg: '#ff00ff',
    underlayColor: '#fff',
  }

  render() {
    const { children, onPress, theme, bg, underlayColor } = this.props;

    return (
      <ButtonView underlayColor={underlayColor} onPress={onPress} bg={bg}>
        <Text>{children}</Text>
      </ButtonView>
    );
  }
}

const ButtonView = styled.TouchableHighlight`
  background-color: ${props => props.bg};
  borderRadius: 4;
  height: 50;
  justifyContent: center;
  alignItems: center;
  width: 50;
`;

const Text = styled.Text`
  fontSize: 20;
`;

export default Button;
