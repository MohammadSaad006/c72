import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: 'white'}}>
                <Text style={{fontSize: 50,alignItems: 'center',justifyContent: 'center', backgroundColor : 'blue', textAlign : 'center'}}>
                Story Hub 
                </Text>
                </View>
        )
    }
}