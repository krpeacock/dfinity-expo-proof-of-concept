export default ({ IDL }) => {
  return IDL.Service({ 'incr' : IDL.Func([], [IDL.Nat], []) });
};
export const init = ({ IDL }) => { return []; };