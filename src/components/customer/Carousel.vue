<template>
    <div>
        <main role="main">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            <div class="carousel-item active img-1">
                <div class="container">
                <div class="carousel-caption text-left text-dark">
                    <h1>如果你在找一個私人的空間...</h1>
                    <p>免綁約,想租隨時都有位置</p>
                    <p><router-link to="/about" class="btn btn-lg btn-outline-dark" href="#" role="button">查看介紹</router-link></p>
                </div>
                </div>
            </div>
            <div class="carousel-item img-2">
                <div class="container">
                <div class="carousel-caption text-dark">
                    <h1>如果你在找CP值高的辦公室...</h1>
                    <p>價格絕對比同業便宜，且提供好吃的甜點</p>
                    <p><router-link to="/server" class="btn btn-lg btn-outline-dark" href="#" role="button">查看服務</router-link></p>
                </div>
                </div>
            </div>
            <div class="carousel-item img-3">
                <div class="container">
                <div class="carousel-caption text-right text-dark">
                    <h1>如果你還在猶豫方便性...</h1>
                    <p>地點就位在美麗華內，方便、好找</p>
                    <p><router-link to="/traffic" class="btn btn-lg btn-outline-dark" href="#" role="button">查看交通</router-link></p>
                </div>
                </div>
            </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
        </main>
    </div>
</template>


<style scoped>
body {
    padding-top: 3rem;
    color: #5a5a5a;
    -webkit-font-smoothing: antialiased;

}
  
  .navbar-nav{
    color:black;
  }
  .bighead{
    border-radius: 50%;
    min-width: 150px;
  }
  .carousel-caption {
    bottom: 3rem;
    z-index: 10;
  }
  .carousel-item {
    height: 32rem;
  }
  .carousel-item > img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 32rem;
  }
  .marketing .col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .marketing h2 {
    font-weight: 400;
  }
  .marketing .col-lg-4 p {
    margin-right: .75rem;
    margin-left: .75rem;
  }
  .featurette-divider {
    margin: 5rem 0; 
  }
  .featurette-heading {
    font-weight: 300;
    line-height: 1;
    letter-spacing: -.05rem;
  }
  @media (min-width: 40em) {
    .carousel-caption p {
      margin-bottom: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.4;
    }

  }

.img-1{
      background-image: url(https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80);
      background-size: cover;
      background-position: center center;
  }
  .img-2{
    background-image: url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80);
    background-size: cover;
    background-position: center center;
}
.img-3{
    background-image: url(https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    background-size: cover;
    background-position: center center;
}
</style>>
<script>

</script>
