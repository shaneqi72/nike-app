import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
// import products from '../data/products';

import { useSelector, useDispatch } from 'react-redux';

import { productsSlice } from '../../store/productsSlice';

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const navigateToProductDetail = (item) => {
    // update selected product
    dispatch(productsSlice.actions.setSelectedProduct(item.id));

    // navigate to product detail
    navigation.navigate('Product Details');
  };

  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Pressable onPress={() => navigateToProductDetail(item)}>
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
