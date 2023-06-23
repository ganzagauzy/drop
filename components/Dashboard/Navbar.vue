<template>
  <BuilderNavbar>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <div class="flex items-center justify-center">
          <button  class="bg-transparent border dark:border-gray-700  rounded mr-5 p-2" @click="dashboard">Dashboard</button>
          <DashboardDropdown />
          
        </div>

        <!-- Profile dropdown -->

        <div
          class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <!-- <LanguageSwitcher /> -->
          
          <ThemeSwitcher />
          <!-- <Anchor
            class="hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center"
            href="https://github.com/viandwi24/nuxt3-awesome-starter"
            title="Github"
          >
            <IconMdi:github-face />
          </Anchor> -->
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }" >
      
      <ActionSheet  @on-close="toggleOptions(false)">
        <ActionSheetBody>
          
          <ActionSheetHeader text="Menu"  />
          <DashboardDropdown class="flex flex-end " />
          <button class="bg-green text-white rounded p-2 flex flex-end mt-5" @click="dashboard">Dashboard</button>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.theme_switcher.change_theme') }}
          </div>
          
          <div class="mt-2">
            <ThemeSwitcher type="select-box" />
          </div>
          <div class="mt-2">
            <DashboardDropdown class="" />
          </div>
          
          <!-- <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.language_switcher.change_language') }}
          </div>
          <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div> -->
        </ActionSheetBody>
        <!-- <Button
          type="secondary"
          title="Github"
          href="https://github.com/viandwi24/nuxt3-awesome-starter"
        >
          <IconMdi:github-face />
          <span class="ml-1">Github</span>
        </Button> -->
        <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
    <template #drawer>
      <slot name="drawer" />
    </template>
  </BuilderNavbar>
</template>
<script>
export default {
  methods:{
    dashboard() {
    const userInfo = localStorage.getItem('user_info')

        if (userInfo) {
          const parsedUserInfo = JSON.parse(userInfo)
          const name= `${parsedUserInfo.data.names}`
          this.$router.push(`/dashboard/${name}`)
        } else {
        //   console.log('No user info found in local storage')
        }
  }
  }
}
</script>
