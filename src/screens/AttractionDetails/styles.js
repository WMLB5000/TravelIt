import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    margin: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(256, 256, 256, 0.65)',
    margin: 16,
    paddingHorizontal: 4,
  },
  miniImage: {
    width: 40,
    height: 40,
    margin: 6,
    borderRadius: 8,
  },
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 40,
    height: 40,
    top: 6,
    left: 6,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  textContainer: {},

  title: {
    color: '#3F4A59',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 2,
  },
  city: {
    fontSize: 20,
    color: '#3F4A59',
    fontWeight: '400',
    marginTop: 10,
  },
  price: {},
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  mapText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4681A3',
    textAlign: 'center',
    padding: 16,
    marginBottom: 50,
    marginTop: 20,
  },
});

export default styles;
