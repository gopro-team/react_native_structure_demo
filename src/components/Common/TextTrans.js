import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

export class TextTrans extends Component {
  convertText = () => {
    const { language, textObject } = this.props;
    if (!language) {
      return '';
    }
    return textObject[language] || '';
  }

  render() {
    return (
      <Text
        {...this.props}
      >
        {this.convertText()}
      </Text>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  language: app.language,
});

export default connect(mapStateToProps, null)(TextTrans);
