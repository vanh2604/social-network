import React, { SyntheticEvent, useState } from 'react';
import { Segment, Item, Button, Label } from 'semantic-ui-react';
import { Activity } from '../models/activity';
interface Props {
  activities: Activity[];
  setActivity: (value: Activity) => void;
  handleDeleteActivity: (id: string) => void;
  submitting: boolean;
}
const ActivitiesList = ({ activities, setActivity, handleDeleteActivity, submitting }: Props) => {
  const [target, setTarget] = useState('');
  const handleDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    const name = e.currentTarget.name;
    setTarget(name);
    handleDeleteActivity(id);
  };
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button onClick={() => setActivity(activity)} floated="right" color="blue" content="View" />
                <Button
                  name={activity.id}
                  loading={submitting && target === activity.id}
                  onClick={(e) => handleDelete(e, activity.id)}
                  floated="right"
                  color="red"
                  content="Delete"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivitiesList;
