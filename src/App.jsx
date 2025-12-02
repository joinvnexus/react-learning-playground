import React from "react";
import Task1 from "./task/task-1";
import ProfileCard from "./task/ProfileCard";
import FruitTable from "./task/FruitTable";
import Header from "./task/Header";
import Footer from "./task/Footer";
import Friend from "./task/friend";
import ProductCard from "./task/ProductCard";
import CountState from "./task/count-state";
import TodoApp from "./task/TodoApp";
import Todo from './task/todo'
import UserList from './task/UserList'
import JokesApp from "./task/JokesApp";
import  AuthForm from "./task/AuthForm";

function App() {
  const name = "rakib";
  const age = 17;
  const isStudent = true;
  return (
    <div
      style={{ padding: "40px", fontFamily: "Kalpurush", textAlign: "center" }}
    >
      <h1 style={{ color: "tomato" }}>আমি JSX শিখছি</h1>

      <p style={{ fontFamily: "poppins" }}>my name is {name}</p>
      <p>my age is {age}</p>

      {/* Condational rendering */}
      {isStudent ? (
        <p style={{ color: "green", fontSize: "20px" }}>আমি একজন ছাত্র</p>
      ) : (
        <p style={{ color: "red" }}>আমি চাকরি করি</p>
      )}

      {/* List */}
      <ul style={{ listStyle: "none" }}>
        <li>🍎 আপেল</li>
        <li>🍌 কলা</li>
        <li>🍇 আঙ্গুর</li>
      </ul>

      <img
        src="https://i.ibb.co.com/6J7pPY8/react-logo.png"
        alt="React Logo"
        width={200}
      />
      <Task1 />
      <ProfileCard />
      <br />
      <ProfileCard />
      <FruitTable />
      <br />
      <Header />
      <br />
      <Footer />
      <br />
      <Friend />

      <br />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductCard
          productName="Smart Watch"
          price={120}
          discount={20}
          image="https://via.placeholder.com/200"
        />

        <ProductCard
          productName="Wireless Headphone"
          price={80}
          discount={10}
          image="https://via.placeholder.com/200"
        />

        <ProductCard
          productName="Gaming Mouse"
          price={40}
          discount={0}
          image="https://via.placeholder.com/200"
        />

        <ProductCard
          productName="Mechanical Keyboard"
          price={150}
          discount={30}
          image="https://via.placeholder.com/200"
        />
       
      </div>
       <CountState />
       <TodoApp />
       <Todo />
       <UserList />
       <JokesApp />
       <AuthForm />
    </div>
  );
}
export default App;
