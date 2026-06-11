<script setup>
import { RouterLink, RouterView } from 'vue-router'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'osu! Works', path: '/works' },
  { label: 'Keyboards', path: '/keyboards' },
  { label: 'Contact', path: '/contact' },
]
</script>

<template>
  <div class="page-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/" aria-label="SEApodEErman home">
        <span class="brand-mark" aria-hidden="true">S</span>
        <span class="brand-name">SEApodEErman</span>
      </RouterLink>

      <nav class="site-nav" aria-label="Primary navigation">
        <RouterLink v-for="item in navItems" :key="item.path" :to="item.path">
          {{ item.label }}
        </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView v-slot="{ Component, route }">
        <Transition name="page">
          <Component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>

    <footer class="site-footer">
      <span>SEApodEErman</span>
      <span>osu!: Mahiru Shiina</span>
    </footer>
  </div>
</template>
