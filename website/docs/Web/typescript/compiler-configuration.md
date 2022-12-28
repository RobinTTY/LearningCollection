---
id: compiler-configuration
title: Compiler Configuration
sidebar_position: 5
---

Some useful configuration options for the Typescript compiler are listed here.

## Watch Mode

The `--watch` flag tells the compiler to watch for changes in the source files and recompile when it detects a change:

```bash
tsc app.ts --watch
```

## Working with multiple files

To compile a whole project, first run the `tsc --init` command to create a `tsconfig.json` file. This file contains all the compiler options that the compiler will use to compile the project. The `tsconfig.json` file can be edited to add or remove files from the compilation, change the compiler options, etc.

The tsconfig looks something like this:

```json title=tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["es2015", "dom"],
    "allowJs": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "removeComments": true,
    "noEmit": true,
    "noEmitOnError": false,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

When this file exists, we can simply run `tsc` to compile the project. The compiler will look for the `tsconfig.json` file in the current directory and use the options specified in it.

### tsconfig options

The `tsconfig.json` file has a few options that can be used to configure the compiler. Some of the most useful ones are listed below:

- `compilerOptions` - This is where we specify the compiler options. The options are explained in detail in the [Compiler Options](https://www.typescriptlang.org/tsconfig) section.
  - `target` - This is the target version of JavaScript that the compiler should compile to. The default value is `es3`.
  - `module` - This is the module system that the compiler should use. The default value is `commonjs`.
  - `lib` - This is an array of library files that should be included in the compilation. If for example the `dom` lib is included, the compiler will know for instance about the `document` object and will not throw an error when it sees it in the code.
  - `allowJs` - Allow JavaScript files to be imported inside your project, instead of just `.ts` and `.tsx` files.
  - `sourceMap` - This is a boolean flag that tells the compiler to generate source maps. These files allow debuggers and other tools to display the original TypeScript source code when actually working with the emitted JavaScript files. The default value is `false`.
  - `outDir` - This is the directory where the compiled files should be placed. The default value is `./`.
  - `rootDir` - This is the root directory of the project. The default value is `./`.
  - `removeComments` - This is a boolean flag that tells the compiler to remove comments from the compiled files. The default value is `false`.
  - `noEmit` - This is a boolean flag that tells the compiler to not emit any files. The default value is `false`.
  - `noEmitOnError` - This is a boolean flag that tells the compiler to not emit any files if there are any errors. The default value is `false`.
  - `strict` - The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness. Turning this on is equivalent to enabling all of the strict mode family options (e.g. strictNullChecks, strictFunctionTypes, etc.). The default value is `false`.
  - `esModuleInterop` - This is a boolean flag that enables interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. The default value is `false`.
  - `skipLibCheck` - This is a boolean flag that tells the compiler to skip type checking of declaration files. The default value is `false`.
  - `forceConsistentCasingInFileNames` - This is a boolean flag that tells the compiler to ensure that casing is correct in imports. The default value is `false`.
- `include` - This is where we specify the files that should be included in the compilation. The value of this option is an array of file patterns. The compiler will look for files that match any of the patterns in the `include` array and compile them.
- `exclude` - This is where we specify the files that should be excluded from the compilation. Default:
  node_modules, bower_components
