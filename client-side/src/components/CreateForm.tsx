import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../models/activity';

interface Props {
  activity: Activity | undefined;
  handleClose: () => void;
  handleEditorCreateActivity: (activity: Activity) => void;
  submitting: boolean;
}
const CreateForm = ({ activity: selectedActivity, handleClose, handleEditorCreateActivity, submitting }: Props) => {
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    description: '',
    category: '',
    city: '',
    venue: '',
    date: '',
  };
  const [activity, setActivity] = useState(initialState);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };
  const handleSubmit = () => {
    handleEditorCreateActivity(activity);
  };
  return (
    <Segment clearing>
      <Form>
        <Form.Input name="title" placeholder="Title" value={activity.title} onChange={handleInputChange} />
        <Form.TextArea
          name="description"
          placeholder="Description"
          value={activity.description}
          onChange={handleInputChange}
        />
        <Form.Input name="category" placeholder="Category" value={activity.category} onChange={handleInputChange} />
        <Form.Input type="date" name="date" placeholder="Date" value={activity.date} onChange={handleInputChange} />
        <Form.Input name="city" placeholder="City" value={activity.city} onChange={handleInputChange} />
        <Form.Input name="venue" placeholder="Venue" value={activity.venue} onChange={handleInputChange} />
        <Button loading={submitting} onClick={handleSubmit} type="submit" floated="right" positive content="Submit" />
        <Button onClick={handleClose} floated="right" color="grey" content="cancel" />
      </Form>
    </Segment>
  );
};

export default CreateForm;
