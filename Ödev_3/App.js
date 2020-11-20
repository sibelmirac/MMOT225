import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
      <View style={styles.body}>
              <Text style={styles.sectionDescription}>ADINIZI GİRİNİZ :</Text>
              <TextInput style = {styles.textView}/>
              <Text style={styles.sectionDescription}>SOYADINIZI GİRİNİZ : </Text>
              <TextInput style = {styles.textView}/>
              <Text style={styles.sectionDescription}>YAŞINIZI GİRİNİZ : </Text>
              <TextInput style = {styles.textView}/>
              <Text style={styles.sectionDescription}>E-POSTA ADRESİNİ GİRİNİZ : </Text>
              <TextInput style = {styles.textView}/>
              <Text style={styles.sectionDescription}>ŞİFRE GİRİNİZ : </Text>
              <TextInput style = {styles.textView}/>
              <Text style={styles.sectionDescription}>ŞİFRENİZİ TEKRAR GİRİNİZ : </Text>
              <TextInput style = {styles.textView}/>
              <Button title="KAYDET"/>
            </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionDescription: {marginTop: 25, marginLeft: 7, fontStyle: 'normal' ,fontSize: 17,fontWeight: 'bold',color: '#132C6F'},
  textView: {marginTop : 10 ,borderWidth : 2,borderColor: '#254485', height:45},

});

export default App;
