import store from 'store';

export const isTagSelected = (tags) => {
  const { app } = store.getState();
  const { filters } = app;
  if (filters.map(filter => filter.id).indexOf(tags.id) < 0) {
    return false;
  }
  return true;
};
