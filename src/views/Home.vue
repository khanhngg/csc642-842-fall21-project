<template>
  <div class="home container form-container">
    <!-- Title -->
    <h6 class="text-center">
      CSC 642 842 Fall 2021 Individual Assignment Khanh Nguyen
    </h6>
    <h1 class="text-center">Data Survey Form</h1>
    <p class="form-text fst-italic mb-4">Required fields are marked with *</p>

    <!-- Form -->
    <form class="row g-3" @submit.prevent="onSubmit" novalidate>
      <h4 class="fw-bold text-uppercase">Personal Information</h4>
      <!-- Last Name -->
      <div class="col-sm-6 mb-3">
        <label class="form-label">Last Name *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your last name"
          :class="{ 'invalid-field': v$.lastName.$error }"
          v-model="lastName"
          required
        />
        <div v-if="v$.lastName.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.lastName.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <!-- First Name -->
      <div class="col-sm-6 mb-3">
        <label class="form-label">First Name *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your first name"
          maxlength="40"
          :class="{ 'invalid-field': v$.firstName.$error }"
          v-model="firstName"
        />
        <div v-if="v$.firstName.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.firstName.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <!-- Preferred Title -->
      <div class="col-12 mb-3">
        <label class="form-label">Preferred Title *</label>
        <select
          class="form-select"
          v-model="preferredTitle"
          :class="{ 'invalid-field': v$.preferredTitle.$error }"
        >
          <option selected value="">Select your preferred title...</option>
          <option value="none">None</option>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
          <option value="staff">Staff</option>
          <option value="retired">Retired</option>
        </select>
        <div v-if="v$.preferredTitle.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.preferredTitle.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <!-- Height -->
      <label class="form-label mb-0">Height</label>
      <div class="col-12 col-md-4 mb-3 mt-0">
        <div class="form-text">Feet</div>
        <input
          type="number"
          class="form-control"
          placeholder="Feet"
          v-model="height.feet"
          :class="{ 'invalid-field': v$.height.feet.$error }"
        />
        <div v-if="v$.height.feet.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.height.feet.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-3 mt-0">
        <div class="form-text">Inches</div>
        <input
          type="number"
          class="form-control"
          placeholder="Inches"
          v-model="height.inches"
          :class="{ 'invalid-field': v$.height.inches.$error }"
        />
        <div v-if="v$.height.inches.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.height.inches.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <!-- Phone -->
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input
          type="tel"
          class="form-control"
          placeholder="Enter a 10 digit phone number"
          v-model="phone"
          :class="{ 'invalid-field': v$.phone.$error }"
        />
        <div v-if="v$.phone.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.phone.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
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
          v-model="address.streetAddress"
          :class="{ 'invalid-field': v$.address.streetAddress.$error }"
        />
        <div v-if="v$.address.streetAddress.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.address.streetAddress.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <div class="col-12">
        <label class="form-label">Apartment/Suite Number</label>
        <div class="col-md-5">
          <input
            type="text"
            class="form-control"
            placeholder="20A"
            v-model="address.apartmentNumber"
            :class="{ 'invalid-field': v$.address.apartmentNumber.$error }"
          />
        </div>
        <div v-if="v$.address.apartmentNumber.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.address.apartmentNumber.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <div class="col-12">
        <label class="form-label">City *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter city name"
          v-model="address.city"
          :class="{ 'invalid-field': v$.address.city.$error }"
        />
        <div v-if="v$.address.city.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.address.city.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <div class="col-md-5">
        <label for="country" class="form-label">Country *</label>
        <select
          class="form-select"
          id="country"
          v-model="address.country"
          :class="{ 'invalid-field': v$.address.country.$error }"
        >
          <option value="">Select country...</option>
          <option value="United States">United States</option>
        </select>
        <div v-if="v$.address.country.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.address.country.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <div class="col-md-4">
        <label for="state" class="form-label">State *</label>
        <select
          class="form-select"
          id="state"
          v-model="address.state"
          :class="{ 'invalid-field': v$.address.state.$error }"
        >
          <option value="">Select state...</option>
          <option>California</option>
        </select>
        <div v-if="v$.address.state.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.address.state.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <label for="zip" class="form-label">Zip *</label>
        <input
          type="text"
          class="form-control"
          id="zip"
          placeholder="12345"
          maxlength="5"
          v-model="address.zip"
          :class="{ 'invalid-field': v$.address.zip.$error }"
        />
        <div v-if="v$.address.zip.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.address.zip.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
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
          v-model="email"
          :class="{ 'invalid-field': v$.email.$error }"
        />
        <div v-if="v$.email.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.email.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <!-- Terms and Conditions -->
      <hr class="my-4" />
      <div class="mb-3">
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            v-model="terms"
            :class="{ 'invalid-field': v$.terms.$error }"
          />
          <label class="form-check-label form-label mb-0"
            >I agree to the <a href="#">Terms & Conditions</a> *</label
          >
        </div>
        <div v-if="v$.terms.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.terms.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <!-- Captcha -->
      <div class="mb-5">
        <label class="form-label">CAPTCHA *</label>
        <input
          type="text"
          class="form-control"
          v-model="captcha"
          :class="{ 'invalid-field': v$.captcha.$error }"
        />
        <div v-if="v$.captcha.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.captcha.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <!-- Button -->
      <div class="mb-5 text-center">
        <button
          class="w-50 btn btn-primary btn-lg fw-bold text-uppercase"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  minValue,
  maxValue,
  alpha,
  numeric,
  sameAs,
  helpers,
} from "@vuelidate/validators";

const validAlphaNumeric = (value) => {
  return /^[a-zA-Z0-9 ]*$/.test(value)
}

export default {
  name: "Home",
  data() {
    return {
      v$: useVuelidate(),
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
  validations() {
    return {
      lastName: {
        required,
        alpha,
        maxLength: maxLength(40),
      },
      firstName: {
        required,
        alpha,
        maxLength: maxLength(40),
      },
      preferredTitle: { required },
      height: {
        feet: {
          minValue: minValue(0),
          maxValue: maxValue(10),
        },
        inches: {
          minValue: minValue(0),
          maxValue: maxValue(11),
        },
      },
      phone: {
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10)
      },
      address: {
        streetAddress: {
          required,
          validAlphaNumeric: helpers.withMessage('The value must be alpha-numeric', validAlphaNumeric),
          maxLength: maxLength(40),
        },
        apartmentNumber: {
          validAlphaNumeric: helpers.withMessage('The value must be alpha-numeric', validAlphaNumeric),
          maxLength: maxLength(40),
        },
        city: {
          required,
          validAlphaNumeric: helpers.withMessage('The value must be alpha-numeric', validAlphaNumeric),
        },
        country: {
          required,
          validAlphaNumeric: helpers.withMessage('The value must be alpha-numeric', validAlphaNumeric),
        },
        state: {
          required,
          validAlphaNumeric: helpers.withMessage('The value must be alpha-numeric', validAlphaNumeric),
        },
        zip: {
          required,
          numeric,
          maxLength: maxLength(5),
          minLength: helpers.withMessage('This field should have 5 digits', minLength(5)),
        },
      },
      email: {
        required,
        email
      },
      terms: {
        required,
        sameAs: helpers.withMessage('Please indicate that you have read and agreed to the Terms & Conditions', sameAs(true)),
      },
      captcha: { required },
    };
  },
  methods: {
    async onSubmit() {
      // validate
      console.log("onsubmit called...");
      await this.v$.$touch();

      if (!this.v$.$invalid) {
        // save to local storage
        // go to /result
        console.log("no errors!! go to result...");
      } else {
        console.log("got errors");
      }
    },
  },
};
</script>

<style scoped>
.form-label {
  font-weight: 600;
}

.invalid-message {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.invalid-field {
  border-color: #dc3545;
}

.invalid-field:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgb(220 53 69 / 25%);
}
</style>
