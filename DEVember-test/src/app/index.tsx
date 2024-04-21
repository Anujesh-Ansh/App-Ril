import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import DayListItem from '@/component/core/DayListItem';


const days = [...Array(25)].map((val,index) => index +1);

export default function HomeScreen() {

  return (
    <ImageBackground source={require('../../assets/bg.jpg')} style={styles.backgroundImage}> 
      <View style={styles.container}>

        <Text style={styles.heading}>DEVember</Text>

        
        {/* FlatList is a component that helps to render list of items */}
        <FlatList
          data={days}
          numColumns={2}
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.column}
          renderItem={({item})=> <DayListItem day={item} /> } 
          // horizontal // to make the list horizontal
        />
        
        
        
        {/* {/* One of the best way to create list of similiar elements  */} 
        {/* {days.map(day => (
          <View style={styles.box} key={day}>
            <Text style={styles.text}>{day}</Text>
          </View>  
        ))} */}

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex:1,
    resizeMode: 'cover',
  },

  container: {
    flex: 1,
  },
  content:{
    gap:10,
    marginTop: 20,
    
    
  },

  column:{
    gap:10,
    
  },
  heading: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 70,
    // fontWeight: '900',
    fontFamily: 'BungeeSpice',
    // fontFamily: 'RubikPuddles',
    
    color: '#9b4521',
    // fontStyle: 'italic',
  }
});
