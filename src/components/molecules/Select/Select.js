import React from 'react'
import { useSelect } from 'downshift'
const Select = ({ options, title }) => {
  const handleSelectedItemChange = () => {}
  const { selectedItem, isOpen, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items: options,
    onSelectedItemChange: handleSelectedItemChange,
  })

  return (
    <>
      <button type="button" {...getToggleButtonProps()}>
        {selectedItem || `${title}`}
      </button>
      <ul {...getMenuProps()}>
        {isOpen &&
          options.map((item, index) => (
            <li isHighlited={highlightedIndex === index} key={`${item}${index}`} {...getItemProps({ item, index })}>
              {item}
            </li>
          ))}
      </ul>
    </>
  )
}

export default Select
