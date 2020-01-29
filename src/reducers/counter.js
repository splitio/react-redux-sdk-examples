/**
 * The following reducer is based on the Counter Vanilla example provided in Redux documentation
 * 
 * @see{@link https://redux.js.org/introduction/examples#counter-vanilla}
 */
 
export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
