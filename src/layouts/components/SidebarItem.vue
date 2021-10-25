<template>
  <li
    :class="{
      sidebar__content__menu__item: true,
      'sidebar__content__menu__item-open': !isCollapsed,
    }"
  >
    <span class="sidebar__content__menu__item__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-bag-dash-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"
        />
      </svg>
    </span>
    <span
      class="sidebar__content__menu__item__link"
      v-show="!parentCollapsed"
      >{{ item.title }}</span
    >
    <span
      class="sidebar__content__menu__item__arrow"
      @click="toCollapse"
      v-show="!parentCollapsed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </span>
    <ul
      class="sidebar__content__menu__item__submenu"
      v-show="!isCollapsed && !parentCollapsed"
    >
      <li
        v-for="(subitem, index) in item.subitems"
        :key="index"
        class="sidebar__content__menu__item__submenu__item"
      >
        <router-link
          :to="subitem.urlName"
          class="sidebar__content__menu__item__submenu__item__link"
        >
          {{ subitem.title }}
        </router-link>
      </li>
    </ul>
  </li>
</template>
<script>
export default {
  name: "SidebarItem",
  data() {
    return {
      isCollapsed: true,
    };
  },
  props: {
    item: Object,
    parentCollapsed: Boolean,
  },
  methods: {
    toCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>