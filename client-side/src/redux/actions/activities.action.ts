import agent from '../../api/agent';
import {
  GET_ACTIVITIES,
  GET_ACTIVITIES_SUCCESS,
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_SUCCESS,
  EDIT_ACTIVITY_SUCCESS,
  EDIT_ACTIVITY,
  DELETE_ACTIVITY,
  DELETE_ACTIVITY_SUCCESS,
} from '../../constants/type';
import { Activity } from '../../models/activity';
import { v4 as uuid } from 'uuid';

export const getActivities = () => {
  return async (dispatch: any) => {
    dispatch({ type: GET_ACTIVITIES });
    const response = await agent.Activities.list();
    console.log(response);
    const activities: Activity[] = [];
    response.forEach((activity) => {
      activity.date = activity.date.split('T')[0];
      activities.push(activity);
    });
    dispatch({
      type: GET_ACTIVITIES_SUCCESS,
      payload: activities,
    });
  };
};

export const createActivity = (activity: Activity) => {
  return async (dispatch: any) => {
    if (activity.id) {
      dispatch({ type: EDIT_ACTIVITY });
      await agent.Activities.edit(activity, activity.id);
      dispatch({
        type: EDIT_ACTIVITY_SUCCESS,
        payload: activity,
      });
    } else {
      dispatch({ type: CREATE_ACTIVITY });
      console.log(activity);
      const newActivity = { ...activity, id: uuid() };
      const response = await agent.Activities.create(newActivity);
      console.log(response);
      dispatch({
        type: CREATE_ACTIVITY_SUCCESS,
        payload: newActivity,
      });
    }
  };
};

export const deleteActivity = (id: string) => {
  return async (dispatch: any) => {
    dispatch({ type: DELETE_ACTIVITY });
    await agent.Activities.delete(id);
    dispatch({
      type: DELETE_ACTIVITY_SUCCESS,
      payload: id,
    });
  };
};
