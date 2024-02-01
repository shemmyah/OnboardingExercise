<template>
  <div class="dashboard">
    <div class="flex">
      <div class="dashboard-outputcontainer3">
        <div class="header"></div>
        <div class="Arrow_SPD">
          <q-icon name="arrow_back" class="arrow_back" />
          <span class="SPD">Staff Profile Details</span>
        </div>

        <div class="header1"></div>
        <form @submit.prevent="saveChanges">
          <div class="box">
            <!-- <legend>Staff Information</legend> -->

            <div>
              <label for="name">Name:</label>
              <input type="text" v-model="profile.name" id="name" />
            </div>

            <div>
              <label for="employeeId">Employee ID:</label>
              <input type="text" v-model="profile.employeeId" id="employeeId" />
            </div>

            <div>
              <label for="email">Email:</label>
              <input type="email" v-model="profile.email" id="email" />
            </div>

            <div>
              <label for="currentTask">Current Task:</label>
              <input
                type="text"
                v-model="profile.currentTask"
                id="currentTask"
              />
            </div>

            <div>
              <label for="description">Description:</label>
              <textarea
                v-model="profile.description"
                id="description"
                style="height: 168px; resize: none"
              ></textarea>
            </div>

            <div>
              <label for="status">Status:</label>
              <input type="text" v-model="profile.status" id="status" />
            </div>

            <div>
              <label for="homeAddress">Home Address:</label>
              <input
                type="text"
                v-model="profile.homeAddress"
                id="homeAddress"
              />
            </div>

            <button class="btn" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: "",
        employeeId: "",
        email: "",
        currentTask: "",
        description: "",
        status: "",
        homeAddress: "",
      },
    };
  },
  methods: {
    saveChanges() {
      // Handle saving changes here
      console.log("Profile saved:", this.profile);
    },
  },
};
</script>

<style scoped>
@import "pages/styles/Dashboard.scss";
</style>
