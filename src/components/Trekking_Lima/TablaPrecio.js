import React from 'react';

function TablaPrecio() {
  return (
    <section className="pricing-table">
      <h4>Precio por persona en US$</h4>
      <table>
        <thead>
          <tr>
            <th>Persona</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Precio</td>
            <td>S/.180</td>
            <td>S/.135</td>
            <td>S/.115</td>
            <td>S/.105</td>
            <td>S/.85</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default TablaPrecio;
