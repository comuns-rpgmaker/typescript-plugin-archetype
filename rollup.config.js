import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

import { readFileSync } from 'fs';

import pkg from './package.json';

const header = readFileSync('header.js', 'utf-8');

export default [
	{
        input: 'src/main.ts',
        output: [
            {
                file: `${__dirname}/dist/js/plugins/${pkg.name}.js`,
                format: 'cjs',
                sourcemap: false,
                plugins: [
                    terser({
                        keep_fnames: true,
                        toplevel: true,
                        format: {
                            comments: false,
                            preamble: header
                        }
                    })
                ]
            },
            {
                file: `${pkg.testProjectDir || `${__dirname}/dist`}/js/plugins${pkg.name}.debug.js`,
                format: 'cjs',
                
                sourcemap: true,
                banner: header
            }
        ],
        plugins: [
            typescript()
        ]
	}
];
