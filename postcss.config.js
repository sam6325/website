// postcss.config.js

import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // 正確引入
    autoprefixer(), // 自動加上瀏覽器前綴
  ],
};
