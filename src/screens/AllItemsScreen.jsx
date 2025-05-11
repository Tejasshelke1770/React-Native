import {FlatList, StyleSheet, Text, View} from 'react-native';

const AllItems = ({data}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.HeadingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.itemContainer,
              {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BFFF'},
            ]}>
            <Text style={styles.itemText}>{item.item}</Text>
            <Text style={styles.itemText}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  HeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 'semi-bold',
    color: 'black',
  },
});
//color codes
// #D7F6BFFF
// #72C37AFF
// #FFCCCC
// #CABFEEFF
