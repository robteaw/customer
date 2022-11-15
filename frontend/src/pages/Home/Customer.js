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
      <div class="customer_list">
        {this.state.map((customer) => {
          return (
            <div class="card">
              <img src={customer.image} alt="" />
              <p>{customer.fname}</p>
              <p>{customer.lname}</p>
              <p>{customer.email}</p>
              <p>{customer.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
