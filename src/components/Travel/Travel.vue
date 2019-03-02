<style>
@import '../Travel/travel.css';
@import '../../css/config.css';
</style>

<template>
  <div class="hello">

    <!--Header-->
    <section id="header">
  
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg sticky-top">
  <a class="navbar-brand" href="#">Directory<span id="plus">Plus+</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#list">Listings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#news">News</a>
      </li>
            <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
      
    </ul>
  </div>
</nav>

    <div class="head-box">
      <div class="container">
        <h4>The Best City Guide</h4>
          <div class="row">
            <div class="col-md-8">
              <input type="text" id="search_space" placeholder="What are you looking for?">
              <button class="btn btn-default" id="search-btn" type="submit">Search</button>
            </div>
          </div>
      </div>
    </div>
    </section>


<!--Category Box-->
    <section id="cat-box ">

      <div class="container-fluid card">
        <div class="row text-center">
          
          <div class="col-md-1"></div>

          <div class="col-md-2">
            <div class="image-icon">
            <i class="fas fa-concierge-bell fa-5x"></i>
            <h4 id="cat">Restaurants</h4>
            </div>
          </div>
          <div class="col-md-2">
            <div class="image-icon">
            <i class="fas fa-hotel fa-5x"></i>
            <h4 id="cat">Hotels</h4>
            </div>
          </div>
          <div class="col-md-2">
            <div class="image-icon">
            <i class="fas fa-cocktail fa-5x"></i>
            <h4 id="cat">Nightlife</h4>
            </div>
          </div>
          <div class="col-md-2">
            <div class="image-icon">
            <i class="fas fa-mug-hot fa-5x"></i>
            <h4 id="cat">Coffeeshops</h4>
            </div>
          </div>
          <div class="col-md-2">
            <div class="image-icon">
            <i class="far fa-images fa-5x"></i>
            <h4>Culture</h4>
            </div>
          </div>

          <div class="col-md-1"></div>
        
        </div>
      </div>

  </section>


<!--Hot Locations-->

<section id="hot-loc">
<hr class="top-line">
<h1>Explore Hot Locations</h1>

<div class="grid">
  <div class="loc-box">
    <img src="../../assets/am.jpeg">
    <h3>Amsterdam</h3>
  </div>


   <div class="loc-box">
    <img src="../../assets/am.jpeg">
    <h3>Paris</h3>
  </div>
 
   <div class="loc-box">
    <img src="../../assets/am.jpeg">
    <h3>Singapore</h3>
  </div>

   <div class="loc-box">
    <img src="../../assets/am.jpeg">
    <h3>Chicago</h3>
  </div>
  
   <div class="loc-box">
    <img src="../../assets/am.jpeg">
    <h3>New York</h3>
  </div>
  

</div>   
  
</section>
  



<!--Hot Locations-->

<section id="food">
<hr class="top-line">
<h1>Find the best food near you</h1>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
      <img class="img-responsive" src="../../assets/f1.jpeg">
    </div>
    <div class="col-md-6">
      <div class="row">
        <div class="col-md-6">
       <img class="img-responsive" src="../../assets/f2.jpeg">
        </div>
        <div class="col-md-6">
          <div class="row">
       <img class="img-responsive" src="../../assets/f3.jpeg">
       </div>
       <div class="row">
       <img class="img-responsive" src="../../assets/f3.jpeg">
       </div>
        </div>      
      </div>
    </div>  
  </div>
</div>

</section>


  </div>
</template>

<script src="../Travel/travel.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
