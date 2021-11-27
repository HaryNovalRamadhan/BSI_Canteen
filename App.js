/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Image,
  Pressable
} from 'react-native';

const Item = ({image, name, ulasan}) => {
  return(
       <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
          <View style={{width: '80%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={{uri: `${image}`}} style={{width: 100, height: 100, borderRadius: 25,}}/>
            <View style={{width: '65%'}}>
                <Text style={{fontSize: 20, marginBottom: 3, color: 'black', fontWeight: 'bold'}}>{name}</Text>
                <Text>{ulasan}</Text>
                <Text>20.000</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Pressable style={{backgroundColor: '#34c5f1', width:"45%", alignItems: 'center'}} onPress={() => alert('Anda Telah Memesan!')}>
                    <Text style={{color: 'white', padding: 3}}>Order</Text>
                  </Pressable>
                  <Pressable style={{backgroundColor: 'red', width:"45%", alignItems: 'center'}} onPress={() => alert('Pesanan Telah Dibatalkan!')}>
                    <Text style={{color: 'white', padding: 3}}>Cancel</Text>
                  </Pressable>
                </View>
            </View>
          </View>
        </View>
  );
}

const App = () => {
  const [foods, setFoods] = useState([]);

  const [name, setName] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    getData();
  }, []);



  const getData = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(response => response.json())
    .then(responseJson => {
      console.log("APi berfungsi!")
      setFoods(responseJson.meals)
    })
  }

  return(
    <View style={{height: '100%'}}>
      <ScrollView>
        <View style={{backgroundColor: '#34c5f1'}}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', padding: 25}}>BSI Canteen</Text>
        </View>
        <View style={{borderBottomWidth: 3, width: '25%', margin: 10, padding: 8, borderColor: '#34c5f1', marginTop: 15}}>
          <Text style={{fontSize: 17, fontWeight: '500'}}>Let's Order!</Text>
        </View>
        {foods.map(food => {
          return <Item name={food.strMeal} image={food.strMealThumb} ulasan={food.strTags}/>
        })}

      </ScrollView>
    </View>
  );
}


export default App;
