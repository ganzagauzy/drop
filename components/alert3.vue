<script lang="ts" setup>
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import { computed, reactive, ref } from 'vue'
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

const { id } = useRoute().params
// actions
const close = () => {
  isDestroyed.value = true
}
</script>

<script lang="ts">
export default {
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    app() {
      return this.$route.params.app
    },
  },
  methods: {
    async deleteApp() {
      try {
        this.isLoading =true
        let token = ''
        let refrToken = ''
        let id = ''
        const userInfo = localStorage.getItem('user_info')

        if (userInfo) {
          const parsedUserInfo = JSON.parse(userInfo)
          token = `Bearer ${parsedUserInfo.data.token.access}`
          refrToken = `Bearer ${parsedUserInfo.data.token.refresh}`
          id = parsedUserInfo.data.names
        } else {
          //   console.log('No user info found in local storage')
        }
        const response = await this.$axios.delete(`apps/${this.app}`, {
          headers: {
            Authorization: refrToken || token,
          },
        })
        if (!response || !response.data)
          return this.$router.push(`/dashboard/${id}`)
        else {
          // this.$router.push(`/dashboard/${1}`)
        }
      } catch (error) {
        // console.error('Delete failed:', error)
        // Handle the error case
      }
      finally {
        this.isLoading =false
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
              class="rounded bg-red text-white p-2 my-4"
              :disabled="isLoading"
              :class="{ 'cursor-not-allowed opacity-50': isLoading }"
              @click="deleteApp"
            >
              {{ isLoading ? 'Loading...' : 'Delete App' }}
            </button>
          </div>
        </div>
        <div>
          <!-- <button
            class="text-slate-600 hover:text-red-500 dark:text-gray-400 font-bold"
            @click="close"
          >
            <icon-clarity:times-line />
          </button> -->
        </div>
      </div>
    </TransitionChild>
  </TransitionRoot>
</template>
