import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
          <View style={styles.body}>
              <Text style={styles.sectionDescription}>AD SOYAD: Sibel Miraç ÖZCAN</Text>
              <Text style={styles.sectionDescription}>YAŞ: 22</Text>
              <Text style={styles.sectionDescription}>MEMLEKET: Sinop</Text>
              <Text style={styles.sectionDescription}>LİSE: Fen Bilimleri Temel Lisesi</Text>
              <Text style={styles.sectionDescription}>ÜNİVERSİTE: Okan Üniversitesi</Text>
              <Text style={styles.sectionDescription}>İŞ DENEYİMİ: YOK</Text>
            </View>
    </>
  );
};

const styles = StyleSheet.create({

  sectionDescription: {
    marginTop: 65,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '400',
    color: '#132C6F',
  },
});

export default App;
