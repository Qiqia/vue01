<template>
  <div id="secondcomponent">
    <h1>我是第二个组件</h1>
    <a> written by {{ author }} </a>
    <ul>
      <li v-for="article in articles">
        {{article.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "zsl",
      articles: []
    }
  },
    mounted() {
        // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        this.$http.jsonp('https://baidu.com', {}, {
            headers: {

            },
            emulateJSON: true
        }).then(function(response) {
            // 这里是处理正确的回调
            console.log(response)

            this.articles = response.data.subjects
            // this.articles = response.data["subjects"] 也可以

        }, function(response) {
            this.articles = [{"title":"复活"},{"title":"战争与和平"},{"title":"安娜·卡列尼娜"}];
            // 这里是处理错误的回调
            console.log(response)
        });
    }
}
</script>

<style>
</style>
