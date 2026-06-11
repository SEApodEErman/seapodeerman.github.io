<script setup>
const builds = [
  {
    name: 'Main build',
    layout: 'Planned',
    description: 'Add switch, keycap, case, and sound profile details here.',
  },
  {
    name: 'Compact side build',
    layout: 'Idea',
    description: 'A small project slot for portable or experimental keyboard builds.',
  },
  {
    name: 'Hitsound-friendly setup',
    layout: 'In progress',
    description: 'Notes for typing feel, layout comfort, and long session use.',
  },
]
</script>

<template>
  <section class="page-section">
    <div class="page-heading">
      <p class="eyebrow">Keyboards</p>
      <h1>Small builds, clean feel.</h1>
      <p class="lead">
        A place for custom keyboard projects, switch notes, keycap choices, and
        build updates from SEApodEErman.
      </p>
    </div>

    <div class="cards-grid">
      <article v-for="build in builds" :key="build.name" class="work-card">
        <div class="card-top">
          <span class="pill">Custom keyboard</span>
          <span class="status">{{ build.layout }}</span>
        </div>
        <h2>{{ build.name }}</h2>
        <p>{{ build.description }}</p>
        <span class="card-link">Build notes coming soon</span>
      </article>
    </div>
  </section>
</template>
