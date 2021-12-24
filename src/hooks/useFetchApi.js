import { useEffect, useState } from "react";
import { fetchRestApi } from "../services/getFetchApi";

export const useFetchApi = (url) => {
  const [state, setState] = useState({
      data: null, loading: true, error: null
  });

  useEffect(() => {
    fetchRestApi(url).then( data => {
      setState(data);
    })
  }, [url]);
  return state;
};