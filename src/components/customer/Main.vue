<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';
export default {
    components:{
        Navbar,
        Footer
    }
}
</script>