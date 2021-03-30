import { createSelector } from "reselect";
import _ from "lodash";

export const getEveryPostData = (state) => state.getPosts.posts;

export const getUsersFromLikes = (likes) =>
  createSelector(
    getTopLikes(likes),
    (ele) =>
      ele &&
      _(ele)
        .map((d) => d.owner)
        .uniqBy((d) => d.id)
        .value()
  );
