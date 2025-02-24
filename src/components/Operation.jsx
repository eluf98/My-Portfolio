import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postOperation } from "../store/actions/userAction";

export function Operation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postOperation());
  }, []);
}