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
    const TextComponent = this.props.component || Text;
    return (
      <TextComponent
        {...this.props}
      >
        {this.convertText()}
      </TextComponent>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  language: app.language,
});

export default connect(mapStateToProps, null)(TextTrans);
