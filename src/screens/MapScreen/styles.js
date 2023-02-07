import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 40,
    backgroundColor: 'rgba(256, 256, 256, 0.99)',
    borderRadius: 15,
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    width: width - 48,
    margin: 24,
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: '#3F4A59',
  },
  title: {
    fontSize: 18,
    marginLeft: 17,
    color: '#3F4A59',
    fontWeight: '500',
  },
  back: {
    width: 30,
    height: 30,
    marginLeft: 2,
  },
});

export default styles;
