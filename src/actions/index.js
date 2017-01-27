import { CALL_API } from '../middleware/api';
import {Schemas} from "../middleware/schemas";


const createTodoCatAction = () => {
  return {
    [CALL_API]: {
      types: [ "GET_TODO_CATS_REQUEST", "GET_TODO_CATS_SUCCESS", "GET_TODO_CATS_FAILURE" ],
      endpoint: "/todo_categories?shared=0",
      ext_req: {method: "get"},
      schema: Schemas.USER
    }
  };
};

export function createTodoCat() {
  return (dispatch) => {
    return dispatch(createTodoCatAction());
  };
}
