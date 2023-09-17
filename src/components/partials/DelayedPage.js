import React, { useEffect, useState } from 'react';

const DelayedPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds (adjust the time as needed)
    const delay = 2000;

    // After the delay, set isLoading to false to trigger rendering the actual content
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  // While isLoading is true, show a loading message or spinner
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // When isLoading becomes false, render the actual content of the page
  return <div>Your page content here</div>;
};

export default DelayedPage;
