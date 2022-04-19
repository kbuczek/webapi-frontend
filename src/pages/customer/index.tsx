import React, { useEffect, useState } from "react";
import Api from "../../api";
import Fetch from "../../components/Fetch";
import { Link } from "react-router-dom";
import Tile from "../../components/Tile";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./index.css";

interface myItem {
  id: number;
  firstName: string;
  lastName: string;
  vat_Id: number;
  creationDate: string;
  addressCity: string;
  addressStreet: string;
  addressPostalCode: string;
}

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Fetch(Api.Customer.get()).then((response: any) => {
      setData(response);
      console.log(response);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Ładowanie</div>;
  }

  return (
    <main className="customer">
      <Container>
        <div className="customer-header">
          <h1>Customers list</h1>
          <Link to={`/add`} className="success-button">
            <Button variant="success">Add customer +</Button>
          </Link>
        </div>
        {data.map((item: myItem) => {
          return <Tile {...item} />;
        })}
      </Container>
    </main>
  );
};

export default Index;
