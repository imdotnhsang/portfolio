Promise.all([import('./internal')])
  .then(() => {})
  .catch((error) => {
    console.error('Failed to load mocks', error);
  });
