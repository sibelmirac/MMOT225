import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';


export default function Yorum(){

    const [yorum, setYorum] = useState();

    

     const navigationOptions = {
        title: "Yorum Yap"
    } 



    const kayit = async () =>{
        try{
            await AsyncStorage.setItem("MyYorum",yorum);
        } catch (err){
            alert(err);
        }
    };


     const load = async () =>{
        try{
            let yorum = await AsyncStorage.getItem("MyYorum");
            if(yorum !== null ){
                setYorum(yorum);
            }
        } catch (err){
            alert(err);
        }
    };

    const sil = async () =>{
        try{
            await AsyncStorage.removeItem("MyYorum")
        } catch (err){
            alert(err);
        }
        finally{
            setYorum("");
        }
    };


    useEffect (()=>{
        load();
    },[]);



 
        return(
            <View style={styles.container}>
                <Text style={{marginTop:47,height: 30, fontWeight: 'bold', fontSize: 19}}>{yorum}</Text>
                <Text style={styles.yorum}>Sitemizle İlgili Düşünceleriniz Nelerdir?</Text>
                <TextInput style={styles.input} onChangeText={(text)=> setYorum(text)}></TextInput>

                <TouchableOpacity style={styles.yorumyap} onPress={()=> kayit()}>
                    <Text style={{color: '#fff', fontSize:17, fontWeight: 'bold'}}>Yorumu Kaydet</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.yorumyap} onPress={()=>sil()}>
                    <Text style={{color: '#fff', fontSize:17, fontWeight: 'bold'}}>Yorumu Sil</Text>
                </TouchableOpacity>
            </View>
        );
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    yorum:{
        fontSize:19,
        fontWeight: 'bold',
        marginTop: 55,
        color: '#575dd9',
    },
    input:{
        borderWidth:1,
        borderColor:"#575dd9",
        alignSelf: 'stretch',
        margin: 27,
        height: 67,
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize:19,
        fontWeight: "300",
    },
    yorumyap:{
        backgroundColor: '#575dd9',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 11,
        paddingHorizontal: 27,
        marginHorizontal: 27,
        borderRadius: 6,
        marginTop:11,

    }
});