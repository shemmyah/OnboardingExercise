<!-- OMPAD, JOSHUA LOU RENZ C. -->
<!-- To access data from axios and JSON-SERVER,
kindly run from terminal "json-server --watch data/db.json"
without the "" -->

<template>
  <div class="dashboard">
    <div class="flex">
      <q-col v-if="!drawer" class="">
        <div class="dashboard-outputcontainer2">
          <div class="top-pos">
            <h6 class="table-title">Employee List</h6>

            <div class="download-box">
              <q-icon
                class="material-icons-outlined download-icon"
                name="get_app"
              />
              <label>Download</label>
            </div>

            <!-- Search bar for Data -->

            <q-input
              class="searchinput"
              v-model="search"
              placeholder="Search..."
              clearable
              dense
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>

          <!-- Rows Filter and Date Filter -->
          <div class="q-pa-md">
            <span class="span-filter">Filters:</span>
            <q-select
              v-model="rowsPerPage"
              :options="rowsPerPageOptions"
              label="All"
              dense
              rounded
              outlined
              emit-value
              map-options
              input-debounce="0"
              class="Pagefilter"
              style="height: 40px"
              @input="updateRowsPerPage"
            />
            <q-input
              v-model="date"
              mask="date"
              :rules="['date']"
              label="Select Date"
              rounded
              outlined
              class="custom-date-input"
            >
              <!-- <template v-slot:append>
                <q-icon name="event" class="calendar-icon" />
              </template> -->

              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <!-- table component -->
          <q-table
            :rows="filteredRows"
            :columns="columns"
            row-key="id"
            :rows-per-page-options="[0]"
            hide-bottom
            class="my-table"
          >
            <template v-slot:body-cell-actions="{ value: row }">
              <q-btn flat icon="more_vert">
                <q-menu>
                  <q-list dense style="min-width: 100px">
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-btn @click="editAction(row)" flat>Edit</q-btn>
                      </q-item-section>
                    </q-item>
                    <q-separator></q-separator>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-btn @click="deleteAction(row)" flat>Delete</q-btn>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </template>
          </q-table>
        </div>
      </q-col>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, computed } from "vue";

// run (json-server --watch data/db.json) first to
// fetch data from db.json
const getTodos = () => {
  axios.get("http://localhost:3000/employee").then((response) => {
    rows.value = response.data;
  });
};
getTodos();

export default {
  setup() {
    const rows = ref([]);
    const columns = ref([]);
    const search = ref("");

    const updateRowsPerPage = () => {
      // Handle logic for updating rows per page
      console.log(`Rows per page updated to: ${rowsPerPage.value}`);
    };

    const getTodos = () => {
      axios.get("http://localhost:3000/employee").then((response) => {
        rows.value = response.data;
      });
    };

    const editAction = (row) => {
      // Handle edit action, e.g., open edit modal, etc.
      console.log("Edit action clicked", row);
    };

    const deleteAction = (row) => {
      // Handle delete action, e.g., prompt for confirmation, etc.
      console.log("Delete action clicked", row);
    };

    onMounted(() => {
      getTodos();

      columns.value = [
        {
          name: "id",
          required: true,
          label: "Employee ID",
          align: "left",
          field: "id",
          sortable: true,
          style: "width: 48px;",
          headerStyle: "background-color: rgb(36, 153, 144); color: white;",
        },
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: "name",
          sortable: true,
          style: "width: 48px;",
          headerStyle: "background-color: rgb(36, 153, 144); color: white;",
        },
        {
          name: "email",
          required: true,
          label: "Email",
          align: "left",
          field: "email",
          sortable: true,
          style: "width: 350px;",
          headerStyle: "background-color: rgb(36, 153, 144); color: white;",
        },
        {
          name: "status",
          required: true,
          label: "Status",
          align: "left",
          field: "status",
          sortable: true,
          style: "width: 320px;",
          headerStyle: "background-color: rgb(36, 153, 144); color: white;",
        },
        {
          name: "address",
          required: true,
          label: "Address",
          align: "left",
          field: "address",
          headerStyle: "background-color: rgb(36, 153, 144); color: white;",
        },
        {
          name: "actions",
          label: "",
          align: "left",
          field: "actions",
          headerStyle: "background-color: rgb(36, 153, 144); color: white;",
        },
      ];
    });

    // filtered words for search data
    const filteredRows = computed(() => {
      return rows.value.filter(
        (row) =>
          row.id.toLowerCase().includes(search.value.toLowerCase()) ||
          row.name.toLowerCase().includes(search.value.toLowerCase()) ||
          row.email.toLowerCase().includes(search.value.toLowerCase()) ||
          row.status.toLowerCase().includes(search.value.toLowerCase()) ||
          row.address.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    const rowsPerPageOptions = [5, 10, 20, 50, -1];

    return {
      search,
      rows,
      columns,
      filteredRows,
      rowsPerPageOptions,
      updateRowsPerPage,
      editAction,
      deleteAction,
    };
  },
};
</script>

<style scoped>
@import "pages/styles/Dashboard.scss";
</style>
