// import { ContactsListItem } from "./ContactsListItem";
// import { useSelector, useDispatch } from "react-redux";

// import { getFilterContacts } from "../../redux/contacts-selector";

// import { deleteContact } from "../../redux/contactsSlice";

// export const ContactsList = () => {
//   const contacts = useSelector(getFilterContacts);
//   const dispatch = useDispatch();

//   const onDeleteContact = (id) => {
//     dispatch(deleteContact(id));
//   };
//   return (
//     <ul>
//       {contacts.map((contact) => (
//         <ContactsListItem
//           key={contact.id}
//           name={contact.name}
//           number={contact.number}
//           onDeleteContact={() => onDeleteContact(contact.id)}
//         />
//       ))}
//     </ul>
//   );
// };
