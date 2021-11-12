import React from "react";
import TokenServices from "../tokenServices";
import ApiServices from "../apiServices";

function Item(props) {
  const purchaseDate = new Date(props.item.purchaseDate).toLocaleDateString(
    "en-US"
  );
  const expireDate = new Date(props.item.expireDate).toLocaleDateString(
    "en-US"
  );

  const newItemName = (props.item.itemName).charAt(0).toUpperCase() + 
  (props.item.itemName).slice(1);

  const handleRemove = () => {
    const userId = TokenServices.decodeToken().id;
    const token = TokenServices.getAuthToken();
    ApiServices.deleteItem(userId, token, props.item._id);
};

  return (
    <section className="form-section">
      <div className="group spaced">
        <div className="item center">
          <h2>{`${newItemName}`}</h2>
        </div>
        <div className="item">
          <h3>
            DOP
            <p className="center"> {`${purchaseDate}`}</p>
          </h3>
        </div>
        <div className="item">
          <h3>
            EXP
            <p className="center">{expireDate}</p>
          </h3>
        </div>
        <div className="item">
          <h3>
            QTY
            <p className="center">{props.item.qty}</p>
          </h3>
        </div>
        <div className="remove item to-right">
          <button 
            type="button" 
            className="center-button" 
            onClick={handleRemove}>
              <i className="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <br></br>
    </section>
  );
}

export default Item;