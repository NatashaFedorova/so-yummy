import { AiFillPlusCircle } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { HiOutlinePencil } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';
// import { useSelector } from 'react-redux';

export const UserInfoModal = ({ closeUserInfoModal }) => {
  // const { name } = useSelector(state => state.user);
  const [newUserName, setNewUserName] = useState('');

  return (
    <div>
      <img alt={`name Avatar`} src="#" />
      <button>
        <AiFillPlusCircle />
      </button>
      <div>
        <RxPerson />
        <input
          value={newUserName}
          onChange={event => setNewUserName(event.target.value)}
        />
        <HiOutlinePencil />
      </div>
      <button>Send chandes</button>
      <button onClick={closeUserInfoModal()}>
        <GrFormClose />
      </button>
    </div>
  );
};
