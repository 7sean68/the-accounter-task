import { AxiosError } from "axios";
import { useEffect, useState } from "react";

export default function useApi<T>(apiCall: Promise<T>) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();
  useEffect(() => {
    const awaitedApi = apiCall;
    setData(undefined);
    setLoading(true);
    setError(undefined);
    apiCall
      .then((data) => {
        if (awaitedApi === apiCall) {
          setData(data);
          setError(undefined);
        }
      })
      .catch((ex: AxiosError) => {
        if(awaitedApi === apiCall) {
          setError(ex);
          setData(undefined);
        }
      })
      .finally(() => {
        if (awaitedApi === apiCall) {
          setLoading(false);
        }
      });
  }, [apiCall]);
  return { data, loading, error };
}
