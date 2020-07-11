import React, { Component } from "react";
import { Image } from "react-native";
import styled from 'styled-components/native';

const ImageView = styled.Image`
  border-radius: 4px;
  height: 60;
  width: 60;
`;

class Avatar extends Component {
  render() {
    const { hasThumbnail, thumbnailPath } = this.props;
    return hasThumbnail ? <ImageView source={{ uri: thumbnailPath }} /> : <ImageView source={{ uri: 'https://place-hold.it/100x100/ccc' }} />;
  }
}

export default Avatar;
