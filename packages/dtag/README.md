# :bookmark: dtag

Distribution tag utility for Node.js

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![TypeScript](https://badgen.net/badge/-/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Overview

[Getting Started](#getting-started)  
[Installation](#installation)  
[Usage](#usage)  
[Contributing](CONTRIBUTING.md)

## Getting Started

Assuming a [distribution (dist) tag][1] is included in `package.json#version`
(e.g `3.13.98-dev.640` where `dev` is the intended dist tag), `dtag` allows
maintainers to lookup and interpolate dist tags.

## Installation

```zsh
yarn add -D @flex-development/dtag # or npm i -D @flex-development/dtag
```

## Usage

### Lookups

#### Basic

```typescript
import dtag from '@flex-development/dtag'

/**
 * @file Examples - Lookup
 * @module dtag/docs/examples/lookup
 */

dtag({ version: '3.13.98-dev.640' }) // => 'dev'
```

#### Interpolation

```typescript
import dtag from '@flex-development/dtag'

/**
 * @file Examples - Interpolated Lookup
 * @module dtag/docs/examples/lookup-map
 */

dtag({ map: { rc: 'next' }, version: 'v3.0.0-rc' }) // => 'next'
```

#### Monorepos

```typescript
import dtag from '@flex-development/dtag'

/**
 * @file Examples - Lookup Monorepo
 * @module dtag/docs/examples/lookup-monorepo
 */

const tagPrefix: string = 'foo@'

dtag({ tagPrefix, version: 'foo@2.0.0-beta.1' }) // => 'beta'
dtag({
  map: { rc: 'next' },
  tagPrefix,
  version: 'foo-pkg@26.0.0-rc.13'
}) // => 'beta'
```

### Options

```typescript
/**
 * `dtag` options.
 */
export interface DistTagOptions {
  /**
   * Prerelease delimiter (e.g `-` before `alpha` in `foo-pkg@26.0.0-alpha.13`).
   *
   * @default '-'
   */
  delimiter?: string

  /**
   * Distribution (dist) tag map. If a dist tag is found in `version` and `map`
   * is a non-empty object, the tag returned will be plucked from `map`.
   *
   * @default {}
   */
  map?: Record<string, string>

  /**
   * Skip distribution tag lookup.
   */
  skip?: boolean

  /**
   * Git tag prefix.
   *
   * @default 'v'
   */
  tagPrefix?: string

  /**
   * Package version (with or without `tagPrefix`).
   *
   * @default null
   */
  version?: any
}
```

[1]: https://docs.npmjs.com/cli/v7/commands/npm-dist-tag
