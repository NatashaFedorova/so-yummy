import DefaultBtn from 'components/constants/DefaultBtn';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribe } from 'redux/user/userOperation';
import { selectCurrentUser } from 'redux/user/userSelectors';
import { StyledHiOutlineMail, SubcribeFormDiv } from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const { email, subscription } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const onSubscribe = () => {
    dispatch(subscribe());
  };

  return (
    <SubcribeFormDiv>
      <h3>Subscribe to our Newsletter</h3>
      <p>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <label>
        <div className="label_box">
          <StyledHiOutlineMail />
          <input
            placeholder="Enter your email adress"
            onChange={event => setSubscribeEmail(event.target.value)}
          />
        </div>
      </label>
      <DefaultBtn
        disabled={!(subscribeEmail === email) || subscription}
        onClick={onSubscribe}
      >
        {subscription ? `You already subscribe` : `Subscribe`}
      </DefaultBtn>
    </SubcribeFormDiv>
  );
};
