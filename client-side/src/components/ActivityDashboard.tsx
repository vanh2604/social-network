import React from 'react';
import { Activity } from '../models/activity';
import { Grid } from 'semantic-ui-react';
import ActivitiesList from './ActivitiesList';
import ActivityDetails from './ActivityDetails';
import CreateForm from './CreateForm';
interface Props {
  activities: Activity[];
  activity: Activity | undefined;
  editModal: Boolean;
  handleFormOpen: (id: string) => void;
  handleClose: () => void;
  editingActivity: Activity | undefined;
  setActivity: (value: Activity) => void;
  handleEditorCreateActivity: (activity: Activity) => void;
  handleDeleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityDashboard = ({
  activities,
  activity,
  editModal,
  handleFormOpen,
  handleClose,
  editingActivity,
  setActivity,
  handleEditorCreateActivity,
  handleDeleteActivity,
  submitting,
}: Props) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivitiesList
          submitting={submitting}
          handleDeleteActivity={handleDeleteActivity}
          setActivity={setActivity}
          activities={activities}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {activity && <ActivityDetails handleFormOpen={handleFormOpen} activity={activity} setActivity={setActivity} />}
        {editModal && (
          <CreateForm
            handleEditorCreateActivity={handleEditorCreateActivity}
            activity={editingActivity}
            handleClose={handleClose}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
