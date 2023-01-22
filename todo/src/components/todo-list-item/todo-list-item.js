import React, {Component} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    };
    
    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>

        <Button onClick={onDeleted} variant="outlined" startIcon={<DeleteIcon />}></Button>
        {/* <IconButton onClick={onDeleted} color="secondary" aria-label="delete"><DeleteIcon /></IconButton> */}
        {/* <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onDeleted}>
          <i className="bi bi-archive-fill" />
        </button> */}

        <Button onClick={onToggleImportant} variant="outlined" startIcon={<ReportGmailerrorredOutlinedIcon />}></Button>

        {/* <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onToggleImportant}>
          <i className="bi bi-exclamation-lg" />
        </button> */}
      </span>
    );    
  }
};

// const TodoListItemFunc = ({ label, important = false }) => {

//   const style = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal'
//   };

//   return (
//     <span className="todo-list-item">
//       <span
//         className="todo-list-item-label"
//         style={style}>
//         {label}
//       </span>

//       <button type="button"
//               className="btn btn-outline-success btn-sm float-right">
//         <i className="bi bi-archive-fill" />
//       </button>

//       <button type="button"
//               className="btn btn-outline-danger btn-sm float-right">
//         <i className="bi bi-exclamation-lg" />
//       </button>
//     </span>
//   );
// };

// export default TodoListItem;
