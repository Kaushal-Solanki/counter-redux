
const initialState = {
  count: 3
}

const reducer = (state = initialState, action) => {
  console.log('reducer runing', action)
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { count: state.count + 1 })
    default:
      return state
  }

}


export default reducer