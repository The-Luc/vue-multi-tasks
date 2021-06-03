<template>
  <div class="text-h5">Your score: {{ `${score.score}/${score.total}` }}</div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: ['score'],
};
</script>

<style></style>
