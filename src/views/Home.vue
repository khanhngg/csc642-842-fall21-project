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
          :class="{ 'invalid-field': v$.form.lastName.$error }"
          v-model="form.lastName"
          required
        />
        <div v-if="v$.form.lastName.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.lastName.$errors"
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
          :class="{ 'invalid-field': v$.form.firstName.$error }"
          v-model="form.firstName"
        />
        <div v-if="v$.form.firstName.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.firstName.$errors"
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
          v-model="form.preferredTitle"
          :class="{ 'invalid-field': v$.form.preferredTitle.$error }"
        >
          <option selected value="">Select your preferred title...</option>
          <option value="none">None</option>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
          <option value="staff">Staff</option>
          <option value="retired">Retired</option>
        </select>
        <div v-if="v$.form.preferredTitle.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.preferredTitle.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <!-- Height -->
      <label class="form-label mb-0">Your Height</label>
      <div class="col-12 col-md-4 mb-3 mt-0">
        <div class="form-text">Feet</div>
        <input
          type="number"
          class="form-control"
          placeholder="Feet"
          v-model="form.height.feet"
          :class="{ 'invalid-field': v$.form.height.feet.$error }"
        />
        <div v-if="v$.form.height.feet.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.height.feet.$errors"
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
          v-model="form.height.inches"
          :class="{ 'invalid-field': v$.form.height.inches.$error }"
        />
        <div v-if="v$.form.height.inches.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.height.inches.$errors"
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
          v-model="form.phone"
          :class="{ 'invalid-field': v$.form.phone.$error }"
        />
        <div v-if="v$.form.phone.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.phone.$errors"
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
          v-model="form.address.streetAddress"
          :class="{ 'invalid-field': v$.form.address.streetAddress.$error }"
        />
        <div v-if="v$.form.address.streetAddress.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.address.streetAddress.$errors"
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
            v-model="form.address.apartmentNumber"
            :class="{ 'invalid-field': v$.form.address.apartmentNumber.$error }"
          />
        </div>
        <div v-if="v$.form.address.apartmentNumber.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.address.apartmentNumber.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <div class="col-md-5">
        <label class="form-label">City *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter city name"
          v-model="form.address.city"
          :class="{ 'invalid-field': v$.form.address.city.$error }"
        />
        <div v-if="v$.form.address.city.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.address.city.$errors"
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
          v-model="form.address.state"
          :class="{ 'invalid-field': v$.form.address.state.$error }"
        >
          <option value="">Select state...</option>
          <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
        </select>
        <div v-if="v$.form.address.state.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.address.state.$errors"
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
          v-model="form.address.zip"
          :class="{ 'invalid-field': v$.form.address.zip.$error }"
        />
        <div v-if="v$.form.address.zip.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.address.zip.$errors"
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
            v-model="form.services"
            id="emailService"
          />
          <label class="form-check-label" for="emailService">Email</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="phone"
            v-model="form.services"
            id="phoneService"
          />
          <label class="form-check-label" for="phoneService">Phone</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="facebook"
            v-model="form.services"
            id="facebookService"
          />
          <label class="form-check-label" for="facebookService">Facebook</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="twitter"
            v-model="form.services"
            id="twitterService"
          />
          <label class="form-check-label" for="twitterService">Twitter</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="surface"
            v-model="form.services"
            id="surfaceMailService"
          />
          <label class="form-check-label" for="surfaceMailService">Surface mail</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="personal"
            v-model="form.services"
            id="personalVisitService"
          />
          <label class="form-check-label" for="personalVisitService">Personal visit</label>
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
            v-model="form.monthlyBudget"
            id="lessThan50"
          />
          <label class="form-check-label" for="lessThan50">Less than $50</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="between50And100"
            v-model="form.monthlyBudget"
            id="between50And100"
          />
          <label class="form-check-label" for="between50And100">Between $50 and $100</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="above100"
            v-model="form.monthlyBudget"
            id="above100"
          />
          <label class="form-check-label" for="above100">Above $100</label>
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
          v-model="form.email"
          :class="{ 'invalid-field': v$.form.email.$error }"
        />
        <div v-if="v$.form.email.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.email.$errors"
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
            v-model="form.terms"
            :class="{ 'invalid-field': v$.form.terms.$error }"
            id="termsCheck"
          />
          <label class="form-check-label form-label mb-0" for="termsCheck">
            I agree to the <a href="#">Terms & Conditions</a> *
          </label>
        </div>
        <div v-if="v$.form.terms.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.terms.$errors"
            class="mb-0 invalid-message"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <!-- Captcha -->
      <div class="mb-5">
        <label class="form-label">CAPTCHA *</label>
        <div class="g-recaptcha" data-sitekey="6LeqNGYdAAAAAI_amzuLJYS6-Eb9NdtNXdpibR6l"></div>
        <div v-if="v$.form.captcha.$error">
          <p
            :key="error.$uid"
            v-for="error in v$.form.captcha.$errors"
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
        captcha: "",
      },
      // References: https://usastatescode.com/state-array-json
      states: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    };
  },
  validations() {
    return {
      form: {
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
            validAlphaNumeric: helpers.withMessage('Value must be alpha-numeric', validAlphaNumeric),
            maxLength: maxLength(40),
          },
          apartmentNumber: {
            validAlphaNumeric: helpers.withMessage('Value must be alpha-numeric', validAlphaNumeric),
            maxLength: maxLength(40),
          },
          city: {
            required,
            validAlphaNumeric: helpers.withMessage('Value must be alpha-numeric', validAlphaNumeric),
          },
          state: {
            required,
            validAlphaNumeric: helpers.withMessage('Value must be alpha-numeric', validAlphaNumeric),
          },
          zip: {
            required,
            numeric,
            maxLength: maxLength(5),
            minLength: helpers.withMessage('Value must have 5 digits', minLength(5)),
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
      },
    };
  },
  methods: {
    async onSubmit() {
      await this.v$.$touch();

      let captcha = window.grecaptcha.getResponse()
      console.log('captcha response:')
      console.log(captcha)
      
      if (!this.v$.$invalid) {
        localStorage.setItem('form', JSON.stringify(this.form))
        this.$router.push('result')
      } else {
        return
      }
    },
  },
};
</script>

<style scoped>
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
