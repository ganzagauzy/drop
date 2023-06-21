<template>
  <div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div v-for="card in cards" :key="card.id">
        <Alert2
          type="warning"
          :text="message"
          text2="19mb/s"
          class="mb-4 text-green"
        />
      </div>
    </div>
    <div class="my-10">
      <div class="flex flex-wrap gap-5">
        <div
          class="w-full sm:w-58/100 sm:w-full md:w-58/100 lg:w-58/100 py-2 xl:w-58/100"
        >
          <div class="rounded card border shadow dark:border-gray-50/[0.2]">
            <div class="border-b dark:border-gray-50/[0.2] px-4 py-3">
              <h3 class="font-bold text-2xl">Application Information</h3>
              <p>Personal details and application.</p>
            </div>
            <div class="px-4">
              <div class="mt-4">
                <Alert
                  type="warning"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  class="mb-4 text-green"
                />
              </div>
              <div>
                <div class="flex flex-wrap justify-between">
                  <div class="w-full sm:w-auto mb-4 sm:mb-0">Host Name</div>
                  <div class="w-full sm:w-auto mb-4 sm:mb-0">Drop App</div>
                </div>
                <div class="flex flex-wrap justify-between text-green">
                  <div class="w-full sm:w-auto mb-4 sm:mb-0">
                    <a
                      target="_blank"
                      href="https://drop-front.fly.dev/"
                      class=""
                      >drop.fly.dev</a
                    >
                  </div>
                  <div class="w-full sm:w-auto mb-4 sm:mb-0">V3</div>
                </div>
              </div>
              <div class="my-4">
                <p class="fotn-bold"><strong>Ipp Address</strong></p>
                <ul
                  role="list"
                  class="my-1 divide-y divide-gray-100 border dark:border-gray-50/[0.2] dark:divide-gray-50/[0.2] rounded"
                >
                  <li
                    v-for="person in 3"
                    :key="person"
                    class="flex justify-between gap-x-6 py-1"
                  >
                    <div class="flex gap-x-4">
                      <div class="min-w-0 flex-auto px-5">
                        <p class="text-sm font-semibold leading-6 text-900">
                          66.241.125.136
                        </p>
                      </div>
                    </div>
                    <div class="px-5">
                      <p class="text-sm font-semibold leading-6 text-900">v6</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-100 md:w-100 lg:w-100 xl:w-100 mt-2">
          <div class="p-4 rounded card border shadow dark:border-gray-50/[0.2]">
            <h3 class="text-2xl font-bold">Activities</h3>
            <div class="my-5">
              <div class="flex flex-col space-y-4">
                <div
                  v-for="feed in feeds"
                  :key="feed.id"
                  class="flex items-center space-x-4"
                >
                  <div class="relative mb-10">
                    <div class="bg-gray-200 dark:bg-gray-700 rounded-full p-2">
                      <svg class="w-6 h-6" viewBox="0 0 24 24">
                        <path
                          class="fill-current text-gray-500"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z"
                        ></path>
                      </svg>
                    </div>
                    <div class="relative">
                      <div
                        class="absolute top-1 w-1 bg-gray-200 dark:bg-gray-700 h-12 ml-4"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold">{{ feed.title }}</h3>
                    <p class="text-gray-500 dark:text-gray-400">{{ feed.content }}</p>
                  </div>
                </div>
                <div class="my-10"></div>
                <div class="mt-10">
                  <button class="p-1 rounded w-full bg-primary text-white">
                    View All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="p-4 my-10 rounded card border shadow dark:border-gray-50/[0.2]"
          >
            <h3 class="font-bold">Status</h3>
            <p>No status updates or issues to report at this time</p>
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
      message: 'Average Data In (1h)',
      cards: [
        { id: 1 /* Card data */ },
        { id: 2 /* Card data */ },
        { id: 3 /* Card data */ },
        { id: 4 /* Card data */ },
      ],
      feeds: [
        {
          id: 1,
          title: 'Activity Title 1',
          content: 'Activity Content 1',
        },
        {
          id: 2,
          title: 'Activity Title 2',
          content: 'Activity Content 2',
        },
        {
          id: 3,
          title: 'Activity Title 3',
          content: 'Activity Content 3',
        },
        {
          id: 4,
          title: 'Activity Title 4',
          content: 'Activity Content 4',
        },
        {
          id: 5,
          title: 'Activity Title 5',
          content: 'Activity Content 5',
        },
      ],
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>

<style lang="scss" scoped>
.feed-item:not(:last-child) {
  border-right: 1px solid #e5e7eb;
}
</style>
