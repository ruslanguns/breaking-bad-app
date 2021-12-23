import { useEffect, useState } from "react";
import { fetchApi } from "../services/getFetchApi";

export const useFetchApi = (url) => {
  const [state, setState] = useState({
      data: null, loading: true, error: null
  });

  useEffect(() => {
    fetchApi(url).then( data => {
      setState(data);
    })
  }, [url]);
  return state;
};