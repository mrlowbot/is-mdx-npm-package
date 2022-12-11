# package - is-mdx-npm-package

## Intro

This is a simple package that tests whether a file is .mdx or not.
It returns true if it is and it returns false otherwise. Also returns false if the files does not exist.

## Installation

	$ npm i is-mdx

## Usage

	import { isMdx } from 'is-mdx';

    
	  const filePath = 'path/to/your/file.mdx';
    if (isMdx(filePath)) {
    console.log('The file is an .mdx file');
    } else {
    console.log('The file is not an .mdx file');
    }
