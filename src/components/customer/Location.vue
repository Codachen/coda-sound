<template>
    <div>
        <Navbar></Navbar>
        <section class="cid-qz32r7TSo5" id="content7-93" data-rv-view="3316">
    <div class="about">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6 col-md-8 align-center">
                 <h3 class="mbr-section-subtitle align-center mbr-fonts-style mbr-light pb-3 display-5">
                    CODA Sound
                </h3>
                <h1 class="mbr-section-title align-center mbr-fonts-style mbr-bold display-2">
                    LOCATION</h1>
            </div>
        </div>
    </div>
    </div>
</section>
        

<section class="features2 cid-qz32cd7MgV" id="features2-90" data-rv-view="3313">
    <div class="container-fluid">
        <div class="row main align-items-center" style=" margin:100px">
            <div class="col-md-6 image-element align-self-stretch">
                <div class="img-wrap" style="width: 80%; height: 80%;">
                    <img src="https://raw.githubusercontent.com/Codachen/codachen.github.io/main/assets/img/location.jpg" media-simple="true">
                </div>
            </div>
            <div class="col-md-6 text-element" >
                <div class="text-content">
                    <h2 class="mbr-title pt-2 mbr-fonts-style align-center display-2">
                        CODA Sound
                    </h2>
                    <div class="underline align-center">
                         <div class="line"></div>
                    </div>
                    <div class="mbr-section-text">
                      <h2>地　　址：110台北市信義區信義路五段7號</h2>
                      <h2> 聯絡電話：02-8101-8800</h2>
                      <h2>營業時間：周二至周日 11:00-21:30 <br>　　　　（周一公休)</h2>
                        <p class="mbr-text pt-3 mbr-light mbr-fonts-style align-center display-5">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>          
</section>
      <div id="location" class="find-us" style="padding: 10px;">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
          </div>
          <div class="col-md-8">
<!-- How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
-->
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.016173632707!2d121.56166261484171!3d25.03352518397251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2z5Y-w5YyXMTAx!5e0!3m2!1szh-TW!2stw!4v1633360279338!5m2!1szh-TW!2stw" width="100%" height="330px" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-md-4">
            <div class="left-content">
              <ul class="social-icons">
                <li style="padding: 10px;"><h5>搭乘捷運</h5>
                </li>信義線：台北101站，4 號出口<br>
                     板南線：市政府站，2 號出口步行約 10 分鐘
                <li style="padding: 10px;"><h5>搭乘公車</h5>
                </li>搭乘至市府站、世貿站、信義行政中心、君悅飯店路線之公車，均可到達台北101停車站下車。
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer></Footer>
      
    </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer'
export default {
    components:{
        Navbar,
        Footer
    },
}
</script>
<style scoped>
@import '../../../static/css/bootstrap-grid.min.css';
@import '../../../static/css/bootstrap-reboot.min.css';

.no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
 
.about{
    margin-bottom: 5px;
    margin-top: -50px;
    background-image: url(https://images.unsplash.com/photo-1494129935429-873eafa78178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1203&q=80);
    background-size: 200%;
    background-position: 0% 45%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height:700px;
    color:white;
}
.about H1{
  font-weight:700;
}
.about H3{
  margin-top: 300px;
}

img{
    background-size: cover;
    background-position: top center;
    max-width: 100%;
}
@media (max-width: 768px) { 
    .part2{
        display: none;
    }
   }
.word{
    display: flex;
}
.ftphoto{
  max-width: 100px;
}
p{
    font-size: 15px;
}
    
</style>