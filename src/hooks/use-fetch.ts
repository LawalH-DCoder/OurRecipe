import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null | Error>(null);

  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const response = await fetch(url);
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : "Fetch failed");
      } finally {
        setLoading(false);
      }
    };

    makeApiCall();
  }, [url]);

  return { data, loading, error };
};
