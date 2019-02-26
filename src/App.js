import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import Header from './components/Header'
import WordList from './components/WordList';
import WordInput from './components/WordInput';
import './App.css'

class App extends Component {

  state={
    word: '',
    definition: '',
    url: '',
    wordList: []
  }

  handleWordChange = e => {
    this.setState({
      word: e.target.value
    })
  }

  handleDefinitionChange = e => {
    this.setState({
      definition: e.target.value
    })
  }

  handleUrlChange = e => {
    this.setState({
      url: e.target.value
    })
  }

  handleAddWord = (e) => {
    e.preventDefault()
    const word = this.state.word
    const definition = this.state.definition
    const url = this.state.url
    this.setState({
      wordList: [...this.state.wordList, {word: word, definition: definition, url: url }],
      word: '',
      definition: '',
      url: ''
    })
  }

  handleRemoveWord = (index) => {
    const words = this.state.wordList.filter((word, wordIndex) => {
      return wordIndex !== index
    })
    this.setState({ wordList: words })
  }

  render() {
    return (
      <Container id="app">
        <Grid centered>
          <Header />
          <Grid.Row centered>
            <WordInput
              handleAddWord={this.state.word && this.state.definition ? this.handleAddWord : null}
              handleWordChange={this.handleWordChange}
              handleUrlChange={this.handleUrlChange}
              handleDefinitionChange={this.handleDefinitionChange}
              wordValue={this.state.word}
              definitionValue={this.state.definition}
              urlValue={this.state.url}
            />
          </Grid.Row>
          <Grid.Row centered>
            <WordList 
              wordList={this.state.wordList}
              removeWord={this.handleRemoveWord}
            />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
