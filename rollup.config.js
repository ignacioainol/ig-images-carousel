import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'ignaCarousel',
    },
  ],
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
};
