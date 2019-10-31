<template>
  <nav class="navbar navbar-toggleable-md navbar-light container">
    <!--   <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>-->
    <h1>
      Customer's List, by
      <a href="http://antoniofloresonline.com/" target="new">Antonio Flores</a>
    </h1>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!--       <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
        </li>-->
      </ul>
      <!--     <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>-->
    </div>
  </nav>
</template>

<style lang="scss">
@import "src/scss/colors.scss";
nav {
  background: $primary-color;
  border-radius: 5px 5px 0px 0px;
  h1 {
    a {
      color: #fff;
      text-decoration: underline;
    }
    a:hover {
      color: #fff;
      opacity: 0.8;
    }
    a:visited {
      color: #fff !important;
    }
  }
}
</style>




