import { useEffect, useState, useRef } from "react";
import { fetchRestApi } from "../services/getFetchApi";

export const useFetchApi = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    fetchRestApi(url).then((result) => {
      if (isMounted.current) {
        setState({
          loading: false,
          error: null,
          data: result.data,
        });
      } else {
        console.log("Ha dejado de renderizar");
      }
    });
  }, [url]);
  return state;
};
