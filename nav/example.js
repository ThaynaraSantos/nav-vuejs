const router = new VueRouter();

var navbar = {
	home: {name: "Navbar", link: "home"},
	items: [
		{name: "About", link: "about"}, 
		{name: "Services", link: "services"}, 
		{name: "Products", link: "products"},
		{name: "Pricing", link: "pricing"},
		{name: "Contact", link: "contact"}
	]
}

var navbad = {
	home: {name: "Navbad", link: "home"},
	items: [
		{name: "Bad", link: "bad"}, 
		{name: "Great", link: "great"}, 
		{name: "Amazing", link: "amazing"},
		{name: "Fine", link: "fine"},
		{name: "Terrible", link: "terrible"}
	]
}

var example = new Vue({
  router,
  el: '#example',
  data: {navbar, navbad}
})

