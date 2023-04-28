import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyledHiOutlineMail,
  SubcribeFormDiv,
  SubscriptionButton,
  SubscriptionInfo,
  SubscriptionInput,
  SubscriptionLabel,
  SubscriptionTitle,
} from './SubscribeForm.styled';
import useAuth from 'hooks/useAuth';
import { subscribe } from 'redux/user/userOperation';

export const SubscribeForm = () => {
  const { user } = useAuth();
  const { email, subscription } = user;
  const dispatch = useDispatch();
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [wrongEmail, setWrongEmail] = useState(false);
  const [currentSubscription, setCurrentSubscription] = useState(subscription);

  const onSubscribe = () => {
    if (subscribeEmail === email) {
      setWrongEmail(false);
      setCurrentSubscription(true);
      dispatch(subscribe());
      setSubscribeEmail('');
    } else {
      setWrongEmail(true);
    }
  };

  return (
    <SubcribeFormDiv>
      <SubscriptionTitle>Subscribe to our Newsletter</SubscriptionTitle>
      <SubscriptionInfo>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </SubscriptionInfo>
      <SubscriptionLabel
        style={wrongEmail ? { color: 'red', borderColor: 'red' } : {}}
      >
        <StyledHiOutlineMail />
        <SubscriptionInput
          disabled={currentSubscription && 'disabled'}
          value={subscribeEmail}
          placeholder={
            currentSubscription
              ? 'You already subscribe'
              : 'Enter your email adress'
          }
          onChange={event => setSubscribeEmail(event.target.value)}
        />
      </SubscriptionLabel>
      <SubscriptionButton
        disabled={currentSubscription && 'disabled'}
        onClick={onSubscribe}
        style={wrongEmail ? { background: 'red', color: '#1E1F28' } : {}}
      >
        {wrongEmail ? 'Wrong Email' : 'Subscribe'}
      </SubscriptionButton>
    </SubcribeFormDiv>
  );
};
