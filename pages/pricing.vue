
<script lang="ts">
import { definePageMeta } from 'nuxt/dist/pages/runtime'
definePageMeta({
  layout: 'page',
})
export default {
  data() {
      return {
        checkbox: false,
        show1: false,
        password: '',
        username: '',
        name:"",
        bodyBackgroundColorClass: '',
      }
    },
  mounted() {
      this.setCardBackgroundColor();
    },
    methods: {
      setCardBackgroundColor() {
        const bodyBackgroundColor = getComputedStyle(document.body).getPropertyValue('background-color');
        
        if (bodyBackgroundColor === 'rgb(255, 255, 255)') {
          this.bodyBackgroundColorClass = 'bg-white';
        } else {
          this.bodyBackgroundColorClass = 'bg-dark';
        }
      },
    }
}
</script>
<template>
  <PageWrapper>
    <!-- <PageHeader>
      <PageTitle :text="$t('Pricing')" class="capitalize" />
    </PageHeader> -->
    <PageBody>
      <PageSection>
        <div class="text-center mx-auto">
          <a href="" class="my-2 text-green text-xl font-bold">Pricing</a>
          <h1 class="text-center text-4xl font-bold tracking-tight text-900 sm:text-5xl">Pricing plans for teams of all sizes</h1>
          <p class="mt-6 text-lg leading-8 text-900 text-center">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <p class=" text-lg leading-8 text-900 text-center"> sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          
        </div>
        <div class="flex flex-wrap justify-center my-20">
          <div class="card mb-5" >
            <h2 class="text-xl font-bold mb-4">Freelancer</h2>
            <p class="text-l mb-4">
              The essentials to provide your best work for clients.
            </p>
            <h3 class="mb-5">
              <span class="text-4xl font-bold mb-4">$24</span>
              <span class="mb-4">/month</span>
            </h3>

            <ul class="list-disc pl-6 mb-5">
              <li class="mb-2">5 products</li>
              <li class="mb-2">Up to 1,000 subscribers</li>
              <li class="mb-2">Basic analytics</li>
              <li class="mb-2">48-hour support response time</li>
            </ul>
            <button
              class="border border-green-500 hover:bg-green-500 hover:text-white text-green-500 font-bold py-2 px-4 rounded w-full transition-all duration-200"
            >
              Buy plan
            </button>
          </div>
          <div class="card elevated mb-5">
            <h2 class="text-xl font-bold mb-4">Freelancer</h2>
            <p class="text-l mb-4">
              The essentials to provide your best work for clients.
            </p>
            <h3 class="mb-5">
              <span class="text-4xl font-bold mb-4">$24</span>
              <span class="mb-4">/month</span>
            </h3>

            <ul class="list-disc pl-6 mb-5">
              <li class="mb-2">5 products</li>
              <li class="mb-2">Up to 1,000 subscribers</li>
              <li class="mb-2">Basic analytics</li>
              <li class="mb-2">48-hour support response time</li>
            </ul>
            <button
              class="text-white bg-green-500 hover:bg-green-500 hover:text-white text-white-500 font-bold py-2 px-4 rounded w-full transition-all duration-200"
            >
              Buy plan
            </button>
          </div>
          <div class="card mb-5" >
            <h2 class="text-xl font-bold mb-4">Freelancer</h2>
            <p class="text-l mb-4">
              The essentials to provide your best work for clients.
            </p>
            <h3 class="mb-5">
              <span class="text-4xl font-bold mb-4">$24</span>
              <span class="mb-4">/month</span>
            </h3>

            <ul class="list-disc pl-6 mb-5">
              <li class="mb-2">5 products</li>
              <li class="mb-2">Up to 1,000 subscribers</li>
              <li class="mb-2">Basic analytics</li>
              <li class="mb-2">48-hour support response time</li>
            </ul>
            <button
              class="border border-green-500 hover:bg-green-500 hover:text-white text-green-500 font-bold py-2 px-4 rounded w-full transition-all duration-200"
            >
              Buy plan
            </button>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
<style lang="scss" scoped>
.card {
  flex: 1;
  max-width: 300px;
  // background-color: #1f2937;
  // background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid #999999;
}
.card:nth-child(1) {
  border-top-left-radius: 20px;
  border-right: none;
  @media screen and (max-width:600px) {
    border: 1px solid #999999;
    border-radius: 20px;
  }
  
}
.card:nth-child(3) {
  border-left: none;
  border-top-right-radius: 20px;
  @media screen and (max-width:600px) {
    border: 1px solid #999999;
    border-radius: 20px;
  }
}

.elevated {
  padding-top: 60px;
  margin-top: -40px;
  // border-bottom: 1px solid #999999;
  // border-top: 1px solid #999999;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.bg-white {
    background-color: #ffffff;
  }
  .bg-dark {
    background-color: #1f2937;
  }
</style>
