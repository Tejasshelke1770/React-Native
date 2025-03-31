import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const peopleData = [
    {
      id: 1,
      firstName: "Emma",
      email: "emma.wilson@example.com",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      firstName: "James",
      email: "james.smith@example.com",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      firstName: "Sophia",
      email: "sophia.chen@example.com",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      firstName: "Miguel",
      email: "miguel.rodriguez@example.com",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      firstName: "Zoe",
      email: "zoe.parker@example.com",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      firstName: "David",
      email: "david.thompson@example.com",
      imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 7,
      firstName: "Aisha",
      email: "aisha.patel@example.com",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      firstName: "Thomas",
      email: "thomas.wilson@example.com",
      imageUrl: "https://images.unsplash.com/photo-1563351672-62b74891a28a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 9,
      firstName: "Olivia",
      email: "olivia.johnson@example.com",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 10,
      firstName: "Kai",
      email: "kai.wong@example.com",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 1,
      firstName: "Emma",
      email: "emma.wilson@example.com",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      firstName: "James",
      email: "james.smith@example.com",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      firstName: "Sophia",
      email: "sophia.chen@example.com",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      firstName: "Miguel",
      email: "miguel.rodriguez@example.com",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      firstName: "Zoe",
      email: "zoe.parker@example.com",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      firstName: "David",
      email: "david.thompson@example.com",
      imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 7,
      firstName: "Aisha",
      email: "aisha.patel@example.com",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      firstName: "Thomas",
      email: "thomas.wilson@example.com",
      imageUrl: "https://images.unsplash.com/photo-1563351672-62b74891a28a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 9,
      firstName: "Olivia",
      email: "olivia.johnson@example.com",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 10,
      firstName: "Kai",
      email: "kai.wong@example.com",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];
  return (
    <View style={styles.container}>
      <FlatList
      data={peopleData}
      renderItem={({item}) =>(
        <View style={styles.card}>
        <Image
          style={{width: 40, height: 40, borderRadius: 50, }}
          source={{
            uri: item.imageUrl
          }}
        />
        <Text>{item.firstName}</Text>
        <Text>{item.email.slice(0,10)}</Text>
      </View>
      )}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={<View style={{height:10}} />}
      numColumns={3}
      columnWrapperStyle={{gap:10}}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dadadada',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//2.10

// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import React from 'react';

// const App = () => {
//   const theme = useColorScheme();
//   const isDarkMode = theme === 'dark';

//   const backgroundColor = isDarkMode ? 'black' : 'white';
//   const textColor = isDarkMode ? 'white' : 'black';

//   return (
//     <ScrollView
//       contentContainerStyle={{gap: 10}}
//       horizontal
//       style={styles.container}>
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //  flexDirection: 'row',
//     //  justifyContent: 'center',
//     //  alignItems: 'center',
//     // alignContent: 'center',
//     // flexWrap: 'wrap',
//     padding: 20,
//     backgroundColor: 'black',
//   },
//   box1: {
//     // flex:2,
//     width: 80,
//     height: 80,
//     backgroundColor: 'red',
//     borderRadius: 50,
//   },
//   box2: {
//     // flex:1,
//     width: 80,
//     height: 80,
//     backgroundColor: 'blue',
//     borderRadius: 50,
//   },
//   box3: {
//     // flex:1,
//     width: 80,
//     height: 80,
//     backgroundColor: 'green',
//     borderRadius: 50,
//   },
// });

// //1:54
