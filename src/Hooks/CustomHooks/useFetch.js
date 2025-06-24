import React from 'react';

const useFetch = () => {
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const request = React.useCallback(async (url, config) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (e) {
      console.log(e, 'error');
      json = null;
      setError('Erro');
    } finally {
      console.log(json);
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);
  return { loading, error, data, request };
};

export default useFetch;
