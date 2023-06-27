<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  props: {
    mode: {
      type: String,
      default: 'normal',
    },
  },
  setup() {
    const sidebar = ref(null)

    onMounted(() => {
      // const { onScroll } = useSticky(sidebar.value, -1000)
      // setTimeout(() => onScroll(), 50)
    })

    return {
      sidebar,
    }
  },
  data() {
    return {
      isLoading:false,
      userName:"",
      selectedOption: "" as string,
      organisations:[
        {name:"",id:""}
      ],
      // options: [
      //   { value: 'option1', label: 'Option 1' },
      //   { value: 'option2', label: 'Option 2' },
      // ] as { value: string; label: string }[],
    }
  },
  computed:{
  },
  created() {
    this.getOrgs();
    this.getUser();
    this.currentOrg();
  },
  methods: {
    currentOrg() {
      if(this.selectedOption === "") {
        const organisation = localStorage.getItem('current_org')
        if (organisation) {
          const parsedOrganisation = JSON.parse(organisation)
          this.selectedOption = parsedOrganisation.id;
          
        } else {
        //   console.log('No user info found in local storage')
        }
      }
    },
    handleSelection() {
      // console.log("selected", this.selectedOption);
      localStorage.removeItem('current_org')
      const foundItem = this.organisations.find(item => item.id === this.selectedOption);
      // console.log("current",foundItem);
      if(foundItem) {
        localStorage.setItem('current_org', JSON.stringify(foundItem))
        this.$router.push(`/dashboard/${foundItem.name}`)
      }
     
      
      
      
    },
    createOrganisation() {
      this.$router.push('/organisation')
    },
    async getOrgs() {
      try {
        this.isLoading = true
        let token ="";
        let refrToken =""
        const userInfo = localStorage.getItem('user_info')

        if (userInfo) {
          const parsedUserInfo = JSON.parse(userInfo)
          this.userName = parsedUserInfo.data.names
          token= `Bearer ${parsedUserInfo.data.token.access}`
          refrToken= `Bearer ${parsedUserInfo.data.token.refresh}`
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
          
          this.organisations = response.data.orgs
        }
      } catch (error) {
        //  console.log(error);
      } finally {
        this.isLoading = false
      }
      
    },
    getUser() {},
  }
})
</script>

<template>
  <div
    ref="sidebar"
    class="border-r lg:border-gray-900/10 dark:border-gray-50/[0.2]"
    :class="{
      'fixed top-0 hidden pt-12 lg:flex lg:w-50 xl:w-60 h-screen':
        mode === 'normal',
      'relative flex-1 flex flex-col w-full': mode === 'mobile',
    }"
  >
    <div class="flex-1 overflow-y-auto pl-4 lg:pl-0 pr-4 py-10">
      <div class="mb-4">
        <label for=""><strong>Organisation</strong></label>
        <div class="flex items-center mb-3">
          
          <select
            v-model="selectedOption"
            class="bg-white dark:bg-gray-800 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-0 w-full focus:ring-green-500"
            @change="handleSelection"
          >
            <option v-if="selectedOption == ''" value="">Select Organisation</option>
            <option
              v-for="option in organisations"
              :key="option.id"
              :value="option.id"
              :style="{ backgroundColor: option.id === selectedOption ? 'green' : 'transparent' }"
              class="w-50"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <button
          class="p-2 text-center rounded bg-green w-full  text-white block"
          @click="createOrganisation"
          >Create Organization</button
        >
      </div>
      <ul>
        <li>
          <Anchor
            :to="{ name: 'dashboard-id' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
            >
              <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
              <IconUil:apps class="text-xs" />
            </div>
            <span class="text-sm font-semibold capitalize">
              {{ $t('apps') }}
            </span>
          </Anchor>
        </li>
        <li>
          <Anchor
            :to="{ name: 'dashboard-id-builds' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
            >
              <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
              <!-- rounded-md ring-1 ring-slate-900/5 shadow-sm -->
              <IconUil:cog class="text-xs" />
            </div>
            <span class="text-sm font-semibold capitalize">
              {{ $t('builds') }}
            </span>
          </Anchor>
        </li>
        
        <li>
          <Anchor
            :to="{ name: 'dashboard-id-billing' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
            >
              <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
              <!-- rounded-md ring-1 ring-slate-900/5 shadow-sm -->
              <IconUil:wallet class="text-xs" />
            </div>
            <span class="text-sm font-semibold capitalize">
              {{ $t('billing') }}
            </span>
          </Anchor>
        </li>
        <li>
          <Anchor
            :to="{ name: 'dashboard-id-team' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
            >
              <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
              <!-- rounded-md ring-1 ring-slate-900/5 shadow-sm -->
              <IconUil:apps class="text-xs" />
            </div>
            <span class="text-sm font-semibold capitalize">
              {{ $t('team') }}
            </span>
          </Anchor>
        </li>
        <li>
          <Anchor
            :to="{ name: 'docs' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
            >
              <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
              <!-- rounded-md ring-1 ring-slate-900/5 shadow-sm -->
              <IconUil:document class="text-xs" />
            </div>
            <span class="text-sm font-semibold capitalize">
              {{ $t('docs') }}
            </span>
          </Anchor>
        </li>
        <li>
          <Anchor
            :to="{ name: 'dashboard-id-settings' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
            >
              <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
              <!-- rounded-md ring-1 ring-slate-900/5 shadow-sm -->
              <IconUil:cog class="text-xs" />
            </div>
            <span class="text-sm font-semibold capitalize">
              {{ $t('settings') }}
            </span>
          </Anchor>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
a.router-link-active {
  background: #eee;
  padding: 5px 0px;
  border-radius: 5px;
}
.dark a.router-link-active {
  background: #1f2937;
  padding: 5px 0px;
  border-radius: 5px;
}
</style>
