import { FlatList, Image, StyleSheet, View } from 'react-native';
import products from '../data/products';

const ProductsScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            // aspectRatio makes the image height as same as width
            style={styles.image}
          />
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
