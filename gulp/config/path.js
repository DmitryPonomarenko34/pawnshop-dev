import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    iconsMono: `${buildFolder}/img/icons/`,
    iconsMulti: `${buildFolder}/img/icons/`,
    html: `${buildFolder}/`,
  },
  src: {
    js: `${srcFolder}/js/*.js`,
    scss: `${srcFolder}/scss/*.scss`,
    images: [
      `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      `${srcFolder}/img/*.svg`,
    ],
    fonts: `${srcFolder}/fonts/*.{woff,woff2}`,
    iconsMono: `${srcFolder}/img/icons/mono/*.svg`,
    iconsMulti: `${srcFolder}/img/icons/multi/*.svg`,
    html: `${srcFolder}/*.html`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
    html: `${srcFolder}/**/*.html`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}