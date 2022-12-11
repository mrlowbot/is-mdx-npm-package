# is-mdx-npm-package

#### Usage: 

This package is intended to be used to check whether a file is .mdx or not.

##### Example:

```
import isMdx from 'is-mdx';


const filePath = 'path/to/your/file.mdx';
if (isMdx(filePath)) {
  console.log('The file is an .mdx file');
} else {
  console.log('The file is not an .mdx file');
}

```
