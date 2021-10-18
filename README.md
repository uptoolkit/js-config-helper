# Js Config Helper

[![Latest Version on NPM](https://img.shields.io/npm/v/js-config-helper.svg?style=flat-square)](https://npmjs.com/package/js-form-helper)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

Really simple and lightweight Config helper compatible with dotnotation inspired by Laravel.

## Install

You can install the package via yarn (or npm):

```bash
yarn add js-config-helper

// or

npm install js-config-helper
```

## Usage

```js
import Config from 'js-form-helper';

// Instantiate a form class with some values
const config = new Config({
    field1: 'value 1',
    field2: 'value 2',
    person: {
        first_name: 'John',
        last_name: 'Doe',
    },
});

config('field1') // return 'value1'

config.set('field2', 'bar')
config.get('field2') // return bar instead of value2

config.get('person.first_name') // return John

config.has('person.first_name') // return true

config.all() // return all options

```

## Security

If you discover any security related issues, please contact [Daniel Sum](https://github.com/danielsum) instead of using the issue tracker.

## Credits

- [Daniel Sum](https://github.com/uptoolkit)

This package is a part of the [UpToolkit](https://uptoolkit.com)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Treeware

This package is a [https://treeware.org](Treeware).

If you use it in production, then we kindly propose that you buy the world a tree to thank us for our work.

By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.
