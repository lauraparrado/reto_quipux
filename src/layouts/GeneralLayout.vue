<template>
    <div >
        <header>
            <Navbar />
        </header>
        <div>
          <SideBar />
           <router-view></router-view>
        </div>
        <footer>
          <Footer />
        </footer>
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'GeneralLayout',
  components: {
    Navbar,
    Footer,
  }
}
</script>
