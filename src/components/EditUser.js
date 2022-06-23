import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const { users, editUserID } = useContext(GlobalContext);
  const history = useNavigate();
  const {userID} = useParams(propsdasadadsasdsdasdaadss);
  useEffect(() => {
    const foundUser = users.find((user) => String(user.id) === userID);
    
    if (foundUser) {
      setSelectedUser(selectedUser);
    }
  }, [userID, users]);
  const onSubmit = (e) => {
    e.preventDefault();
    editUserID(selectedUser);
    history("/");
  };

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          // value={(selectedUser && selectedUser.name) ?? ""}
          value={selectedUser.name}
          name="name"
          onChange={onChange}
          placeholder="Enter Name..."
        ></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ms-2">
        Cancel
      </Link>
    </Form>
  );
};
