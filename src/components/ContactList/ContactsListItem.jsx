import { deleteContact } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { itemsLoadingSelector } from "../../redux/contactsSlice";

export const ContactsListItem = ({ item, name, number }) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(itemsLoadingSelector);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button
        onClick={() => handleDeleteContact(item.id)}
        disabled={isFetching}
      >
        Delete
      </button>
    </li>
  );
};
