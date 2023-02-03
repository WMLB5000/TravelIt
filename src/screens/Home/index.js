import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';

const ALL = 'All';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );

      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        style={{flexGrow: 1}}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No locations found.</Text>
        }
        ListHeaderComponent={
          <>
            <View style={styles.container}>
              <Title text="Where do" style={{fontWeight: 'normal'}} />
              <Title text="You want to Go?" />
              <Title text="Explore Attractions" style={styles.subtitle} />
              <Title text="The World Awaits" style={styles.smallsubtitle} />
            </View>
            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[ALL, ...categories]}
            />
          </>
        }
        keyExtractor={item => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            style={index % 2 === 0 ? {marginRight: 12} : {}}
            onPress={() => navigation.navigate('AttractionDetails', {item})}
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images?.length ? item.images[0] : null}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
