const router = new VueRouter()

var nav = new Vue({
  router,
  el: '#nav',
  data: {
	home: {name: "Navbar", link: "home"},
	items: [
		{name: "About", link: "about"}, 
		{name: "Services", link: "services"}, 
		{name: "Products", link: "products"},
		{name: "Pricing", link: "pricing"},
		{name: "Contact", link: "contact"}
	]
  }
})