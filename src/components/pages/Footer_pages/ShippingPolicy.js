import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShippingPolicy.css'


const ShippingPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="shipping-policy">
      <h1>Shipping Policy</h1>
      
      <section>
        <h2>Where do we ship?</h2>
        <p>Orders can be shipped within the continental US, Alaska, Hawaii and to APO/FPO addresses (some restrictions may apply).</p>
      </section>
      
      <section>
        <h2>When will my order be delivered?</h2>
        <p>
          The order will ship same day if processed Monday-Friday before 10:30 am PST. If the order is processed after 10:30 am PST,
          the order will ship the following business day (excluding weekends and holidays).
          Depending on the selected shipping method, your order is estimated to arrive on or before the end of the last day.
        </p>
      </section>

      <section>
        <h2>Can I check the order status for tracking shipping?</h2>
        <p>
          Yes, a tracking number will be updated on your order's invoice within 48 business hours of your order processing.
          You will receive a Shipping Confirmation email including your tracking number.
        </p>
      </section>
      
      <section>
        <h2>Shipping Method Options</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Estimated Arrival</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ground</td>
              <td>3-7 Business Days</td>
              <td>Starts at $11.99</td>
            </tr>
            <tr>
              <td>Expedited</td>
              <td>2-3 Business Days</td>
              <td>Varies on order and location</td>
            </tr>
            <tr>
              <td>Next Business Day</td>
              <td>Next Business Day</td>
              <td>Varies on order and location</td>
            </tr>
          </tbody>
        </table>
      </section>

      <button onClick={() => navigate('/')}>Go Back to Home</button>
    </div>
  );
};

export default ShippingPolicy;
