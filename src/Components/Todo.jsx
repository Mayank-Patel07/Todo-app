import React, { useState } from "react";
import "../app.css";

export default function Todo() {
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [additem, setadditem] = useState([]);

  const addNote = (e) => {
    e.preventDefault();

    if (title && des) {
      let newToDoObj = {
        title: title,
        des: des,
      };
      let updatedTodoArr = [...additem];
      updatedTodoArr.push(newToDoObj);
      setadditem(updatedTodoArr);
      settitle("");
      setdes("");
    }
  };
  const deletebtn = (id) => {
    let delete_note = additem.filter((index) => {
      return id !== index;
    });
    setadditem(delete_note);
  };

  return (
    <>
      <div className="container">
        <form>
          <div class="mb-3 my-2">
            <label class="form-label">Title</label>
            <input
              type="text"
              value={title}
              name="title"
              onChange={(e) => {
                settitle(e.target.value);
              }}
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Description</label>
            <input
              type="text"
              value={des}
              name="des"
              onChange={(e) => {
                setdes(e.target.value);
              }}
              class="form-control"
            />
          </div>
          <button class="btn button-29" onClick={addNote}>
            Add Note
          </button>
        </form>
      </div>
      <div className="container ">
        <div className="row">
          {additem.map((element, index) => {
            let { title, des } = element;
            return (
              <div
                class="card my-3 mx-3 "
                style={{ width: "18rem" }}
                key={index}
              >
                <img
                  src="https://cdn.dribbble.com/users/40016/screenshots/17624032/media/411778466056b9f80f544f107b6b8150.png?resize=400x0"
                  class="card-img-top my-2 rounded-3"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">{des}</p>
                  <button
                    class="btn button-29"
                    onClick={() => {
                      deletebtn(index);
                    }}
                  >
                    Delete Note
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
