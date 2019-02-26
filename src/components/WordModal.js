import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const WordModal = props => (
  <Modal trigger={
    <Button id="wordButton" animated primary >
    <Button.Content visible>{props.text}</Button.Content>
      <Button.Content hidden>
        Study me!
      </Button.Content>
    </Button>
  }>
    <Modal.Header>Word and Definition</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={props.url} />
      <Modal.Description>
        <Header>{props.text}</Header>
        <p>{props.definition}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default WordModal