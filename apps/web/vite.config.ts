import * as path from 'path'
import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: false,
		target: 'es2017',
		assetsInlineLimit: 0,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				dead_code: true
			},
			toplevel: true,
			keep_classnames: false,
			keep_fnames: false,
			safari10: false
		},
		rollupOptions: {
			logLevel: 'debug',
			output: {
				manualChunks: {
					'@vkontakte/icons': ['@vkontakte/icons']
				}
			}
		}
	},
	// @ts-ignore unknown
	plugins: [preact()],
	resolve: {
		alias: [
			{ find: /^@vkontakte\/vkui$/, replacement: '@vkontakte/vkui/dist/cssm' },
			{ find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
			{
				find: '@components',
				replacement: path.resolve(__dirname, 'src/components')
			}
		]
	}
})
