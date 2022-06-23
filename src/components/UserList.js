import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  const { users, removeUserID } = useContext(GlobalContext);
  return (
    <ListGroup className="mt-4">
      {users.map((user) => (
        <ListGroupItem className="d-flex">
          <strong>{user.name}</strong>
          <div className="ms-auto">
            <Link className="btn btn-warning" to={`/edit/${user.id}`}>
              Edit
            </Link>
            <Button
              onClick={() => removeUserID(user.id)}
              className="ms-1"
              color="danger"
            >
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
