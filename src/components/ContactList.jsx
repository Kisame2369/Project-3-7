import { useSelector } from 'react-redux'
import Contact from './Contact'
import { selectFilteredContacts } from '../redux/contactsSlice'
import css from './ContactList.module.css'

export default function ContactList() {

  const visibleContacts = useSelector(selectFilteredContacts)

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  )
}
