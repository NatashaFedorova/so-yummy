export const getCatFood = (arr1, arr2) => {
  let categories = null;
  if (arr1 && arr1?.length > 0) {
    categories = arr1;
    return categories;
  } else categories = arr2;
  return categories;
};
