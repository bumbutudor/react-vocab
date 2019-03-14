import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'

const JokeOfTheDay = props => (
            <div>
                <Modal trigger={
                    <Button id="wordButton" animated secondary >
                    <Button.Content visible id="buttonText">Joke of the Day</Button.Content>
                    <Button.Content hidden>
                        Take a quick break!
                    </Button.Content>
                    </Button>
                }>
                    <Modal.Header>Joke and Punchline</Modal.Header>
                    <Modal.Content image>
                    {/* <Image wrapped size="medium" src={props.url} /> */}
                    <Modal.Description>
                        <Header maxLength='11'>{props.joke}</Header>
                        <p>{props.punchline}</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )

export default JokeOfTheDay