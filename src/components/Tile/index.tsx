import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./index.css";

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

const Index: React.FunctionComponent<Customer> = (props) => {
  return (
    <Card className="tile" key={props.id}>
      <article className="tile-article">
        <section className="tile-section1">
          <div className="tile-div">
            <div>Name:</div>
            <div className="tile-text">
              {props.firstName + " " + props.lastName}
            </div>
          </div>
          <div className="tile-div">
            <div>VAT ID:</div>
            <div className="tile-text">{props.vat_Id}</div>
          </div>
          <div className="tile-div">
            <div>Address:</div>
            <div className="tile-text">
              {props.addressStreet +
                ", " +
                props.addressPostalCode +
                ", " +
                props.addressCity}
            </div>
          </div>
          <div className="tile-div">
            <div>Creation date:</div>
            <div className="tile-text">{props.creationDate}</div>
          </div>
        </section>
        <section className="tile-section2">
          <Link to={`/edit/${props.id}`}>
            <Button variant="dark">Edit customer</Button>
          </Link>
          <Link to={`/delete/${props.id}`}>
            <Button variant="danger">Delete customer</Button>
          </Link>
        </section>
      </article>
    </Card>
  );
};

export default Index;
