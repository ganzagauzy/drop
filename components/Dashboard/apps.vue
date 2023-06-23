<template>
  <div>
    <div
      class="flex justify-between flex-col-reverse mb-5 sm:flex-row sm:flex-wrap sm:flex-nowrap"
    >
      <div class="mr-2">
        <input
          type="text"
          placeholder="Search app ..."
          class="w-full py-2 px-4 border bg-transparent rounded lg:border-gray-900/10 dark:border-gray-50/[0.2]"
        />
      </div>
      <button
        class="mb-4 py-1 md:py-0 md:mb-0 flex-shrink-0 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 mt-2 sm:mt-0"
        @click="showDialog = true"
      >
        <span>+ New App</span>
      </button>
      <!-- Dialog overlay -->
      <div
        v-if="showDialog"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
      >
        <!-- Dialog content -->
        <div class="bg-white dark:bg-gray-900 rounded p-8 max-w-md">
          <div class="header flex justify-between">
            <p>Create App</p>
            <button
            class="text-red-500 hover:text-gray-700 ml-2"
            @click="closeDialog"
          >
            Close
          </button>
          </div>
          
          <div class="div py-3"></div>
          <form action="" @submit.prevent="submitForm">
            <label for="">Name</label>
            <input
            v-model="name"
            class="w-full px-4 py-2 dark:bg-transparent border border-gray-300 dark:border-gray-700 rounded mb-4"
            placeholder="Name"
            required
          />
          <button
            class="bg-green-500 text-white px-4 mt-1 py-2 rounded hover:bg-green-600"
            type="submit"
          >
            Create
          </button>
          
          </form>
        </div>
      </div>
    </div>
    <ul role="list" class="">
      <li
        v-for="(app,i) in newArray"
        :key="i"
        class="flex justify-between gap-x-6 py-5 mb-5 p-4 rounded shadow border lg:border-gray-900/10 dark:border-gray-50/[0.2]"
      >
        <div class="flex gap-x-4">
          <!-- <img
          class="h-12 w-12 flex-none rounded-full bg-gray-50"
          :src="person.imageUrl"
          alt=""
        /> -->
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-bold leading-6 text-900">
              <nuxt-link
                class="cursor"
                :to="{ name: 'dashboard-id-app', params: { app: app.id } }"
                >{{ app.name }}</nuxt-link
              >
            </p>
            <p class="mt-1 truncate leading-5 text-500">
              {{ app.org_id }}
            </p>
          </div>
        </div>
        <div  class="hidden sm:flex sm:flex-col sm:items-end" >
          <p class="text-sm leading-6 text-900">V3</p>
          <p  class="mt-1 leading-5 text-500" >
            <time :datetime="app.created_at">{{
              app.created_at
            }}</time>
            . shared
          </p>
          
        </div>
      </li>
    </ul>
    <p class="w-full">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam odio sunt
      molestiae corporis veritatis officia illo voluptate. Laudantium, expedita?
      Enim illo culpa repellendus ab corrupti tenetur quibusdam eaque, sunt
      corporis.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showDialog: false,
      isLoading:false,
      name: '',
      dataArray: [],

      people: [
        {
          name: 'Paypack',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Conference',
          email: 'michael.foster@example.com',
          role: 'Co-Founder / CTO',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Hafi Yawe',
          email: 'dries.vincent@example.com',
          role: 'Business Relations',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: null,
        },
        {
          name: 'Paypack',
          email: 'lindsay.walton@example.com',
          role: 'Front-end Developer',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Conference',
          email: 'courtney.henry@example.com',
          role: 'Designer',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Hafi Yawe',
          email: 'tom.cook@example.com',
          role: 'Director of Product',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: null,
        },
      ],
      newArray:[]
    }
  },
  created() {
    this.getApps();
  },
  methods: {
    newApp() {
      this.$router.push('/dashboard/start')
    },
    async submitForm() {
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
          'apps',
          {
            name: this.name,
            org_id:2
          },
          {
            headers: {
              Authorization: refrToken || token,
            },
          }
        )
        if (!response || !response.data) return false
        else {
          // console.log("Res", response);
          
        }
      } catch (error) {
        //  console.log(error);
      } finally {
        this.isLoading = false;
        this.closeDialog();
      }
    },
    async getApps() {
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
        const response = await this.$axios.get('apps/list',{
            headers: {
              Authorization: refrToken || token,
            },
          })
        if (!response || !response.data) return false
        else {
          let array = [];
          array = response.data.apps
          this.newArray = response.data.apps;
          console.log("Apps", this.newArray);
          
        }
      } catch (error) {
        //  console.log(error);
      } finally {
        this.isLoading = false
      }
      
    },
    closeDialog() {
      this.showDialog = false
      this.name = ''
    },
  },
}
</script>
