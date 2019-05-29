import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import Navigator, { setTopLevelNavigator } from 'components/Navigator';
import { fetchTagsCategory } from 'actions/app.action';
import 'styles/animation';


export class App extends Component {
  componentDidMount() {
    this.props.fetchTagsCategory();
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar hidden />
        <Navigator
          ref={navigatorRef => (setTopLevelNavigator(navigatorRef))}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = {
  fetchTagsCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
