<template>
    <div>
      <slot name="app-before" />
      <div id="app-before"></div>
      <div class="flex flex-col min-h-screen">
        <slot name="header">
          <AppNavbar>
            
            <template #drawer>
              <AppSidebar mode="mobile" />
            </template>
          </AppNavbar>
          
        </slot>
        
        <div class="flex-1 w-full flex flex-col">
          
          <div
            class="relative flex-1 flex flex-row mx-auto max-w-8xl w-full h-full"
          >
            <div class="lg:pl-8 py-4">
              <AppSidebar />
            </div>
            
            <div class="flex flex-col lg:ml-60 xl:ml-60">
              <!-- <div class="bg-green w-full">hii</div> -->
              <slot />
              
              <slot name="footer">
                <PageFooter />
              </slot>
            </div>
          </div>
        </div>
      </div>
      <slot name="app-after" />
      <div id="app-after"></div>
    </div>
  </template>
  <style lang="scss" scoped>
  
  </style>
  