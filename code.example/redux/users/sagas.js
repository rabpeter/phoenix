import * as actionTypes from "./action_types";
import { put, takeLatest } from "redux-saga/effects";
import { endpoints, USER } from "../../configs";
import api from "../../../modules/api_wrapper";

function* getUserAction() {
  const id = Math.floor(Math.random() * 10) + 1;
  console.log('api import in users', api);
  const data = yield api
    .get(endpoints(USER, { id }))
    .then(response => response.json());
  yield put({
    type: [actionTypes.ACTION_TYPE_USERS_GET_USER_RESULT],
    response: data
  });
}

const usersSaga = [
  takeLatest([actionTypes.ACTION_TYPE_USERS_GET_USER], getUserAction)
];

export default usersSaga;
