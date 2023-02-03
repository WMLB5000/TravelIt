import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const InfoCard = ({text, style, icon}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
};

export default React.memo(InfoCard);
