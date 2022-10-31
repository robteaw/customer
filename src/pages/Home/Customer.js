import React from "react";

export default function Customer() {
  return (
    <div>
      <h1>Customer Info</h1>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone Number" />
      </form>
    </div>
  );
}
