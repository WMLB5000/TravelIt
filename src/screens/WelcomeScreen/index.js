import React from 'react';
import {View, ImageBackground} from 'react-native';
import Button from '../../components/Button';
import {styles} from './styles';

const WelcomeScreen = ({navigation}) => {
  const onHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/welcome4.png')}>
        <Button onPress={onHome} title="Enter" />
      </ImageBackground>
    </View>
  );
};

export default React.memo(WelcomeScreen);
