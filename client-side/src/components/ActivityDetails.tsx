import React from 'react';
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react';
import { Activity } from '../models/activity';

interface Props {
  activity: Activity;
  setActivity: (value: any) => void;
  handleFormOpen: (id: string) => void;
}

const ActivityDetails = ({ activity, setActivity, handleFormOpen }: Props) => {
  return (
    <>
      <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span className="date">{activity.date}</span>
          </Card.Meta>
          <Card.Description>{activity.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <ButtonGroup>
            <Button basic color="blue" content="edit" onClick={() => handleFormOpen(activity.id)} />
            <Button onClick={() => setActivity(null)} basic color="grey" content="cancel" />
          </ButtonGroup>
        </Card.Content>
      </Card>
    </>
  );
};

export default ActivityDetails;
