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
      <HeroImageDish>
        <source
          type="image/webp"
          srcSet="./images/mainPage/heroImage-webp.webp 1400w,
          ./images/mainPage/heroImage2xWebp.webp 2800w
          "
        />
        <source
          type="image/png"
          srcSet="./images/mainPage/heroImage.png 1400w
        ./images/mainPage/heroImage2x.png 2800w"
        />
        <img src="./images/mainPage/heroImage.png" alt="food plate" />
      </HeroImageDish>
      <HeroImageArrow>
        <source
          type="image/webp"
          srcSet="./images/mainPage/heroArrowWepb.webp"
        />
        <source type="image/png" srcSet="./images/mainPage/heroArrow.png" />
        <img src="./images/mainPage/heroArrow.png" alt="green arrow" />
      </HeroImageArrow>

      <HeroImageTextWrapper>
        <HeroImageText>
          <HeroImageSpan>Delicious and healthy</HeroImageSpan> way to enjoy a
          variety of fresh ingredients in one satisfying meal
        </HeroImageText>
        <HeroImageLink to="/categories/breakfast">
          See recipes <HeroImageIcon />
        </HeroImageLink>
      </HeroImageTextWrapper>
    </HeroImageWrapper>
  );
};

export default HeroImage;
