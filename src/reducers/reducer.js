
export default function info(state={},action) {
  switch (action.type) {
    case 'ADD_UESRINFO':
      return action.info
    default:
      return state
  }
}
