import {
  HeroImageWrapper,
  HeroImageDish,
  HeroImageArrow,
  HeroImageTextWrapper,
  HeroImageText,
  HeroImageSpan,
  HeroImageLink,
  HeroImageIcon,
} from './HeroImage.styled';

const HeroImage = () => {
  return (
    <HeroImageWrapper>
      <HeroImageDish src="./images/mainPage/heroImage.png" alt="food plate" />
      <HeroImageArrow src="./images/mainPage/heroArrow.png" alt="green arrow" />

      <HeroImageTextWrapper>
        <HeroImageText>
          <HeroImageSpan>Delicious and healthy</HeroImageSpan> way to enjoy a
          variety of fresh ingredients in one satisfying meal
        </HeroImageText>
        <HeroImageLink>
          See recipes <HeroImageIcon />
        </HeroImageLink>
      </HeroImageTextWrapper>
    </HeroImageWrapper>
  );
};

export default HeroImage;
