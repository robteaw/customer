import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Customer() {
  return (
    <div>
      <h1>Customer Info</h1>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}
