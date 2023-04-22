const { DeleteButton } = require('./IconBtn.styled');

const DeleteBtn = ({ children, onClick }) => {
  return (
    <DeleteButton type="button" onClick={onClick}>
      {children}
    </DeleteButton>
  );
};

DeleteBtn.defaultProps = {
  onClick: () => null,
  children: null,
};

export default DeleteBtn;
