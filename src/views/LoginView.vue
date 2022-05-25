<template>
  <!-- component -->
  <div class="bg-[#dcdcdd] min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-4 text-3xl text-center">Log In</h1>

        <form>
          <input type="email" class="block border border-grey-light w-full p-3 rounded mb-4" v-model="email"
            placeholder="Email" />

          <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" v-model="password"
            placeholder="Password" />

          <button type="submit" @click.prevent="login"
            class="w-full text-center py-3 rounded bg-green text-white bg-green-500 hover:bg-green-600 focus:outline-none my-1">Log
            In</button>
        </form>
      </div>

      <div class="text-grey-dark mt-2">
        Don't have an account?
        <a class="no-underline border-b border-blue text-blue-500" href="../signup/">
          Sign Up
        </a>.
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const auth = getAuth()
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {

          this.$emit('loggedIn')
        }).catch(() => {
          console.log(erroe.message);
        })

      // console.log('Email:', this.email)
      // console.log('Password:', this.password)
    }
  },
}
</script>