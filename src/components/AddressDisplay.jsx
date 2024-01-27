import React from "react";

export default function AddressDisplay({ name, street, city, state, zipCode }) {
  return (
    <address>
      {name} <br/>
      {street} <br/>
      {city}, {state} {zipCode} <br/>
    </address>
  );
}
