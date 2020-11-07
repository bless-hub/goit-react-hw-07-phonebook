import taskActions from "./taskActions";
import axios from "axios";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(taskActions.addContactsRequest());
  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then((res) => {
      console.log(res);
      dispatch(taskActions.addContactsSucces(res.data));
    })
    .catch((err) => dispatch(taskActions.addContactsErr(err)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(taskActions.fetchContactsRequest());
  axios
    .get("http://localhost:2000/contacts")
    .then(({ data }) => dispatch(taskActions.fetchContactsSucces(data)))
    .catch((err) => dispatch(taskActions.fetchContactsErr(err)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(taskActions.removeContactRequest);
  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(taskActions.removeContactSucces(id)))
    .catch((err) => dispatch(taskActions.removeContactErr(err)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, fetchContacts, removeContact };
