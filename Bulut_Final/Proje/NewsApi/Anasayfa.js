import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Dimensions, Image, TouchableWithoutFeedback, Linking, TouchableOpacity} from 'react-native';
import {Button, Item} from 'native-base';
import firebase from 'firebase';
import fire from './Firebase';
import { block } from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');


export default class anasayfa extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          news:[],
          haber: '',
          loading: true,
        }
      }

    static navigationOptions = {
        title: "Haberler"
    }

    fetchnews = () =>{
        fetch('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=2ae772cf558e43a387b7c7dc8fca6d73')
        .then((res)=>res.json())
        .then((response)=>{
          this.setState({
            news:response.articles,
            loading: false,
          });
        });
      }
    
      componentDidMount = () => {
        this.fetchnews()
      }

      kaydet = () => {
       fire.database().ref("Kaydedilen Haberler").set({
         haber : this.state.news
       }) 
    }


    cikisYap(){
      fire.auth().signOut()
      .then(()=>{
        this.props.navigation.replace("Giris")
    }).catch(error=>{
        Alert.alert(error.message)
    });
    }
    
      render(){
        if(this.state.loading){
        return(
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#f8f8ff'}}>
            <ActivityIndicator size="large" color="#fff"/>
          </View>
        );
      }
    
      else{
        return(
          <View style={styles.container}>
            <View style={styles.news}>
            <Button full style={{width:width-50,height:37,marginBottom:3, backgroundColor:'#faf7f7', marginTop:7}} onPress={()=>this.cikisYap()}>
                    <Text style={{color: '#575dd9' ,textAlign: 'center', padding:7, fontWeight: 'bold', fontSize:17}}>UYGULAMADAN ÇIKIŞ YAP</Text>
                </Button>
            <Button full style={{width:width-50,height:37,marginBottom:3, backgroundColor:'#575dd9', marginTop:3}} onPress={()=>this.props.navigation.navigate("Yorum")}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize:17}}>YORUM YAP</Text>
            </Button>
            <Button full style={{width:width-50,height:37,marginBottom:15, backgroundColor:'#575dd9'}} onPress={()=>this.kaydet()}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize:17}}>HABERLERİ KAYDET</Text>
            </Button>
              <FlatList
              data={this.state.news}
              renderItem={({item})=>{
                return(
                
                  <TouchableWithoutFeedback onPress = {()=>Linking.openURL(item.url)}>
                    <View style = {{width:width-50, height:210, backgroundColor:'#fff',marginBottom:11}}>
                    <Image source={{uri:item.urlToImage}} style={StyleSheet.absoluteFill}/>
                    <View style={styles.gradiant}>
                      <Text style={{position:'absolute', bottom:0, color:'#fff', fontSize:17, fontWeight: 'bold', padding:9}}>{item.title}</Text>
                    </View>
                   </View>
                  </TouchableWithoutFeedback>
                );
              }}
              />
            </View>
          </View>
        );
      }
      }
    }
    
    const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'#fff',
      },
      header:{
        padding:30,
      },
      news:{
        paddingTop:11,
        alignSelf: 'center',
      },
      gradiant:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }
    });
    