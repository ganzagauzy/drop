<template>
  <div>
    <div class="flex justify-between mb-5">
      <div class="flex-grow mr-2">
        <input
          type="text"
          placeholder="Search app ..."
          class="w-100 py-2 px-4 border bg-transparent rounded lg:border-gray-900/10 dark:border-gray-50/[0.2]"
        />
      </div>
      <button
      class="flex-shrink-0 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
        @click="newApp"
      >
        + New App
      </button>
    </div>
    <ul role="list" class="">
      <li
        v-for="person in people"
        :key="person.email"
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
              <nuxt-link class="cursor" :to="`/dashboard/${person.name}`">{{ person.name }}</nuxt-link>
            </p>
            <p class="mt-1 truncate leading-5 text-500">
              {{ person.email }}
            </p>
          </div>
        </div>
        <div class="hidden sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-900">V3</p>
          <p v-if="person.lastSeen" class="mt-1 leading-5 text-500">
            <time :datetime="person.lastSeenDateTime">{{
              person.lastSeen
            }}</time>
            . shared
          </p>
          <div v-else class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p class="leading-5 text-500">Now</p>
          </div>
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
    }
  },
  methods: {
    newApp() {
      this.$router.push('/dashboard/start')
    }
  },
}
</script>
