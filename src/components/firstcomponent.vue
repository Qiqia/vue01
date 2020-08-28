<template>
  <div id="firstcomponent">
    <h1>我的第一个组件</h1>
    <a> written by {{ author }} </a>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author: "zsl"
    }
  }
}
</script>

<style>
</style>
