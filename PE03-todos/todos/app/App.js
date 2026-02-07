import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import TabBar from '@/components/TabBar';
import TodoList from '@/components/TodoList';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
let todoIndex = 0

class App extends Component {
  // Create an initial state right away for a few of the values you'll use later. 
  //    Add a constructor and initial state to the class in “App.js” before the 
  //    render method and initialize these values in the state.
  constructor() {
    super();
    this.state = {
        inputValue: '',
        todos: [],
        type: 'All',
        };
        this.setType = this.setType.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }
    setType (type) {
      this.setState({ type })
    }
    inputChange(inputValue) {
        console.log(' Input Value: ', inputValue);
        this.setState({inputValue});
    }
    submitTodo () {      
      if (this.state.inputValue.match(/^\s*$/)) {
        return
      }
      const todo = {
        title: this.state.inputValue,
        todoIndex,
        complete: false
      }
      todoIndex++
      const todos = [...this.state.todos, todo]
      this.setState({ todos, inputValue: '' }, () => {
        console.log('State: ', this.state)  
      }) 
    }
    deleteTodo (todoIndex) {
      let { todos } = this.state
      todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
      this.setState({ todos })
    }

    toggleComplete (todoIndex) {
      const todos = this.state.todos.map((todo) => {
        if (todo.todoIndex === todoIndex) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
      this.setState({ todos })
    }

    render () {
      const { todos, inputValue, type } = this.state
      return (
        <View style={styles.container}>
          <ScrollView
            keyboardShouldPersistTaps='always'
            style={styles.content}>
            <Heading />
            <Input inputValue={inputValue} 
                  inputChange={(text) => this.inputChange(text)} />
            <TodoList
              type={type}
              toggleComplete={this.toggleComplete}
              deleteTodo={this.deleteTodo}
              todos={todos} />
            <Button submitTodo={this.submitTodo} />
          </ScrollView>
          <TabBar type={type} setType={this.setType} />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;