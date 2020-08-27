import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { white, lightgray, lightblue } from '../utils/colors';
import Button from './Button';
import { getCardsLength } from '../utils/helper';

class DeckView extends Component {
  setTitle = (deckTitle) => {
    this.props.navigation.setOptions({
      title: deckTitle + ' Deck',
    });
  };

  render() {
    const { questions, title } = this.props;
    this.setTitle(title);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardNumber}>
          {getCardsLength(questions.length)}
        </Text>
        <Button
          onPress={() => navigation.navigate('Quiz', { deckId: title })}
          disabled={questions.length === 0 ? true : false}
          text='Start Quiz'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightblue,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: white,
  },
  cardNumber: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
    color: lightgray,
  },
});

function mapStateToProps({ decks }, { route }) {
  const { title } = route.params;
  return {
    title,
    questions: decks[title].questions,
  };
}

export default connect(mapStateToProps)(DeckView);
