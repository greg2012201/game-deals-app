export const selectDataOptions = [{ name: 'Price', options: ['asc', 'desc'] }]
const transformedOptions = selectDataOptions.reduce((obj, { name, options }) => Object.assign(obj, { [name.toLowerCase()]: options[0] }), {})

export const initialSelectsState = {
  region: 'eu1',
  country: 'AL',
  ...transformedOptions,
}
