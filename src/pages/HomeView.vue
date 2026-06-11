<script setup>
import { RouterLink } from 'vue-router'

const hobbies = ['Beatmaps', 'Hitsounds', 'Custom keyboards']
const highlights = [
  {
    title: 'Beatmaps',
    body: 'Structured space for mapped songs, difficulty sets, and progress notes.',
  },
  {
    title: 'Hitsounds',
    body: 'Clean timing, sample choices, and rhythm details for osu! maps.',
  },
  {
    title: 'Keyboards',
    body: 'Compact builds, switch notes, and small project updates.',
  },
]
</script>

<template>
  <section class="hero-page">
    <div class="hero-copy">
      <p class="eyebrow">Personal landing page</p>
      <h1>
        Hi, I’m
        <span>SEApodEErman</span>.
      </h1>
      <p class="lead">
        I make osu! beatmaps and hitsounds, and build custom keyboards with a
        clean, tactile focus.
      </p>

      <div class="hero-actions">
        <RouterLink class="button button-primary" to="/works">
          View osu! works
        </RouterLink>
        <RouterLink class="button" to="/contact">Contact</RouterLink>
      </div>
    </div>

    <aside class="profile-card" aria-label="About me">
      <p class="card-label">About me</p>
      <dl>
        <div>
          <dt>Nickname</dt>
          <dd>SEApodEErman</dd>
        </div>
        <div>
          <dt>osu! username</dt>
          <dd>Mahiru Shiina</dd>
        </div>
        <div>
          <dt>Hobbies</dt>
          <dd>Making beatmaps &amp; hitsounds, building custom keyboards</dd>
        </div>
      </dl>

      <ul class="chips" aria-label="Hobby tags">
        <li v-for="hobby in hobbies" :key="hobby">{{ hobby }}</li>
      </ul>
    </aside>
  </section>

  <section class="section-grid" aria-label="Site sections">
    <article v-for="item in highlights" :key="item.title" class="feature-card">
      <h2>{{ item.title }}</h2>
      <p>{{ item.body }}</p>
    </article>
  </section>
</template>
