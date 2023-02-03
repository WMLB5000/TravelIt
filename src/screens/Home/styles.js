import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 32,
    alignItems: 'center',
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    color: '#3F4A59',
    marginTop: 30,
    marginBottom: 16,
  },
  smallsubtitle: {
    fontSize: 10,
    color: '#3F4A59',
    marginTop: -8,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 12,
    color: 'rgba(63,74,89,0.7)',
  },
});

export default styles;
