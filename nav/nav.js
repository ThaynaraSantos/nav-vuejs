var nav = new Vue({
  el: '#nav',
  data: {
	home: {name: "Navbar", link: "#home"},
	items: [
		{name: "About", link: "#about"}, 
		{name: "Services", link: "#services"}, 
		{name: "Products", link: "#products"},
		{name: "Pricing", link: "#pricing"},
		{name: "Contact", link: "#contact"}
	]
  }
})