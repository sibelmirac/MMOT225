import { Button, Item, Label, Input } from 'native-base';
import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import fire from './Firebase';

export default class Giris extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            sifre: '',
        }
    }

    static navigationOptions = {
        title: "Giriş Yap"
    }

    KullaniciGiris = (email,sifre) =>{
        fire.auth().signInWithEmailAndPassword(email,sifre)
        .then(()=>{
            this.props.navigation.replace("anasayfa")
        }).catch(error=>{
            Alert.alert(error.message)
        });

    }

    render(){
        return(
            <View style = {styles.container}>
                <Item floatingLabel>
                    <Label style={{color: 'gray', fontSize:14}}>E-Posta Adresinizi Giriniz</Label>
                    <Input value = {this.state.email}
                    onChangeText={(text)=>this.setState({email:text})}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={{color: 'gray', fontSize: 14}}>Şifrenizi Giriniz</Label>
                    <Input value = {this.state.sifre} 
                    secureTextEntry = {true}
                    onChangeText ={(text)=>this.setState({sifre:text})}
                    />
                </Item>
                <Button full rounded style={{marginTop: 45, justifyContent: 'center', backgroundColor: '#575dd9'}}
                onPress = {()=>this.KullaniciGiris(this.state.email, this.state.sifre)}
                >
                    <Text style = {{color: 'white', fontSize:17}}>Giriş Yap</Text>
                </Button>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Kayit")}>
                    <Text style={{fontSize:13, textAlign: 'center', paddingTop:14}}>Bir Hesabınız Yok Mu? <Text style={{fontWeight:'bold'}}>Kayıt Ol</Text></Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:25,
        paddingTop: 50,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    }
});