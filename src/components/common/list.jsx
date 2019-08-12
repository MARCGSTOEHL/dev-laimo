import React from "react";
import { Link } from "react-router-dom";

const List = ({ items, onDelete, onChecked }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          className={
            item.checked
              ? "list-group-item bg-success text-white"
              : "list-group-item"
          }
          key={item.title+item._id}
        >
          <span className="h5">{item.title}</span>
          <div className="float-right">
            <button
              onClick={() => onDelete(item._id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
            <button
              onClick={() => onChecked(item)}
              className="btn btn-success btn-sm m-2 "
            >
              OK
            </button>
            <button
              className="btn btn-primary btn-sm m-2 "
            >
              Edit
            </button>
            <Link to={`${window.location.pathname}/${item._id}`}>
              <i class="fa fa-angle-right m-2" aria-hidden="true" />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
