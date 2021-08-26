# :bookmark: dtag

Distribution tag lookup utility

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![TypeScript](https://badgen.net/badge/-/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Overview

[Getting Started](#getting-started)  
[Usage](#usage)  
[Contributing](CONTRIBUTING.md)

## Getting Started

`dtag` is a [distribution tag][1] utility for Node.js and CLI environments.

Assuming a distribution (dist) tag is included in `package.json#version` (e.g
`3.13.98-dev.640` where `dev` is the intended dist tag), `dtag` allows
maintainers to lookup and interpolate dist tags.

## Usage

This project is organized as a monorepo. For detailed usage instructions, see
one of the project workspaces below:

- [@flex-development/dtag](packages/dtag/README.md#usage)

[1]: https://docs.npmjs.com/cli/v7/commands/npm-dist-tag
