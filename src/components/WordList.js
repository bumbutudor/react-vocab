import React from 'react'
import { Button, List } from 'semantic-ui-react'
import WordModal from './WordModal';

const WordList = props => {
  return (
    <List animated verticalAlign="middle">
    {props.wordList.map((word, i) => {
      return <List.Item key={i}>
              <List.Content>
                <List.Header>
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

export default WordList