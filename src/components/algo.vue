<template>
	<h1>{{ algo }}</h1>
</template>

<script>
	export default{
		name:'algo',
		computed: { 
			algo (){
				return this.$store.state.customers
			}
		}
	}
</script>