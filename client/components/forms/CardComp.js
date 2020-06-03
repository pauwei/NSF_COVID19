import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Text, AsyncStorage, Badge } from 'react-native-paper';
import {  ScrollView } from 'react-native';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
import GPS from '../gps-tracking'

const CardComp = () => (
  <ScrollView  >
  <Card style={{ height:'100%', }}>
    {/* <Card.Title title="" subtitle="" left={LeftContent} /> */}
    <Title>   </Title>
    <Card.Content style={{ flex: 4, alignItems: 'center', }}>
      <Title>Urban Mobility Survey</Title>
      <Card.Cover source={ require('../../assets/img/amazongc.png') } 
        style={{   
          width: "100%",
          resizeMode: 'contain',
          // height: null 
           }}/>

      <Paragraph >Thank you for participating in the urban mobility survey. We will occasionally ask your opinions about outdoor trips in the next three months. 
        Your answers will help us better investigate urban mobility. Your identity and answers will be completely anonymous and for research only. 
        Data will not be shared with anybody or parties other than the research team at University of Florida. This research is supported by National Science Foundation (NSF). 
        You will receive $30 gift card for the successful completion of the participation. 
        {'/n'}
        In the next 90 days, you will receive 30 notifications to complete a short survey (<10 minuets). After completing each survey successfully, you will receive one token. 
        After receiving 30 tokens, you will be contacted by us to receive the $30 Amazon Gift card via the registration email. If you have any question please contact us at icicvrufl@gmail.com
        {'/n'}
        Please note, Appe is not the sponsor of this survey study. This survey study is sponsored by National Science Foundation (NSF). All funds for Amazon Gift cards are provided by NSF.
        </Paragraph>
    </Card.Content>

    <Card.Actions style={{  flex: 1,  }}>
      {/* <Button>Upon completion, you will receive gift card in email</Button> */}
      <Button style={{  flex: 1,  }}>Click the 'Survey' Button below</Button>
    </Card.Actions>
    <Card.Cover source={ require('../../assets/img/arrow.gif') } 
        style={{  height:"20%" ,resizeMode: 'contain', }}/>
  </Card>
  </ScrollView>
);

export default CardComp;