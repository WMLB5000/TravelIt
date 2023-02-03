import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    marginBottom: 12,
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3F4A59',
    marginTop: 12,
    marginLeft: 6,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: 'rgba(63,74,89,0.7)',
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 7,
    marginTop: 4,
  },
});

export default styles;
