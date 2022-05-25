<template>
    <!-- component -->
    <div class="bg-[#dcdcdd] min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-4 text-3xl text-center">Sign up</h1>
                <form>
                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" v-model="username"
                        placeholder="User Name" />

                    <input type="email" class="block border border-grey-light w-full p-3 rounded mb-4" v-model="email"
                        placeholder="Email" />

                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password" placeholder="Password" v-model="password" />

                    <button type="submit" @click.prevent="signUp"
                        class="w-full text-center py-3 rounded bg-green text-white bg-green-500 hover:bg-green-600 focus:outline-none my-1">Create
                        Account</button>
                </form>
            </div>

            <div class="text-grey-dark mt-2">
                Already have an account?
                <a class="no-underline border-b border-blue text-blue-500" href="../login/">
                    Log in
                </a>.
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const auth = getAuth()

export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((credential) => {

                    console.log(credential.user)
                })
                .catch(() => {
                    console.log(error.message)
                })

            // console.log('Username:', this.username)
            // console.log('Email:', this.email)
            // console.log('Password:', this.password)
        }
    },
}
</script>