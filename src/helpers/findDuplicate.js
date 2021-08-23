export const findDuplicate = (item, items) => {
  return items.find(({ plain }) => plain === item.plain)
}
