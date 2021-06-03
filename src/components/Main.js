import React from 'react';
import New from './New';
import ToDoList from './ToDoList';
import Login from "./UserComponents/Login";
import Messager from "./UserComponents/Messager";
import Register from "./UserComponents/Register";
import { Route, Switch } from 'react-router-dom';
import { auth, getAllPosts } from "../firebase";
import {docs} from "./UserComponents/Messager";

class Main extends React.Component {
    state = {
        toDoList: [],
    }
    /*
    adder = (newDescriptionText, newItemText) => {
        this.setState({
                toDoList: this.state.toDoList.concat(newItemText + "/" + 
                newDescriptionText)
                });
    }*/

    adder = () => {
      console.log("updating the list")
      while(this.state.toDoList.length > 0) {
        this.setState({
          toDoList: this.state.toDoList.pop()
       }); 
      }

      if(auth.currentUser!= null){
      docs.forEach(element => {
        this.setState({
          toDoList: this.state.toDoList.concat(docs)
          }); 
      }); 
      } 
    }
    
    
    render() {
        // console.log(this.state.listOfToDos);
        return (
    
          <Switch>
            <Route path="/" exact>
              <section><ToDoList toDoList={this.state.toDoList} adder={this.adder}/></section>
            </Route>
            <Route path="/login">  
              <section><Login/></section>
            </Route>
            <Route path="/register">  
              <section><Register/></section>
            </Route>
            <Route path="/messager">  
              <section><Messager/></section>
            </Route>
            <Route>
              <section><h1>Error 404 - not found</h1></section>
            </Route>
          </Switch>
        );
      }
}

export default Main;