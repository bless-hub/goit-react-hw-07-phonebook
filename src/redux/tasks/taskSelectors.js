const getFilter = (state) => state.tasks.filter;
const getContacts = (state) => state.tasks.items;

const getVIsibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state).toLowerCase();
  return contacts.filter((task) => task.name.toLowerCase().includes(filter));
};

const getContactById = (state, contactId) => {
  const contacts = getContacts(state);
  return contacts.find((contact) => contact.id === contactId);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getFilter, getVIsibleContacts, getContactById };
