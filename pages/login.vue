<template>
  <div class="relative">
    <div class="bg-primary-color">
      <div class="text-center">
        <h1 class="pt-20">
          <nuxt-link to="/" class="text-white"><h1><span class="brand-logo">D</span>Rop</h1></nuxt-link>
        </h1>
      </div>
    </div>
    <div
      class="card   rounded-lg shadow-lg form-container" :class="['card', bodyBackgroundColorClass]"
    >
      <div class="">
        <div class=" pb-10">
          <div class="w-full max-w-md">
            <form class="px-8  pb-8 mb-4" @submit.prevent="submit">
              <div class="text-center">
                <h1 class="font-bold my-5">Welcome Back !!</h1>
                <p class="mb-5">Sign in to continue to Drop.</p>
              </div>
              <div class="mb-4">
                <label
                  class="block text-700 text-sm font-bold mb-2"
                  for="username"
                  >Username</label
                >
                <input
                  id="username"
                  v-model="username"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-700 text-sm font-bold mb-2"
                  for="password"
                  >Password</label
                >
                <input
                  id="password"
                  v-model="password"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Sign in
                </button>
              </div>
              
            </form>
            <div class="py-5">
                <p class="text-center">
                  Don't have an account ?
                  <nuxt-link to="/register">Register</nuxt-link>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      checkbox: false,
      show1: false,
      password: '',
      username: '',
      bodyBackgroundColorClass: '',
    }
  },
  computed: {
    cardClasses() {
      const screenWidth = this.$screen.width;

      let widthClass = '';

      if (screenWidth < 640) {
        widthClass = 'w-300';
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        widthClass = 'w-400';
      }

      return 'p-4 rounded shadow ' + widthClass;
    },
  },
  mounted() {
    this.setCardBackgroundColor();
  },
  methods: {
    submit() {
      this.$router.push('/dashboard')
    },
    setCardBackgroundColor() {
      const bodyBackgroundColor = getComputedStyle(document.body).getPropertyValue('background-color');
      
      if (bodyBackgroundColor === 'rgb(255, 255, 255)') {
        this.bodyBackgroundColorClass = 'bg-white';
      } else {
        this.bodyBackgroundColorClass = 'bg-dark';
      }
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
  background: #157F1F;
  padding: 5px 10px;
  border-radius: 2px;
  border-top-right-radius: 15px;
}

.bg-primary-color {
  background-color: #2C7D59;
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
.bg-gray-800 {
  background-color: #1f2937;
}

</style>
