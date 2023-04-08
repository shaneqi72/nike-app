import { FlatList, Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import CartListItem from '../components/CartListItem';
// import cart from '../data/cart';

import { useSelector } from 'react-redux';
import { selectSubtotal, deliveryFeeSelector, totalAmount } from '../../store/cartSlice';

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(deliveryFeeSelector);
  const total = useSelector(totalAmount);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} AUD$</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} AUD$</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} AUD$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2 },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    fontWeight: 500,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 16,
  },
});
