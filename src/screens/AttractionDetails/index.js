import React from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';
import InfoCard from '../../components/InfoCard';
import styles from './styles';

const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const openingHours = `OPEN
${item?.opening_time} - ${item?.closing_time}`;
  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  const onShare = async () => {
    try {
      const imageWithoutParams = mainImage?.split('?')[0];
      const imageParts = imageWithoutParams?.split('.');
      const imageExtension = imageParts[imageParts?.length - 1];
      const base64Image = await ImgToBase64.getBase64String(mainImage);
      Share.open({
        title: item?.name,
        message: 'Hey, I want to share this amazing destination with you!',
        url: `data:image/${imageExtension || 'jpg'};base64,${base64Image}`,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        });
    } catch (e) {
      console.log('sharing error :>>>', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={{borderRadius: 20}}
          source={{uri: mainImage}}>
          <View style={styles.header}>
            <Pressable onPress={onBack} hitSlop={8}>
              <Image
                style={styles.icon}
                source={require('../../assets/back.png')}
              />
            </Pressable>
            <Pressable onPress={onShare} hitSlop={8}>
              <Image
                style={styles.icon}
                source={require('../../assets/share1.png')}
              />
            </Pressable>
          </View>

          <Pressable onPress={onGalleryNavigate} style={styles.footer}>
            {slicedImages?.map((image, index) => (
              <View key={image}>
                <Image source={{uri: image}} style={styles.miniImage} />
                {diffImages > 0 && index === slicedImages?.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>
        <View style={styles.headerContainer}>
          <View style={{maxWidth: '90%'}}>
            <Text style={styles.title}>{item?.name}</Text>
          </View>
        </View>

        <InfoCard text={item?.city} icon={require('../../assets/city.png')} />

        <InfoCard
          text={item?.entry_price}
          icon={require('../../assets/cost.png')}
        />

        <InfoCard
          text={item?.address}
          icon={require('../../assets/navigation.png')}
        />

        <InfoCard
          text={openingHours}
          icon={require('../../assets/clock.png')}
        />
        <MapView style={styles.map} initialRegion={coords}>
          <Marker coordinate={coords} title={item?.name} />
        </MapView>
        <Text
          style={styles.mapText}
          onPress={() => navigation.navigate('MapScreen', {item})}>
          Show full screen map
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
