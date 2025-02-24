import { toast } from "react-toastify";
import { user } from "../../Data";
import { API } from "../../services/api";

export const GET_DATA = "GET_DATA";
export const POST_DATA = "POST_DATA";
export const ERROR = "ERROR";
export const LOADING = "LOADING";

export function getData() {
  return { type: GET_DATA };
}

export function postData(data) {
  return { type: POST_DATA, payload: data };
}

export function loading() {
  return { type: LOADING };
}

export function errorOperation(err) {
  return { type: ERROR, payload: err };
}

export const postOperation = () => (dispatch) => {
  dispatch(loading());
  API.post("/workintech", user)
    .then((response) => {
      toast.success(
        "Elif Gündoğan CV sitesine hoş geldiniz, POST işlemi başarılı."
      );
      console.log(response.data);
      dispatch(postData(response.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorOperation(error));
    });
};