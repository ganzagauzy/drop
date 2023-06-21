<template>
    <div>
        <div class="p-4 rounded ">
            <h3 class="text-2xl font-bold">Activities</h3>
            <div class="my-5 flex justify-center items-center">
              <div class="flex justify-center items-center flex-col space-y-4">
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
          id: 6,
          title: 'Activity Title 6',
          content: 'Activity Content 6',
        },
        {
          id: 6,
          title: 'Activity Title 6',
          content: 'Activity Content 6',
        },
        {
          id: 7,
          title: 'Activity Title 7',
          content: 'Activity Content 7',
        },
        {
          id: 8,
          title: 'Activity Title 8',
          content: 'Activity Content 8',
        },
        {
          id: 9,
          title: 'Activity Title 9',
          content: 'Activity Content 9',
        },
        {
          id: 10,
          title: 'Activity Title 10',
          content: 'Activity Content 10',
        },
      ],
    }
  },
  computed: {
    name() {
        return this.$route.name
    },
  },
    }
</script>

<style lang="scss" scoped>

</style>