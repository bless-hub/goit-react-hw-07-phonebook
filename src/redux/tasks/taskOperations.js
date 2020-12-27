import taskActions from "./taskActions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(taskActions.addContactsRequest());
  axios
    .post("/contacts", { name, number })
    .then((res) => {
      dispatch(taskActions.addContactsSucces(res.data));
    })
    .catch((err) => dispatch(taskActions.addContactsErr(err)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(taskActions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(taskActions.fetchContactsSucces(data)))

    .catch((err) => dispatch(taskActions.fetchContactsErr(err)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(taskActions.removeContactRequest);
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(taskActions.removeContactSucces(id)))
    .catch((err) => dispatch(taskActions.removeContactErr(err)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, fetchContacts, removeContact };
