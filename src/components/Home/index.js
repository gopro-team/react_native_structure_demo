import React, { Component } from 'react';
import {
  Container,
} from 'native-base';
import HomeHeader from './HomeHeader';
import PhotosList from './PhotosList';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <HomeHeader />
        <PhotosList />
      </Container>
    );
  }
}
