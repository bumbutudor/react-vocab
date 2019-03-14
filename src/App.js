import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import SimpleStorage from 'react-simple-storage';
import JokeOfTheDay from './components/JokeOfTheDay';
import PageHeader from './components/PageHeader';
import WordList from './components/WordList';
import WordInput from './components/WordInput';
import WordOfTheDay from './components/WordOfTheDay'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      word: '',
      definition: '',
      url: '',
      wordList: [],
      joke: [],
      errorMsg: '',
      error: null,
      isLoaded: false
    };

  

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
      errorMsg: '',
      isLoaded: false
    })
  }

  handleRemoveWord = (index) => {
    const words = this.state.wordList.filter((word, wordIndex) => {
      return wordIndex !== index
    })
    this.setState({ wordList: words })
  }

  handleError = () => {
    this.setState({ error: 'Please enter a word and definition' })
  }

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            joke: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <Container id="app">
        <SimpleStorage parent={this} />
        <Grid centered>
          <PageHeader />
          <Grid.Row>
<<<<<<< HEAD
          <JokeOfTheDay 
            joke={this.state.joke.setup}
            punchline={this.state.joke.punchline}
          />
=======
            <WordOfTheDay />
>>>>>>> f04705a4bdfc7eab37a52ea699a5313bdbb73f8c
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
          {this.state.errorMsg && <p>{this.state.error}</p>}
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
