import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.css";
import List from "./components/List";
import ProductItem from "./components/ProductItem";

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

function CompanyItem({ company, defaultVisibility }) {
  const [isVisible, setIsVisisble] = useState(defaultVisibility);

  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)}
    >
      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
}

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className="col-2">
        <List
          title="Products"
          items={products}
          render={(product) => {
            return <ProductItem key={product.productName} product={product} />;
          }}
        />
        <List
          title="Companies"
          items={companies}
          render={(company) => {
            return (
              <CompanyItem
                key={company.companyName}
                company={company}
                defaultVisibility={false}
              />
            );
          }}
        />
      </div>
    </div>
  );
}
