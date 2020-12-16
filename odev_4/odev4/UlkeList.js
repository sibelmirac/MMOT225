import React from 'react';

import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';

export default class UlkeList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            secilenKategori:0,
            
        }
    }

    handlePress = id =>{
        this.setState({secilenKategori:id})
    }

    getSehirListView(){

        const sehirList= [
            {sehirisim: "Adana",plakaKod: "01",nüfusBil: "2.237.940",cateId:1},
            {sehirisim: "Antalya",plakaKod:"07",nüfusBil: "2.511.700",cateId:1},
            {sehirisim: "Burdur",plakaKod:"15",nüfusBil: "270.796",cateId:1},
            {sehirisim: "Hatay",plakaKod:"31",nüfusBil: "1.628.894",cateId:1},
            {sehirisim: "Isparta",plakaKod:"32",nüfusBil: "444.914",cateId:1},
            {sehirisim: "Kahramanmaraş",plakaKod:"46",nüfusBil: "1.154.102",cateId:1},
            {sehirisim: "Mersin",plakaKod:"33",nüfusBil: "1.840.425",cateId:1},
            {sehirisim: "Osmaniye",plakaKod:"80",nüfusBil: "538.759",cateId:1},            

            {sehirisim: "Artvin",plakaKod:"08",nüfusBil: "170.875",cateId:2},
            {sehirisim: "Rize",plakaKod:"53",nüfusBil: "343.212",cateId:2},
            {sehirisim: "Bayburt",plakaKod:"69",nüfusBil: "84.843",cateId:2},
            {sehirisim: "Trabzon",plakaKod:"61",nüfusBil: "808.974",cateId:2},
            {sehirisim: "Gümüşhane",plakaKod:"29",nüfusBil: "164.521",cateId:2},
            {sehirisim: "Giresun",plakaKod:"28",nüfusBil: "448.400",cateId:2},
            {sehirisim: "Ordu",plakaKod:"52",nüfusBil: "754.198",cateId:2},
            {sehirisim: "Tokat",plakaKod:"60",nüfusBil: "612.747",cateId:2},
            {sehirisim: "Amasya",plakaKod:"05",nüfusBil: "337.800",cateId:2},
            {sehirisim: "Samsun",plakaKod:"55",nüfusBil: "1.348.542",cateId:2},
            {sehirisim: "Sinop",plakaKod:"57",nüfusBil: "218.243",cateId:2},
            {sehirisim: "Çorum",plakaKod:"19",nüfusBil: "530.864",cateId:2},
            {sehirisim: "Kastamonu",plakaKod:"37",nüfusBil: "379.405",cateId:2},
            {sehirisim: "Bartın",plakaKod:"74",nüfusBil: "198.249",cateId:2},
            {sehirisim: "Karabük",plakaKod:"78",nüfusBil: "248.458",cateId:2},
            {sehirisim: "Zonguldak",plakaKod:"67",nüfusBil: "596.053",cateId:2},
            {sehirisim: "Düzce",plakaKod:"81",nüfusBil: "392.166",cateId:2},
            {sehirisim: "Bolu",plakaKod:"14",nüfusBil: "316.126",cateId:2},


            {sehirisim: "Afyon",plakaKod:"03",nüfusBil: "729.483",cateId:3},
            {sehirisim: "Aydın",plakaKod:"09",nüfusBil: "1.110.972",cateId:3},
            {sehirisim: "Denizli",plakaKod:"20",nüfusBil: "1.037.208",cateId:3},
            {sehirisim: "İzmir",plakaKod:"35",nüfusBil: "4.367.251",cateId:3},
            {sehirisim: "Kütahya",plakaKod:"43",nüfusBil: "579.257",cateId:3},
            {sehirisim: "Manisa",plakaKod:"45",nüfusBil: "1.440.611",cateId:3},
            {sehirisim: "Muğla",plakaKod:"48",nüfusBil: "983.142",cateId:3},
            {sehirisim: "Uşak",plakaKod:"64",nüfusBil: "370.509",cateId:3},

            {sehirisim: "İstanbul",plakaKod:"34",nüfusBil: "15.519.267",cateId:4},
            {sehirisim: "Yalova",plakaKod:"77",nüfusBil: "270.976",cateId:4},
            {sehirisim: "Tekirdağ",plakaKod:"59",nüfusBil: "1.055.412",cateId:4},
            {sehirisim: "Sakarya",plakaKod:"54",nüfusBil: "1.029.650",cateId:4},
            {sehirisim: "Kocaeli",plakaKod:"41",nüfusBil: "1.953.035",cateId:4},
            {sehirisim: "Kırklareli",plakaKod:"39",nüfusBil: "361.836",cateId:4},
            {sehirisim: "Edirne",plakaKod:"22",nüfusBil: "413.903",cateId:4},
            {sehirisim: "Çanakkale",plakaKod:"17",nüfusBil: "542.157",cateId:4},
            {sehirisim: "Bursa",plakaKod:"16",nüfusBil: "3.056.120",cateId:4},
            {sehirisim: "Bilecik",plakaKod:"11",nüfusBil: "219.427",cateId:4},
            {sehirisim: "Balıkesir",plakaKod:"10",nüfusBil: "1.228.620",cateId:4},

            {sehirisim: "Aksaray",plakaKod:"68",nüfusBil: "416.367",cateId:5},
            {sehirisim: "Ankara",plakaKod:"06",nüfusBil: "5.639.076",cateId:5},
            {sehirisim: "Çankırı",plakaKod:"18",nüfusBil: "195.789",cateId:5},
            {sehirisim: "Eskişehir",plakaKod:"26",nüfusBil: "887.475",cateId:5},
            {sehirisim: "Karaman",plakaKod:"70",nüfusBil: "253.279",cateId:5},
            {sehirisim: "Kayseri",plakaKod:"38",nüfusBil: "1.407.409",cateId:5},
            {sehirisim: "Kırıkkale",plakaKod:"71",nüfusBil: "283.017",cateId:5},
            {sehirisim: "Kırşehir",plakaKod:"40",nüfusBil: "242.938",cateId:5},
            {sehirisim: "Konya",plakaKod:"42",nüfusBil: "2.232.374",cateId:5},
            {sehirisim: "Nevşehir",plakaKod:"50",nüfusBil: "303.010",cateId:5},
            {sehirisim: "Niğde",plakaKod:"51",nüfusBil: "362.861",cateId:5},
            {sehirisim: "Sivas",plakaKod:"58",nüfusBil: "638.956",cateId:5},
            {sehirisim: "Yozgat",plakaKod:"66",nüfusBil: "421.200",cateId:5},

            {sehirisim: "Hakkari",plakaKod:"30",nüfusBil: "280.991",cateId:6},
            {sehirisim: "Van",plakaKod:"65",nüfusBil: "1.136.757",cateId:6},
            {sehirisim: "Iğdır",plakaKod:"76",nüfusBil: "199.442",cateId:6},
            {sehirisim: "Ardahan",plakaKod:"75",nüfusBil: "97.319",cateId:6},
            {sehirisim: "Kars",plakaKod:"36",nüfusBil: "285.410",cateId:6},
            {sehirisim: "Ağrı",plakaKod:"04",nüfusBil: "536.199",cateId:6},
            {sehirisim: "Bitlis",plakaKod:"13",nüfusBil: "348.115",cateId:6},
            {sehirisim: "Muş",plakaKod:"49",nüfusBil: "408.809",cateId:6},
            {sehirisim: "Bingöl",plakaKod:"12",nüfusBil: "279.812",cateId:6},
            {sehirisim: "Erzurum",plakaKod:"25",nüfusBil: "762.062",cateId:6},
            {sehirisim: "Tunceli",plakaKod:"62",nüfusBil: "84.660",cateId:6},
            {sehirisim: "Malatya",plakaKod:"44",nüfusBil: "800.165",cateId:6},
            {sehirisim: "Erzincan",plakaKod:"24",nüfusBil: "234.747",cateId:6},
            {sehirisim: "Elazığ",plakaKod:"23",nüfusBil: "591.098",cateId:6},

            {sehirisim: "Adıyaman",plakaKod:"02",nüfusBil: "626.465",cateId:7},
            {sehirisim: "Batman",plakaKod:"72",nüfusBil: "608.659",cateId:7},
            {sehirisim: "Diyarbakır",plakaKod:"21",nüfusBil: "1.756.353",cateId:7},
            {sehirisim: "Gaziantep",plakaKod:"27",nüfusBil: "2.069.364",cateId:7},
            {sehirisim: "Kilis",plakaKod:"79",nüfusBil: "142.490",cateId:7},
            {sehirisim: "Mardin",plakaKod:"47",nüfusBil: "838.778",cateId:7},
            {sehirisim: "Şanlıurfa",plakaKod:"63",nüfusBil: "2.073.614",cateId:7},
            {sehirisim: "Siirt",plakaKod:"56",nüfusBil: "330.280",cateId:7},
            {sehirisim: "Şırnak",plakaKod:"73",nüfusBil: "529.615",cateId:7},
            
            
            
        ]

        if(this.state.secilenKategori<1){
            return <Text style={{textAlign: 'center',marginTop:20, color: 'black'}}>Şehir Listesini Görmek {"\n"} İstediğiniz Bölgeyi Seçiniz...</Text>
        }
        let renderSehirList=[];
        sehirList.map((v,k)=>{

            if(v.cateId===this.state.secilenKategori){
               renderSehirList.push(
                   <View style={{margin:5,marginTop:10,minHeight:150}}>
                       <Text style={{fontSize:15, paddingLeft:7, color:'black'}}>Şehir: {v.sehirisim} {"\n"}Plaka Kodu: {v.plakaKod} {"\n"}Nüfusu: {v.nüfusBil} </Text>
                   </View>

               )
            }

        }
        )
        return renderSehirList
    }

    render(){
        return(
            <View>

                <FlatList style = {{minHeight:365 ,backgroundColor: 'blue', padding:5}}

                data = {[
                    {name: "AKDENİZ BÖLGESİ", id: 1},
                    {name: "KARADENİZ BÖLGESİ", id: 2},
                    {name: "EGE BÖLGESİ", id: 3},
                    {name: "MARMARA BÖLGESİ", id: 4},
                    {name: "İÇ ANADOLU BÖLGESİ", id: 5},
                    {name: "DOĞU ANADOLU BÖLGESİ", id: 6},
                    {name: "GÜNEYDOĞU ANADOLU BÖLGESİ", id: 7}]}
                renderItem={({item})=>{

                    return(
                       <TouchableOpacity onPress={()=>this.handlePress(item.id)} style={{margin:5,minHeight: 40, backgroundColor: 'white'}}>
                           <Text style={{fontSize: 17,color: 'black', textAlign:'center', paddingTop:7}}>{item.name}</Text>
                       </TouchableOpacity> 
                    )
                }
                }
                
                />

                <ScrollView style={{minHeight:300,backgroundColor:'white'}}>
                {this.getSehirListView()}
                </ScrollView>


            </View>
        )
    }

}