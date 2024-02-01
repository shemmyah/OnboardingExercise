<template>
  <div class="dashboard">
    <div class="flex">
      <q-col v-if="!drawer" class="">
        <div class="dashboard-outputcontainer1">
          <h6 class="table-title">Dashboard</h6>

          <div class="q-pa-sm row q-gutter-sm q-gutter-md">
            <!-- card, index in cardList reference for  -->
            <q-card
              v-for="(card, index) in cardList"
              :key="index"
              class="my-card"
            >
              <q-card-section>
                <div class="text-h6">{{ card.title }}</div>
              </q-card-section>

              <q-separator dark inset />

              <q-card-section style="font-size: 10px">
                {{ card.description }}</q-card-section
              >
            </q-card>
          </div>
        </div>
      </q-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        { title: "CARD 1", description: "Description 1" },
        { title: "CARD 2", description: "Description 2" },
        { title: "CARD 3", description: "Description 3" },
        { title: "CARD 4", description: "Description 4" },
      ],
    };
  },
};
</script>

<style lang="scss">
/* Your component styles here */
@import "pages/styles/Dashboard.scss";
</style>
