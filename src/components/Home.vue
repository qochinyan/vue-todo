<script></script>

<template>
  <div class="home-container">
    <div class="home-heading">
      <h1>Welcome <br /><span>Todo</span> app</h1>
      <a href="/#/todos"
        >todos<img class="to-todos-arrow" src="../assets/arrow.png"
      /></a>
    </div>
    <img class="home-pic" src="../assets/todo.webp" alt="" />
  </div>
</template>

<style>
.home-container {
  max-width: 100vw;
  padding: 0 100px;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home-heading {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0px;
}
.home-heading a {
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 400;
  font-family: "Montserrat";
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: black;
}
.home-heading a .to-todos-arrow {
  width: 20px;
  transform: rotate(180deg);
  
}
.home-heading h1 {
  color: #277cd7;
  font-size: 80px;
  font-weight: 200;
}
.home-heading h1 span {
  font-weight: 400;
  color: rgb(190, 255, 10);
}
.home-pic {
  width: 30vw;
}
</style>
