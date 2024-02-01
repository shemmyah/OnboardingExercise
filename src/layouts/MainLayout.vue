<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="drawer" show-if-above :width="75" bordered>
      <q-list class="fixed-top">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon
              v-for="size in ['lg']"
              :key="size"
              :size="size"
              name="diamond"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="fixed-bottom">
        <q-item clickable v-ripple @click="navigateTo('home')">
          <q-item-section avatar>
            <q-icon
              v-for="size in ['lg']"
              :key="size"
              :size="size"
              name="home"
            />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="toggleLeftDrawer">
          <q-item-section avatar>
            <q-icon
              v-for="size in ['lg']"
              :key="size"
              :size="size"
              name="menu"
            />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="navigateTo('dashboard')">
          <q-item-section>
            <center>
              <b>Menu</b>
            </center>
          </q-item-section>
        </q-item>

        <div v-if="shouldDisplayEssentialLink">
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [{}];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const drawer = ref(false);

    const toggleLeftDrawer = () => {
      drawer.value = !drawer.value;
    };

    const shouldDisplayEssentialLink = ref(false);

    return {
      essentialLinks: linksList,
      drawer,
      toggleLeftDrawer,
      shouldDisplayEssentialLink,
    };
  },
});
</script>
