<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">
        <img src="../assets/brand.png" alt />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/contact">Contact Us</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" variant="danger"></b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
// import Brand from "./Brand.vue";
export default {
  name: "Navbar",
  data() {
    return {
      title: "",
      noteText: ""
    };
  },
  methods: {
    // onSubmit(e) {
    //   e.preventDefault();
    //   console.log("Form Submitted");
    // },
    // onReset() {
    //   this.title = "";
    //   this.noteText = "";
    // }
  }
};
</script>
<style scoped>
b-navbar-nav {
  margin-left: 105px;
}
</style>