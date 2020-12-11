import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextPropTypes,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NewsItem from './NewsItem';

const App: () => React$Node = () => {
  return(
      <SafeAreaView>
        <ScrollView>
          <NewsItem type='SİNEMA' title="Netflix Platformundan Yeni Film" description="Midnight Sky filminin yeni fragmanı yayınlandı."/>
          <NewsItem type='SİNEMA' title="Fantastic Four" description="Filmin yönetmeni kesinleşti. Bundan böyle yönetmenlik koltuğunda Jon Watts oturacak."/>
          <NewsItem type='SİNEMA' title="Ant-Man Filminde Gelişme" description="Ant-Man 3 filminin adının Ant-Man and The Wasp:Quantumania olacağı açıklandı."/>

          <NewsItem type='MODA' title="İtalyan Devlerinden Süpriz Anlaşma" description="İki Rakip Marka Moncler ve Stone Island beklenmedik bir şekilde bir araya gelme kararı aldıklarını açıkladılar."/>
          <NewsItem type='MODA' title="Beklenen Defile" description="Dolce-Gabana 2020 defilesi olan 'Aile Portresi' geçtiğimiz günlerde gerçekleşti."/>
          <NewsItem type='MODA' title="Gucci'den Destek" description="Dev marka aşı dağıtımına destek oldu ve UNICEF'e bağışta bulundu."/>

          <NewsItem type='SPOR' title="Lider Değişmedi" description="Bu hafta liderlik koltuğunun sahibi Alanyaspor olmaya deam etti."/>
          <NewsItem type='SPOR' title="Galatasaray" description="Galatasaray bu hafta 2.sıraya yükselerek averaj farkıyla rakibi fenerbahçenin önüne geçti."/>
          <NewsItem type='SPOR' title="Bol Gollü Derbinin Kazananı" description="Heyecanla beklenen derbinin kazananı beşiktaş oldu."/>

          <NewsItem type='EKONOMİ' title="Dolar" description="Dolar bugün 7,83 civarında düşüşünü sürdürdü."/>
          <NewsItem type='EKONOMİ' title="Euro" description="Euroda bugün ufak çaplı bir düşüş ile günü tamamladı."/>
          <NewsItem type='EKONOMİ' title="Altın" description="Altın bugün piyasada 463,34'ü gördü."/>

          <NewsItem type='MAGAZİN' title="Serenay Sarıkayadan Süpriz Karar" description="Head and Shoulders markasıyla anlaşmalarını bitirdiğini açıkladı."/>
          <NewsItem type='MAGAZİN' title="Çağatay Ulusoy Fiyatı Artırdı" description="Bölüm başı aldığı fiyatı ikiye katlayan oyuncu gelen teklifleri değerlendireceğini açıladı."/>
          <NewsItem type='MAGAZİN' title="Head And Shoulders O İsimle Anlaştı" description="Bundan böyle markanın yeni yüzünün Danla Bilic olduğu belirtildi."/>
          
          <NewsItem/>
          </ScrollView>
          
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
