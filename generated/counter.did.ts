import { IDL } from '@dfinity/candid';

export default () => {

  return IDL.Service({ 'incr' : IDL.Func([], [IDL.Nat], []) });
};
export const init = () => { return []; };

export interface _SERVICE {
  'incr' : () => Promise<bigint>,
}