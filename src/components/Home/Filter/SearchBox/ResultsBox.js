import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import TextTrans from 'components/Common/TextTrans';
import {
  ListItem, Left, Right,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { toggleTag } from 'actions/app.action';
import { isTagSelected } from 'utils/tags';
import { size, color, state } from 'styles/base.style';
import styles from './index.style';
import text from './index.text';


export class ResultsBox extends Component {
  handleToggleTag = (id) => {
    const { toggleTag } = this.props;
    toggleTag(id);
  }

  renderIcon = (selected = false) => (
    <Icon
      name={selected ? 'ios-checkmark-circle' : 'md-add'}
      size={size.l}
      color={selected ? color.primary : color.black}
    />
  );

  renderItems = () => {
    const { results } = this.props;
    if (results.length === 0) {
      return (
        <ListItem
          noIndent
          style={styles.noBottomDivider}
        >
          <TextTrans
            textObject={text.emptyResult}
            style={styles.textGray}
          />
        </ListItem>
      );
    }
    return results.map((item, index) => (
      <ListItem
        key={item.id}
        noIndent
        button
        style={(index === results.length - 1) ? styles.noBottomDivider : {}}
        onPress={() => this.handleToggleTag(item.id)}
      >
        <Left
          style={styles.center}
        >
          <TextTrans
            textObject={item.name}
          />
          <Text style={styles.divider}>-</Text>
          <TextTrans
            textObject={item.categoryName}
            style={styles.subText}
          />
        </Left>
        <Right>
          {this.renderIcon(isTagSelected(item))}
        </Right>
      </ListItem>
    ));
  };

  render() {
    const { hide } = this.props;
    return (
      <View
        style={[
          styles.resultContainer,
          (hide ? state.hide : {})
        ]}
      >
        {
          this.renderItems()
        }
      </View>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  filtersLength: app.filters.length,
});

export default connect(mapStateToProps, {
  toggleTag,
})(ResultsBox);
