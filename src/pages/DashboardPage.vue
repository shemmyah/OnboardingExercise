<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="dashboard">
      <div class="navbar">
        <GlobalSearch :onGlobalSearch="onGlobalSearch" class="global-search" />
        <q-icon
          name="notifications"
          class="notification_bell"
          clickable
          v-ripple
          @click="navigateTo('dashboard')"
        />
        <q-icon
          name="account_circle"
          class="person_profile"
          clickable
          v-ripple
          @click="navigateTo('dashboard')"
        >
        </q-icon>
      </div>

      <div class="flex">
        <q-col v-if="!drawer" class="">
          <div class="menu-container">
            <q-toolbar>
              <q-toolbar-title>
                <span class="absolute-left" id="menu-title"><b>Menu</b></span>
              </q-toolbar-title>
            </q-toolbar>
            <q-list>
              <q-item
                v-for="menu in menus"
                :key="menu.id"
                clickable
                class="full-width-hover"
                @click="changeContainer(menu.id)"
              >
                <q-item-section>
                  <q-icon :name="menu.icon" class="material-icons-outlined" />
                </q-item-section>

                <q-item-section class="text-section">
                  <q-item-label>{{ menu.text }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-col>
        <q-col class="q-pa-md">
          <component :is="activeContainerComponent">
            <CardDash />
            <ActivityLogs />
            <ProfileDetails />
          </component>
        </q-col>
      </div>
    </div>
  </transition>
</template>

<script>
import CardDash from "pages/FrontendExercise/CardDash.vue";
import ActivityLogs from "pages/FrontendExercise/ActivityLogs.vue";
import ProfileDetails from "pages/FrontendExercise/ProfileDetails.vue";
import GlobalSearch from "../components/GlobalSearch.vue";

export default {
  components: {
    GlobalSearch,
  },
  data() {
    return {
      drawer: false,
      activeContainer: "menu1",
      menus: [
        { id: "menu1", text: "menu 1", icon: "account_balance" },
        { id: "menu2", text: "menu 2", icon: "groups" },
        { id: "menu3", text: "menu 3", icon: "legend_toggle" },
      ],
      components: {
        menu1: CardDash,
        menu2: ActivityLogs,
        menu3: ProfileDetails,
      },
    };
  },
  computed: {
    activeContainerComponent() {
      return this.components[this.activeContainer] || CardDash;
    },
  },
  methods: {
    isDrawerOpen() {
      return this.drawer;
    },
    changeContainer(menuId) {
      this.activeContainer = menuId;
    },
    onGlobalSearch(query) {
      // Handle the global search query, e.g., filter data or perform a global search
      console.log("Global Search:", query);
      // You can use this query to filter or perform a global search in your components
    },
  },
};
</script>

<style lang="scss">
@import "./styles/Dashboard.scss";
</style>
