import DefaultBtn from 'components/constants/DefaultBtn';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from 'redux/auth/authSelectors';
import { subscribe } from 'redux/subcribe/subscribeOperations';
import { selectSubscribeUser } from 'redux/subcribe/subscribeSelectors';
import { StyledHiOutlineMail, SubcribeFormDiv } from './SubscribeForm.styled';

export const SubscribeForm = () => {
  // const { email } = useSelector(selectUser);
  const subscribeUser = useSelector(selectSubscribeUser);
  const dispatch = useDispatch();
  const email = 'maxim@outlook.com';
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const onSubscribe = () => {
    console.log('Hello');
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
        disabled={
          !(subscribeEmail === email) || subscribeUser.subscribe.subscription
        }
        onClick={onSubscribe}
      >
        Subscribe
      </DefaultBtn>
    </SubcribeFormDiv>
  );
};
