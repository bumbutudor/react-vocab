import React from 'react'
import { Button, Form, FormField, Icon, Input, Popup } from 'semantic-ui-react'

const WordInput = props => {

    return (
      <div>
        <Form onSubmit={props.handleAddWord}>
          <FormField>
            <label>Word <Popup trigger={<Icon name="question circle outline"/>} content="Enter the vocabulary word you're studying in the box"/></label>
            <Input onChange={props.handleWordChange} value={props.wordValue} type="text" name="word" placeholder="Enter new word" />
          </FormField>
          <FormField>
            <label>Definition <Popup trigger={<Icon name="question circle outline"/>} content="Enter the definition for the word you entered"/></label>
            <input onChange={props.handleDefinitionChange} value={props.definitionValue} type="text" name="definition" placeholder="Definition goes here" />
          </FormField>
          <FormField>
            <label>Image <Popup trigger={<Icon name="question circle outline"/>} content="Right click an image, select 'copy image address' and paste in the box below"/></label>
            <input onChange={props.handleUrlChange} value={props.urlValue} type="text" name="url" placeholder="Enter image url" />
          </FormField>
          <Button id="button" type="submit">Add word</Button>
        </Form>
      </div>
    )
}

export default WordInput