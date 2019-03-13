import React, { Component } from 'react'
import { Button, Grid, Icon } from 'semantic-ui-react'
import WordModal from './WordModal';

export default class WordList extends Component {

  render(){
    return (
      <Grid.Row id="studyWord" centered columns={4}>
      {this.props.wordList.map((word, i) => {
        return <Grid.Column style={style} key={i}>
                  <WordModal 
                      text={word.word}
                      url={word.url}
                      definition={word.definition}
                    />
                    <Button style={style} circular animated color="red" onClick={(e) => { this.props.removeWord(i)}} key={word} >
                      <Button.Content visible >Delete</Button.Content>
                        <Button.Content hidden>
                          <Icon name='trash alternate outline' />
                        </Button.Content>
                    </Button>
               </Grid.Column>
      })}
    </Grid.Row>
    )
  }
  }

  const style={
    textAlign: 'center',
    margin: 5
  }

