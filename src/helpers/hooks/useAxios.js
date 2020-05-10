import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (payload) => {
  const baseUrl = 'https://api.github.com';
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchUrl = async (payload) => {
      if (payload.endpoint) {
        setIsLoading(true);
        try {
          const result = await axios({
            url: baseUrl + payload.endpoint,
            method: payload.method || 'GET',
            params: payload.params || null,
            data: payload.data || null,
            //TODO: Learn more about github media types for headers
            // headers: payload.headers || {
            //   'Access-Control-Allow-Origin': '*',
            //   'Accept': 'application/vnd.github.v3+json',
            // },
            timeout: 4000,
          });
          setData(result.data);
        } catch (error) {
          setHasError(true);
          //TODO: Add options for error handling, eg timeout, 404, 403
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchUrl(payload);
  }, [payload]);
  return { data, isLoading, hasError };
};
