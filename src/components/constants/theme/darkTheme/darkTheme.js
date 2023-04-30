// ${props => props.theme.colors.text} - example
// назви кольорів, які закоментовані, варіант для hover
//  не заявлений в макеті

// кольори з світлої теми!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const darkTheme = Object.freeze({
  colors: {
    // global
    background: '#1e1f28',
    text: '#fafafa',
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
      main: '#fafafa',
      accent: '#8baa36',
    },

    btnUp: {
      colorLeaf: '#f7ba00',
      text: '#fafafa',
    },

    // CardRecipe - small
    cardRecipe: {
      bgbtn: '#2a2c36',
      textBtn: '#fafafa',
      // textBtnHover: '#8baa36',
    },

    // userForm - RegisterPage/SigninPage/SubcribeFormFooter
    userForm: {
      textForm: '#fafafa',
      placeholder: '#fafafa',
      icon: '#fafafa',
      iconHover: '#1E1F28',
      input: 'rgba(250, 250, 250, .1)',
      inputHover: '#1E1F28',
      textButton: '#fafafa',
      textBtnHover: '#8BAA36',
      bgBtn: '#1E1F28',
    },

    // Modal
    modal: {
      text: '#fafafa',
      textForm: '#fafafa',
      iconPersonForm: '#fafafa',
      iconPen: 'rgba(250, 250, 250, .8)',
      iconClose: '#fafafa',
      iconPersonPhotoUser: '#8baa36',
      iconPersonPhotoUserHover: '#fafafa',
      bgUnderPhotoUser: '#d9d9d9',
      // iconHover: '#8baa36',
      border: '#fafafa',
      borderHover: '#8BAA36',
      bg: '#2a2c36',
      bgBtn: '#8baa36',
      textBtn: '#fafafa',
      iconBtn: '#fafafa',
      bgBtnHover: '#22252a',
      textBtnCancel: '#23262a',
      textBtnCancelHover: '#fafafa',
      bgBtnCancel: '#D9D9D9',
      borderBtnCancel: '#23262a',
      bgInputHover: '#8baa36',
    },

    // pagination
    pagination: {
      text: 'rgba(250, 250, 250, .6)',
      bg: '##2a2c36',
      icon: 'rgba(250, 250, 250, .6)',
      textActiveBtn: '#fafafa',
      bgActiveBtn: '#8baa36',
    },

    // header
    header: {
      textMain: '#fafafa',
      textSecondary: '#22252a',
      iconMenu: '#fafafa',
      iconSearch: '#fafafa',
      bgAccent: '#ebf3d4',
      accent: '#8baa36',
      // iconMenuHover: '#8baa36',
      // iconSearchHover: '#8baa36',
      mainPageTextColor: '#1E1F28',
      mainPageIconColor: '#fafafa',
    },

    // BurgerMenu
    burgerMenu: {
      colorAccent: '#8baa36',
      bg: '#1e1f28',
      text: '#fafafa',
      iconIconClose: '#fafafa',
      iconCloseHover: '#8baa36',
    },

    // footer
    footer: {
      text: '#fafafa',
      textSecondary: '#22252A',
      border: '#fafafa',
      textSubcribeBtn: '#fafafa',
      textSubcribeBtnHover: '#8baa36',
      bgSubcribeBtn: '#1e1f28',
      bgSection: '#8baa36',
      socIcon: '#fafafa',
      socIconHover: '#1e1f28',
      commerText: '#fafafa',
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
      textMain: '#fafafa',
      textSecondary: '#fafafa',
      textAccent: '#8baa36',
      generalTitleAccent: '#8baa36',
      generalTitleMain: '#fafafa',
      bgInput: '#2a2c36',
      placeholderInputSearch: 'rgba(250, 250, 250, .5)',
      borderInputSearch: 'rgba(250, 250, 250, 0.5)',
      borderInputSearchHover: 'rgba(250, 250, 250, 0.5)',
      textInputSearchForm: '#fafafa',
      textBtnSearch: '#fafafa',
      bgBtnSearch: '#8baa36',
      bgBtnSearchHover: '#22252a',
      titleLinkCategory: '#fafafa',
      titleLinkCategoryHover: '#8baa36',
      textBtnSeeAll: '#fafafa',
      bgBtnSeeAll: '#8baa36',
      bgBtnSeeAllBorder: 'transparent',
      borderBtnSeeAllHover: '#8baa36',
      textBtnSeeAllHover: '#22252a',
      bgBtnSeeAllHover: '#fafafa',
      textBtnOtherCategories: '#fafafa',
      bgBtnOtherCategories: 'transparent',
      bordertnOtherCategories: '#8baa36',
      textOtherCategoriesHover: '#fafafa',
      bgOtherCategoriesHover: '#8baa36',
      bgPlateTextWrapper: '#2a2c36',
    },

    // CategoriesPage
    categoriesPage: {
      title: '#fafafa',
      linkNameCategory: 'rgba(250, 250, 250, .6)',
      linkNameCategoryHover: '#8baa36',
      lineActive: '#8baa36',
      line: 'rgba(250, 250, 250, .2)',
      overlay: '#3e4462',
      overlayHover: 'rgb(139, 170, 54, 0.3)',
      overlayHoverAfter: 'rgb(0, 0, 0, 0.5)',
      gradient: '#a8c163',
    },

   // AddRecipePage
    addRecipePage: {
      title: '#fafafa',
      titleSecondary: '#fafafa',
      text: 'rgba(250, 250, 250, .6)',
      bdUnderImage: '#8baa36',
      iconDefaultImage: '#fafafa',
      borderForm: '#d9d9d9',
      textForm: '#fafafa',
      labelForm: '#fafafa',
      textNumberForm: '#fafafa',
      iconForm: '#8baa36',
      iconFormHover: '#fafafa',
      iconClose: '#fafafa',
      // iconCloseHover: '#8baa36',
      bgInputTextArea: 'transparent',
      textareaBorder: 'rgba(250, 250, 250, 0.2)',
      optionMenuBg: '#8BAA36',
      textBtnAdd: '#fafafa',
      bgBtnAdd: '#8baa36',
      bgBtnAddHover: 'transparent',
      //   accentForm: '#8baa36',
      placeholderForm: 'rgba(250, 250, 250, .6)',
      socIcon: '#fafafa',
      socIconHover: '#8baa36',
      line: 'rgba(250, 250, 250, 0.3)',
      lineSecondary: '#707070',
      scrollBarBgColor: '#1E1F28',
      bgModal: '#2a2c36',
    },


    // FavoritePage
    favoritePage: {
      title: '#fafafa',
      titleSecondary: '#fafafa',
      text: 'rgba(250, 250, 250, .6)',
      itemBgC: '#2a2c36',
      btnDeleteBgC: '#1e1f28',
      btnDeleteBgCHover: '#8baa36',
      iconBtnDeleteC: '#fafafa',
      iconBtnDeleteCHover: '#fafafa',
      btnDetailsC: '#fafafa',
      btnDetailsBgC: '#8baa36',
      btnDetailsBgCHover: '#22252a',
    },

    // RecipePage
    recipePage: {
      title: '#8baa36',
      text: '#23262a',
      titleSecondry: '#fafafa',
      textSecondary: '#fafafa',
      textThird: '#fafafa',
      iconClock: '#23262a',
      bgCheckBox: 'transparent',
      iconCheckBox: '#8baa36',
      borderCheckBox: 'rgba(250, 250, 250, .5)',
      // borderCheckBoxHover: '#8baa36',
      bdAccent: '#8baa36',
      bgCardIngredient: '#2a2c36;',
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
      title: '#fafafa',
      titleSecondary: '#fafafa',
      text: 'rgba(250, 250, 250, .6)',
      itemBgC: '#2a2c36',
      btnDetailsC: '#fafafa',
      btnDeleteBgC: '#1e1f28',
      btnDeleteBgCHover: '#8baa36',
      iconBtnDeleteC: '#fafafa',
      iconBtnDeleteCHover: '#8baa36',
      btnDetailsBgC: '#8baa36',
      btnDetailsCHover: '#22252a',
    },

    // SearchPage
    searchPage: {
      title: '#fafafa',
      text: '#fafafa',
      textInput: '#fafafa',
      textSelect: 'rgba(250, 250, 250, 0.5)',
      placeholder: 'rgba(250, 250, 250, 0.5)',
      icon: '#8baa36',
      bgInput: 'transparent',
      borderInput: 'rgba(250, 250, 250, 0.5)',
      borderInputHover: 'rgba(250, 250, 250, 0.5)',
      bgBtnSearch: '#8baa36',
      textBtnSearch: '#fafafa',
      bgOptionsBtn: '#1E1F28',
      bgDropdown: '#8BAA36',
      optionBgColor: 'rgba(250, 250, 250, 0.5)',
    },

    // ShoppingListPage
    shoppingListPage: {
      title: '#fafafa',
      titleSecondary: '#fafafa',
      textSecondary: '#fafafa',
      bgAccent: '#8baa36',
      icon: '#fafafa',
      iconHover: '#8baa36',

      line: 'rgba(250, 250, 250, .3)',
    },

    // errorPageNotFound - 404
    errorPageNotFound: {
      text: '#fafafa',
      textSecondary: 'rgba(250, 250, 250, .5)',
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

export default darkTheme;
