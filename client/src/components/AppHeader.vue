<template>
	<v-toolbar class="cyan" dark>
		<v-toolbar-title>
			Guitar Tabs
		</v-toolbar-title>
		<v-toolbar-items class="ml-2">
			<v-btn flat dark>
			Browse
		</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>
		<v-toolbar-items>
			<v-btn flat dark router to="login">
				Login
			</v-btn>
			<v-btn flat dark router to="register">
				Sign Up
			</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>