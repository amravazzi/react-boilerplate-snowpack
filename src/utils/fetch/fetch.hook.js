import { useState } from "react";

export function useFetch(uri, options = {}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...options.headers,
  };

  const method = options.method || "GET";

  const requestError = (err) => {
    setError(() => err ?? "");
  };

  const receive = (res) => {
    if (!res?.ok) {
      requestError(res);
    }
    return res?.json();
  };

  const respond = (data) => {
    setResponse(data);
  };

  const resource = `${import.meta.env.SNOWPACK_PUBLIC_API_URL}${uri}`;

  async function fetchData() {
    setIsLoading(true);
    const reqOptions = { method, headers };

    await fetch(resource, reqOptions)
      .then(receive)
      .then(respond)
      .catch(requestError)
      .finally(() => setIsLoading(false));
  }

  return { fetchData, response, error, isLoading };
}
