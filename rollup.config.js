import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

function toPascalCase (name) {
    return name.match(/[a-z]+/gi).map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join('');
}

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];
const globals = external.reduce((globals, name) => Object.assign(globals, {[name]: toPascalCase(name)}), {});

export default {
    input: './src/index.ts',
    external,
    plugins: [resolve({ extensions }), commonjs(), babel({ extensions, include: ['src/**/*'] })],
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'esm',
        },
        {
            file: pkg.browser,
            format: 'iife',
            name: toPascalCase(pkg.name),
            globals,
        },
    ],
};
