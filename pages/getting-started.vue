<script lang="ts" setup>
import { capitalize } from '../utils/str'
import { useLang } from '../composables/useLang';


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
