<template>
    <div>
        <Navbar></Navbar>
        <Home/>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
export default {
    components:{
        Navbar,
        Home,
        Footer

    }
}
</script>