<template>
  <div>
    <p @click="$store.commit('add')">counter:{{ $store.state.counter }}</p>
    <p @click="$store.dispatch('add')">async counter:{{ $store.state.counter }}</p>
    <!-- <p>double counter:{{ $store.getters.doubleCounter }}</p> -->
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
