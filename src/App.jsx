import { useEffect } from "react";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { AddContastForm } from "./components/ContactForm/ContactForm";
import { ContactsList } from "./components/ContactList/ContactsList";
import { Filter } from "./components/Filter/SearchBox";

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <h1>Phonebook</h1>
      <AddContastForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};
