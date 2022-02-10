import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Pressable } from "react-native";
// import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import auth from "../database/firebase";
import * as firebase from "firebase/auth";


export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: "",
      email: "", 
      password: "",
      gender: "",
      birthday: new Date(),
      isLoading: false,
      isBirthdayModalOpen: false,
      test: false,
    }
  }

  updateInputVal(val, prop) {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  updateBirthday(val) {
    this.setState({
      birthday: new Date(val["nativeEvent"]["timestamp"]),
      isBirthdayModalOpen: false,
      test: true
    });
  }

  showBirthdayModal() {
    this.setState({
      isBirthdayModalOpen: true,
      isBirthdayInitialised: true
    });
    console.log(this.state.test);
  }

  registerUser() {
    if (this.state.displayName == "" || this.state.email == ""
    || this.state.password == "" || this.state.gender == "" || !this.state.isBirthdayInitialised) {
      Alert.alert("Enter details to sign up!")
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
      .createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((res) => {
        firebase.updateProfile(res.user, {
          displayName: this.state.displayName,
          gender: this.state.gender,
          birthday: this.state.birthday
        });
        console.log("User registered successfully!");
        this.setState({
          isLoading: false,
          displayName: "",
          email: "", 
          password: ""
        });
        this.props.navigation.navigate("Login");
      })
      .catch(error => {
        this.setState({ isLoading: false });
        Alert.alert(error.message);
      });      
    }
  }

  render() {
    if (this.state.isLoading) {
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, "displayName")}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          maxLength={15}
          secureTextEntry={true}
        />
        <View style={styles.genderInputStyle}>
          <Text>Gender</Text>
          <Picker
            selectedValue={this.state.gender}
            onValueChange={(val) => this.updateInputVal(val, "gender")}>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Others" value="Others" />
            <Picker.Item label="Prefer not to say" value="Prefer not to say" />
          </Picker>
        </View>

        <Pressable onPress={this.showBirthdayModal.bind(this)} style={styles.inputStyle}>
          {this.state.isBirthdayInitialised && (<Text>{this.state.birthday.toDateString()}</Text>)}
          {!this.state.isBirthdayInitialised && (<Text style={styles.placeholder}>Birthday</Text>)}
        </Pressable>
        {this.state.isBirthdayModalOpen && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.birthday}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(val) => this.updateBirthday(val)}
          />
        )}

        <Button
          color="#3740FE"
          title="Sign up"
          onPress={() => this.registerUser()}
        />

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate("Login")}>
          Already Registered? Click here to login!
        </Text>                          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff"
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  genderInputStyle: {
    width: "100%",
    marginBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: "#3740FE",
    marginTop: 25,
    textAlign: "center"
  },
  placeholder: {
    color: "#A9A9AC",
  }, 
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});