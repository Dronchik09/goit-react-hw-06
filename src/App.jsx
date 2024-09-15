import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import css from "./App.module.css";

export default function App() {

return (
  <>
  <div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm  />
    <SearchBox  />
    <ContactList />
    </div>
  </>
);

}