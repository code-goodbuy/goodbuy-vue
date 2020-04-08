<template>
  <div>
    <button
      v-if="!authenticated"
      @click="login()">
      Log In
    </button>

    <button
      v-if="authenticated"
      @click="privateMessage()">
      Call Private
    </button>

    <button
      v-if="authenticated"
      @click="logout()">
      Log Out
    </button>
    {{ message }}
    <br>
  </div>
</template>

<script>
import AuthService from '@/auth/AuthService'
import axios from 'axios'

const API_URL = 'http://localhost:8080'
const auth = new AuthService()

export default {
  name: 'login',
  data () {
    return {
      authenticated: false,
      message: ''
    }
  },
  mounted() {
    this.handleAuthentication()
    this.authenticated = false

    auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
  },
  methods: {
    login() {
      auth.login()
    },
    handleAuthentication() {
      auth.handleAuthentication()
    },
    logout () {
      auth.logout()
    },
    privateMessage() {
      console.log(auth.getAuthToken());
      const url = `${API_URL}/product/barcode/12/`
      return axios.get(url, {headers: {Authorization: `Bearer ${auth.getAuthToken()}`}}).then((response) => {
        this.message = response.data || ''
      })
    }
  }
}
</script>