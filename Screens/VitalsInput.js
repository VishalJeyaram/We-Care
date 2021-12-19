import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const VitalsInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Please enter your latest pulse reading
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Input here!"
        onChangeText={text => setText(text)}
        defaultValue ={text}>
      </TextInput>
      <Text>
        Pulse Reading: {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'black',
    borderWidth: 1
  }
})

export default VitalsInput;
