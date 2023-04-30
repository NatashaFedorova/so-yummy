// ${props => props.theme.colors.text} - example
// назви кольорів, які закоментовані, варіант для hover
//  не заявлений в макеті

const lightTheme = Object.freeze({
  colors: {
    // global
    background: '#fafafa',
    text: '#23262a',
    successState: '#3cbc81',
    warningState: '#f6c23e',
    errorState: '#e74a3b',
    textDefaultBtn: '#fafafa',

    achivement: {
      accent: '#8baa36',
      colorIconBtnClose: '#fafafa',
      text: '#fafafa',
    },

    // decoreElements
    decoreElements: {
      main: '#22252a',
      accent: '#8baa36',
    },

    btnUp: {
      colorLeaf: '#8baa36',
      text: '#fafafa',
    },

    // CardRecipe - small
    cardRecipe: {
      bgbtn: '#ffffff',
      textBtn: '#3e4462',
      // textBtnHover: '#8baa36',
    },

    // userForm - RegisterPage/SigninPage/SubcribeFormFooter
    userForm: {
      textForm: '#fafafa',
      placeholder: '#fafafa',
      icon: '#8baa36',
      iconHover: '#fafafa',
      input: '#fafafa',
      inputHover: '#8BAA36',
      textButton: '#fafafa',
      textBtnHover: '#22252a',
      bgBtn: '#8baa36',
    },

    // Modal
    modal: {
      text: '#23262a',
      textForm: 'rgba(35, 38, 42, .8)',
      iconPersonForm: 'rgba(35, 38, 42, .8)',
      iconPen: '#23262a',
      iconClose: '#333333',
      iconPersonPhotoUser: '#8baa36',
      iconPersonPhotoUserHover: '#23262A',
      bgUnderPhotoUser: '#d9d9d9',
      bgInputHover: '#fafafa',
      border: '#23262a',
      // borderHover: '#23262a',
      bg: '#fafafa',
      bgBtn: '#8baa36',
      textBtn: '#fafafa',
      iconBtn: '#fafafa',
      bgBtnHover: '#22252a',
      textBtnCancel: '#23262a',
      textBtnCancelHover: '#fafafa',
      bgBtnCancel: '#D9D9D9',
      borderBtnCancel: '#23262A',
    },

    // pagination
    pagination: {
      text: '#656565',
      bg: '#fafafa',
      icon: 'rgba(169, 169, 169, .73)',
      textActiveBtn: '#22252a',
      bgActiveBtn: '#ebf3d4',
    },

    // header
    header: {
      textMain: '#23262a',
      textSecondary: '#22252a',
      iconMenu: '#22252a',
      iconSearch: '#22252a',
      bgAccent: '#ebf3d4',
      accent: '#8baa36',
      mainPageTextColor: '#1E1F28',
      mainPageIconColor: '#1E1F28',
      // iconMenuHover: '#8baa36',
      // iconSearchHover: '#8baa36',
    },

    // BurgerMenu
    burgerMenu: {
      colorAccent: '#8baa36',
      bg: '#ebf3d4',
      text: '#22252a',
      iconIconClose: '#22252a',
      iconCloseHover: '#8baa36',
    },

    // footer
    footer: {
      text: '#fafafa',
      textSecondary: '#8baa36',
      border: '#fafafa',
      textSubcribeBtn: '#fafafa',
      textSubcribeBtnHover: '#22252a',
      bgSubcribeBtn: '#8baa36',
      bgSection: '#22252a',
      socIcon: '#8baa36',
      socIconHover: '#ffffff',
      commerText: '#22252a',
    },

    // WelcomePage
    welcomePage: {
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
      bgLight: '#fafafa',
      bgDark: '#1e1f28',
      bgform: '#2a2c36',
    },

    // MainPage
    mainPage: {
      bgAccent: '#ebf3d4',
      textMain: '#23262a',
      textSecondary: '#3e4462',
      textAccent: '#8baa36',
      generalTitleAccent: '#8baa36',
      generalTitleMain: '#22252a',
      bgInput: '#ffffff',
      placeholderInputSearch: '#bdbdbd',
      borderInputSearch: '#f0f0f0',
      borderInputSearchHover: 'rgba(35, 38, 42, .2)',
      textInputSearchForm: '#23262a',
      textBtnSearch: '#fafafa',
      bgBtnSearch: '#22252a',
      bgBtnSearchHover: '#8baa36',
      bgPlateTextWrapper: '#ffffff',
      titleLinkCategory: '#001833',
      titleLinkCategoryHover: '#8baa36',
      textBtnSeeAll: '#fafafa',
      bgBtnSeeAll: '#8baa36',
      bgBtnSeeAllBorder: 'transparent',
      borderBtnSeeAllHover: '#8baa36',
      textBtnSeeAllHover: '#22252a',
      bgBtnSeeAllHover: '#fafafa',
      textBtnOtherCategories: '#22252a',
      bgBtnOtherCategories: 'transparent',
      bordertnOtherCategories: '#8baa36',
      textOtherCategoriesHover: '#fafafa',
      bgOtherCategoriesHover: '#8baa36',
    },

    // CategoriesPage
    categoriesPage: {
      title: '#001833',
      linkNameCategory: '#BDBDBD',
      linkNameCategoryHover: '#8baa36',
      lineActive: '#8baa36',
      line: '#e0e0e0',
      overlay: '#3e4462',
      overlayHover: 'rgb(139, 170, 54, 0.3)',
      overlayHoverAfter: 'rgb(0, 0, 0, 0.5)',
      gradient: '#a8c163',
    },

   // AddRecipePage
    addRecipePage: {
      title: '#001833',
      titleSecondary: '#3e4462',
      text: '#7e7e7e',
      bdUnderImage: '#8baa36',
      iconDefaultImage: '#fafafa',
      borderForm: '#d9d9d9',
      textForm: '#23262a',
      labelForm: 'rgba(0, 0, 0, .5)',
      textNumberForm: '#333333',
      iconForm: 'rgba(51, 51, 51, .3)',
      iconFormHover: '#8baa36',
      iconClose: '#333333',
      // iconCloseHover: '#8baa36',
      bgInputTextArea: 'rgba(217, 217, 217, .17)',
      textareaBorder: 'transparent',
      optionMenuBg: '#FFFFFF',
      textBtnAdd: '#fafafa',
      bgBtnAdd: '#22252a',
      bgBtnAddHover: '#8baa36',
      //   accentForm: '#8baa36',
      placeholderForm: 'rgba(0, 0, 0, .5)',
      socIcon: '#8baa36',
      socIconHover: '#1e1f28',
      line: '#e0e0e0',
      lineSecondary: '#707070',
      scrollBarBgColor: '#E7E5E5',
      bgModal: '#fafafa',
    },

    // FavoritePage
    favoritePage: {
      title: '#001833',
      titleSecondary: '#3e4462',
      text: '#23262a',
      itemBgC: '#ffffff',
      btnDeleteBgC: '#ebf3d4',
      btnDeleteBgCHover: '#22252A',
      iconBtnDeleteC: '#22252a',
      iconBtnDeleteCHover: '#fafafa',
      btnDetailsC: '#fafafa',
      btnDetailsBgC: '#22252a',
      btnDetailsBgCHover: '#8baa36',
    },

    // RecipePage
    recipePage: {
      title: '#8baa36',
      text: '#23262a',
      titleSecondry: '#3e4462',
      textSecondary: '#fafafa',
      textThird: 'rgba(0, 0, 0, 0.8)',
      iconClock: '#23262a',
      bgCheckBox: 'transparent',
      iconCheckBox: '#8baa36',
      borderCheckBox: 'rgba(126, 126, 126, 0.5)',
      // borderCheckBoxHover: '#8baa36',
      bdAccent: '#8baa36',
      bgCardIngredient: '#ebf3d4',
      bgBtn: 'transparent',
      textBtn: '#23262a',
      borderBtn: '#8baa36',
      textBtnHover: '#fafafa',
      bgBtnHover: '#8baa36',
      textNumber: '#ffffff',
      bgNumber: '#8baa36',
    },

    // MyRecipesPage
    myRecipesPage: {
      title: '#001833',
      titleSecondary: '#3e4462',
      text: '#23262a',
      itemBgC: '#ffffff',
      btnDetailsC: '#fafafa',
      btnDeleteBgC: '#8baa36',
      btnDeleteBgCHover: '#22252a',
      iconBtnDeleteC: '#fafafa',
      iconBtnDeleteCHover: '#fafafa',
      btnDetailsBgC: '#8baa36',
      btnDetailsCHover: '#22252a',
    },

    // SearchPage
    searchPage: {
      title: '#001833',
      text: '#001833',
      textInput: '#3e4462',
      textSelect: 'rgba(0, 0, 0, .5)',
      placeholderInput: ' #bdbdbd',
      icon: '#8baa36',
      bgInput: '#ffffff',
      borderInput: '#f0f0f0',
      borderInputHover: 'rgba(35, 38, 42, .2)',
      bgBtnSearch: '#8baa36',
      textBtnSearch: '#fafafa',
      bgOptionsBtn: '#d9d9d9',
      buttonHover: '#22252a',
      bgDropdown: '#fafafa',
      optionBgColor: '#d9d9d9',
    },

    // ShoppingListPage
    shoppingListPage: {
      title: '#001833',
      titleSecondary: '#3e4462',
      textSecondary: '#fafafa',
      bgAccent: '#8baa36',
      icon: '#333333',
      iconHover: '#8baa36',
      line: '#e0e0e0',
    },

    // errorPageNotFound - 404
    errorPageNotFound: {
      text: '#000000',
      textSecondary: 'rgba(0, 0, 0, .5)',
    },
  },

  spacing: value => `${4 * value}px`,
  borders: {
    none: 'none',
    normal: '1px solid',
  },

  radii: {
    none: 'none',
    decore: '3px',
    normal: '4px',
    btnNormal: '6px',
    btnSpecial: '24px 44px',
    circle: '50%',
  },
  fontSizes: {
    xxs: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '24px',
    xxl: '28px',
    xxxl: '44px',
    sectionTitleTablet: '32px',
    generalTitle: '100px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
});

export default lightTheme;
