---
title: "Building osu!ReqTrac: a calmer way to track mapping requests"
excerpt: "A local-first desktop workspace for keeping hitsounds, guest difficulties, storyboards, and the requests between them under control."
date: 2026-07-23
tags: ["osu!", "software", "mapping"]
sample: false
---

Mapping requests have a way of becoming larger than the message that starts them. A beatmap link arrives, a category gets mentioned, a deadline appears somewhere in the conversation, and suddenly “I’ll take a look” has become a small piece of project management.

**osu!ReqTrac** is my attempt to give that work a proper home: a cross-platform desktop application for tracking and managing osu! requests. It is built around a simple idea—every request should have enough context to be useful when I return to it later.

## From a link to a workable request

ReqTrac can organize requests for hitsounds, guest difficulties, storyboards, and custom categories. Each entry can carry a status, priority, deadline, notes, history, tags, requester information, and an osu! beatmap link. Manual or non-osu! requests can live alongside them too, without pretending that every task has to come from the API.

The request list is the practical center of the app. Search and filters make it possible to find a song, artist, requester, status, priority, or tag without scrolling through old conversations. Bulk actions handle the repetitive parts—updating several statuses or priorities together, or removing a group of completed items when the cleanup moment finally arrives.

<figure>
  <img src="/assets/blog/reqtrac-requests.webp" alt="osu!ReqTrac request list showing beatmaps, statuses, priorities, deadlines, and notes" loading="lazy" />
  <figcaption>The request list keeps the queue visible instead of hiding it in a chat history.</figcaption>
</figure>

## Let osu! fill in the blanks

When an osu! account is connected through OAuth, ReqTrac can sync beatmap metadata, covers, difficulties, ranked status, and user information. The app caches the useful parts locally, which makes revisiting a request faster and gives the workspace a little more resilience when I am not actively browsing osu!.

Opening a request brings its context together: beatmap information on one side, workflow details on the other, and the links and discussion that connect the two. That is where a vague “can you do hitsounds for this?” becomes a task with a shape.

<figure>
  <img src="/assets/blog/reqtrac-request-detail.webp" alt="osu!ReqTrac request detail window with beatmap difficulties, status, priority, deadline, and request categories" loading="lazy" />
  <figcaption>A request detail view with difficulty metadata, workflow fields, categories, and history.</figcaption>
</figure>

## The overview I actually want to open

The dashboard is intentionally less about decoration and more about orientation. It shows total, active, and completed requests alongside deadlines, recent additions, workload statistics, and a yearly breakdown. The goal is to answer a few useful questions quickly: what is waiting, what is moving, and what has already made it across the finish line?

<figure>
  <img src="/assets/blog/reqtrac-dashboard.webp" alt="osu!ReqTrac dashboard showing request totals, recent requests, statistics, and yearly breakdown" loading="lazy" />
  <figcaption>The dashboard turns a long request history into a readable snapshot.</figcaption>
</figure>

## Still early, deliberately useful

ReqTrac is released, but it is still early. There are more features I want to explore, and the best direction will come from using it against real mapping work. For now, the important part is already there: requests stay local by default, beatmap context is close at hand, and the next task is easier to find than it was before.

The project is available on <a href="https://github.com/SEApodEErman/osu-ReqTrac" target="_blank" rel="noopener noreferrer">GitHub</a>, including packaged releases for Windows, macOS, and Linux AppImage. It is an independent community project and is not affiliated with or endorsed by osu! or ppy.
