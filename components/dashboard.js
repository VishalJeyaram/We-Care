import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import auth from "../database/firebase";
import * as firebase from "firebase/auth";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ""
    }
  }

  signOut = () => {
    firebase.signOut(auth)
    .then(() => {
      this.props.navigation.navigate("Login")
    })
    .catch(error => {
      this.setState({ isLoading: false });
      Alert.alert(error.message);
    });  
  }  

  render() {
    this.state = { 
      displayName: auth.currentUser.displayName,
      uid: auth.currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
    backgroundColor: "#fff"
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});