export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {

    case 'ADD_BAND':
    console.warn('ADD_BAND called in manageBand reducer...')
      return {
        // bands: state.bands.concat(action.payload.name) //this makes bands an array of strings...
        bands: state.bands.concat({name: action.payload.name}) //this makes bands an array of objects...
      };

    default:
      return state;
  }
}
