/* eslint-disable react-native/no-inline-styles */
import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AllItemsScreen from './AllItemsScreen';
import CreateScreen from './CreateScreen';
import LowStockScreen from './LowStockScreen';

const Home = ({navigation}) => {
  const [data, setData] = useState([
    {id: 1, item: 'Rice', unit: 'kg', stock: 120},
    {id: 2, item: 'Wheat', unit: 'kg', stock: 85},
    {id: 3, item: 'Oats', unit: 'kg', stock: 40},
    {id: 4, item: 'Barley', unit: 'kg', stock: 60},
    {id: 5, item: 'Millet', unit: 'kg', stock: 30},
    {id: 6, item: 'Corn', unit: 'kg', stock: 90},
    {id: 7, item: 'Sorghum', unit: 'kg', stock: 25},
    {id: 8, item: 'Quinoa', unit: 'kg', stock: 15},
    {id: 9, item: 'Amaranth', unit: 'kg', stock: 10},
    {id: 10, item: 'Teff', unit: 'kg', stock: 5},
    {id: 11, item: 'Buckwheat', unit: 'kg', stock: 22},
    {id: 12, item: 'Farro', unit: 'kg', stock: 18},
    {id: 13, item: 'Spelt', unit: 'kg', stock: 20},
    {id: 14, item: 'Freekeh', unit: 'kg', stock: 12},
    {id: 15, item: 'Kamut', unit: 'kg', stock: 8},
    {id: 16, item: 'Bulgur', unit: 'kg', stock: 33},
    {id: 17, item: 'Rye', unit: 'kg', stock: 45},
    {id: 18, item: 'Triticale', unit: 'kg', stock: 9},
    {id: 19, item: 'Wild Rice', unit: 'kg', stock: 6},
    {id: 20, item: "Job's Tears", unit: 'kg', stock: 11},
  ]);
  const [view, setView] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setView(0)}>
          <Text
            style={[styles.buttonText, view === 0 ? {color: 'white'} : null]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 1 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setView(1)}>
          <Text
            style={[styles.buttonText, view === 1 ? {color: 'white'} : null]}>
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 2 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setView(2)}>
          <Text
            style={[styles.buttonText, view === 2 ? {color: 'white'} : null]}>
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItemsScreen data={data} />}
      {view === 1 && <LowStockScreen data={data.filter(el => el.stock < 20)} />}
      {view === 2 && <CreateScreen data={data} setData={setData} />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: '4%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderColor: '#72C37AFF',
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
