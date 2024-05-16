import { ContactsListItem } from "../../components/ContactList/ContactsListItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { itemsSelector } from "../../redux/contactsSlice";
import { selectContactsFilter } from "../../redux/filterSlice";

export const ContactsList = () => {
  const dispatch = useDispatch();

  const items = useSelector(itemsSelector);
  const filter = useSelector(selectContactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map((item) => (
        <ContactsListItem
          key={item.id}
          item={item}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};
