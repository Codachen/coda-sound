<template>
  <div>
    <div class="container py-5">
    <div class="row">
        <div class="col-md-12">
		<div class="col-md-12 text-center mb-5">
            <img src="https://raw.githubusercontent.com/Codachen/codachen.github.io/main/assets/img/hero-bg.jpg" height="200px">
			</div>
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <!-- form card login -->
                    <div class="card rounded-0" id="login-form">
                        <div class="card-header">
                            <h3 class="mb-0">管理員登入 
                              <button type="button" class="btn btn-info btn-lg me-md-5 float-right" @click="back">返回</button>
                              <router-link to="/"><button type="button" class="btn btn-primary btn-lg float-right">首頁</button></router-link>
                              </h3>
                        </div>
                        <div class="card-body">
                            <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" @submit.prevent="signin">
                                <div class="form-group">
                                    <label for="uname1">Username</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" placeholder="輸入信箱" v-model="user.username" required>    
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" placeholder="輸入密碼" v-model="user.password" required>
                                </div>
                                <button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">登入</button>
                            </form>
                        </div>
                    </div>
                    <!-- /form card login end-->
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = `${process.env.APIPATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/admin/products");
          const token = response.data.token;
          const expired = response.data.expired;
          console.log(token, expired);
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
        }
      });
    },
    back(){
      this.$router.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    background-color: white;
}
.btn{
  margin-right: 10px;
}

#loginbox {
    margin-top: 30px;
}

#loginbox > div:first-child {        
    padding-bottom: 10px;    
}

.iconmelon {
    display: block;
    margin: auto;
}

#form > div {
    margin-bottom: 25px;
}

#form > div:last-child {
    margin-top: 10px;
    margin-bottom: 10px;
}

.panel {    
    background-color: transparent;
}

.panel-body {
    padding-top: 30px;
    background-color: rgba(2555,255,255,.3);
}

#particles {
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;                        
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -2;
}

.iconmelon,
.im {
  position: relative;
  width: 150px;
  height: 150px;
  display: block;
  fill: #525151;
}

.iconmelon:after,
.im:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>