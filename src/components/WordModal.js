import React from 'react'
import { Header, Image, Modal, Button } from 'semantic-ui-react'

const WordModal = props => (
  <Modal trigger={<Button>{props.word}</Button>}>
    <Modal.Header>Word and Definition</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={props.url} />
      <Modal.Description>
        <Header>{props.word}</Header>
        <p>{props.definition}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default WordModal