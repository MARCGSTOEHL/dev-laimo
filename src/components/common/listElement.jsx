import React from "react";
import { Link } from "react-router-dom";

const ListElement = ({ items, onDelete, location }) => {
  console.log(items, location);

  return (
    <ul className="list-group">
      {items.map(item => (
        <li className="list-group-item" key={item._id}>
          <span className="h5">
            {item.address.street} {item.address.streetnr}
          </span>
          <div className="float-right">
            <button
              onClick={() => onDelete(item._id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
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

export default ListElement;
