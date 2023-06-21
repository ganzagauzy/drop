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
          class="w-full sm:w-55/100 sm:w-full md:w-55/100 lg:w-55/100 py-2 xl:w-55/100"
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
                <ul role="list" class="my-1 divide-y divide-gray-100 border dark:border-gray-50/[0.2] dark:divide-gray-50/[0.2] rounded">
                  <li
                    v-for="person in 3"
                    :key="person"
                    class="flex justify-between gap-x-6 py-1"
                  >
                    <div class="flex gap-x-4">
                      <div class="min-w-0 flex-auto px-5">
                        <p
                          class="text-sm font-semibold leading-6 text-900"
                        >
                        66.241.125.136
                        </p>
                      </div>
                      
                    </div>
                    <div class="px-5">
                        <p
                          class="text-sm font-semibold leading-6 text-900"
                        >
                          v6
                        </p>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-100 md:w-100 lg:w-100 xl:w-100">
          <div class="p-4 rounded card border shadow dark:border-gray-50/[0.2]">
            <h3 class="font-bold">Activity</h3>
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
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>

<style lang="scss" scoped></style>
