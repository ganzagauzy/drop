<script lang="ts" setup>
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import { computed, reactive, ref, defineComponent } from 'vue'
import axios from 'axios'
export type IStyles = 'primary' | 'success' | 'warning' | 'danger'

// props
const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: 'primary',
  },
})

// styles
const styles = reactive<{
  [key: string]: string
}>({
  primary: '',
  success:
    'dark:from-green-500/50 via-gray-200 to-gray-200 dark:via-slate-800 dark:to-slate-800',
  warning:
    'dark:from-green-500/50 via-gray-200 to-gray-200 dark:via-slate-800 dark:to-slate-800',
  danger:
    'dark:from-red-500/50 via-gray-200 to-gray-200 dark:via-slate-800 dark:to-slate-800',
})
const textStyles = reactive<{
  [key: string]: string
}>({
  primary: 'text-black dark:text-white',
  success: 'text-green-500',
  warning: 'text-green-500',
  danger: 'text-red-500',
})

// selected
const isDestroyed = ref<Boolean>(false)
const selectedType = computed<IStyles>((): IStyles => {
  if (['primary', 'success', 'warning', 'danger'].includes(props.type))
    return props.type as IStyles
  return 'primary'
})
const selectedStyle = computed(() => styles[selectedType.value])
const selectedTextStyle = computed(() => textStyles[selectedType.value])
const isTrue = computed<boolean>(() => {
  let boolean = false
  const org = localStorage.getItem('current_org')
  if (org) {
    const kind = JSON.parse(org)
    if (kind.kind === 'PERSONAL') {
      boolean = true
    } else {
      boolean = false
    }
  }
  return boolean
})

const { id } = useRoute().params
// actions
const close = () => {
  isDestroyed.value = true
}
</script>

<script lang="ts">
export default {
  data() {
    return {}
  },
  methods: {
    async deleteApp() {
      try {
        let token = ''
        let refrToken = ''
        let id = ''

        const org = localStorage.getItem('current_org')
        if (org) {
          const kind = JSON.parse(org)
          id = kind.id
        }

        const userInfo = localStorage.getItem('user_info')

        if (userInfo) {
          const parsedUserInfo = JSON.parse(userInfo)
          token = `Bearer ${parsedUserInfo.data.token.access}`
          refrToken = `Bearer ${parsedUserInfo.data.token.refresh}`
        } else {
          //   console.log('No user info found in local storage')
        }
        const response = await this.$axios.delete(`orgs/${id}`, {
          headers: {
            Authorization: refrToken || token,
          },
        })
        if (!response || !response.data) return this.$router.push(`/dashboard/${1}`)
        else {
          this.$router.push(`/dashboard/${1}`)
        }
      } catch (error) {
        // console.error('Delete failed:', error)
        // Handle the error case
      }
    },
  },
}
</script>

<template>
  <TransitionRoot :show="!isDestroyed" appear>
    <TransitionChild
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-300 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div
        :class="`bg-gray-200 dark:bg-slate-800 bg-gradient-to-r shadow-white/50 dark:shadow-slate-900/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${selectedStyle}`"
      >
        <!-- <div class="flex items-center justify-center">
          <slot name="icon">
            <IconMdi:checkCircle
              v-if="selectedType === 'success'"
              :class="`text-2xl ${selectedTextStyle}`"
            />
            <icon-clarity:times-circle-solid
              v-if="selectedType === 'danger'"
              :class="`text-2xl ${selectedTextStyle} mb-10`"
            />
            <icon-bi:exclamation-circle-fill
              v-if="selectedType === 'warning'"
              :class="`text-2xl ${selectedTextStyle}`"
            />
          </slot>
        </div> -->
        <div class="flex-1">
          <div :class="`font-bold text-lg mb-0.5 ${selectedTextStyle}`">
            <slot name="title">{{ props.title }}</slot>
          </div>
          <div class="text-gray-700 dark:text-gray-100">
            <slot name="title">{{ props.text }}</slot>
          </div>
          <div>
            <button
              class="mt-2 flex justify-center rounded-md bg-red px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              :class="{ 'cursor-not-allowed opacity-50': isTrue }"
              :disabled="isTrue"
              @click="deleteApp"
            >
              {{ isTrue ? 'Loading...' : 'Delete Organisation' }}
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </TransitionChild>
  </TransitionRoot>
</template>
