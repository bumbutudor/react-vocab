import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import WordList from './components/WordList';
import WordInput from './components/WordInput';

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

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row centered>
            <WordInput
              handleAddWord={this.handleAddWord}
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
            />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
