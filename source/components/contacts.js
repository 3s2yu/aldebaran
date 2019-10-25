import React, { Component } from "react";
import {
  PermissionsAndroid,
  Platform,
  View,
  Text
} from "react-native";
import Contacts from 'react-native-contacts';

import styled from 'styled-components/native';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const List = styled.View`
  marginBottom: 40;
`;

const TitleText = styled.Text`
  fontSize: 18;
  textAlign: center;
`;

class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: "Contatos",
        message: "Este aplicativo gostaria de acessar seus contatos."
      }).then(() => {
        this.loadContacts();
      });
    } else {
      this.loadContacts();
    }
  }

  loadContacts() {
    Contacts.getAll((err, contacts) => {
      if (err === "denied") {
        console.warn("A permissão para acessar contatos foi negada");
      } else {
        //alert(contacts[0].familyName)
        this.setState({ contacts });
      }
    });
  }

  render() {
    return (
      <ContainerView>
        {this.state.contacts.map(contact => {
          return (
            <List>
              <TitleText>{contact.givenName} {contact.familyName}</TitleText>
              <TitleText>{contact.company || '---'}</TitleText>
            </List>
          );
        })}
      </ContainerView>
    );
  }
}

export default ContactsList;
