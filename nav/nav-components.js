Vue.component('navhome', {
  props: ['home'],
  template: '<div class="navhome"><router-link :to="home.link">{{ home.name }}</router-link></div>'
})

Vue.component('navbar', {
  props: ['items'],
  template: '<ul class="navbar"><li v-for="item in items" class="navbar-item"><router-link :to="item.link">{{ item.name }}</router-link></li></ul>'
})

Vue.component('navigation', {
  props: ['info'],
  template: '<div id="nav"><navhome v-bind:home="info.home"></navhome><navbar v-bind:items="info.items"></navbar></div>'
})