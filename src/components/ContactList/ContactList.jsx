import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { getContacts, getFilter } from "../../redux/selectors"

export default function PhoneList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    return(
        <ul className={css.list}>
            {filteredContacts.map((data) =>(
               <li className={css.contact} key={data.id}> 
               <Contact data = {data} />
               </li>
            ))}
        </ul>
    )
}