import { defineConfig } from 'vite'

export default defineConfig({
  base: '/natsuto-portfolio/', // GitHubリポジトリ名に合わせて変更してください
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000,
    open: true
  }
})
