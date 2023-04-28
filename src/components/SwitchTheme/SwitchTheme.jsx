import { useState } from 'react';
import { Ellipse, Button } from './SwitchTheme.styled';
import { useDispatch, useSelector } from 'react-redux';
import selectStatusTheme from 'redux/theme/selectors';
import { changeTheme } from 'redux/theme/themeSlice';

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const statusTheme = useSelector(selectStatusTheme);
  const [isChecked, setIsChecked] = useState(statusTheme);

  const heandleClick = () => {
    setIsChecked(!isChecked);
    dispatch(changeTheme());
  };

  return (
    <Button
      type="button"
      onClick={heandleClick}
      currentThemeStatus={statusTheme}
      aria-label="switch theme button"
    >
      <Ellipse currentThemeStatus={statusTheme} />
    </Button>
  );
};

export default SwitchTheme;
