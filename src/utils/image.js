import { Image } from 'react-native';

export const getRatioFromImageUrl = url => new Promise((resolve, reject) => {
  console.log('get size');
  Image.getSize(url, (width, height) => {
    console.log('get size OK');
    resolve(width / height);
  }, (error) => {
    console.log('get size NOT');
    reject(error);
  });
});

export const getSizeFromImageUrl = url => new Promise((resolve, reject) => {
  Image.getSize(url, (width, height) => {
    resolve({
      width,
      height,
    });
  }, (error) => {
    reject(error);
  });
});

export const imageStyleWithRatio = (style, ratio) => ({
  ...style,
  height: style.width / ratio,
});
