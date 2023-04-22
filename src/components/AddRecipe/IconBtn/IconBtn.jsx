import { CloseBtn } from './IconBtn.styled';

export default function IconBtn({ children, onClick }) {
  return (
    <CloseBtn type="button" onClick={onClick}>
      {children}
    </CloseBtn>
  );
}

IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};
