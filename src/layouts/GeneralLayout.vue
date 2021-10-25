<template>
    <div >
        <Sidebar :items="sidebarItems" />
        <div class="main">
          <header>
            <Navbar />
          </header>
          <div>
            <router-view></router-view>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'GeneralLayout',
  data() {
    return {
      sidebarItems:[{
  "title": "Empresas",
  "subitems": [
    {
      "title": "Empresas",
      "urlName": "/"
    }
  ]
}, {
  "title": "Artículos",
  "subitems": [
    {
      "title": "Artículos",
      "urlName": "/"
    }
  ]
}, {
  "title": "Colaboradores",
  "subitems": [
    {
      "title": "Colaboradores",
      "urlName": "/"
    }
  ]
}]
    }
  },
  components: {
    Navbar,
    Footer,
    Sidebar,
  }
}
</script>
