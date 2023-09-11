'use client';

import { useEffect, useState } from 'react';

export function Welcome() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/api/foo')
      .then((response) => response.json())
      .then(({ message }) => setMessage(message));
  }, []);
  return <h2>Client Side: {message || 'loading'}</h2>;
}
