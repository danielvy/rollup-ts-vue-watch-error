import rollupTypescript from "rollup-plugin-typescript2";
import rollupVue from "rollup-plugin-vue";


module.exports = [
	{
		input: {
			index: "source/app/index.ts"
		},
		output: {
			dir: "./out/app",
			name: "watcherr",
			format: "es",
			chunkFileNames: "[name].js",
			sourcemap: true
		},
		external: ["vue"],
		treeshake: true,
		plugins: [
			rollupVue(),
			rollupTypescript({
				tsconfig: "./source/app/tsconfig.json"
			}),
		],
	}
]
