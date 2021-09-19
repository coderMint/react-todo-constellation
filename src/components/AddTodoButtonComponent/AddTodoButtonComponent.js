import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddTodoButtonComponent.module.scss';

const AddTodoButtonComponent = () => {
  return (
    <div className={styles.AddTodoButtonComponent} data-testid="AddTodoButtonComponent">
      AddTodoButtonComponent Component
    </div>
  );
};

AddTodoButtonComponent.propTypes = {};

AddTodoButtonComponent.defaultProps = {};

export default AddTodoButtonComponent;
