import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const CardComp = () => (
  <Card>
    <Card.Title title="" subtitle="" left={LeftContent} />
    <Card.Content>
      <Title>NSF COVID19 Survey</Title>
      <Card.Cover source={ require('../../assets/img/amazongc.png') } 
        style={{ height: 250,   }}/>
      <Paragraph>Thank you for participating in the COVID-19 social distancing survey. We will occasionally ask your opinions about outdoor trips during COVID-19 in the next three months. 
        Your answers will help us better predict when the stay-at-home restriction can be safely lifted. Your identity and answers will be completely anonymous and for research only. 
        Data will not be shared with anybody or parties other than the research team at University of Florida. This research is supported by National Science Foundation (NSF). 
        You will receive $40 gift card for the successful completion of the participation. </Paragraph>
    </Card.Content>

    <Card.Actions>
      {/* <Button>Upon completion, you will receive gift card in email</Button> */}
      <Button>Take Survey Here</Button>
    </Card.Actions>
    <Card.Cover source={ require('../../assets/img/arrow.gif') } 
        style={{ height: 80,   }}/>
  </Card>
  
);

export default CardComp;