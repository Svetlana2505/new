import { Layout } from "./Layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchToken } from "../redux/registration/registration-operations";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  return <Layout />;
};
