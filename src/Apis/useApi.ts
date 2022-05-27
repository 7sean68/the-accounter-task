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
    apiCall.then((data) => {
      setData(data);
    }).catch((ex: AxiosError) => {
      setError(ex);
    })
  }, [apiCall]);
  return [data, loading, error];
}