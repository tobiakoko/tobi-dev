---
slug: led-wall
title: Extending a church LED wall
outcome: I took a church's LED wall from a failed extension, with scrambled and repeated content, to one working 3072 × 1536 display.
order: 3
featured: true
year: '2026'
role: Diagnosis, system design, controller and receiving-card configuration, vendor follow-up
team: Solo, with the church and the equipment vendor
# TODO(content): months
timeline: '2026'
stackLabel: Tools and hardware
stack:
  - NovaStar VX1000 Pro (replacing a VX600)
  - 24 NovaStar A7s Plus receiving cards
  - NovaLCT V5.9.2
  - NovaStar Mapping test
  - receiving-card self-tests
  - Claude for spec research and diagnostic cross-checks
disciplines: [Analysis, Implementation, Delivery]
# TODO(content): pastor's OK to publish; photos only with no congregation faces
stats:
  - { value: '16 → 24', label: 'cabinets running' }
  - { value: '+50%', label: 'screen (3072 × 1536 px)' }
  - { value: '9', label: 'separate faults found and fixed' }
---

## Context

The church's LED wall started as 16 cabinets (4 × 4, 2048 × 1536 px), driven by a NovaStar VX600 over six Ethernet ports. To make it bigger, the church added 8 cabinets as two new columns: 24 cabinets, 6 × 4, 3840 × 1920 mm, P1.25 indoor. After the install, the wall no longer showed one clean picture. Sections repeated, froze or showed the wrong part of the image.
