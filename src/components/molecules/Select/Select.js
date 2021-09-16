import React from 'react';
import { useSelect } from 'downshift';
import { Wrapper, ToggleButton, SelectList, SelectListItem } from './Select.style';
import { Triangle } from 'components/Triangle/Triangle';
const Select = React.forwardRef(({ options, title, onChange }, ref) => {
  const handleSelectedItemChange = ({ selectedItem }) => {
    onChange(selectedItem);
  };
  const {
    selectedItem,
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: options,
    onSelectedItemChange: handleSelectedItemChange,
  });

  return (
    <Wrapper ref={ref}>
      <ToggleButton isOpen={isOpen} type="button" {...getToggleButtonProps()}>
        {(selectedItem && `${title}: ${selectedItem}`) || `${title} : ${options[0]}`}
        <Triangle toggle={isOpen} size="s" />
      </ToggleButton>
      <SelectList isVisible={isOpen} {...getMenuProps()}>
        {isOpen &&
          options.map((item, index) => (
            <SelectListItem
              value={item}
              isHighlited={highlightedIndex === index}
              key={item}
              {...getItemProps({ item, index })}
            >
              {item}
            </SelectListItem>
          ))}
      </SelectList>
    </Wrapper>
  );
});
export default Select;
