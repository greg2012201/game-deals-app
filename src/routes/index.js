export const pathsList = {
  library: '/library',
  deals: '/deals',
  genres: '/genres',
  games: '/games',
  wishList: '/wish-list',
}
export const menuPaths = [
  { name: 'Home', path: pathsList.library },
  { name: 'Deals', path: pathsList.deals },
  { name: 'WishList', path: `${pathsList.deals}${pathsList.wishList}` },
]
