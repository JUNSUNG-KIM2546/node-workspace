<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  //import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <!-- RouterLink 컴포넌트를 사용하여, 클릭시 이동할 경로를 지정 -->
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/member/list">회원목록</RouterLink> |
        <RouterLink to="/member/add">회원추가</RouterLink> |
        <RouterLink to="/member/edit">회원정보변경</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/hello">HelloWorld</RouterLink> |
        <RouterLink to="/wel">Welcome</RouterLink> |
        <RouterLink to="/item">WelcomeItem</RouterLink> |
        <RouterLink to="/life">LifeCycle</RouterLink>
      </nav>
    </div>
  </header>

  <!-- 현재 경로에 맞는 컴포넌트를 출력할 위치에 RouterView 컴포넌트를 사용 -->
  <RouterView />
</template>

<!-- 
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
 -->