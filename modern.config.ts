import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';
import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  dev: {
    port: 8000,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
    tailwindcssPlugin(),
  ],
  html: {
    title: 'Marketing page',
  },
});
