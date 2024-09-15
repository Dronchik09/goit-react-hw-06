import { MdDelete, MdPerson, MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ data }) {

  const dispatch = useDispatch();

  function onDelete(id) {
    dispatch(deleteContact(id));
  }

  return (
    <>
      <div>
        <p>
          <MdPerson />
          {data.name}
        </p>
        <p>
          <MdPhone /> {data.number}
        </p>
      </div>
      <button onClick={() => onDelete(data.id)}>
        <MdDelete /> Delete
      </button>
    </>
  );
}