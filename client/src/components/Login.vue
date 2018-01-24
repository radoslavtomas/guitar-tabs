<template>
	<v-container>
		<v-layout column>
			<v-flex xs12 md8 offset-md2>
				<div class="white elevation-2">
					<v-toolbar flat dense class="cyan" dark>
						<v-toolbar-title>Login</v-toolbar-title>
					</v-toolbar>

					<v-layout column>
						<v-flex xs12 class="pt-2 pb-2 pl-4 pr-4">
							<v-form v-model="valid" ref="form" lazy-validation>
								<v-text-field
										label="E-mail"
										v-model="email"
										required
								></v-text-field>
								<v-text-field
										label="Password"
										v-model="password"
										required
								></v-text-field>
							</v-form>

							<div class="error" v-html="error"></div>
							<v-btn class="cyan" dark @click="login">Login</v-btn>
						</v-flex>
					</v-layout>

				</div>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null,
      valid: true
    }
  },
  methods: {
    async login () {
      try {
        // eslint-disable-next-line
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
	.error {
		color: red;
	}
</style>