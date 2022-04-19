import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Fetch from "../../components/Fetch";
import Api from "../../api";
import "./Delete.css";

import Container from "react-bootstrap/Container";
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

const CustomerDelete = () => {
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

  const handleDelete = () => {
    Fetch(Api.Customer.getId(Number(params.id)), "DELETE")
      .then((response) => {
        console.log("RESPONSE" + response);
        navigate(-1);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <main className="delete">
      <div className="delete-container">
        <h1>Do you really want to delete this customer?</h1>
        <div>
          <Button variant="danger" onClick={handleDelete}>
            DELETE
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </div>
    </main>
  );
};

export default CustomerDelete;
