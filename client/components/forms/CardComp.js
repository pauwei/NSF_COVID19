import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComp = () => (
  <Card>
    <Card.Title title="" subtitle="" left={LeftContent} />
    <Card.Content>
      <Title>NSF_COVID19</Title>
      <Paragraph></Paragraph>
    </Card.Content>
    <Card.Cover source={ require('../../assets/img/feeling.png') } 
    style={{ height: 250,   }}/>
    <Card.Actions>
      <Button>More Information</Button>
      {/* <Button>Ok</Button> */}
    </Card.Actions>
  </Card>
);

export default CardComp;