import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import me from '../../assets/img/layosa.jpg'

const CardExampleCard = (props) => {
  const {name, joined, description, friends} = props
  return (<Card>
    <Image src={me} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in {joined}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {friends} Friends
      </a>
    </Card.Content>
  </Card>)}


export default CardExampleCard