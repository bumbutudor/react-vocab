import React from 'react'
import { Button, Form, FormField, Input } from 'semantic-ui-react'

const WordInput = props => {

    return (
      <div>
        <Form onSubmit={props.handleAddWord}>
          <FormField>
            <label>Word</label>
            <Input onChange={props.handleWordChange} value={props.wordValue} type="text" name="word" placeholder="Enter new word" />
          </FormField>
          <FormField>
            <label>Definition</label>
            <input onChange={props.handleDefinitionChange} value={props.definitionValue} type="text" name="definition" placeholder="Definition goes here" />
          </FormField>
          <FormField>
            <label>Image</label>
            <input onChange={props.handleUrlChange} value={props.urlValue} type="text" name="url" placeholder="Enter image url" />
          </FormField>
          <Button id="button" type="submit">Add word</Button>
        </Form>
      </div>
    )
}

export default WordInput