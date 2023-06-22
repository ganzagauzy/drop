
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"

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
      <ul>
        <li>
          <Anchor
            :to="{ name: 'dashboard-id-app' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2   dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
              
            >
            <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
              <IconUil:apps class="text-xs" />
            </div>
            <span
              class="text-sm font-semibold capitalize"
              
            >
              {{ $t('overview') }}
            </span>
          </Anchor>
        </li>
        <li>
          <Anchor
            :to="{ name: 'dashboard-id-app-monitoring' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2    dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
              
            >
            <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
            <!-- rounded-md ring-1 ring-slate-900/5 shadow-sm -->
              <IconUil:wallet class="text-xs" />
            </div>
            <span
              class="text-sm font-semibold capitalize"
              
            >
              {{ $t('monitoring') }}
            </span>
          </Anchor>
        </li>
        <li>
          <Anchor
            :to="{ name: 'dashboard-id-app-metrics' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2    dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
              
            >
            <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
            <!-- rounded-md ring-1 ring-slate-900/5 shadow-sm -->
              <IconUil:chart class="text-xs" />
            </div>
            <span
              class="text-sm font-semibold capitalize"
              
            >
              {{ $t('metrics') }}
            </span>
          </Anchor>
        </li>
        <li>
          <Anchor
            :to="{ name: 'dashboard-id-app-activities' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2    dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
              
            >
            <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
            <!-- rounded-md ring-1 ring-slate-900/5 shadow-sm -->
              <IconUil:document class="text-xs" />
            </div>
            <span
              class="text-sm font-semibold capitalize"
              
            >
              {{ $t('activities') }}
            </span>
          </Anchor>
        </li>
        <li>
          <Anchor
            :to="{ name: 'dashboard-id-app-settings' }"
            class="group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mr-4 px-2 py-2    dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"
              
            >
            <!-- group-hover:shadow group-hover:ring-slate-900/10 -->
            <!-- rounded-md ring-1 ring-slate-900/5 shadow-sm -->
              <IconUil:cog class="text-xs" />
            </div>
            <span
              class="text-sm font-semibold capitalize"
              
            >
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
