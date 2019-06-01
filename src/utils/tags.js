import store from 'store';

export const isTagSelected = (tags) => {
  const { app } = store.getState();
  const { filters } = app;
  if (filters.map(filter => filter.id).indexOf(tags.id) < 0) {
    return false;
  }
  return true;
};

export const getTagsFromIds = (idsArray) => {
  const { app } = store.getState();
  const { allTags } = app;
  const tags = allTags.filter(tag => (idsArray.indexOf(tag.id) >= 0));
  return tags || [];
};
