import { ContactsListItem } from "../../components/ContactList/ContactsListItem";
import { useSelector } from "react-redux";
import { itemsSelector } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/filterSlice";

export const ContactsList = () => {
  const items = useSelector(itemsSelector);
  const filter = useSelector(selectFilteredContacts);

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
