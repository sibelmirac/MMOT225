import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import KayitOl from './KayitOl';
import GirisYap from './GirisYap';
import Loading from './Loading';
import Anasayfa from './Anasayfa';
import YorumYap from './YorumYap';

const mystack = createStackNavigator({
  Giris: GirisYap,
  anasayfa: Anasayfa,
  Loading: Loading,
  Kayit: KayitOl,
  Yorum: YorumYap,

},{
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: '#575dd9',
    }, 
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold',
    },
  }
})

export default createAppContainer(mystack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
