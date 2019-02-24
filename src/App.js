import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react'

class App extends Component {
  state={
    word: '',
    wordList: []
  }

  handleWordChange = e => {
    this.setState({
      word: e.target.value
    })
  }

  handleAddWord = () => {
    this.setState({
      wordList: [...this.state.wordList, this.state.word],
      word: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Input 
          placeholder="Add new word"
          onChange={this.handleWordChange}
          value={this.state.word}
        />
        <Button
          onClick={this.handleAddWord}
        >
        Add to list
        </Button>
        {this.state.wordList.map((word, i) => {
          return <li key={i}>{word}</li>
        })}
      </div>
    );
  }
}

export default App;
