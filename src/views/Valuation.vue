<template>
  <div class="container mw-80">
    <div class="alert alert-dismissible alert-info mt-4 text-center">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <h4 class="alert-heading">Hello</h4>
      <p
        class="mb-1"
      >This website is still under active construction. To help me build it, check out
        <router-link to="/about" class="alert-link">this page</router-link> on how you can contribute
      </p>
      <p class="mb-0">
        If you have historical financial reports and stock prices for publicly listed companies in Africa,
        you can upload them
        <router-link to="/about" class="alert-link">here</router-link>
      </p>
      <hr>
      <br>
      <p class="mb-0">In the mean time, you can screen stocks trading on the Malawi Stock Exchange
        <router-link to="/screener" class="alert-link">here</router-link>
      </p>
    </div>
  </div>
</template>