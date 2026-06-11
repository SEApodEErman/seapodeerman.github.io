<script setup>
import { RouterLink } from 'vue-router'

const works = [
  {
    title: 'Beatmap slot',
    type: 'Beatmap',
    status: 'Add details',
    description: 'Add the song title, artist, difficulty set, and map status here.',
  },
  {
    title: 'Hitsound notes',
    type: 'Hitsounds',
    status: 'Add details',
    description: 'Track sample packs, timing notes, and rhythm choices for future maps.',
  },
  {
    title: 'osu! project',
    type: 'osu! related',
    status: 'Planned',
    description: 'A flexible card for collaborations, drafts, or anything osu!-related.',
  },
]
</script>

<template>
  <section class="page-section">
    <div class="page-heading">
      <p class="eyebrow">osu! Works</p>
      <h1>Mahiru Shiina’s osu! space.</h1>
      <p class="lead">
        A clean showcase for beatmaps, hitsounds, and other osu!-related work.
        Add new entries by expanding the structured list in this page.
      </p>
    </div>

    <div class="cards-grid">
      <article v-for="work in works" :key="work.title" class="work-card">
        <div class="card-top">
          <span class="pill">{{ work.type }}</span>
          <span class="status">{{ work.status }}</span>
        </div>
        <h2>{{ work.title }}</h2>
        <p>{{ work.description }}</p>
        <RouterLink class="card-link" to="/contact">Request details</RouterLink>
      </article>
    </div>
  </section>
</template>
