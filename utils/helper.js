import React from 'react';
import { Text } from 'react-native';

export const getCardsLength = (count) => {
  if (count === 0 || count > 1) {
    return <Text>{count} cards</Text>;
  } else {
    return <Text>1 card</Text>;
  }
};
