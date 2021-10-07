<template>
    <div>
        
          <!--   cover  -->
        <div class="jumbotron bg-image">
 
        <div class="container">
        <div class="title2">
        <h1 style="font-size:150px">CODA Sound</h1>
        <p style="font-size:30px;">重新定義聆聽享受，解放前所未有的聲音自由</p>
        <p ><router-link to="/product" class="btn btn-lg btn-outline-light" href="#" role="button">立即體驗</router-link></p>
    </div>

    <!--   /cover  -->
    
    </div>
<!--   /container  -->
</div>

        <div class="container text-center p-5">
            <img src="" alt="">
        </div>

<!-- new index -->
<section class="counters1 counters cid-s8XeIziAPT mbr-parallax-background visible" id="countres01-4" style="z-index: 0; background-image: none; position: relative; margin-top: -100px; " >

    

    <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(255, 255, 255);">
    </div>

    <div class="container">
        <div class="row jc-e">

            <div class="col-lg-8 mb-5">
                <h2 class="title align-left mb-5 mbr-fonts-style display-2" style="font-color:black;"><strong>擺脫枷鎖 <br>與靈魂中的律動相遇</strong></h2>
            </div>

            <div class="col-lg-5">
                <div class="row">
                    <div class="card align-left mb-5 col-12 col-lg-6 col-md-6" v-for="(item,i) in overview" :key=i>
                        <div class="panel-item">
                            <div class="card-img">

                                <h3 class="count align-left mbr-fonts-style display-2">{{item.num}}</h3>
                            </div>
                            <div class="card-text">
                                <h4 class="mbr-content-title mbr-fonts-style display-7">{{item.title}}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div id="jarallax-container-0" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;"><div style="background-position: 0% 30%; background-size: cover; background-repeat: no-repeat; background-image: url('https://images.unsplash.com/photo-1620578077783-33e254311182?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80'); position: absolute; top: 0px; left: 50px; width: 803px; height: 730px; overflow: hidden; pointer-events: none; transform: translate3d(0px, 284.425px, 0px);"></div></div></section>

<section class="features10 cid-s8XgpbhZNg" id="features010-d">
    

    
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6 col-lg-4" v-for="(card, i) in cards" :key="i">
                <div class="card-wrap" :class="[{'card2':i==1},{'card3':i==2}]">
                    <div class="image-wrap">
                        <img :src="card.img" style="border-radius: 50px;">
                    </div>
                    <div class="content-wrap">
                        <h5 class="mbr-section-title card-title mbr-fonts-style align-left display-4">{{card.title}}</h5>
                        <h6 class="mbr-role mbr-fonts-style align-left mb-2 display-5"><strong>{{card.text}}</strong></h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="features5 cid-s8XhrNzhxY" id="features05-g">
    <div class="container">
        <div class="mbr-section-head row">
            <div class="col-12">
                <h3 class="mbr-section-subtitle mbr-fonts-style align-left mb-3 display-4">AWARDS &amp; HONORS</h3>
                <h2 class="mbr-section-title mbr-fonts-style align-left mb-5 display-2"><strong>來自各界肯定 <br>屢摘獎項信譽品牌
                    </strong></h2>
            </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-4 col-md-6 col-12" v-for="(award,i) in awards" :key=i>
                <div class="card-wrapper">
                    <div class="card-box align-left">
                        <h5 class="card-subtitle mbr-fonts-style align-left display-5">{{award.year}}</h5>
                        <h4 class="card-title mbr-fonts-style align-left display-5"><strong>{{award.title}}</strong></h4>
                        <p class="mbr-text mbr-fonts-style mb-3 display-7">
                            {{award.text}}</p>
                        <div class="link-wrap">
                            
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</section>

<section class="features4 cid-s8XhyqjNEB" id="features04-h">

    

    
    <div class="container">
        <div class="row">

            <div class="col-lg-6">
                <div class="row row-center">
                    <div class="card p-3 col-12">
                        <div class="card-wrapper">
                            <div class="card-img">
                                <img src="https://images.unsplash.com/photo-1590845947676-fa2576f401b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80">
                            </div>
                            <div class="card-box"  v-for="(card,i) in cards" :key=i>
                                <h4 class="card-title align-center mbr-white mbr-fonts-style display-4">
                                    {{card.title}}</h4>
                                <p class="mbr-text align-center mbr-white mbr-fonts-style display-5"><strong>{{card.text}}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-lg-6">
                <div class="row row-center">

                    <div class="card p-3 col-lg-12 col-12">
                        <router-link to="/product"><div class="card-wrapper">
                            <div class="card-img">
                                <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80">
                            </div>
                            <div class="card-box">

                                <h4 class="card-title align-center mbr-white mbr-fonts-style display-4">
                                    Products</h4>
                                <p class="mbr-text align-center mbr-white mbr-fonts-style display-5"><strong>供應商品</strong>
                                </p>
                            </div>
                        </div></router-link>
                    </div>
                    <div class="card p-3 col-lg-6 col-12">
                        <router-link to="/brand">  <div class="card-wrapper">
                            <div class="card-img">
                                <img src="https://raw.githubusercontent.com/Codachen/codachen.github.io/main/assets/img/b.jpg">
                            </div>
                            <div class="card-box">

                                <h4 class="card-title align-center mbr-white mbr-fonts-style display-4">
                                    Brand</h4>
                                <p class="mbr-text align-center mbr-white mbr-fonts-style display-5"><strong>品牌故事</strong>
                                </p>
                            </div>
                        </div></router-link>
                    </div>
                    

                    <div class="card p-3 col-lg-6 col-12">
                        <router-link to="/location"><div class="card-wrapper">
                            <div class="card-img">
                                <img src="https://images.unsplash.com/photo-1494129935429-873eafa78178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1203&q=80" style="width:700px;">
                            </div>
                            <div class="card-box">

                                <h4 class="card-title align-center mbr-white mbr-fonts-style display-4">
                                    Location</h4>
                                <p class="mbr-text align-center mbr-white mbr-fonts-style display-5"><strong>營業資訊</strong>
                                </p>
                            </div>
                        </div></router-link>
                    </div>
                </div>
            </div>






        </div>
    </div>
</section>

<section class="contacts2 cid-s8XeQBvHsp" id="contacts02-6">
    
    
    <div class="container">
        <div class="row justify-content-center">
            <div class="title col-md-12 col-lg-12">
                <h3 class="mbr-section-title mbr-fonts-style align-left pb-5 display-5">
                    若您有其他問題，竭誠期待來信讓我們為您服務：</h3>
                <div class="align-wrapper align-left">
                    <h4 class="mbr-section-text align-left mbr-fonts-style mb-4 display-2"><strong>
                            service@codasound.com</strong></h4>
                </div>
                
            </div>
        </div>
    </div>
</section>



<section class="map1 cid-s8XeT7p4iU" id="map01-8">
    <div>
    <div class="google-map"><iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d462784.5145298642!2d121.2261834!3d25.0169639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2z5Y-w5YyXMTAx!5e0!3m2!1szh-TW!2stw!4v1633586258248!5m2!1szh-TW!2stw" allowfullscreen=""></iframe></div>
    </div>
</section>

<!-- new index end -->
        
        <script type="application/javascript" defer src="../../../static/css/jquery.min.js"></script>
      <script type="application/javascript" defer src="../../../static/css/jquery.viewportchecker.js"></script>
    </div>
</template>

<script>
export default{
  data() {
    return {
      overview:[
        {
          title:'據點數量',
          num:'61'
        },
        {
          title:'品牌授權代理',
          num:'72'
        },
        {
          title:'Google評價平均★★★★★',
          num:'4.9'
        },
        {
          title:'獲獎紀錄',
          num:'37'
        }
      ],
      cards:[
        {
          title:'聽見美好',
          text:'優質產品',
          img:'https://images.unsplash.com/photo-1481207801830-97f0f9a1337e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
         {
          title:'純淨環境',
          text:'聆賞空間',
          img:'https://images.unsplash.com/photo-1565742319477-fd961565e476?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
         {
          title:'專業服務',
          text:'維修保養',
          img:'https://images.unsplash.com/photo-1616512276680-6d2f34429103?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80'
        }
      ],
      awards:[
        {
          year:'2020',
          title:'DHA 最佳電子商務行銷獎',
          text:'發掘與定義問題，並透過科技解決問題，是企業數位創新能力的本質。'
        },
        {
          year:'2020',
          title:'亞洲最佳電子商務行銷獎',
          text:'品牌透過電子商務平台的廣告行銷或電商平台的自身促銷活動，及銷售與服務流程中，創造良好的客戶體驗與認知，促進銷售目的。'
        },
        {
          year:'2021',
          title:'BiTe Awards 最佳客服獎',
          text:' 對客戶體驗及雲客戶交互解決方案的承諾，以及在當前全球疫情期間致力於説明其客戶轉型並發展的貢獻。此獎項被認為是客戶服務，聯絡中心，業務拓展和銷售領域的最高榮譽。'
        },
        {
          year:'2021',
          title:'iCommerce 創新商務獎',
          text:'以客戶最佳體驗出發，全面整合線上、線下通路、兼顧銷售與服務，導入大數據、人工智慧新技術，提升服務及管理效率。'
        },
        {
          year:'2021',
          title:'FDD 市場營銷獎',
          text:'堅持以消費者為中心，並以強大的執行力完美應對各個市場上的複雜變化。'
        },
        {
          year:'2021',
          title:'Brands 傑出品牌風格大賞',
          text:' 「品牌」的意義在於一間公司、企業的驕傲與優勢，品牌力會因其服務或品質，形成無形的商業定位；品牌是獨占性的商業符號，而這一符號需要被人們所認知，也就將具有意義。'
        }
      ]
    }
  },
}
</script>

<style scoped>
@import '../../../static/css/style(2).css';
@import '../../../static/css/mbr-additional2.css';
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

/* Cover */
.jumbotron {
 width:100%;
  height: 100vh;
  display:table;
  
}
.title2{
  margin-top:300px;
  color:#ffff
}

.bg-image {
  background: 
   
    url('https://images.unsplash.com/photo-1509098681029-b45e9c845022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat center center;
   -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
   background-color:#ccc;
  background-size: cover;
}

.jumbotron .container {
  display:table-cell;
  vertical-align:middle;
  text-align: center;
}

</style>