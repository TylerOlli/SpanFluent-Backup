import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import { purple, white, lightgray, lightblue, red } from '../utils/colors';
import Button from './Button';
import { getCardsLength } from '../utils/helper';

class DeckView extends Component {
  setTitle = (deckTitle) => {
    this.props.navigation.setOptions({
      title: deckTitle + ' Deck',
    });
  };

  render() {
    const { questions, title, navigation } = this.props;
    this.setTitle(title);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardNumber}>
          {getCardsLength(questions.length)}
        </Text>
        <TouchableOpacity
          style={styles.buttonLight}
          onPress={() => navigation.navigate('AddCard', { deckId: title })}
        >
          <Text style={styles.buttonTextDark}>Add Card</Text>
        </TouchableOpacity>
        <Button
          onPress={() => navigation.navigate('Quiz', { deckId: title })}
          disabled={questions.length === 0 ? true : false}
          text='Start Quiz'
        />
        {questions.length === 0 ? (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: 3,
              padding: 5,
            }}
          >
            <FontAwesome name='warning' size={16} color={red} />
            <Text style={{ color: red }}>
              Add card before you can start quiz
            </Text>
          </View>
        ) : null}
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
  buttonLight: {
    backgroundColor: white,
    borderRadius: 5,
    height: 40,
    width: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonTextDark: {
    color: purple,
    fontWeight: '500',
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
