import React from 'react';
import styles from './TodoCheckboxComponent.module.scss';

import Checkbox from "@material-ui/core/Checkbox";

const TodoCheckboxComponent = (props) => {

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <div className={styles.TodoCheckboxComponent} data-testid="TodoCheckboxComponent">
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
};

export default TodoCheckboxComponent;
