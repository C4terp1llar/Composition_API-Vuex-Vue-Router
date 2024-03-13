<template>
  <nav class="navbar">
    <h3>
      Composition API
    </h3>
    <ul>
      <li>
        <router-link to="/">Все задачи</router-link>
      </li>
      <li>
        <router-link to="/create">Создать</router-link>
      </li>
    </ul>
  </nav>
  <main class="content">
    <router-view />
  </main>
</template>

<style lang="scss">
@import "@/res";

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  width: 100%;
  height: 100%;
  #app {
    width: 100%;
    height: 100vh;
    @include flexbox(flex,unset,center,column);
    background-color: $color3;
    padding: $padding-large;
    gap: $padding-medium;
    .navbar{
      width: 70%;
      background-color: $color6;
      border-radius: $radius;
      padding: $padding-medium;
      @include flexbox(flex,space-between,center,row);
      ul{
        @include flexbox();
        gap: $padding-small;
        list-style-type: none;
        li{
          a{
            text-decoration: none;
            color: black;
          }
          .active-link{
            text-decoration: underline;
          }
        }
      }
    }
    .content{
      width: 70%;
      background-color: $color10;
      border-radius: $radius;
      padding: $padding-medium;
      @include flexbox(flex,unset,unset ,column);
      gap: $padding-small;
    }
  }
  .temp-block{
    width: 100%;
    background-color: $color6;
    border-radius: $radius;
    padding: $padding-small;
  }
}
</style>
<script setup>
</script>