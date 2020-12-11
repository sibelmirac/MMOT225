import React from 'react'

import { ScrollView, View , Text} from 'react-native';
import App from './App';

export default class NewsItem extends React.Component{

    render(){

        const type = this.props.type;
        
            let itemrenk='#FFF';
            

            if(type==='SİNEMA'){
                itemrenk = '#ff8247';
            }else if(type==='MODA'){
                itemrenk = '#ffcc99'
            }else if(type==='SPOR'){
                itemrenk = '#ffc107'
            }else if(type==='EKONOMİ'){
                itemrenk = '#ff7256'
            }else if(type==='MAGAZİN'){
                itemrenk = '#ffa000'
            }

            return(
                <View style={{backgroundColor:itemrenk, flex:1, minHeight:125}}>
                <Text style={{marginLeft:4, marginTop:5, color:'blue'}}>{this.props.type}</Text>
                <Text style={{marginLeft:4, marginTop:10, color:'white'}}>{this.props.title}</Text>
                <Text style={{marginLeft:4, marginTop:5, color:'steelblue'}}>{this.props.description}</Text>

                </View>
            );

    }

}