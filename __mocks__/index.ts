Promise.all([import('./internalFolders')])
  .then(() => {})
  .catch((error) => {
    console.error('Failed to load mocks', error);
  });
