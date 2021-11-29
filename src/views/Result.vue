<template>
  <div class="result container form-container">
    <h1 class="text-center mb-5">Results verification page Khanh Nguyen</h1>

    <!-- Personal Info -->
    <section class="mb-4 form-section">
      <h4 class="fw-bold text-uppercase">Personal Information</h4>
      <div class="mb-3">
        <div class="form-label mb-0">Last name, First name:</div>
        <p>{{ this.form.lastName }}, {{ this.form.firstName }}</p>
      </div>
      <div class="mb-3">
        <div class="form-label mb-0">Preferred Title:</div>
        <p>{{ getPreferredTitle }}</p>
      </div>
      <div class="mb-3">
        <div class="form-label mb-0">Your Height:</div>
        <p>{{ getHeight }}</p>
      </div>
      <div>
        <div class="form-label mb-0">Phone Number:</div>
        <p class="mb-0">{{ this.form.phone }}</p>
      </div>
    </section>

    <!-- Address Info -->
    <section class="mb-4 form-section">
      <h4 class="fw-bold text-uppercase">Address Information</h4>
      <p class="mb-0">{{ this.form.address.streetAddress }}</p>
      <p class="mb-0" v-if="this.form.address.apartmentNumber">
        {{ this.form.address.apartmentNumber }}
      </p>
      <p class="mb-3">
        {{ this.form.address.city }}, {{ this.form.address.state }}
        {{ this.form.address.zip }}
      </p>

      <!-- Google Maps -->
      <GMapMap
        v-if="mapCenter.lat && mapCenter.lng"
        :center="mapCenter"
        :zoom="14"
        map-type-id="roadmap"
      >
        <GMapMarker
          :position="mapCenter"
          :clickable="true"
          :draggable="true"
        />
      </GMapMap>
    </section>

    <!-- Services Preferences -->
    <section class="mb-4 form-section">
      <h4 class="fw-bold text-uppercase">Services Preferences</h4>
      <div class="form-label mb-0">All services you require:</div>
      <ul v-if="getServices.length > 0">
        <li v-for="service in getServices" :key="service.name">
          {{ service.value }}
        </li>
      </ul>
      <p v-else>No services selected.</p>
      <div class="form-label mb-0">Monthly Budget:</div>
      <p class="mb-0">{{ getBudget }}</p>
    </section>

    <!-- Contact Info -->
    <section class="mb-5 form-section">
      <h4 class="fw-bold text-uppercase">Contact Information</h4>
      <p class="form-label mb-0">Email Address:</p>
      <p class="mb-0">{{ this.form.email }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        preferredTitle: "",
        height: {
          feet: 0,
          inches: 0,
        },
        phone: "",
        address: {
          streetAddress: "",
          apartmentNumber: "",
          city: "",
          state: "",
          zip: "",
        },
        services: [],
        monthlyBudget: "",
        email: "",
        terms: false,
        captcha: false,
      },
      preferredTitles: [
        {
          name: "none",
          value: "None",
        },
        {
          name: "student",
          value: "Student",
        },
        {
          name: "professor",
          value: "Professor",
        },
        {
          name: "staff",
          value: "Staff",
        },
        {
          name: "retired",
          value: "Retired",
        },
      ],
      services: [
        {
          name: "email",
          value: "Email",
        },
        {
          name: "phone",
          value: "Phone",
        },
        {
          name: "facebook",
          value: "Facebook",
        },
        {
          name: "twitter",
          value: "Twitter",
        },
        {
          name: "surface",
          value: "Surface mail",
        },
        {
          name: "personal",
          value: "Personal visit",
        },
      ],
      budgets: [
        {
          name: "lessThan50",
          value: "Less than $50",
        },
        {
          name: "between50And100",
          value: "Between $50 and $100",
        },
        {
          name: "above100",
          value: "Above $100",
        },
      ],
      mapCenter: {
        lat: null,
        lng: null,
      },
    };
  },
  computed: {
    getPreferredTitle() {
      return this.preferredTitles.find(
        (title) => title.name === this.form.preferredTitle
      )?.value;
    },
    getServices() {
      return this.services.filter((service) =>
        this.form.services.includes(service.name)
      );
    },
    getBudget() {
      let budget = this.budgets.find(
        (budget) => budget.name === this.form.monthlyBudget
      );
      return budget ? budget.value : "No budget selected.";
    },
    getHeight() {
      let { feet, inches } = this.form.height;
      return feet > 0 || inches > 0
        ? `${feet}' ${inches}''`
        : "No height specified.";
    },
  },
  async mounted() {
    // parse local storage to get form data
    this.form = JSON.parse(localStorage.getItem("form"));

    // get address information from form
    let { streetAddress, apartmentNumber, city, state, zip } = this.form.address;

    // call Geocode API to get latitude and longitude from address information
    let query = `${streetAddress},${apartmentNumber},${city},${state},${zip}`;
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyC4Dwl-tqT4jJ8F8FxIw0ALr9yxxoXI0MI`
    );
    const data = await response.json();

    // set latitude and longitude for map center and marker 
    let { lat, lng } = data.results[0].geometry.location;
    this.mapCenter = {
      lat: lat,
      lng: lng
    }
  },
};
</script>

<style scoped>
/deep/ .vue-map-container {
  height: 20rem;
}
</style>
