import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios';

class WordOfTheDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          users: []
        };
      }
    
      componentDidMount() {
        fetch("https://randomuser.me/api/?results=1")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                users: result
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
            <div>
                <Modal trigger={
                    <Button id="wordButton" animated secondary >
                    <Button.Content visible id="buttonText">Word of the Day</Button.Content>
                    <Button.Content hidden>
                        Study me!
                    </Button.Content>
                    </Button>
                }>
                    <Modal.Header>Word and Definition</Modal.Header>
                    <Modal.Content image>
                    {/* <Image wrapped size="medium" src={props.url} /> */}
                    <Modal.Description>
                        <Header maxLength='11'>Random Word</Header>
                        
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default WordOfTheDay