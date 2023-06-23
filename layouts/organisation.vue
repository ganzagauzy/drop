<template>
    <div>
      <slot name="app-before" />
      <div id="app-before"></div>
      <div class="flex flex-col min-h-screen">
        <slot name="header">
          <DashboardNavbar>
            <!-- <template #drawer>
              <DashboardSidebar mode="mobile" />
            </template> -->
          </DashboardNavbar>
        </slot>
        <div>
            <slot />
        </div>
      </div>
      <slot name="app-after" />
      <div id="app-after"></div>
    </div>
  </template>
  <style lang="scss" scoped>
  
  </style>
  