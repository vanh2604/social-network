/* eslint-disable import/no-anonymous-default-export */
import {
  CLOSE_MODAL,
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY,
  DELETE_ACTIVITY_SUCCESS,
  EDIT_ACTIVITY,
  EDIT_ACTIVITY_SUCCESS,
  GET_ACTIVITIES,
  GET_ACTIVITIES_SUCCESS,
  OPEN_MODAL,
} from '../../constants/type';

const initialState = {
  activities: [],
  loading: false,
  submitting: false,
  editModal: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ACTIVITIES: {
      return { ...state, loading: true };
    }
    case GET_ACTIVITIES_SUCCESS: {
      return { ...state, activities: payload, loading: false };
    }
    case CREATE_ACTIVITY: {
      return { ...state, submitting: true };
    }
    case CREATE_ACTIVITY_SUCCESS: {
      const newActivities = [...state.activities, payload];
      return { ...state, activities: newActivities, submitting: false, editModal: false };
    }
    case EDIT_ACTIVITY: {
      return { ...state, submitting: true };
    }
    case EDIT_ACTIVITY_SUCCESS: {
      const newActivities = [...state.activities.filter((el) => el.id !== payload.id), payload];
      return { ...state, submitting: false, activities: newActivities, editModal: false };
    }
    case DELETE_ACTIVITY: {
      return { ...state, submitting: true };
    }
    case DELETE_ACTIVITY_SUCCESS: {
      const newActivities2 = [...state.activities.filter((el) => el.id !== payload)];
      return { ...state, submitting: false, activities: newActivities2 };
    }
    case OPEN_MODAL: {
      return { ...state, editModal: true };
    }
    case CLOSE_MODAL: {
      return { ...state, editModal: false };
    }
    default:
      return state;
  }
};
