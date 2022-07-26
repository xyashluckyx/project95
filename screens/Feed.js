import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={()=>{
              this.props.navigation.navigate("Jokes")
            }}
        >
            <Text> Jokes </Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={()=>{
              this.props.navigation.navigate("GK")
            }}
        >
            <Text> GK </Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={()=>{
              this.props.navigation.navigate("News")
            }}
        >
            <Text> News </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

