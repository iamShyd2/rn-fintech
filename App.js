/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Screens from "./src";
 import { Provider, DefaultTheme } from "react-native-paper";
 import {
  StatusBar,
  SafeAreaView,
 } from "react-native";
 
 const theme = {
   ...DefaultTheme,
   roundness: 10,
 }
 
 const App = () => {
   return (
     <Provider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar hidden />
        <Screens />
      </SafeAreaView>
     </Provider>
   );
 };
 
 export default App;