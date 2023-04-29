const { useSelector } = require("react-redux");
const { MainTitleWrap, MainTitleWrapDark, MainTitleH1 } = require("./MainTitle.styled");
const { default: selectStatusTheme } = require("redux/theme/selectors");

const MainTitle = ({title, paddingBottom}) => {
  console.log(paddingBottom)
  const isThemeDark = useSelector(selectStatusTheme);

  return (
    <>
      {!paddingBottom && !isThemeDark && <MainTitleWrap><MainTitleH1>{title}</MainTitleH1></MainTitleWrap>}
      {paddingBottom && !isThemeDark && <MainTitleWrap style={{paddingBottom: `${paddingBottom}px`}}><MainTitleH1>{title}</MainTitleH1></MainTitleWrap>}

      {!paddingBottom && isThemeDark && <MainTitleWrapDark><MainTitleH1>{title}</MainTitleH1></MainTitleWrapDark>}
      {paddingBottom && isThemeDark && <MainTitleWrapDark style={{paddingBottom: `${paddingBottom}px`}}><MainTitleH1>{title}</MainTitleH1></MainTitleWrapDark>}
    </>
  )
}

export default MainTitle;
