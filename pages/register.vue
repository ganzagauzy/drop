<template>
  <div class="relative">
    <div class="bg-primary-color">
      <div class="text-center">
        <h1 class="pt-20">
          <nuxt-link to="/" class="text-white"
            ><h1><span class="brand-logo">D</span>Rop</h1></nuxt-link
          >
        </h1>
      </div>
    </div>
    <div
      class="card rounded-lg shadow-lg form-container"
      :class="['card', bodyBackgroundColorClass]"
    >
      <div class="">
        <div class="pb-10">
          <div class="w-full max-w-md">
            <form class="px-8 pb-8" @submit.prevent="submit">
              <div class="text-center">
                <h1 class="font-bold my-5">Create New Account !!</h1>
                <p class="mb-5">Get your free Drop account now</p>
              </div>
              <div class="mb-4">
                <label class="block text text-sm font-bold mb-2" for="name"
                  >Names</label
                >
                <input
                  id="name"
                  v-model="name"
                  class="dark:text-black shadow appearance-none border rounded w-full py-2 px-3 text leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="mb-4">
                <label class="block text text-sm font-bold mb-2" for="email"
                  >Email</label
                >
                <input
                  id="email"
                  v-model="email"
                  class="dark:text-black shadow appearance-none border rounded w-full py-2 px-3 text leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="mb-6">
                <label class="block text text-sm font-bold mb-2" for="password"
                  >Password</label
                >
                <input
                  id="password"
                  v-model="password"
                  class="dark:text-black shadow appearance-none border rounded w-full py-2 px-3 text leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="mb-6">
                <label class="block text text-sm font-bold mb-2" for="password"
                  >Confirm Password</label
                >
                <input
                  id="confpassword"
                  v-model="confpassword"
                  class="dark:text-black shadow appearance-none border rounded w-full py-2 px-3 text leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  :class="{ 'cursor-not-allowed opacity-50': isLoading }"
                  :disabled="isLoading"
                >
                  {{ isLoading ? 'Loading...' : 'Register' }}
                </button>
              </div>
            </form>
            <div class="">
              <div class="text-center">
                <p class="mb-2">Continue With</p>
                <div class="flex justify-center">
                  <IconUil:github class="mr-5 cursor-pointer" />
                  <IconUil:google class="cursor-pointer"/>
                  <!-- <IconUil:github /> -->
                </div>
              </div>
            </div>
            <div class="py-5">
              <p class="text-center">
                Have an account ?
                <nuxt-link to="/login">Login</nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { get } from 'http'
export default {
  data() {
    return {
      checkbox: false,
      show1: false,
      password: '',
      confpassword:'',
      email: '',
      name: '',
      bodyBackgroundColorClass: '',
      isLoading: false,
    }
  },
  computed: {
    cardClasses() {
      const screenWidth = this.$screen.width

      let widthClass = ''

      if (screenWidth < 640) {
        widthClass = 'w-300'
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        widthClass = 'w-400'
      }

      return 'p-4 rounded shadow ' + widthClass
    },
  },
  mounted() {
    this.setCardBackgroundColor()
    // this.fetchUsers();
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async submit() {
      try {
       this.isLoading = true
       const response = await this.$axios.post('users/signup', {
         names:this.name,
         email: this.email,
         password:this.password,
         confirm_password:this.confpassword,
         provider:"local"
       })
       if (!response || !response.data ) return false
       else {
        //  console.log("res", response);
         this.$router.push('/login')
         
       }
     } catch (error) {
      //  console.log(error);
       
     }
     finally {
      this.isLoading = false
     }
      
    },
    setCardBackgroundColor() {
      const bodyBackgroundColor = getComputedStyle(
        document.body
      ).getPropertyValue('background-color')

      if (bodyBackgroundColor === 'rgb(255, 255, 255)') {
        this.bodyBackgroundColorClass = 'bg-white'
      } else {
        this.bodyBackgroundColorClass = 'bg-dark'
      }
    },
    async fetchUsers() {
    },
  },
}
</script>

<style lang="scss">
//   @import '~vuetify/dist/vuetify.min.css';

//   $primary-color: #1E555C;

body {
  margin: 0 !important;
}

.brand-logo {
  background: #157f1f;
  padding: 5px 10px;
  border-radius: 2px;
  border-top-right-radius: 15px;
}

.bg-primary-color {
  background-color: #2c7d59;
  height: 60vh;
  clip-path: polygon(100% 0, 100% 75%, 50% 100%, 0 80%, 0 0);
}

.form-container {
  position: absolute;
  width: 400px;
  //   background: #101724 !important;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 639px) {
    width: 300px;
  }
}

.bg-white {
  background-color: #ffffff;
}
.bg-dark {
  background-color: #1f2937;
}
</style>
