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
                <h1 style="font-wight:bolder" class="mbr-section-title align-center mbr-fonts-style mbr-bold display-2">
                    BRAND STORY</h1>
            </div>
        </div>
    </div>
    </div>
</section>
        

      <section class="features1 cid-qz32aCE6EP" id="features1-8z" data-rv-view="3310">

    <div class="container-fluid">
        <div class="row main align-items-center">
            <div class="col-md-6 image-element align-self-stretch">
                <div class="img-wrap" style="width: 100%; height: 100%; margin:30px">
                    <img src="https://cdn-icons-png.flaticon.com/512/65/65129.png" media-simple="true">
                </div>
            </div>
            <div class="col-md-6 text-element">
                <div class="text-content">
                    <h2 class="mbr-title pt-2 mbr-fonts-style align-center display-2">
                        緣起
                    </h2>
                    <div class="underline align-center">
                         <div class="line"></div>
                    </div>
                    <div class="mbr-section-text">
                      <h2>「如果聲音有形狀，<br>那會是什麼樣子呢？」</h2>
                        <p class="mbr-text pt-3 mbr-light mbr-fonts-style align-center display-5">
                           相信每個人都會有不同的答案，而無論你的回答是什麼，交給我們來實現吧！＂CODA＂在音韻學中意旨韻尾，有了CODA，讓每段聲音更完整精彩。 
                        </p>
                    </div>
                    <div class="mbr-section-btn pt-3 align-center">
                      <ul class="social-icons">
                        <a href="https://www.facebook.com/" target="_blank"><img src="https://raw.githubusercontent.com/Codachen/codachen.github.io/main/assets/img/FB.png"></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src ="https://raw.githubusercontent.com/Codachen/codachen.github.io/main/assets/img/IG.png"></a>
                        <a href="https://line.me/zh-hant/" target="_blank"><img src ="https://raw.githubusercontent.com/Codachen/codachen.github.io/main/assets/img/Line.png" width="41px"></a>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>          
</section>

<section class="features2 cid-qz32cd7MgV" id="features2-90" data-rv-view="3313">

    

    
    <div class="container-fluid">
        <div class="row main align-items-center">
            <div class="col-md-6 image-element align-self-stretch">
                <div class="img-wrap" style="width: 80%; height: 80%;">
                    <img src="https://images.unsplash.com/photo-1475196045479-d7313ffcd5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" media-simple="true">
                </div>
            </div>
            <div class="col-md-6 text-element">
                <div class="text-content">
                    <h2 class="mbr-title pt-2 mbr-fonts-style align-center display-2">
                        我們相信...
                    </h2>
                    <div class="underline align-center">
                         <div class="line"></div>
                    </div>
                    <div class="mbr-section-text">
                      <h2>「戴上耳機，<br>你便擁有了全世界！」</h2>
                        <p class="mbr-text pt-3 mbr-light mbr-fonts-style align-center display-5">
                            秉持這個信念，我們致力於提供您通往音樂世界的鑰匙，隔絕紛擾與煩惱，恣意讓自己的靈魂徜徉其中。
                        </p>
                    </div>
                    <div class="mbr-section-btn pt-3 align-center">
                         <router-link to="/product" class="nav-link" href="#" tabindex="-1" aria-disabled="true"><a class="btn btn-md btn-primary display-4">VIEW COLLECTION</a></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>          
</section>
<!-- start -->
<div class="container marketing" style="padding-top: 100px;">

            <div class="row featurette" v-for="(intro,i) in intros" :key=i style="padding-bottom: 150px;">
            <div class="col-sm-6" :class="{'order-md-2': i%2==0 }">
                <h3 class="featurette-heading">{{intro.title1}}</h3>
                <h4 class="text-muted">{{intro.title2}}</h4>
                <p class="lead">{{intro.text}}</p>
            </div>
            <div class="col-sm-6">
                    <img :src="intro.img" class="cphoto" style="border-radius: 150px;">
            </div>
    
            <hr class="featurette-divider">
            </div>
        </div>
<!-- end -->
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
    data() {
      return {
        intros:[
          {
            title1:'追求完美音質',
            title2:'滿足各式產品需求',
            text:'CODA Sound提供一應俱全的產品，層次豐富的高低音都能完美呈現。無論是何種需求，你都能在這裡得到滿足。',
            img:'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
          },
          {
            title1:'無干擾聆賞空間',
            title2:'沉浸在純粹聽覺環境',
            text:'我們提供聆賞空間租借服務，隔絕外界的紛擾雜音，找到最身歷其境的聆聽體驗。',
            img:'https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
          },
          {
            title1:'專業維修與保養',
            title2:'音樂持續不間斷',
            text:'產品皆經嚴格測試，並且提供專業相關服務。無論是開一整天的視訊會議、與朋友聯絡，或沉浸 在最愛的播放清單，都能讓你樂趣不中斷，持續聆聽。',
            img:'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
          },
          {
            title1:'兼顧視覺與聽覺',
            title2:'搭配你的絕佳品味',
            text:'嚴選耳機皆採用科技感十足的設計，不只外觀前衛時尚，更是展現個人特色的個性單品',
            img:'https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
          }
        ]
      }
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
    background-image: url(https://raw.githubusercontent.com/Codachen/codachen.github.io/main/assets/img/b.jpg);
    background-size: cover;
    background-position: 0% 40%;
    background-attachment: fixed;
    min-height:700px;
    color:#ffff;
}
.about H1{
  margin-top: px;
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
  
    .featurette-heading {
      font-size: 50px;
    }
  }
  
  @media (min-width: 62em) {
    .featurette-heading {
      margin-top: 7rem;
    }
  }

.cphoto{
    max-width: 100%;
    background-position: center center;
    background-size:cover;
}
</style>