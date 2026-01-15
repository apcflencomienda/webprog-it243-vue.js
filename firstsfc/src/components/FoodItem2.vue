<template>
  <div class = "Melon">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'Melons',
      message: 'I like Melons'
    }
  }
};
</script>
 
<style>
  .Melon {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>
 