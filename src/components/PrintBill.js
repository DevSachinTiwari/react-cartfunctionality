import React from 'react';
import ReactDOMServer from 'react-dom/server';

const PrintBill = (props) => {
  const printItems = props.cart.map((item) => (
    <React.Fragment key={item.id}>
      <p>
        {item.name} - {item.price}
        <br />
        Quantity: {item.quantity}
      </p>
    </React.Fragment>
  ));

  const printItemsHTML = ReactDOMServer.renderToString(printItems);

  const printHTML = `
    <html>
      <head>
        <title>Print Bill</title>
        <style>
          @media print {
            body * {
              visibility: hidden;
            }
            .bill-container,
            .bill-container * {
              visibility: visible;
            }
          }
        </style>
      </head>
      <body>
        <div class="bill-container">
          <p>Product Name</p>
          ${printItemsHTML}
          <br/>=============================================<br/>
          <p>Total: ${props.cartTotal}</p>
          <p>Discount 10%: ${props.cartdiscount}</p>
          <p>Final: ${props.cartFinal}</p>
        </div>
      </body>
    </html>
  `;

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printHTML);
    printWindow.document.close();
    printWindow.print();
  };

  return <button onClick={handlePrint}>Print Bill</button>;
};

export default PrintBill;
