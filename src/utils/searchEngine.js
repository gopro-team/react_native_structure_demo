import Fuse from 'fuse.js';

const defaultOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 20,
  maxPatternLength: 32,
  minMatchCharLength: 1,
};

const tagOptions = {
  keys: [
    'name.vi',
    'name.en',
  ],
};

export const convertCategoriesToTags = (categories) => {
  const list = [];
  categories.forEach((category) => {
    category.tags.forEach((tag) => {
      list.push({
        ...tag,
        categoryId: category.id,
        categoryName: category.categoryName,
      });
    });
  });
  return list;
};

export const setup = (_list = [], _options = tagOptions, _default = true, _type = 'tag') => {
  let newOptions;
  let newList;
  if (_default === true) {
    newOptions = {
      ...defaultOptions,
      ..._options,
    };
  } else {
    newOptions = _options;
  }
  if (_type === 'tag') {
    newList = convertCategoriesToTags(_list);
  } else {
    newList = _list;
  }
  return new Fuse(newList, newOptions);
};

export default {
  setup,
};
