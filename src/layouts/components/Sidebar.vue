<template>
<div :class="{'sidebar': true, 'sidebar-collapsed': isCollapsed}">
    <div class="sidebar__header">
        <span class="sidebar__header__icon" @click="toCollapse">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
        </span>
        <img class="sidebar__header__logo" src="@/assets/logo-white.svg" alt="logo-white" v-show="!isCollapsed">
    </div>
    <div class="sidebar__content">
        <span class="sidebar__content__title" v-show="!isCollapsed">Entities</span>
        <ul class="sidebar__content__menu">
            <SidebarItem v-for="(item, index) in items" :key="index" :item="item" :parentCollapsed="isCollapsed"/>
        </ul>
    </div>
</div>
</template>
<script>
import SidebarItem from './SidebarItem.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem,
  },
  data() {
        return {
            isCollapsed: true
        }
    },
    props: {
        items: Object
    },
    methods: {
        toCollapse() {
            this.isCollapsed = !this.isCollapsed;
        }
    }
}
</script>