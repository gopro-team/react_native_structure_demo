import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { navigate } from 'components/Navigator';
import HomeHeader from './HomeHeader';

export default class Home extends Component {
  render() {
    return(
      <Container>
        <HomeHeader />
        <Text>Home</Text>
        <Button
          onPress={() => {
            navigate('Filter');
          }}
        >
          <Text>To filter</Text>
        </Button>
      </Container>
    );
  }
}
