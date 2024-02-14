import React from 'react';
import './index.css'; // Link to your CSS file

export function App() {
  const cards = [
  {header: "title1", body: "body1", footer: "subscript1", isFooter: false},
  {header: "title2", body: "body2", footer: "subscript2"},

  {header: "title3", body: "body3", footer: "subscript3"},

  {header: "title4", body: "body4", footer: "subscript4", isFooter: false},

]
  return (
    <div className="card-body" style={{display: "flex", gap: "20px"}}>
    {
      cards.map((card) => (
        <div className= "card" style={{display: "flex", border: "2px black solid"}}>
          <div>{card.header}</div>
          <div>{card.body}</div>
          {card.isFooter === false ? "" : card.footer}
        </div>
      ))
    }
    </div>
  )
}
export default App;