<template>
  <v-flex>
      <v-btn @click.native="snackbarButton">Read</v-btn>
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
      this.$emit("showSnackbar", "You read something!");
    }
  }
};
</script>

