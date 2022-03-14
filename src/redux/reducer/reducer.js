import {
  SET_ARRAY_TO_SORT_VALUE,
  SET_ALGORITHM_TYPE,
  SET_VIEW_TYPE,
  SET_ANIMATION_SPEED,
} from "../actions/action";

const initialState = {
  arrayToSort: [],
  viewType: "custom",
  algorithm: "bubblesort",
  animationSpeed: 600,
};

export function sortReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARRAY_TO_SORT_VALUE:
      return {
        ...state,
        arrayToSort: action.payload,
      };
    case SET_ALGORITHM_TYPE:
      return{
        ...state,
        algorithm: action.payload,
      }
    case SET_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload,
      };
    case SET_ANIMATION_SPEED:
      return {
        ...state,
        animationSpeed: action.payload,
      }
    default:
      return state;
  }
}
