<template>
    <div>
    <header>
        <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <img src="https://cdn-icons-png.flaticon.com/512/65/65129.png" style="max-width:40px"  href="#" @click="backtop">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <router-link to="/" class="nav-link" href="#">首頁</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/brand" class="nav-link" href="#" tabindex="-1" aria-disabled="true">品牌故事</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/product" class="nav-link" href="#" tabindex="-1" aria-disabled="true">供應商品</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/location" class="nav-link" href="#" tabindex="-1" aria-disabled="true">營業資訊</router-link>
                </li>
            </ul>
            <div class="dropdown ml-auto">
        <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
          <i class="fa fa-shopping-cart text-dark fa-2x" aria-hidden="true"></i>
          <span class="badge badge-pill badge-danger">{{cart.carts.length}}</span>
        </button>

        <div class="dropdown-menu dropdown-menu-right p-3" style="min-width: 300px" data-offset="400" >
          <h6>已選擇商品</h6>
          <table class="table table-sm">
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts.length">
                <td class="align-middle text-center">
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}{{item.product.unit}}</td>
                <td class="align-middle text-right">{{item.total}}</td>
              </tr>
            </tbody>
          </table>
          <router-link aria-hidden="true" to="/order" class="text-light">
          <button class="btn btn-primary btn-block">
            <i class="fa fa-cart-plus">結帳去</i>
          </button>
          </router-link> 
        </div>
      </div>
            </div>
        </nav>
        </header>
    </div>
</template>


<script>
import $ from 'jquery';
export default {
  data(){
    return {
    }
  },
  methods:{
    getCart() {
      this.$store.dispatch('getCart',);
    },
    removeCart(id){
    this.$store.dispatch('removeCart',id);
    },
     removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(response => {
        vm.getCart();
        console.log(response);
        vm.isLoading = false;
      });
    },
     backtop(){
          var timer = setInterval(function(){
            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5); 
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            this.isTop = true;
            if(osTop === 0){
              clearInterval(timer);
            }
          },10)
      }
  },
  computed:{
    cart(){
      return this.$store.state.cart;
    }
  }
  
  }
</script>
<style scoped>
.navbar-nav > .nav-item{
  font-weight:bold;
  padding-left:30px;
  padding-right:30px;
  margin-left:30px;
  margin-right:10px;
  text-align:center;
  align-items: center;
  line-height: 25px;
  border-style: solid; border-width: 0 0 5px 0;
  border-color:transparent;
}
.navbar-nav > .nav-item:hover{
  border-style: solid; border-width: 0 0 5px 0;
  border-color: #5B5B5B;
  text-decoration:none;	
}
</style>
