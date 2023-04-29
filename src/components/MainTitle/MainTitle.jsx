const { useSelector } = require("react-redux");
const { MainTitleWrap, MainTitleWrapDark, MainTitleH1, AnimatedLetter } = require("./MainTitle.styled");
const { default: selectStatusTheme } = require("redux/theme/selectors");

const MainTitle = ({title, paddingBottom}) => {
  const isThemeDark = useSelector(selectStatusTheme);
  const categoryText = `${title}`;

  return (
    <>
      {!paddingBottom && !isThemeDark && <MainTitleWrap>
        <MainTitleH1>
          {categoryText.split('').map((letter, index) => (
            <AnimatedLetter key={index} index={index}>
              {letter}
            </AnimatedLetter>
          ))}
        </MainTitleH1>
      </MainTitleWrap>}

      {paddingBottom && !isThemeDark && <MainTitleWrap style={{paddingBottom: `${paddingBottom}px`}}>
        <MainTitleH1>
          {categoryText.split('').map((letter, index) => (
            <AnimatedLetter key={index} index={index}>
              {letter}
            </AnimatedLetter>
          ))}
        </MainTitleH1>
      </MainTitleWrap>}

      {!paddingBottom && isThemeDark && <MainTitleWrapDark>
        <MainTitleH1>
          {categoryText.split('').map((letter, index) => (
            <AnimatedLetter key={index} index={index}>
              {letter}
            </AnimatedLetter>
          ))}
        </MainTitleH1>
      </MainTitleWrapDark>}

      {paddingBottom && isThemeDark && <MainTitleWrapDark style={{paddingBottom: `${paddingBottom}px`}}>
        <MainTitleH1>
          {categoryText.split('').map((letter, index) => (
            <AnimatedLetter key={index} index={index}>
              {letter}
            </AnimatedLetter>
          ))}
        </MainTitleH1>
      </MainTitleWrapDark>}
    </>
  )
}

export default MainTitle;

// const categoryText = 'Categories';

//  <CategoryText> 
// {categoryText.split('').map((letter, index) => (
  // <AnimatedLetter key={index} index={index}>
    // {letter}
  // </AnimatedLetter>
// ))}
// </CategoryText>

  // {/* {!paddingBottom && !isThemeDark && <MainTitleWrap><MainTitleH1>{title}</MainTitleH1></MainTitleWrap>} */}
  // {paddingBottom && !isThemeDark && <MainTitleWrap style={{paddingBottom: `${paddingBottom}px`}}><MainTitleH1>{title}</MainTitleH1></MainTitleWrap>}

  // {!paddingBottom && isThemeDark && <MainTitleWrapDark><MainTitleH1>{title}</MainTitleH1></MainTitleWrapDark>}
  // {paddingBottom && isThemeDark && <MainTitleWrapDark style={{paddingBottom: `${paddingBottom}px`}}><MainTitleH1>{title}</MainTitleH1></MainTitleWrapDark>}
