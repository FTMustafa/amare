import React from 'react';
import './ReturnPolicy.css'; // Stil dosyasını import et
import { useNavigate } from "react-router-dom";

const ReturnPolicy = () => {
  const navigate = useNavigate(); // Yönlendirme için useNavigate hook'u

  const handleNavigateToHome = () => {
    // Ana sayfaya yönlendirme işlemi
    navigate('/');
  };

  return (
    <div className="shipping-policy">
      <h1>Return Policy</h1>

      <h2>WHAT IS THE AMARE SATISFACTION GUARANTEE?</h2>
      <p>
        Amare Global offers a 100% 90-day money-back satisfaction guarantee (less shipping charges) upon return of the product or product containers to all customers and Brand Partners. If, for any reason, a Customer or Brand Partner is dissatisfied with any Amare Global product, the purchaser may return the unused portion of the product in its original container and packaging (or the empty product container) to Amare Global within 90 days of purchase for a replacement, exchange, or a full refund of the purchase price (less shipping costs).
      </p>

      <h2>HOW MANY DAYS DO I HAVE TO RETURN?</h2>
      <p>All Customers and Brand Partners are provided a 90-day time frame from the date of purchase. Returns after this time frame will not be eligible for a refund.</p>

      <h2>WHAT IS NEEDED TO MAKE A RETURN?</h2>
      <ul>
        <li>Obtain Return Merchandise Authorization (“RMA”) from Amare Global by contacting Customer Support.</li>
        <li>Provide a copy of the invoice with the returned products or service. Such invoice must reference your Amare Global Partner Number, the order number, the RMA, and include the reason for the return.</li>
        <li>Return orders must be received within 14 business days of the date the RMA was issued.</li>
      </ul>

      <h2>WHERE DO I SHIP MY RETURN PRODUCTS?</h2>
      <p>Returns should be shipped to the address provided by Amare Global Customer Support when you are issued the RMA.</p>

      <h2>AM I ABLE TO RETURN ITEMS PURCHASED THROUGH A 3RD PARTY WEBSITE OR FROM A BRAND PARTNERS’ PERSONAL INVENTORY?</h2>
      <p>Returns will only be accepted by Amare for purchases made directly from the Amare Global corporate and replicated websites.</p>

      <h2>CAN I RETURN ITEMS WITHIN A PRODUCT PACK?</h2>
      <p>Products purchased as part of a pack must be returned as the entire pack.</p>

      <h2>DO I NEED A RECEIPT FROM MY PURCHASE?</h2>
      <p>Yes. Please provide a copy of the invoice with the returned products or service.</p>

      <h2>IS MY MEMBERSHIP FEE REFUNDABLE?</h2>
      <p>Annual Membership fees are not refundable except as may be required by applicable law in certain jurisdictions.</p>

      <h2>WHEN SHOULD I EXPECT MY REFUND?</h2>
      <p>Refunds may take up to 14 days from the date of receipt to process.</p>

      <h2>PRODUCT CREDITS & AMARE CREDITS</h2>
      <p>Product Credits and Amare Credits may not be exchanged or refunded for a cash value.</p>

      <h2>EXCEPTIONS AND SPECIAL INSTRUCTIONS</h2>
      <p>Please call Customer Support at 1-888-898-8551 or email support@amare.com for assistance or for questions regarding returns.</p>

    
      <button onClick={handleNavigateToHome}>Go to Home</button>
    </div>
  );
};

export default ReturnPolicy;
