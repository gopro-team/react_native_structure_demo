import React, { Component } from 'react';
import {
  Container,
} from 'native-base';
import HomeHeader from './HomeHeader';
import PhotosList from './PhotosList';
import Filter from './Filter';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <HomeHeader />
        <PhotosList />
        <Filter />
      </Container>
    );
  }
}
