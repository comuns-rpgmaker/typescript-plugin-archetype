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
                name: pkg.namespace,
                format: 'iife',
                sourcemap: false,
                plugins: [
                    terser({
                        format: {
                            comments: false,
                            preamble: header
                        }
                    })
                ]
            },
            {
                file: `${pkg.testProjectDir || `${__dirname}/dist`}/js/plugins/${pkg.name}.debug.js`,
                name: pkg.namespace,
                format: 'iife',
                sourcemap: true,
                banner: header
            }
        ],
        plugins: [
            typescript()
        ]
	}
];
