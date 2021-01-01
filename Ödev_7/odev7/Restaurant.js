import React, {Component} from 'react';
import { Text, TouchableOpacity, View, ScrollView, FlatList} from 'react-native';

export default class Restaurant extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rest: null,
            review:null,
            yorum:null,
        }
    }

    componentDidMount(){
        fetch ('https://developers.zomato.com/api/v2.1/search?entity_type=city&q=ist'
        ,{
            method:'GET',
            headers:{
                "user-key" : "2ffa68297cca0bca438baa85fe874cca"
            }
        }
        )
        .then(r=>{
            return r.json();
        })
        .then(res=>{
            this.setState({
                rest:res.restaurants,
            });
        }).catch(e=>{
            console.warn("error zomato", e);
        })
    }

     componentWillMount(){
        fetch("https://developers.zomato.com/api/v2.1/reviews?res_id=18324438"
        ,{
            method:'GET',
            headers:{
                "user-key" : "2ffa68297cca0bca438baa85fe874cca",
            }
        }
        )
        .then(r=>{
            return r.json();
        })
        .then(rev=>{
            this.setState({
                review:rev.user_reviews,
            });
        }).catch(e=>{
            console.warn("error zomato", e);
        })
    }
 
    handlePress = name =>{
        this.setState({yorum:name})
    }

    yorumList(){
        let yorumlar=[];
        this.state.review.map((v,k)=>{

            if(v.name===this.state.yorum){
               yorumlar.push(
                   <>
                   <Text style={{color:'white', paddingLeft:5, marginTop:15, fontSize:18, fontStyle:'italic'}}>KULLANICI ADI:{"\n"}{v.review.user.name}</Text>
                   <Text style={{color:'white', paddingLeft:5, marginTop:15, fontSize:18, fontStyle:'italic'}}>KULLANICI REYTİNGİ:{"\n"}{v.review.rating}</Text>
                   <Text style={{color:'white', paddingLeft:5, marginTop:15, fontSize:18, fontStyle:'italic'}}>KULLANICI YORUMU:{"\n"}{v.review.review_text}{"\n"}</Text>   
                   </>         
               )
            }
        }
        )
        return yorumlar
    }


    
    render(){

        console.warn("Restaurant: ", this.state.rest)

        if(!this.state.rest){
           return null;
        }

        console.warn("Yorumlar: ", this.state.review)

        if(!this.state.review){
            return null;
         }


        return(
            <View style={{flex:1}}>
                <Text style={{color:'#b22222', backgroundColor:'#f5f5f5', fontSize:17, textAlign:'center', padding:5, margin:4}}>LÜTFEN BİR RESTORAN SEÇİNİZ</Text>
                <FlatList style={{flex:1, minHeight:310, padding:7, backgroundColor:'#b22222'}}
                let data = {this.state.rest}
                renderItem={({item})=>{
                    return(
                      <>
                       <Text style={{color:'#b22222', backgroundColor:'white', paddingLeft:5, marginTop:7, fontSize:18}}>İSTANBULDAKİ RESTORANLAR:</Text>
                       <TouchableOpacity onPress={()=>this.handlePress(item.name)}  style={{flex:1, minHeight:310, marginTop:2, backgroundColor:'#b22222'}}>
                           <Text style={{color:'white', paddingLeft:3, marginTop:3,fontSize:17}}>{item.restaurant.name}</Text>
                       </TouchableOpacity>
                       </> 
                    )
                }
                }
                />

                <ScrollView style={{flex:1, minHeight:300, marginTop:5, padding:12, backgroundColor:'#b22222'}}>
                <Text style={{color:'#b22222', backgroundColor:'white', paddingLeft:5, marginTop:7, fontSize:18}}>RESTORAN YORUMLARI:</Text>
                    {this.yorumList()}
                </ScrollView>
            </View>
            
        )
    }

}