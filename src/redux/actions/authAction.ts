import { RESTAURANT_LIST } from '../../config/urls';
import { apiPost } from '../../utils/utils';

import { changeFirstTime, saveUserData } from '../reducers/authReducer';
import store from '../store';
import types from '../types';
const { dispatch } = store;


export const restaurantList = (query, data = {}) => {
  return new Promise((resolve, reject) => {
    apiPost(RESTAURANT_LIST + query, data).then((res) => {
      resolve(res)
    }).catch(err => {
      reject(err)
      console.log(err, "there error")

    })
  })
}

export function setFirstTime(data: boolean) {
  dispatch(changeFirstTime(data))
}


