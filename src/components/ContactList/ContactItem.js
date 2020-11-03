import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import taskActions from "../../redux/tasks/taskActions";
import taskOperation from "../../redux/tasks/taskOperations";
import style from "./ContactList.module.css";

function ContactItem({ name, number, removeContact, id }) {
  return (
    <li key={id} className={style.item}>
      {name} {number}
      <button type="button" className={style.button} onClick={removeContact}>
        Delete Contact
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  const item = state.tasks.items.find((item) => item.id === ownProps.id);
  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContact: () => dispatch(taskOperation.removeContacts(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
