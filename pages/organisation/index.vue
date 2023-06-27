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
      delLoading:false,
      isLoading:false,
      dataArray: [
        {
          name:"",
          email:""
        }
      ],
    }
  },
  created() {
    this.getOrgs();
  },
  methods: {
    async getOrgs() {
      try {
        this.isLoading = true
        let token ="";
        let refrToken =""
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
        const response = await this.$axios.get('orgs/list',{
            headers: {
              Authorization: refrToken || token,
            },
          })
        if (!response || !response.data) return false
        else {
          // console.log("res", response.data.orgs);
          
          this.dataArray = response.data.orgs
        }
      } catch (error) {
        //  console.log(error);
      } finally {
        this.isLoading = false
      }
      
    },
    deleteOrg() {
      try {
        this.delLoading = true
        let token ="";
        let refrToken =""
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
        // const response = await this.$axios.delete(`orgs/${item.id}`,{
        //     headers: {
        //       Authorization: refrToken || token,
        //     },
        //   })
        // if (!response || !response.data) return false
        // else {
        //   this.getOrgs();
        // }
      } catch (error) {
        //  console.log(error);
      } finally {
        this.isLoading = false
      }

    }
  }
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="flex items-center justify-center">
          <div class="">
            <div class="p-4">
              <div
                class="  border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm"
              >
              <div class="w-200 border-b border-gray-200 dark:border-gray-700 pa-2">
                <div class="p-2 py-5 flex flex-wrap justify-between ">
                  <p class="font-bold text-2xl">Organisations</p>
                  <nuxt-link to="/organisation/new" class="bg-green p-1 px-10 text-white rounded" >New</nuxt-link>
                </div>
              </div>
                <div class="overflow-x-auto">
                  <table
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <!-- Table headers -->
                    <thead class="">
                      <tr>
                        <td><th class="py-2 px-4 text-start"># </th></td>
                        <td><th class="py-2 px-4 text-start">Name </th></td>
                        <td><th class="py-2 px-4">Email </th></td>
                        <td></td>
                        <td></td>
                        <td><th class="py-2 px-4">Actions</th></td>
                      </tr>
                    </thead>
                    <!-- Table body -->
                    <tbody
                      class="divide-y divide-gray-200 dark:divide-gray-700"
                    >
                      <tr
                        v-for="(item, index) in dataArray"
                        :key="index"
                        class=""
                      >
                        <td class="py-2 px-4"><span>{{ index+1 }}</span></td>
                        <td class="py-2 px-4"><span>{{ item.name }}</span></td>
                        <td class="py-2 px-4">{{ item.email }}</td>
                        <td></td>
                        <td></td>
                        <td class="py-2 px-4"><button class="mr-5 bg-green-100 p-1 px-3 rounded text-black">Edit</button> 
                          <button 
                          class="bg-red text-white rounded p-1 px-3"
                          :class="{
                            'cursor-not-allowed opacity-50': delLoading,
                          }"
                          :disabled="delLoading"
                           @click="deleteOrg()">{{ delLoading ? 'Loading...' : 'Delete' }}</button></td>
                      </tr>
                      <tr v-if="dataArray.length < 1">
                        <td colspan="3" class="py-2 px-4 text-center">
                          Not enough data to display.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
