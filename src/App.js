import React, { useState, useEffect } from "react";
import "./App.css";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP0lBBmeanSsZ5Yg4zndAZizWs62gNbSfykIe_9nKMBtpZ4G1BidUKxK43g7tHuBsTRw&usqp=CAU"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Sunglass</h3>
      <h5>100 THB</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}