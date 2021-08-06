import React from 'react'
import { useSelect } from 'downshift'
import { ReactComponent as Icon } from 'assets/icons/triangle-icon.svg'
import { Wrapper, ToggleButton, SelectList, SelectListItem } from './Select.style'
const Select = ({ options, title }) => {
  const handleSelectedItemChange = () => {}
  const { selectedItem, isOpen, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items: options,
    onSelectedItemChange: handleSelectedItemChange,
  })

  return (
    <Wrapper>
      <ToggleButton isOpen={isOpen} type="button" {...getToggleButtonProps()}>
        {(selectedItem && `${title}: ${selectedItem}`) || `${title} : ${options[0]}`}
        <Icon />
      </ToggleButton>
      <SelectList isVisible={isOpen} {...getMenuProps()}>
        {isOpen &&
          options.map((item, index) => (
            <SelectListItem isHighlited={highlightedIndex === index} key={`${item}${index}`} {...getItemProps({ item, index })}>
              {item}
            </SelectListItem>
          ))}
      </SelectList>
    </Wrapper>
  )
}

export default Select
