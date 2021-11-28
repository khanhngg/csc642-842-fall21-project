<template>
  <div class="result container">
    <h1 class="text-center">Results verification page Khanh Nguyen</h1>
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
    };
  },
  computed: {},
  mounted() {
    this.form = JSON.parse(localStorage.getItem('form'))
    console.log(this.form)
    // TODO - call google maps to display address

  },
};
</script>

<style scoped>

</style>
