import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import WordList from './components/WordList';
import WordInput from './components/WordInput';

class App extends Component {

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row centered>
            <WordInput />
          </Grid.Row>
          <Grid.Row centered>
            <WordList />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
