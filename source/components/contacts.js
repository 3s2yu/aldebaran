import React, { Component } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import Contacts from 'react-native-contacts';
import styled from 'styled-components/native';

import { Avatar, Button } from './index';

const ContainerView = styled.View`
  flex: 1;
`;

const List = styled.View`
  background: #ff0000;
  align-items: center;
  flex-direction: row;
  flex-flow: row wrap;
`;

const Name = styled.Text`
  fontSize: 18;
  margin-left: 10px;
  textAlign: center;
`;

const Social = styled.View`
  background-color: #cccccc;
  flex-direction: row;
  width: 100%;
`;

class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
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
        this.setState({ contacts });
      }
    });
  }

  render() {
    return (
      <ContainerView>
        {this.state.contacts.map(contact => {
          return (
            <List key={contact.recordID}>
              <Avatar hasThumbnail={contact.hasThumbnail} thumbnailPath={contact.thumbnailPath} />
              <Name>{contact.givenName} {contact.familyName}</Name>
              <Social>
                <Button bg="#ff00ff">@</Button>
                <Button bg="#ffcc00">F</Button>
                <Button bg="#00bbee">T</Button>
              </Social>
              {/* <TitleText>{contact.jobTitle}</TitleText>
              <TitleText>{contact.note}</TitleText>
              <TitleText>{contact.company || '---'}</TitleText>
              {contact.phoneNumbers.map(item => {
                <TitleText>{item.label} {item.number}</TitleText>
              })}
              {contact.emailAddresses.map(item => {
                <TitleText>{item.label} {item.email}</TitleText>
              })}
              {contact.urlAddresses.map(item => {
                <TitleText>{item.label} {item.url}</TitleText>
              })} */}
            </List>
          );
        })}
      </ContainerView>
    );
  }
}

export default ContactsList;
