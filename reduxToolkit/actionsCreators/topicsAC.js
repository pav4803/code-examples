import { getAllTopics, modifyTopic, addTopic, removeTopic, removeAllTopics } from "../api/api";
import { commonSlice } from "../redusers/commonSlice";
import { commonDispatchFunc } from "../hooks/commonDispatch";

export const TopicsAC = {
  fetchAllTopics: (...params) =>
    commonDispatchFunc(
      getAllTopics,
      commonSlice.actions.topicsFethingSuccess,
      ...params
    ),
  modyfyCurrentTopic: (...params) =>
    commonDispatchFunc(
      modifyTopic,
      commonSlice.actions.topicModifySuccess,
      ...params
    ),
  addCurrentTopic: (...params) =>
    commonDispatchFunc(
      addTopic,
      commonSlice.actions.topicAddSuccess,
      ...params
    ),
    removeCurrentTopic: (...params) =>
    commonDispatchFunc(
      removeTopic,
      commonSlice.actions.topicRemoveSuccess,
      ...params
    ),
    removeAllProlongationTopics: (...params) =>
    commonDispatchFunc(
      removeAllTopics,
      commonSlice.actions.topicsAllRemoveSuccess,
      ...params
    ),
};
