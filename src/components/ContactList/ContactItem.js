import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import taskOperations from "../../redux/tasks/taskOperations";
import style from "./ContactList.module.css";
import taskSelectors from "../../redux/tasks/taskSelectors";

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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  const contact = taskSelectors.getContactById(state, ownProps.id);
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContact: () => dispatch(taskOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
