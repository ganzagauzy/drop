<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="flex justify-between mb-5">
          <div>
            <span class="font-bold text-2xl">Members</span>
          </div>
          <div>
            <div class="flex">
              <input
                type="text"
                class="bg-transparent py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-l focus:outline-none focus:ring-0 w-full"
                placeholder="Enter Email"
              />
              <button
                class="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-r focus:outline-none"
                
              >
                Invite
              </button>
            </div>
          </div>
        </div>
        <div>
          <ul role="list" class="">
            <li
              v-for="(app, i) in 5"
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
                    <nuxt-link class="cursor" to="">member {{ i+1 }}</nuxt-link>
                  </p>
                  <p class="mt-1 truncate leading-5 text-500">1</p>
                </div>
              </div>
              <div class="hidden sm:flex sm:flex-col sm:items-end">
                <p class="text-sm leading-6 text-900">V3</p>
                <p class="mt-1 leading-5 text-500">
                  <!-- <time :datetime="app.created_at">{{
              app.created_at
            }}</time> -->
                  . shared
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet
          itaque id quo unde, vel corporis exercitationem amet fugiat dolorum
          expedita eaque blanditiis aliquam consequuntur dicta aperiam, rem
          dolor? Sit.
        </div>
      </PageSection>
      <pageSection> </pageSection>
    </PageBody>
  </PageWrapper>
</template>
