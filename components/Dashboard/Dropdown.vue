<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">
        {{ $t('components.theme_switcher.theme') }}
      </ListboxLabel>
      <ListboxButton
        type="button"
        :title="$t('components.theme_switcher.change_theme')"
        class="transition-colors duration-300"
      >
        <div class="flex">
          <img
            class="w-6 h-6 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Avatar of Jonathan Reinink"
          />
          <span class="ml-2 text-sm font-semibold">Alfian</span>
          <IconUil:angle-down />
        </div>
      </ListboxButton>
      <ListboxOptions
        class="p-4 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
      >
        <ListboxOption
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
          }"
          @click="handleOptionClick('Profile')"
        >
          Profile
        </ListboxOption>
        <ListboxOption
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
          }"
          @click="handleOptionClick('Settings')"
        >
          Settings
        </ListboxOption>
        <ListboxOption
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
          }"
          @click="handleOptionClick('Logout')"
        >
          Logout
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>

<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { defineProps, toRef } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

const currentStyle = toRef(props, 'type')
const router = useRouter();
// Define the method to handle the option click event
const handleOptionClick = (option: string) => {
  if (option === 'Profile') {
    // console.log('Profile option clicked')
  } else if (option === 'Settings') {
    // console.log('Settings option clicked')
  } else if (option === 'Logout') {
    router.push('/');
    // console.log('Logout option clicked')
  }
}
</script>
