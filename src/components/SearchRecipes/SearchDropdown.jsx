// import { SearchOptions, Options, SearchOption } from './SearchRecipes.styled';
// import { useEffect, useState } from 'react';
// import { AiOutlineDown } from 'react-icons/ai';
// import { useLocation } from 'react-router-dom';

// const Dropdown = () => {
//   const location = useLocation();
//   const [option, setOption] = useState('Title');
//   const [open, setOpen] = useState(false);
//   const typeSearch = location.state.type;

//   const [selected, setSelected] = useState(true);

//   useEffect(() => {
//     setOption(location.state.type);
//   }, [location]);

//   return (
//     <select>
//       <option value="title" selected={selected}>
//         Title
//       </option>
//       <option value="indredients" selected={selected}>
//         Indredients
//       </option>
//     </select>
//     // <>
//     //   <Options
//     //     onClick={() => {
//     //       setOpen(!open);
//     //     }}
//     //   >
//     //     {open === true && (
//     //       <SearchOptions open={open}>
//     //         <SearchOption
//     //           onClick={() => {
//     //             setOption('Title');
//     //           }}
//     //         >
//     //           Title
//     //         </SearchOption>
//     //         <SearchOption
//     //           onClick={() => {
//     //             setOption('Indredients');
//     //           }}
//     //         ></SearchOption>
//     //       </SearchOptions>
//     //     )}
//     //     {typeSearch || option}
//     //     <AiOutlineDown fill={'#8baa36'} />
//     //   </Options>
//     // </>
//   );
// };

// export default Dropdown;
