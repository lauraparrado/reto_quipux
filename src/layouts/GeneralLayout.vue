<template>
    <div>
        <header>
            <Navbar />
        </header>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'GeneralLayout',
  components: {
    Navbar
  }
}
</script>
