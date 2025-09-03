import { useEffect, useState, type ChangeEvent } from "react";
import type { ListItem } from "../../utils/types";

function List() {
  const useLocal = () => {
    const localList = localStorage.getItem("local storage list");
    return localList ? JSON.parse(localList) : [];
  };
  const [list, setList] = useState<ListItem[]>(useLocal);
  useEffect(() => {
    localStorage.setItem("local storage list", JSON.stringify(list));
  }, [list]);

  const [newListItem, setNewListItem] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewListItem(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent) => {
    const id = Number(e.target.id);
    const editedList: ListItem[] = list.map((item) =>
      item.itemId === id ? { ...item, done: !item.done } : item
    );
    setList(editedList);
  };
  const handleAdd = () => {
    const newItem: ListItem = {
      itemId: Math.floor(Math.random() * 10000),
      title: newListItem,
      done: false,
    };
    setList((prev) => [...prev, newItem]);
  };
  const handleDelete = (id: number) => {
    const newList = list.filter((item: ListItem) => item.itemId !== id);
    setList(newList);
  };
  return (
    <section className="local-storage-list">
      <h3>Local Storage List</h3>
      {list?.map((item) => (
        <div className="list-item">
          <input
            id={item.itemId.toString()}
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={item.done}
          />
          <label htmlFor={item.itemId.toString()} key={item.itemId}>
            {item.title}
          </label>
          <button onClick={() => handleDelete(item.itemId)}>X</button>
        </div>
      ))}
      <form className="add-new" onSubmit={handleAdd}>
        <label htmlFor="add">new item:</label>
        <input id="add" type="text" onChange={handleChange} />
        <button type="submit">add</button>
      </form>
    </section>
  );
}

export default List;
