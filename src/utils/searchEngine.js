import Fuse from 'fuse.js';

const defaultOptions = {
  shouldSort: true,
  includeScore: true,
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

export const convertTagsObjectToList = (object) => {
  const list = [];
  Object.keys(object).forEach((key) => {
    object[key].forEach((tag) => {
      list.push({
        ...tag,
        group: key,
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
    newList = convertTagsObjectToList(_list);
  } else {
    newList = _list;
  }
  console.log(newList);
  console.log(_list);
  return new Fuse(newList, newOptions);
};

export default {
  setup,
};
