import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/navigation/routes'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Provider store={store}>
      <Routes />
      </Provider>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})