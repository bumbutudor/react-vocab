import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import SimpleStorage from 'react-simple-storage';
import PageHeader from './components/PageHeader'
import WordList from './components/WordList';
import WordInput from './components/WordInput';
import WordOfTheDay from './components/WordOfTheDay'
import './App.css'

class App extends Component {

  state = {
    word: '',
    definition: '',
    url: '',
    wordList: [],
    error: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
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
      url: '',
      error: ''
    })
  }

  handleRemoveWord = (index) => {
    const words = this.state.wordList.filter((word, wordIndex) => {
      return wordIndex !== index
    })
    this.setState({ wordList: words })
  }

  handleError = () => {
    this.setState({ error: "Please enter a word and definition" })
  }

  render() {
    return (
      <Container id="app">
        <SimpleStorage parent={this} />
        <Grid centered>
          <PageHeader />
          <Grid.Row>
            <WordOfTheDay />
          </Grid.Row>
          <Grid.Row centered>
            <WordInput
              handleAddWord={this.state.word && this.state.definition ? this.handleAddWord : this.handleError}
              handleChange={this.handleChange}
              wordValue={this.state.word}
              definitionValue={this.state.definition}
              urlValue={this.state.url}
            />
          </Grid.Row>
          <Grid.Row><p> {this.state.error}</p></Grid.Row>
          <Grid centered container columns={4} stackable style={{width: 200}}>
            <WordList 
              wordList={this.state.wordList}
              removeWord={this.handleRemoveWord}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
