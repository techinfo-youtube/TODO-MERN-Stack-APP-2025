import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import PopModal from "../../components/PopModal";
import TodoServices from "../../Services/TodoServices";
import Card from "../../components/Card/Card";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState([]);
  //handle modal
  const openModalHandler = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("todoapp"));
    const id = userData && userData?.user.id;
    console.log(id);
    const getUserTask = async () => {
      try {
        const { data } = await TodoServices.getAllTodo(id);
        // console.log(data);
        setAllTask(data?.todos);
      } catch (error) {
        console.log(error);
      }
    };
    getUserTask();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="add-task">
          <h1>Your Task</h1>
          <input type="search" placeholder="search your task" />
          <button className=" btn btn-primary" onClick={openModalHandler}>
            Create Task <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        {allTask && <Card allTask={allTask} />}
        {/* ========== modal =========== */}
        <PopModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      </div>
    </>
  );
};

export default HomePage;
