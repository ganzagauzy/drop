<script lang="ts" setup>
import { definePageMeta } from 'nuxt/dist/pages/runtime'
import { capitalize } from '../utils/str'
import { useLang } from '../composables/useLang';
function useHead(arg0: () => { title: string; meta: { name: string; content: string }[] }) {
  throw new Error('Function not implemented.')
}

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'docs',
})
useHead(() => ({
  title: capitalize(t('pages.getting-started.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.getting-started.description'),
    },
  ],
}))
</script>

<template>
  <PageContentRenderer
    path="/page/getting-started"
    :page-title="$t('pages.getting-started.title')"
  />
</template>
