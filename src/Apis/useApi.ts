import { AxiosError } from "axios";
import { useEffect, useState } from "react";

export default function useApi<T>(apiCall: Promise<T>) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<AxiosError>();
  useEffect(() => {
    setData(undefined);
    setLoading(true);
    setError(undefined);
    apiCall
      .then((data) => {
        setData(data);
        setError(undefined);
      })
      .catch((ex: AxiosError) => {
        setError(ex);
      })
      .finally(() => {
        setLoading(false);
        setData(undefined);
      });
  }, [apiCall]);
  return { data, loading, error };
}
