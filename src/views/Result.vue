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
        <p><span>{{ this.form.height.feet }}' </span><span>{{ this.form.height.inches }}"</span></p>
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
      <p class="mb-0" v-if="this.form.address.apartmentNumber">{{ this.form.address.apartmentNumber }}</p>
      <p class="mb-0">{{ this.form.address.city }}, {{ this.form.address.state }} {{ this.form.address.zip }}</p>
      <!-- Google Maps -->

    </section>

    <!-- Services Preferences -->
    <section class="mb-4 form-section">
      <h4 class="fw-bold text-uppercase">Services Preferences</h4>
      <div class="form-label mb-0">All services you require: </div>
      <ul v-if="getServices.length > 0">
        <li v-for="service in getServices" :key="service.name">{{ service.value }}</li>
      </ul>
      <p v-else>No services selected.</p>
      <div class="form-label mb-0">Monthly Budget: </div>
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
          name: 'none',
          value: 'None'
        },
        {
          name: 'student',
          value: 'Student'
        },
        {
          name: 'professor',
          value: 'Professor'
        },
        {
          name: 'staff',
          value: 'Staff'
        },
        {
          name: 'retired',
          value: 'Retired'
        },
      ],
      services: [
        {
          name: 'email',
          value: 'Email'
        },
        {
          name: 'phone',
          value: 'Phone'
        },
        {
          name: 'facebook',
          value: 'Facebook'
        },
        {
          name: 'twitter',
          value: 'Twitter'
        },
        {
          name: 'surface',
          value: 'Surface mail'
        },
        {
          name: 'personal',
          value: 'Personal visit'
        },
      ],
      budgets: [
        {
          name: 'lessThan50',
          value: 'Less than $50'
        },
        {
          name: 'between50And100',
          value: 'Between $50 and $100'
        },
        {
          name: 'above100',
          value: 'Above $100'
        },
      ],
    };
  },
  computed: {
    getPreferredTitle() {
      return this.preferredTitles.find(title => title.name === this.form.preferredTitle)?.value
    },
    getServices() {
      return this.services.filter(service => this.form.services.includes(service.name))
    },
    getBudget() {
      let budget = this.budgets.find(budget => budget.name === this.form.monthlyBudget)
      return budget ? budget.value : 'No budget selected.'
    },
},
  mounted() {
    this.form = JSON.parse(localStorage.getItem('form'))    
    // TODO - call google maps to display address

  },
};
</script>

<style scoped>

</style>
