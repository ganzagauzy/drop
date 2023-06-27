<script lang="ts" setup>
import { defineComponent } from 'vue'
definePageMeta({
  layout: 'organisation',
})
</script>
<script lang="ts">
export default {
  data() {
    return {
      name: '',
      email: '',
      isLoading: false,
      dataArray: [
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
        { column1: 'Data 4', column2: 'Data 5', column3: 'Data 6' },
        { column1: 'Data 7', column2: 'Data 8', column3: 'Data 9' },
      ],
    }
  },
  methods: {
    async submit() {
      try {
        this.isLoading = true
        let token ="";
        let refrToken ="";
        const userInfo = localStorage.getItem('user_info')

        if (userInfo) {
          const parsedUserInfo = JSON.parse(userInfo)
          token= `Bearer ${parsedUserInfo.data.token.access}`
          refrToken= `Bearer ${parsedUserInfo.data.token.refresh}`

        //   console.log("parse",parsedUserInfo.data.token.access)
          // Use the parsedUserInfo object as needed
        } else {
        //   console.log('No user info found in local storage')
        }
       
        const response = await this.$axios.post(
          'orgs/create',
          {
            name: this.name,
            email: this.email,
            kind: "SHARED"
          },
          {
            headers: {
              Authorization: refrToken || token,
            },
          }
        )
        if (!response || !response.data) return false
        else {
          this.$router.push(`/organisation`)
          //  this.$store.dispatch("setUserData", response);
        }
      } catch (error) {
        //  console.log(error);
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="flex items-center justify-center">
          <div class="">
            <div class="p-4">
              <div>
                <nuxt-link :to="{name:'organisation'}">
        <IconMdi:arrow-left-circle
              :class="`text-2xl mb-1 `"
            />
      </nuxt-link>
              </div>
              <div
                class="w-200 w-sm-full border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm"
              >
                <div class="border-b border-gray-200 dark:border-gray-700 pa-2">
                  <div
                    class="border-b border-gray-200 dark:border-gray-700 p-2 py-4"
                  >
                    <p class="font-bold text-2xl">Create Organisations</p>
                  </div>
                  <div class="p-2">
                    <form class="px-8 pb-8 mb-4" @submit.prevent="submit">
                      <div class="">
                        <div class="mb-4">
                          <label
                            class="block text-700 text-sm font-bold mb-2"
                            for="name"
                            >Name</label
                          >
                          <input
                            id="name"
                            v-model="name"
                            class="bg-transparent shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div class="mb-4">
                          <label
                            class="block text-700 text-sm font-bold mb-2"
                            for="email"
                            >Email</label
                          >
                          <input
                            id="email"
                            v-model="email"
                            class="bg-transparent shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          class="mt-5 flex justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                          :class="{
                            'cursor-not-allowed opacity-50': isLoading,
                          }"
                          :disabled="isLoading"
                        >
                          {{ isLoading ? 'Loading...' : 'Create' }}
                        </button>
                      </div>

                      <div></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
