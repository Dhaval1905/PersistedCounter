import {login} from "../Action/authAction";
import {increase,decrease} from '../Action/counterAction'
import {connect} from 'react-redux'
import { Text,TouchableOpacity,View } from "react-native";
import React, { Component } from 'react'

class counterScreen extends Component{

    constructor(props){
        super(props)
        console.log('props value',this.props)
        this.state={

        }
    }

    render(){
        console.log("counter value is",this.props.counter)
        return(
            <View>

                <Text style={{fontSize:28,fontWeight:'bold',textAlign:'center',marginTop:30}}>{`${this.props.isLoggedIn}`}</Text>

               <TouchableOpacity 
                    onPress={this.props.isLoggedIn == false ? ()=> this.props.login(true) :()=> this.props.login(false)}>
                <Text style={{fontSize:28,fontWeight:'bold',textAlign:'center',marginTop:30}}>ChangeState</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>this.props.increase()}>
                <Text style={{fontSize:28,fontWeight:'bold',textAlign:'center',marginTop:30}}>+</Text>
               </TouchableOpacity>

               
                <Text style={{fontSize:28,fontWeight:'bold',textAlign:'center',marginTop:30}}>{this.props.counter}</Text>
              

               <TouchableOpacity onPress={()=>this.props.decrease()}>
                <Text style={{fontSize:28,fontWeight:'bold',textAlign:'center',marginTop:30}}>-</Text>
               </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    console.log("counter new value is",state.authReducer.isLoggedIn)
    return{
        counter:state.counterReducer.counter,
        isLoggedIn:state.authReducer.isLoggedIn
    }
}


export default connect(mapStateToProps,{login,increase,decrease})   (counterScreen)