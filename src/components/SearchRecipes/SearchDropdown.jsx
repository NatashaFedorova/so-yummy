import { SearchOptions, Options, SearchOption } from './SearchRecipes.styled';
import { useState } from 'react';
import { AiOutlineDown } from "react-icons/ai";
const Dropdown = () => {
  const [option, setOption] = useState('Title');
  const [open, setOpen] = useState(false);
  return (
    <>
      <Options
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open === true && (
        <SearchOptions open={open}>
          <SearchOption onClick={() => {setOption('Title')}}>Title</SearchOption>
          <SearchOption onClick={() => {setOption('Indredients')}}>Indredients</SearchOption>
        </SearchOptions>
      )}
        {option}
        <AiOutlineDown fill={"#8baa36"}/>
      </Options>
    </>
  );
};

export default Dropdown;
