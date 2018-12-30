<template>
  <ul>
    <li 
    	v-for="customer in customersList" 
    	v-on:click="selectCustomer(customer)"
    	v-bind:class="{ active : customer.email == selectedCustomer.email }"
    >
    	<img :src="customer.picture.large" >
    	<p>
    		{{`${customer.name.first} ${customer.name.last}`}}
    	</p>
    </li>
  </ul>
</template>

<script>

	import { mapState } from 'vuex'

	export default{
		name:'customersList',
		computed: {
			...mapState(['customersList', 'selectedCustomer']),
		},
		methods: {
			selectCustomer(customer){
				this.$store.commit('selectCustomer', customer)
				this.$router.push('/customersinfo')
			}
		},
		created(){
			this.$store.dispatch('actionGetList')
		}
	}

</script>

<style lang="scss">
	@import "src/scss/colors.scss";
	.list{
	    overflow-y: scroll;
	    ul{
	    	list-style: none;
	    	padding:0px;
			li{
			    background: #f7f7f7;
			    height: 50px;
			    display: flex;
			    align-items: center;
			    padding-left: 10px;
			    margin-top: 3px;
			    cursor: pointer;
			    border-radius: 3px;
			    p{
			    	margin: 0px;
			    	text-transform: capitalize;
			    }
		    	img{
		    		width: 30px;
		    		height: 30px;
		    		float: left;
		    		margin-right: 10px;
		    		border-radius: 50%;
		    	}
			}
			li.active{
				background: $secondary-color;
				p{
					color:#fff;
				}
			}
	    }
	}
</style>