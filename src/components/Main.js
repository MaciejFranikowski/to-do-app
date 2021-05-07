import React from 'react';
import New from './New';
import ToDoList from './ToDoList';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {
    state = {
        toDoList: [ "cos/opis cosia", "innecos/opis innego cosia" ],
    }

    adder = (newDescriptionText, newItemText) => {
        this.setState({
                toDoList: this.state.toDoList.concat(newItemText + "/" + 
                newDescriptionText)
                });
    }
    
    render() {
        // console.log(this.state.listOfToDos);
        return (
    
          <Switch>
            <Route path="/" exact>
              <section><ToDoList toDoList={this.state.toDoList}/></section>
            </Route>
            <Route path="/new">
              <section><New adder={this.adder}/></section>
            </Route>
            <Route path="/trash">  
              <section>Trash</section>
            </Route>
            <Route>
              <section><h1>Error 404 - not found</h1></section>
            </Route>
          </Switch>
        );
      }
}

export default Main;