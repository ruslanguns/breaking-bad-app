import { useEffect, useState } from "react";
import { fetchApi } from "../helpers/getFetchApi";

export const useFetchApi = (url) => {
  const [state, setState] = useState({
      data: null, loading: true, error: null
  });

  useEffect(() => {
    fetchApi(url).then( data => {
        console.log(data)
        setState({
            loading: false,
            error: null,
            data
        })
    })
  }, [url])
  return state;
};