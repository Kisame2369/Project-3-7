import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import SearchBox from './components/SearchBox'
import { fetchContacts } from "./redux/contactsOps";

function App() {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ContactList />
    </div>
  )
}

export default App