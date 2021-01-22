import { Button, Item, Label, Input } from 'native-base';
import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import fire from './Firebase';

export default class Kayit extends React.Component{

   
    constructor(props){
        super(props);
        this.state = {
            email: '',
            sifre: '',
        }
    }

    static navigationOptions = {
        title: "Kayıt Ol"
    }

    KullaniciKayit = (email,sifre) =>{
        fire.auth().createUserWithEmailAndPassword(email,sifre)
        .then(()=>{
            this.props.navigation.replace("Giris")
        }).catch(error =>{
            Alert.alert(error.message)
        })
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
                onPress={()=>this.KullaniciKayit(this.state.email, this.state.sifre)}
                >
                    <Text style = {{color: 'white', fontSize:17}}>Kayıt Ol</Text>
                </Button>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Giris")}>
                    <Text style={{fontSize:13, textAlign: 'center', paddingTop:14}}>Bir Hesabınız Var Mı? <Text style={{fontWeight:'bold'}}>Giriş Yap</Text></Text>
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