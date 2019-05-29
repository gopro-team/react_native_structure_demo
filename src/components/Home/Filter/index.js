import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native-animatable';
import SearchBox from './SearchBox';
import CurrentTags from './CurrentTags';
import Section from './Section';
import styles from './index.style';

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  handleAnimationEnd = () => {
    const { isShowFilter } = this.props;
    if (isShowFilter === false) {
      this.setState({
        isShow: false,
      });
    }
  };

  handleAnimationStart = () => {
    const { isShowFilter } = this.props;
    if (isShowFilter === true) {
      this.setState({
        isShow: true,
      });
    }
  }

  render() {
    const { isShowFilter } = this.props;
    const { isShow } = this.state;
    return (
      <View
        animation={isShowFilter ? 'filterFadeInDown' : 'filterFadeOutUp'}
        duration={500}
        onAnimationBegin={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
        easing="ease-out-cubic"
        style={[
          styles.container,
          (isShow ? styles.show : styles.hide)
        ]}
      >
        <SearchBox />
        <CurrentTags />
        <Section />
      </View>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  isShowFilter: app.isShowFilter,
});

export default connect(mapStateToProps, null)(Filter);
