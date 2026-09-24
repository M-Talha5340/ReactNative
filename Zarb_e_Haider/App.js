import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
        }}>
        Hi
      </Text>
    </View>
 );
};

export default App;