<template>
  <ul>
    <li v-for="customer in customersList" >
    	<img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=0&oh=3159408d7aa93eaa5bfb08ae78208d80&oe=5C068B59" alt="">
    	<p class="customersList" >
    		{{`${customer.name.first} ${customer.name.last}`}}
    	</p>
    </li>
  </ul>
</template>

<script>
	export default{
		name:'customersList',
		computed: { 
			customersList (){
				return this.$store.state.customersList
			}
		},
		created(){
			this.$store.dispatch('actionGetList');
		}
	}
</script>