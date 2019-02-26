import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const PageHeader = () => (
    <div>
        <Header as="h1" icon>
            <Icon name="student"/>
            <Header.Content>Popup Vocab</Header.Content>
        </Header>
    </div>
)

export default PageHeader