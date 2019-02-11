<template>
  <div class="jumbotron mt-3">
    <h1 class="display-6">Hello!</h1>
    <p class="lead">I am Martin Thodi.</p>
    <h3 class="display-6" ref="introduction"></h3>
    <hr class="my-4">
    <div class="row">
      <div class="col-sm-8">
        <div class="card">
          <h4 class="card-header">Contact me</h4>
          <div class="media">
            <img class="align-self-start mr-3" style="height: 200px; width: 200px; display: block;" src="images/profile.png" alt="profile image">
            <p>
              I love financial markets, investing and programming.
              I have a Master of Engineering in Information Engineering from Hiroshima University (Japan) and a Bachelor of Science in Computer Science
              from Chancellor College, University of Malawi. I just passed my CFA level 1 exam (written in December 2018). I am looking forward to
              launch my career in finance. I would love to hear from you. To contact me, please use the details below.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <i class="far fa-envelope"></i>&nbsp;
              <a href="mailto:martin.thodi@gmail.com">martthodi238@gmail.com</a>
            </li>
            <li class="list-group-item">
              <i class="fas fa-mobile"></i>&nbsp; (+265) 992 480 347
            </li>
            <li class="list-group-item">
              <i class="fab fa-linkedin"></i>&nbsp;
              <a
                href="https://www.linkedin.com/in/martin-thodi/"
              >https://www.linkedin.com/in/martin-thodi/</a>
            </li>
            <li class="list-group-item">
              <i class="fab fa-github"></i>&nbsp;
              <a href="https://github.com/mthodi">https://github.com/mthodi</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Typed from "typed.js";
export default {
  mounted() {
    this.animate_introduction();
  },
  methods: {
    animate_introduction() {
      var intro = this.$refs["introduction"];
      var typed = new Typed(intro, {
        strings: [
          "I am a financial analyst",
          "I am a software engineer",
          "I am an investor"
        ],
        typeSpeed: 50,
        backSpeed: 40,
        smartBackspace: true, // Default value
        loop: false,
        showCursor: false
      });
    }
  }
};
</script>
