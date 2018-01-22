<template>
  <v-flex>
      <v-btn @click.native="snackbarButton">Create</v-btn>
      <v-btn to="/">Return Home</v-btn>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    snackbarButton() {
      this.$emit("showSnackbar", "You created something!", 5000, "bottom");
    }
  }
};
</script>

