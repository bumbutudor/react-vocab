import React, {useState} from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'

const JokeOfTheDay = props => {

    const [display, setDisplay] = useState(false);

    return (
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
                        {display && <p>{props.punchline}</p>}
                        {!display && <Button onClick={() => setDisplay(true)}>Show Punchline</Button>}
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }

export default JokeOfTheDay