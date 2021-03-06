/// <reference path="../declarations.d.ts" />
import minimost from 'minimost'
import Cac, { ICacOptions } from './Cac'
import { Opts } from 'minimist'

function cac(opts?: ICacOptions) {
  return new Cac(opts)
}

namespace cac {
  export function parse(args: string[], opts: Opts) {
    return minimost(args, opts)
  }
}

export default cac
export { Cac }

// For CommonJS default export support
module.exports = cac
module.exports.default = cac
module.exports.Cac = Cac
