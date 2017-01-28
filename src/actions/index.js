import { CALL_API } from '../middleware/api';
import {Schemas} from "../middleware/schemas";


const getCurrencyAction = (to, from, day) => {

  var formatDate = day.format("YYYY-MM-DD");
  return {
    [CALL_API]: {
      types: [ "GET_CURRENCY_REQUEST", "GET_CURRENCY_SUCCESS", "GET_CURRENCY_FAILURE" ],
      endpoint: "/"+formatDate+"?base="+to+"&symbols="+from,
      ext_req: {method: "get"},
      id: formatDate + "-"+ to,
      schema: Schemas.CURRENCY
    }

  };
};

export function getCurrency(to, from, day) {
  return (dispatch) => {
    return dispatch(getCurrencyAction(to, from, day));
  };
}
