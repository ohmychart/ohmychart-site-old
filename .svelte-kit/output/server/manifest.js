export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","assets/img/pixel-texture.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","site.webmanifest"]),
	_: {
		mime: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
		entry: {"file":"start-3709cd58.js","js":["start-3709cd58.js","chunks/vendor-306961a8.js","chunks/paths-4b3c6e7e.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
