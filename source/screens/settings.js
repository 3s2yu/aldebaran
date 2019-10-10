import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { FormattedProvider, FormattedMessage } from 'react-native-globalize';

import { changeLanguage } from '../actions'
import { Button } from '../components';
import messages from '../messages';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
`;

class SettingsScreen extends Component {
  render() {
    return (
			<FormattedProvider locale={this.props.curState} messages={messages}>
        <ContainerView>
          <TitleText>
            <FormattedMessage message="Settings" />
          </TitleText>
				  <Button text="PT-BR" onPress={() => {this.props.changeLanguage('pt')}} />
          <Button text="EN" onPress={() => {this.props.changeLanguage('en')}} />
        </ContainerView>
			</FormattedProvider>
    );
  }
}

const mapStateToProps = ({ lang }) => ({
  curState: lang.lang
});

export default connect(mapStateToProps, {
	changeLanguage,
})(SettingsScreen);
