const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // Replace with your Flask server address
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: true
})
