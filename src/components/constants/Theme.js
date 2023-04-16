// ${props => props.theme.colors.text} - example

export const lightTheme = Object.freeze({
  colors: {
    // global
    background: '#fafafa',
    text: '#23262a',
    successState: '#3cbc81',
    warningState: '#f6c23e',
    errorState: '#e74a3b',

    // StartPage
    startPage: {
      title: '#fafafa',
      text: '#fafafa',
      textButton: '#fafafa',
      bgBtnRegistration: '#8baa36',
      borderBtnRegistration: '#8baa36',
      bgBtnSignIn: 'transparent',
      borderBtnSignIn: '#fafafa',
    },

    // RegisterPage/SigninPage
    registerAndSignIPages: {
      title: '#fafafa',
      btnLink: '#fafafa',
      //  btnLinkHover: '#8baa36',
      bgLight: '#8baa36',
      bgDark: '#1e1f28',
      bgform: '#2a2c36',
    },

    // RegisterPage/SigninPage/SubcribeForm
    userForm: {
      textForm: '#fafafa',
      placeholder: '#fafafa',
      icon: '#fafafa',
      inputHover: '#ffffff',
      textButton: '#fafafa',
      textBtnHover: '#22252a',
      bgBtn: '#8baa36',
    },

    // header
    header: {
      textMain: '#23262a',
      textSecondary: '#22252a',
      logo: '#8baa36',
      bdAccent: '#ebf3d4',
    },

    // footer
    footer: {
      text: '#fafafa',
      textSecondary: 'rgba(34, 37, 42, .5)',
      bgSection: '#22252a',
      bgIconLogo: '#ebf3d4',
      iconLogo: '#8baa36',
      socIcon: '#8baa36',
      socIconHover: '#ffffff',
    },

    // MainPage
    mainPage: {
      textMain: '#23262a',
      textSecondary: '#3e4462',
      textAccent: '#8baa36',
      bgBtnOnCardRecipe: '#ffffff',
      generalTitleAccent: '#8baa36',
      generalTitleMain: '#22252a',
      textBtnSearch: '#fafafa',
      bgBtnSearch: '#22252a',
      bgBtnSearchHover: '#8baa36',
      titleLinkCategory: '#001833',
      titleLinkCategoryHover: '#8baa36',
      textBtnSeeAll: '#fafafa',
      bgBtnSeeAll: '#8baa36',
      borderBtnSeeAll: '#8baa36',
      // textBtnSeeAllHover: '#8baa36',
      // bgBtnSeeAllHover: '#fafafa',
      textBtnOtherCategories: '#8baa36',
      bgBtnOtherCategories: '#fafafa',
      bordertnOtherCategories: '#8baa36',
      textOtherCategoriesHover: '#fafafa',
      bgOtherCategoriesHover: '#8baa36',
    },

    // CategoriesPage
    categoriesPage: {
      title: '#001833',
      text: '#3e4462',
      linkCategory: '#bdbdbd',
      linkCategoryHover: '#8baa36',
      bgBtnOnCardRecipe: '#ffffff',
    },

    // AddRecipePage
    addRecipePage: {
      title: '#001833',
      titleSecondary: '#3e4462',
      text: '#7e7e7e',
      bdUnderImage: '#8baa36',
      iconDefaultImage: '#fafafa',
      textForm: '#23262a',
      labelForm: '#23262a',
      textNumberForm: '#333333',
      iconForm: 'rgba(51, 51, 51, .3)',
      iconFormHover: '#8baa36',
      iconClose: '#333333',
      // iconCloseHover: '#8baa36',
      textBtnAdd: '#22252a',
      bgBtnAdd: '#22252a',
      bgBtnAddHover: '#8baa36',
      accentForm: '#8baa36',
      placeholderForm: 'rgba(0, 0, 0, .5)',
      socIcon: '#8baa36',
      socIconHover: '#ffffff',
      border: 'rgba(51, 51, 51, .3)',
    },

    // FavoritePage
    favoritePage: {
      title: '#001833',
      titleSecondary: '#3e4462',
      text: '#23262a',
      iconBtnRemove: '#22252a',
      bgBtnRemove: '#ebf3d4',
      textBtnAboutRecipe: '#fafafa',
      bgBtnAboutRecipe: '#22252a',
      bgBtnAboutRecipeHover: '#8baa36',
      bgCardRecipe: '#ffffff',
    },

    // RecipePage
    recipePage: {
      title: '#8baa36',
      titleSecondry: '#3e4462',
      textSecondary: '#fafafa',
      textThird: 'rgba(0, 0, 0, 0.8)',
      icon: '#23262a',
      bgCheckBox: 'transparent',
      iconCheckBox: '#8baa36',
      borderCheckBox: 'rgba(126, 126, 126, 0.5)',
      // borderCheckBoxHover: '#8baa36',
      bdAccent: '#8baa36',
      bgCardIngredient: '#ebf3d4',
      bgBtn: 'transparent',
      textBtn: '#23262a',
      borderBtn: '#8baa36',
      textHover: '#fafafa',
      bgBtnHover: '#8baa36',
    },

    // MyRecipesPage
    myRecipesPage: {
      title: '#001833',
      titleSecondary: '#3e4462',
      text: '#23262a',
      iconBtnRemove: '#fafafa',
      bgBtnRemove: '#8baa36',
      textBtnAboutRecipe: '#fafafa',
      bgBtnAboutRecipe: '#8baa36',
      bgBtnAboutRecipeHover: '#22252a',
      bgCardRecipe: '#ffffff',
    },

    // SearchPage
    searchPage: {
      title: '#001833',
      textInput: '#3e4462',
      textOptionSelect: 'rgba(0, 0, 0, .5)',
      icon: '#8baa36',
      bgInput: '#ffffff',
      borderInput: '#f0f0f0',
      borderInputHover: '#22252a',
      bgBtnSearch: '#8baa36',
      textBtnSearch: '#fafafa',
      bgBtnSearchHover: '#22252a',
      bgBtnOnCardRecipe: '#ffffff',
    },

    // ShoppingListPage
    shoppingListPage: {
      text: 'x',
    },

    // Modal
    modal: {
      text: 'x',
    },

    // BurgerMenu
    burgerMenu: {
      text: 'x',
    },

    // pagination
    pagination: {
      text: '#656565',
      bg: '#fafafa',
      icon: 'rgba(169, 169, 169, .73)',
      textHover: '#22252a',
      bgHover: '#ebf3d4',
    },
  },

  spacing: value => `${4 * value}px`,
  borders: {},
  radii: {},
  fontSizes: {},
  fontWeight: {},
});
