import vue from '@vitejs/plugin-vue'

export default {
    plugins: [
        vue()
    ],
    server: {
        port: 8000,
        strictPort: true,
        watch: {
          // 3. tell vite to ignore watching `src-tauri`
          ignored: ["**/src-tauri/**"],
        },
      },
    build: {
        lib: {
            entry: 'src/main.js',
            name: 'VueWheelSpinner',
            fileName: 'vue-wheel-spinner'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
}
