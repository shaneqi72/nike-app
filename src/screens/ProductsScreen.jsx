import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
import products from '../data/products';

const ProductsScreen = ({ navigation }) => {
  const navigateToProductDetail = () => {
    navigation.navigate('Product Details');
  };

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Pressable onPress={navigateToProductDetail}>
            <Image
              source={{
                uri: item.image,
              }}
              // aspectRatio makes the image height as same as width
              style={styles.image}
            />
          </Pressable>
        </View>
      )}
      numColumns={2}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
});
