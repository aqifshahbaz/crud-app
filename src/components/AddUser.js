import React, { useContext , useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddUser = () => {
  const [name,setName]= useState('');
  const { addUserID } = useContext(GlobalContext);
  const history = useNavigate();
  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUserID(newUser);
    history("/");
  };

  const onChange = (e)=>{
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChange} placeholder="Enter Name..."></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ms-2">
        Cancel
      </Link>
    </Form>
  );
};
