import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'testing-upp'

export default defineConfig({
plugins: [react()],
base: `/${repoName}/`,
})
