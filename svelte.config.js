import adapter from "@sveltejs/adapter-static";
import path from 'path';
import svg from "vite-plugin-svgstring";

// const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
		paths : {
			// base: dev ? "" : "/<repository-name"
			base: "",
		},
		vite: {
			resolve: {
				alias: {
					$styles: path.resolve('./src/styles'),
					$components: path.resolve('./src/components'),
					$data: path.resolve('./src/data'),
					$svg: path.resolve('./src/svg'),
				}
			},
			plugins: [
				svg()
			],
		},

		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
	}
};

export default config;
