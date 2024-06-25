import React, { useContext } from "react";
import Header from "../components/Header";
import ItemContainer from "../components/ItemContainer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import styles from "../cssModule/TodoPage.module.css";
import AuthContext from "../context/AuthContext";
import TodoItemsContextProvider from "../store/todo-items-store";
import AddTodo from "../components/AddTodo";
const TodoPage = () => {
  const { user } = useContext(AuthContext);

  console.log(`User Email: ${user}`);
  return (
    <TodoItemsContextProvider>
      <Navbar />

      <div className={styles.todoPageOuter}>
        {/* <Sidebar /> */}
        <div className={styles.todoPageInner}>
          <Container>
            {" "}
            {/* Wrap the content inside the Container */}
            <Header />
            <AddTodo/>
            <ItemContainer />
          </Container>
        </div>
      </div>
      <Footer />
    </TodoItemsContextProvider>
  );
};

export default TodoPage;
