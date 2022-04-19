import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Fetch from "../../components/Fetch";
import FetchWithBody from "../../components/FetchWithBody";
import Api from "../../api";
import "./Edit.css";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  vat_Id: number;
  creationDate: string;
  addressCity: string;
  addressStreet: string;
  addressPostalCode: string;
}

interface categoryItem {
  id: number;
  label: string;
}

const CustomerEdit = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [customer, setCustomer] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    vat_Id: 0,
    creationDate: "",
    addressCity: "",
    addressStreet: "",
    addressPostalCode: "",
  });

  useEffect(() => {
    Fetch(Api.Customer.getId(Number(params.id))).then((response) => {
      setCustomer(response);
    });
  }, []);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = () => {
    FetchWithBody(Api.Customer.get(), "PUT", customer)
      .then((response) => {
        console.log("RESPONSE" + response);
        navigate(-1);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <main>
      <Container>
        <h1 className="customersEdit-header">Edit Customer</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First Name"
              name="firstName"
              value={customer.firstName}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last Name"
              name="lastName"
              value={customer.lastName}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Vat ID</Form.Label>
            <Form.Control
              placeholder="VAT ID"
              name="vat_Id"
              value={customer.vat_Id}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Address city</Form.Label>
            <Form.Control
              placeholder="address city"
              name="addressCity"
              value={customer.addressCity}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Address Stree</Form.Label>
            <Form.Control
              placeholder="address street"
              name="addressStreet"
              value={customer.addressStreet}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Address Postal Code</Form.Label>
            <Form.Control
              placeholder="address postal code"
              name="addressPostalCode"
              value={customer.addressPostalCode}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Creation Date</Form.Label>
            <Form.Control
              placeholder="creation date"
              name="creationDate"
              value={customer.creationDate}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="btn-submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Edit customer
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default CustomerEdit;
