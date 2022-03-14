export const SET_ARRAY_TO_SORT_VALUE = "SET_ARRAY_TO_SORT_VALUE";
export const SET_VIEW_TYPE = "SET_VIEW_TYPE";
export const SET_ALGORITHM_TYPE = "SET_ALGORITHMS_TYPE";
export const SET_ANIMATION_SPEED = "SET_ANIMATION_SPEED";

export const setArrayToSort = (payload) => {
  return {
    type: SET_ARRAY_TO_SORT_VALUE,
    payload,
  };
};

export const setAlgorithmType = (payload) => {
  return { type: SET_ALGORITHM_TYPE, payload };
};

export const setViewType = (payload) => {
  return { type: SET_VIEW_TYPE, payload };
};

export const setAnimationSpeed = (payload) => {
  return { type: SET_ANIMATION_SPEED, payload };
};

