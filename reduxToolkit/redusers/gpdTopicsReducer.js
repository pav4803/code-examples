export const gpdTopicsReduser = {
  //themes actions creators
  topicsFethingSuccess(state, action) {
    state.isLoading = false;
    state.topics = action.payload.Items;
  },
  topicModifySuccess(state, action) {
    state.isLoading = false;
    state.topics = [
      ...state.topics?.filter((topic) => topic.ID !== action.payload.ID),
      action.payload,
    ];
  },
  topicAddSuccess(state, action) {
    state.isLoading = false;
    state.topics = [...state.topics, action.payload];
  },
  topicRemoveSuccess(state, action) {
    state.isLoading = false;
    state.topics = [
      ...state.topics?.filter((topic) => topic.ID !== action.payload.ID),
    ];
  },
  topicsAllRemoveSuccess(state, action) {
    state.isLoading = false;
    state.topics = [];
  },
};
