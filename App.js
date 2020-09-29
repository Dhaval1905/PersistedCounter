import React, { Component } from "react";
import {createStore} from 'redux';
import { Provider } from "react-redux";
import combineReducer from "./Reducer/combineReducer";
import CounterScreen from "./Screens/counterScreen";
import {persistReducer,persistStore} from 'redux-persist'
import { AsyncStorage } from "react-native";
import { PersistGate } from "redux-persist/es/integration/react";

export default class App extends Component{
  render(){

    const persistConfig={
      key:'root',
      storage:AsyncStorage,
      //whitelist:['authReducer','counterReducer']
    }
    const persistedReducer=persistReducer(persistConfig,combineReducer)
    const store=createStore(persistedReducer)
    const persistedStore=persistStore(store)
    return(
      <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <CounterScreen/>
      </PersistGate>
      </Provider>
    )
  }
}