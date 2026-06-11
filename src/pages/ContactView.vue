<script setup>
const contactItems = [
  {
    label: 'osu!',
    value: 'Mahiru Shiina',
    note: 'Add a profile link when ready.',
  },
  {
    label: 'Email',
    value: 'Add email address',
    note: 'Placeholder for a personal email.',
  },
  {
    label: 'Discord',
    value: 'Add Discord handle',
    note: 'Placeholder for direct messages.',
  },
  {
    label: 'GitHub',
    value: 'Add GitHub profile',
    note: 'Placeholder for code and projects.',
  },
]
</script>

<template>
  <section class="page-section contact-section">
    <div class="page-heading">
      <p class="eyebrow">Contact</p>
      <h1>Reach SEApodEErman.</h1>
      <p class="lead">
        Contact details can be added here later. For now, this page keeps the
        structure ready for osu!, email, Discord, GitHub, or any other link.
      </p>
    </div>

    <div class="contact-list">
      <article v-for="item in contactItems" :key="item.label" class="contact-item">
        <div>
          <h2>{{ item.label }}</h2>
          <p>{{ item.value }}</p>
        </div>
        <span>{{ item.note }}</span>
      </article>
    </div>
  </section>
</template>
