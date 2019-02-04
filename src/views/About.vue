<template>
  <div class="jumbotron mt-3">
    <h1 class="display-6">Hello!</h1>
    <p class="lead">I am Martin Thodi.</p>
    <h3 class="display-6" ref="introduction"></h3>
    <hr class="my-4">
    <div class="row">
      <div class="col-sm-6">
        <div class="card text-white bg-light mb-3 mr-0" style="max-width: 100%;">
          <div class="card-header">About this project</div>
          <div class="card-body">
            I made this website because I want a convienient way to screen and analyze fundamentals of companies trading on African exchanges.
            Most company fundamentals data is disseminated in PDF format. PDF, while a portable format, is not good for analysis.
            I plan for this website to become a free repository of fundamentals data, where one can screen, analyze and download fundamentals data in CSV
            and Spreadsheet formats for further analysis. The aim is to shorten the data gathering and processing effort for analysts and investors so
            they can focus on what is important to them - analysis and investing!
            <p class="mb-2">Contributions to development and data are highly welcome.</p>
            <p>
              <a
                class="btn btn-secondary btn-sm mr-2" data-toggle="collapse" href="#devContribution" role="button" aria-expanded="false" aria-controls="devContribution">
				        Click to contribute to development
			        </a>
              <a
                class="btn btn-secondary btn-sm" type="button" data-toggle="collapse" data-target="#dataContribution" aria-expanded="false" aria-controls="dataContribution">
                Click to contribute data
              </a>
            </p>
            <div class="collapse" id="devContribution">
              <div class="card card-body">
                <p class="card-text mb-0"
                >Coding is fun as a group. I use Python Flask for the backend and Vue.js for the frontend.</p>
                <p class="card-text">To process PDF data into CSV and database ready data I use sed, awk and bash. Please visit the project repository.</p>
              </div>
            </div>
            <div class="collapse" id="dataContribution">
              <div class="card card-body">
                For now, to contribute financial statements for companies listed on any African stock exchange (in any format),
                please email me at
                <a href="mailto:martthodi238@gmail.com">martthodi238@gmail.com.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <h4 class="card-header">Contact me</h4>
          <div class="media">
            <img
              class="align-self-start mr-3"
              style="height: 200px; width: 200px; display: block;"
              src="images/profile.png"
              alt="profile image"
            >
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
