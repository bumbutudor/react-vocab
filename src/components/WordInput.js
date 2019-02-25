import React, { Component } from 'react'
import { Button, Form, FormField, Input } from 'semantic-ui-react'
import WordList from './WordList';

class WordInput extends Component {
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
      <div>
        <Form onSubmit={this.handleAddWord}>
          <FormField required>
            <label>Word</label>
            <Input onChange={this.handleWordChange} value={this.state.word} type="text" name="word" placeholder="Enter new word" />
          </FormField>
          <FormField required>
            <label>Definition</label>
            <input onChange={this.handleDefinitionChange} value={this.state.definition} type="text" name="definition" placeholder="Definition goes here" />
          </FormField>
          <FormField required>
            <label>Image</label>
            <input onChange={this.handleUrlChange} value={this.state.url} type="text" name="url" placeholder="Enter image url" />
          </FormField>
          <Button type="submit">Add word</Button>
        </Form>
        <WordList 
          wordList={this.state.wordList}
        />
      </div>
    )
  }
}

export default WordInput