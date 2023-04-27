import { useEffect, useRef, useState } from 'react';
import { DropdownItem, Dropdown } from './RecipeIngredientsFields.styled';

const DropDown = ({
  id,
  isOpen,
  ingredients,
  quantityClickHandler,
  closeDropdown,
}) => {
  const [isFirst, setIsFirst] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      return;
    }

    const onSomewhereClickHandler = event => {
      if (event.target !== dropdownRef.current) {
        closeDropdown();
      }
    };

    document.addEventListener('click', onSomewhereClickHandler);

    return () => document.removeEventListener('click', onSomewhereClickHandler);
  }, [closeDropdown, isFirst]);

  useEffect(() => {
    const onEscHandler = event => {
      if (event.code === 'Escape') {
        closeDropdown();
      }
    };

    window.addEventListener('keydown', onEscHandler);
    return () => window.removeEventListener('keydown', onEscHandler);
  }, [closeDropdown]);

  return (
    <Dropdown data-name={id} id={id} isOpen={isOpen} ref={dropdownRef}>
      {ingredients.map(item => (
        <DropdownItem onClick={quantityClickHandler} key={item.id} id={item.id}>
          {item.value}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

export default DropDown;
