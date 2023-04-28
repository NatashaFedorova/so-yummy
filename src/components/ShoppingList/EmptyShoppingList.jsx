import {
  EmptyShoppingListImage,
  EmptyShoppingListParagraph,
} from './EmptyShoppingList.styled';
const EmptyShoppingList = ({ text, imageSource }) => {
  return (
    <div>
      <EmptyShoppingListImage
        width={'200px'}
        height={'200px'}
        src={imageSource}
        alt={text}
      />
      <EmptyShoppingListParagraph>{text}</EmptyShoppingListParagraph>
    </div>
  );
};
export default EmptyShoppingList;
