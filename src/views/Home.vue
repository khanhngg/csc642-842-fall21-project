<template>
  <div class="home container form-container">
    <!-- Title -->
    <h6 class="text-center">
      CSC 642 842 Fall 2021 Individual Assignment Khanh Nguyen
    </h6>
    <h1 class="text-center">Data Survey Form</h1>
    <p class="form-text fst-italic mb-4">Required fields are marked with *</p>

    <!-- Form -->
    <form class="row g-3" @submit.prevent="onSubmit">
      <h4 class="fw-bold text-uppercase">Personal Information</h4>
      <!-- Last Name -->
      <div class="col-sm-6 mb-3">
        <label class="form-label">Last Name *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your last name"
          maxlength="40"
          required
          v-model="lastName"
        />
      </div>

      <!-- First Name -->
      <div class="col-sm-6 mb-3">
        <label class="form-label">First Name *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your first name"
          maxlength="40"
          required
          v-model="firstName"
        />
      </div>

      <!-- Preferred Title -->
      <div class="col-12 mb-3">
        <label class="form-label">Preferred Title *</label>
        <select class="form-select" required v-model="preferredTitle">
          <option selected value="">Select your preferred title...</option>
          <option value="none">None</option>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
          <option value="staff">Staff</option>
          <option value="retired">Retired</option>
        </select>
      </div>

      <!-- Height -->
      <label class="form-label mb-0">Height</label>
      <div class="col-12 col-md-3 mb-3 mt-0">
        <div class="form-text">Feet</div>
        <input
          type="number"
          class="form-control"
          placeholder="Feet"
          v-model="height.feet"
        />
      </div>
      <div class="col-12 col-md-3 mb-3 mt-0">
        <div class="form-text">Inches</div>
        <input
          type="number"
          class="form-control"
          placeholder="Inches"
          v-model="height.inches"
        />
      </div>

      <!-- Phone -->
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input
          type="tel"
          class="form-control"
          placeholder="1234567890"
          v-model="phone"
          v-mask="'(###) ###-####'"
        />
        <p class="form-text mb-0">Enter a 10 digit phone number</p>
      </div>

      <!-- Address -->
      <hr class="my-4" />
      <h4 class="fw-bold text-uppercase">Address Information</h4>
      <div class="col-12">
        <label class="form-label">Street Address *</label>
        <input
          type="text"
          class="form-control"
          placeholder="123 Main St"
          maxlength="40"
          required
          v-model="address.streetAddress"
        />
      </div>

      <div class="col-12">
        <label class="form-label">Apartment/Suite Number</label>
        <div class="col-md-5">
          <input
            type="text"
            class="form-control"
            placeholder="20A"
            v-model="address.apartmentNumber"
          />
        </div>
      </div>

      <div class="col-12">
        <label class="form-label">City *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter city name"
          v-model="address.city"
        />
      </div>

      <div class="col-md-5">
        <label for="country" class="form-label">Country *</label>
        <select
          class="form-select"
          id="country"
          required
          v-model="address.country"
        >
          <option value="">Select country...</option>
          <option>United States</option>
        </select>
      </div>

      <div class="col-md-4">
        <label for="state" class="form-label">State *</label>
        <select
          class="form-select"
          id="state"
          required
          v-model="address.state"
        >
          <option value="">Select state...</option>
          <option>California</option>
        </select>
      </div>

      <div class="col-md-3 mb-3">
        <label for="zip" class="form-label">Zip *</label>
        <input
          type="text"
          class="form-control"
          id="zip"
          placeholder="12345"
          maxlength="5"
          required
          v-model="address.zip"
        />
      </div>

      <!-- Services -->
      <hr class="my-4" />
      <h4 class="fw-bold text-uppercase">Services Preferences</h4>
      <div class="mb-3">
        <label class="form-label">Check all services you require:</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="email"
            v-model="services"
          />
          <label class="form-check-label">Email</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="phone"
            v-model="services"
          />
          <label class="form-check-label">Phone</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="facebook"
            v-model="services"
          />
          <label class="form-check-label">Facebook</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="twitter"
            v-model="services"
          />
          <label class="form-check-label">Twitter</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="surface"
            v-model="services"
          />
          <label class="form-check-label">Surface mail</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="personal"
            v-model="services"
          />
          <label class="form-check-label">Personal visit</label>
        </div>
      </div>

      <!-- Monthly Budget -->
      <div class="mb-3">
        <label class="form-label">Monthly Budget</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="lessThan50"
            v-model="monthlyBudget"
          />
          <label class="form-check-label">Less than $50</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="between50And100"
            v-model="monthlyBudget"
          />
          <label class="form-check-label">Between $50 and $100</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="above100"
            v-model="monthlyBudget"
          />
          <label class="form-check-label">Above $100</label>
        </div>
      </div>

      <!-- Email -->
      <hr class="my-4" />
      <h4 class="fw-bold text-uppercase">Contact Information</h4>
      <div class="mb-3">
        <label class="form-label">Email Address *</label>
        <input
          type="email"
          class="form-control"
          placeholder="you@example.com"
          required
          v-model="email"
        />
      </div>

      <!-- Terms and Conditions -->
      <hr class="my-4" />
      <div class="mb-3">
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            required
            v-model="terms"
          />
          <label class="form-check-label form-label">I agree to the <a href="#">Terms & Conditions</a> *</label>
        </div>
      </div>

      <!-- Captcha -->
      <div class="mb-5">
        <label class="form-label">CAPTCHA *</label>
        <input type="text" class="form-control" />
      </div>

      <!-- Button -->
      <div class="mb-5 text-center">
        <button
          class="w-50 btn btn-primary btn-lg fw-bold text-uppercase"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  name: "Home",
  directives: {
    mask,
  },
  data() {
    return {
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
        country: "",
        state: "",
        zip: "",
      },
      services: [],
      monthlyBudget: "",
      email: "",
      terms: false,
      captcha: false,
    };
  },
  methods: {
    onSubmit() {
      // validate
      // save to local storage
      // go to /result
    },
  },
};
</script>

<style scoped>
.form-label {
  font-weight: 600;
}
</style>
