import * as rle from './rle'
import { Cursor, Options } from './types'

export const decodeValues = function(type: string, cursor: Cursor, count: number, opts: Options) {
  opts.bitWidth = cursor.buffer.slice(cursor.offset, cursor.offset+1).readInt8(0);
  cursor.offset += 1;
  return rle.decodeValues(type, cursor, count, Object.assign({}, opts, {disableEnvelope: true}));
};
