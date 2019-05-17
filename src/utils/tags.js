import store from 'store';

export const isTagSelected = (tags) => {
  console.log('hi');
  const { app } = store.getState();
  const { filters } = app;
  if (filters.indexOf(tags.id) < 0) {
    return false;
  }
  return true;
};
