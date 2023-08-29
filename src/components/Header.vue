<template>
  <div class="header">
    <a class="link" href="/#/"> Home </a>
    <a class="link logo" href="/#/"> logo</a><a class="link" href="/#/todos"> Todos </a>
  </div>
</template>

<style>
.header {
  width: 100vw;
  padding: 0 50px 0 50px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
a.link:nth-child(2) {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 400;
  padding: 20px;
  background-color: black;
}
a.link:first-child {
  border-radius: 0 0 0 30px;
}
a.link:last-child {
  border-radius: 0 0 30px 0;
}
a.link {
  text-decoration: none;
  color: black;

  font-weight: 400;
  padding: 20px 60px;
}
a.link:hover {
  background-color: black;
  color: white;
  transition: 0.5s ease-in-out;
}
</style>
