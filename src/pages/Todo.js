import React, { useState } from "react";

export default function Todo() {
  const [itemsList, setItemsList] = useState([]);
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleAddNewItem = (newItem) => {
    setItemsList([...itemsList, newItem]);
  };
  const handlePacking = (name) => {
    setItemsList(
      itemsList.map((item) =>
        item.name === name ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleTodoDelete = (name) => {
    setItemsList(
      itemsList.filter((item) => {
        return item.name !== name;
      })
    );
  };

  return (
    <div className="todo-container">
      <BackgroundImage></BackgroundImage>
      <InputForm
        item={item}
        quantity={quantity}
        setQuantity={setQuantity}
        setItem={setItem}
        handleAddNewItem={handleAddNewItem}
      ></InputForm>
      <AddedItems
        handleTodoDelete={handleTodoDelete}
        handlePacking={handlePacking}
        itemsList={itemsList}
      ></AddedItems>
      <Footer itemsList={itemsList}></Footer>
    </div>
  );
}
function BackgroundImage() {
  return (
    <div className="background-img">
      <h2 className="todo-heading">Let's Explore The World Together!</h2>
    </div>
  );
}
function InputForm({ item, setItem, quantity, setQuantity, handleAddNewItem }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      return;
    }
    const newItem = {
      name: item,
      quantity: quantity,
      packed: false,
    };
    handleAddNewItem(newItem);
    setItem("");
    setQuantity(1);
  };
  return (
    <div className="todo-form-container">
      <form className="todo-form" onSubmit={handleFormSubmit}>
        <div className="todo-form-div">
          <label>Quantity:</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="todo-form-div">
          <label>Add New Item:</label>
          <input
            type="text"
            placeholder="Items.."
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="todo-form-btn todo-form-btn">
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
}
function AddedItems({ itemsList, handlePacking, handleTodoDelete }) {
  return (
    <div className="added-items">
      {itemsList.map((item) => (
        <Item
          handleTodoDelete={handleTodoDelete}
          handlePacking={handlePacking}
          item={item}
          key={item.name}
        ></Item>
      ))}
    </div>
  );
}
function Item({ item, handlePacking, handleTodoDelete }) {
  return (
    <div>
      <p className={`todo-item ${item.packed && "todo-crossed-off"}`}>
        <input type="checkbox" onClick={() => handlePacking(item.name)} />
        <span>{item.name}</span>
        <span>({item.quantity})</span>
        <span
          className="todo-delete"
          onClick={() => handleTodoDelete(item.name)}
        >
          ❌
        </span>
      </p>
    </div>
  );
}
function Footer({ itemsList }) {
  const totalAddedItems = itemsList.length;
  const totalPackedItems = itemsList.filter((item) => {
    return item.packed;
  }).length;
  const packedPercentage = Math.round(
    (totalPackedItems / totalAddedItems) * 100
  );

  return (
    <div className="todo-footer">
      <footer>
        {totalAddedItems === 0 ? (
          <h3>Let's add some item for the tour!</h3>
        ) : packedPercentage === 100 ? (
          <h3>We are ready to go!</h3>
        ) : (
          <h3>
            You have added {totalAddedItems} among them {totalPackedItems} are
            packed({packedPercentage}%)
          </h3>
        )}
      </footer>
    </div>
  );
}
