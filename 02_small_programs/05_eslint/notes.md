# ESlint

A static modular node package framework code analyzer for JavaScript.

- inspects / analyzes code
- offers advice about style, format, potential errors, coding practices and other problems
- helps to adhere to your preferred style guide / best practices of coding
- Airbnb style guide: <https://github.com/airbnb/javascript>

<br>

## Install locally as a development dependency:

Install these 3 packages for every project where ESlint is required:

```
$ npm install eslint@7.12.1 eslint-cli babel-eslint --save-dev
```

<br>

Check installation version:  

```
$ npx eslint -v
// v7.12.1
```

<br>

## Testing

The eslint command accepts a JavaScript file as an argument e.g. `npx eslint fileName.js`

<br>

## Configuration

### YAML Configuration

- create a file named `.eslintrc.yml` (When you run eslint it looks for this file and others in the current or closest directory), put this file in a directory that contains all project and subdirectories (or in each project for individual customization).

<br>

### Try it out

- Create a file called `hello.js`
- add this line to the file: `console.log(helloWorld)`
- run the command: `npx eslint hello.js`

<br> 

Output:  

```
ssr@SSRs-Laptop 05_eslint % npx eslint hello.js

/Users/ssr/Documents/REPOS/ls-js101/02_small_programs/05_eslint/hello.js
  1:13  error  'helloWorld' is not defined  no-undef
  1:24  error  Missing semicolon            semi

✖ 2 problems (2 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

<br>

#### Breakdown

File run from this users computer, in this directory, this command:  
```
- ssr@SSRs-Laptop 05_eslint % npx eslint hello.js
```

Path and name of file that the command ran on:  
```
- /Users/ssr/Documents/REPOS/ls-js101/02_small_programs/05_eslint/hello.js
```

Shows error that ESlint found in the code:
'helloWorld' undefined variable on line 1:column 13,
Missing semicolon on line 1:column 24
Name of rules that apply to error: no-undef, semi 
``` 
- 1:13  error  'helloWorld' is not defined  no-undef
- 1:24  error  Missing semicolon            semi
```

Stats about ESlint findings. 2 separate problems, both errors (not warnings). Suggestion to fix with: 'npx eslint --fix hello.js'  
```
- ✖ 2 problems (2 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```