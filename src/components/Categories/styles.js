import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    fontSize: 13,
    color: 'rgba(63,74,89,0.7)',
    //marginRight: 17,
    paddingVertical: 2,
  },
  selectedItem: {
    color: '#3F4A59',
  },
  itemContainer: {
    marginRight: 17,
    marginVertical: 5,
    marginBottom: 20,
  },
  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  },
});

export default styles;
