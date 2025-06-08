import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import SearchBox from './components/SearchBox'
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from './redux/contactsSlice';

function App() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector( selectError);

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