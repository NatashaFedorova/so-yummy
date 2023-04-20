import DefaultBtn from 'components/constants/DefaultBtn';
import { useState } from 'react';
import { StyledHiOutlineMail, SubcribeFormDiv } from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  return (
    <SubcribeFormDiv>
      <h3>Subscribe to our Newsletter</h3>
      <p>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <label>
        <StyledHiOutlineMail />
        <input
          placeholder="Enter your email adress"
          onChange={event => setSubscribeEmail(event.target.value)}
        />
      </label>
      <DefaultBtn disabled={subscribeEmail ? false : true}>
        Subscribe
      </DefaultBtn>
    </SubcribeFormDiv>
  );
};
