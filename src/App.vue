<template>
  <!-- <div>This is From Home</div> -->
  <router-view />

  <div v-if="!isLoggedIn">
    <template v-if="showLogIn">
      <LoginView />
    </template>
    <template v-else>
      <SignupView />
    </template>
    <div v-else>
      <h2>Welcome</h2>
    </div>
  </div>
</template>




<script>
// import SignupView from '@/views/SignupView.vue'
// import LoginView from '@/views/LoginView.vue'

// export default {
//   components: { SignupView, LoginView },
//   data() {
//     return {
//       isLoggedIn: false,
//       showLogin: true
//     }
//   },
// }


</script>