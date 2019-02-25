import React from 'react'
import { List } from 'semantic-ui-react'
import WordModal from './WordModal';

const WordList = props => {
  const wordList = props.wordList
  return (
    <List animated verticalAlign="middle">
    {wordList.map((word, i) => {
      return <List.Item key={i} >
              <List.Content>
                <List.Header>
                  <WordModal 
                    word={word.word}
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