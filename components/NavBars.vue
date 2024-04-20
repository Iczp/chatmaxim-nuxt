<template>
  <nav>
    <ul class="nav-tabs">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li>
        <a href="/product">Product</a>
        <ul>
          <li><a href="Profile">Product-subItem1</a></li>
          <li><a href="/login">Product-subItem2</a></li>
        </ul>
      </li>
    </ul>
    <ul>
      <li><a href="Profile">Profile</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
</template>

<style>
.nav-tabs a {
  font-size: 16px;
}
</style>
