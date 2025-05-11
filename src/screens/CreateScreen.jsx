import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useState} from 'react';

const CreateScreen = ({data, setData}) => {
  const [item, setItem] = useState('');
  const [stock, setStock] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setItemId] = useState(null);

  const handleAddItem = () => {
    const newItem = {
      id: Math.floor(Math.random() * 1000),
      item: item,
      stock: Number(stock),
    };
    setData(prev => [...prev, newItem]);

    setItem('');
    setStock('');
    setIsEdit(false);
  };

  const handleDeleteItem = id => {
    setData(prev => prev.filter(el => el.id !== id));
  };

  const handleEditItem = item => {
    setIsEdit(true);
    setItem(item.item);
    setStock(String(item.stock));
    setItemId(item.id);
  };

  const handleUpateItem = () => {
    setData(
      data.map(el => {
        return el.id == itemId ? {...el, item: item, stock: Number(stock)} : el;
      }),
    );
    setItem('');
    setStock('');
    setIsEdit(false);
    setItemId(null);
  };
  const renderHeader = () => (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Item Name"
        onChangeText={text => setItem(text)}
        style={styles.textInput}
        value={item}
      />
      <TextInput
        placeholder="Enter Item Stock"
        onChangeText={text => setStock(text)}
        style={styles.textInput}
        value={stock}
      />
      <Pressable
        style={styles.button}
        onPress={() => (isEdit ? handleUpateItem() : handleAddItem())}>
        <Text style={styles.buttonText}>
          {isEdit ? 'Edit Item' : 'Add Item'}
        </Text>
      </Pressable>
      <Text style={styles.listText}>All Items In the Stock</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.itemContainer,
              {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BFFF'},
            ]}>
            <Text>{item.item}</Text>
            <View style={{flexDirection: 'row', gap: 20}}>
              <Text>{item.stock}</Text>
              <Pressable onPress={() => handleEditItem(item)}>
                <Text>Edit</Text>
              </Pressable>
              <Pressable onPress={() => handleDeleteItem(item.id)}>
                <Text>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
        contentContainerStyle={{paddingBottom: 20, gap: 10}}
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  inputContainer: {
    marginVertical: 20,
    gap: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#72C37AFF',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#CABFEEFF',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  listText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
