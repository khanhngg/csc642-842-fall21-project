<template>
  <div class="home container form-container">
    <!-- Title -->
    <h6 class="text-center">CSC 642 848 Fall 2021 Individual Assignment Khanh Nguyen</h6>
    <h1 class="text-center">Data Survey Form</h1>

    <!-- Form -->
    <h4>Basic Information</h4>
    <p class="form-text">Required fields *</p>

    <form class="row g-3">
      <!-- Last Name -->
      <div class="col-sm-6 mb-3">
        <label class="form-label">Last Name *</label>
        <input type="text" class="form-control" placeholder="Enter your last name">
        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
      </div>

      <!-- First Name -->
      <div class="col-sm-6 mb-3">
        <label class="form-label">First Name *</label>
        <input type="text" class="form-control" placeholder="Enter your first name">
      </div>

      <!-- Preferred Title -->
      <div class="col-12 mb-3">
        <label for="exampleInputPassword1" class="form-label">Preferred Title *</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select your preferred title...</option>
          <option value="none">None</option>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
          <option value="staff">Staff</option>
          <option value="retired">Retired</option>
        </select>
      </div>

      <!-- Height -->
      <label class="form-label">Height</label>
      <div class="col-sm-6 mb-3">
        <input type="number" class="form-control col-sm-6" placeholder="Feet">
      </div>

      <!-- First Name -->
      <div class="col-sm-6 mb-3">
        <input type="number" class="form-control col-sm-6" placeholder="Inches">
      </div>

      <!-- Phone -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Phone Number</label>
        <input type="tel" class="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
      </div>

      <!-- Address -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Address *</label>
        <input type="text" class="form-control" id="exampleInputPassword1">
      </div>

      <!-- Services -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Check all services you require:</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Email
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
            Phone
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
            Facebook
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
            Twitter
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
            Surface Email
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
            Personal Visit
          </label>
        </div>
      </div>

      <!-- Monthly Budget -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Monthly Budget</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
            Less than $50
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
            Between $50 and $100
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
             Above $100
          </label>
        </div>
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Email Address *</label>
        <input type="email" class="form-control" id="exampleInputPassword1">
      </div>

      <!-- Terms and Conditions -->
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">I agree to <a href="#">Terms & Conditions</a></label>
      </div>

      <!-- Captcha -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">CAPTCHA</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>

      <!-- Buttons -->
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-outline-secondary me-md-2" type="button">Cancel</button>
        <button class="btn btn-primary" type="button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
};
</script>

<style scoped>
  .form-label {
    font-weight: 600;
  }
</style>