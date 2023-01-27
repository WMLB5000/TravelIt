import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = () => {
  return <Text style={styles.title}>Title Component Hello</Text>;
};

export default React.memo(Title);
