import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'happy-dom',
        include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
    resolve: {
        alias: {
            '@': '/app'
        }
    }
})
