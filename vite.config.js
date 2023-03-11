import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import jsconfigPaths from 'vite-jsconfig-paths';
import path from 'path';
import { readdirSync } from 'fs';

const absolutePathAliases = {};
// Root resources folder
const srcPath = path.resolve('./src/');
// Ajust the regex here to include .vue, .js, .jsx, etc.. files from the resources/ folder
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((dirent) =>
  dirent.name.replace(/(\.js){1}(x?)/, ''),
);

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});
// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      // '~/*': ['*'],
      ...absolutePathAliases,
    },
  },
  plugins: [react(), jsconfigPaths()],
});
