/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Activity } from './models/activity';
import Navbar from './components/Navbar';
import './style.css';
import ActivityDashboard from './components/ActivityDashboard';
import LoadingComponent from './components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, deleteActivity, getActivities } from './redux/actions/activities.action';
import { CLOSE_MODAL, OPEN_MODAL } from './constants/type';
function App() {
  const dispatch = useDispatch();
  const activities: Activity[] = useSelector((state: any) => state.activitiesReducer.activities);
  const editModal = useSelector((state: any) => state.activitiesReducer.editModal);
  const loading = useSelector((state: any) => state.activitiesReducer.loading);
  const submiting = useSelector((state: any) => state.activitiesReducer.submitting);
  const [activity, setActivity] = useState<Activity | undefined>(undefined);
  const [editingActivity, setEditingActivity] = useState<Activity | undefined>(undefined);
  const handleFormOpen = (id?: string) => {
    const activity = activities.find((activity) => activity.id === id);
    setEditingActivity(activity);
    dispatch({
      type: OPEN_MODAL,
    });
  };
  const handleClose = () => {
    setEditingActivity(undefined);
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  const handleEditOrCreateActivity = (activity: Activity) => {
    dispatch(createActivity(activity));
    setActivity(activity);
  };
  const handleDeleteActivity = (id: string) => {
    dispatch(deleteActivity(id));
  };
  useEffect(() => {
    dispatch(getActivities());
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: '5em' }}>
        <ActivityDashboard
          editModal={editModal}
          setActivity={setActivity}
          activity={activity}
          handleClose={handleClose}
          handleFormOpen={handleFormOpen}
          editingActivity={editingActivity}
          activities={activities}
          handleEditorCreateActivity={handleEditOrCreateActivity}
          handleDeleteActivity={handleDeleteActivity}
          submitting={submiting}
        />
      </Container>
    </div>
  );
}

export default App;
