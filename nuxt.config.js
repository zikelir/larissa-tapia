const isDevelopment = process.env.NODE_ENV === 'development';

export default {
	mode: 'spa',
	head: {
		title: 'Dra. Larissa Tapia',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{ rel: 'stylesheet', href: 'https://unpkg.com/vue2-animate/dist/vue2-animate.min.css' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito&display=swap' },
		],
		noscript: [
			{
				innerHTML: 'This website requires JavaScript.',
				body: true,
			},
		],
	},
	manifest: {
		name: 'Larissa Tapia',
		short_name: 'Larissa Tapia',
	},
	loading: {
		color: '#fff',
		height: '3px',
		continuous: true,
	},
	generate: {
		fallback: true,
	},
	css: [
		'~/assets/styles/reset.scss',
		'~/assets/styles/general.scss',
	],
	plugins: [
		{ src: '~/plugins/scrollactive.js', ssr: false },
		{ src: '~/plugins/anime.js', ssr: false },
		{ src: '~/plugins/modal.js', ssr: false },
		{ src: '~/plugins/clickoutside.js', ssr: false },
	],
	buildModules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/style-resources',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/dotenv',
	],
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@aceforth/nuxt-optimized-images',
		['vue-scrollto/nuxt', {
			container: 'body',
			duration: 250,
			easing: 'ease-in',
			offset: 0,
			force: true,
			cancelable: true,
			onStart: false,
			onDone: false,
			onCancel: false,
			x: false,
			y: true,
		}],
	],
	axios: {
	},
	dotenv: {
	},
	optimizedImages: {
		inlineImageLimit: -1,
		handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif'],
		optimizeImages: true,
		optimizeImagesInDev: false,
		defaultImageLoader: 'img-loader',
		optipng: false,
		mozjpeg: {
			quality: 85,
		},
		pngquant: {
			speed: 7,
			quality: [0.65, 0.8],
		},
		webp: {
			quality: 85,
		},
	},
	build: {
		extractCSS: isDevelopment,
		optimizeCSS: isDevelopment,
		postcss: {
			plugins: {
				rfs: {},
			},
			preset: {
				autoprefixer: {
					grid: true,
				},
			},
		},
		extend(config, { isDev, isClient, loaders: { vue } }) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src'];
				vue.transformAssetUrls.source = ['data-srcset', 'srcset'];

				if (isDev) {
					config.module.rules.push({
						enforce: 'pre',
						test: /\.(js|vue)$/,
						loader: 'eslint-loader',
						exclude: /(node_modules)/,
						options: {
							fix: true,
						},
					});
				}
			}
		},
	},
	styleResources: {
		scss: ['~assets/variables/*.scss'],
	},
};
