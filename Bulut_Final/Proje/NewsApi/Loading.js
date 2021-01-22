import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import firebase from 'firebase';    
import fire from './Firebase';

export default class Loading extends React.Component{

    static navigationOptions = {
        header: null
    }

    componentDidMount = () =>{
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate("anasayfa")
            }else{
                this.props.navigation.navigate("Giris")
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#4da6ff"/>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    }
});