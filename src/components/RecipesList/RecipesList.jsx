import { RecipeCard, RecipeImg, RecipeTitle, List } from "./RecipesList.styled";

const RecipesList = ({recipes}) => {
  if (recipes === null) {
    return;
  }
  console.log(recipes);
  return (
    <List>
      {recipes.map(({ thumb, title, id}) => (
        <RecipeCard key={id}>
          <RecipeImg src={thumb} alt={title} />
          <RecipeTitle>{title}</RecipeTitle>
        </RecipeCard>
      ))}
    </List>
  );
};

export default RecipesList;
