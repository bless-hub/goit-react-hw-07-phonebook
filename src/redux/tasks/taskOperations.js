import taskActions from "./taskActions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const addContact = ({ name, number }) => async (dispatch) => {
  dispatch(taskActions.addContactsRequest());
  await axios
    .post("/contacts", { name, number })
    .then((res) => {
      dispatch(taskActions.addContactsSucces(res.data));
    })
    .catch((err) => dispatch(taskActions.addContactsErr(err)));
};
const fetchContacts = () => async (dispatch) => {
  dispatch(taskActions.fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(taskActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(taskActions.fetchContactsErr(error));
  }
};

const removeContact = (id) => async (dispatch) => {
  dispatch(taskActions.removeContactRequest);
  await axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(taskActions.removeContactSucces(id)))
    .catch((err) => dispatch(taskActions.removeContactErr(err)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, fetchContacts, removeContact };
