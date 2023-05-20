import { useMemo, useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const cachedData = useMemo(() => data, [data]);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!cachedData) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <h1>{cachedData.title}</h1>
      <p>{cachedData.body}</p>
    </div>
  );
}
