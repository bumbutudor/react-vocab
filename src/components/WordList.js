import React, { Component } from 'react'
import { Button, Icon, List } from 'semantic-ui-react'
import WordModal from './WordModal';

export default class WordList extends Component {

  render(){
    return (
      <List verticalAlign="middle">
      {this.props.wordList.map((word, i) => {
        return <List.Item key={i}>
                <List.Content>
                  <List.Header>
                    <Button animated secondary onClick={(e) => { this.props.removeWord(i)}} key={word} >
                    <Button.Content visible>X</Button.Content>
                      <Button.Content hidden>
                        <Icon name='trash alternate outline' />
                      </Button.Content>
                    </Button>
                    <WordModal 
                      text={word.word}
                      url={word.url}
                      definition={word.definition}
                    />
                  </List.Header>
                </List.Content>
               </List.Item>
      })}
    </List>
    )
  }
  }

