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
# Permission: given by the pastor (5 Nov 2026). Photos only with no congregation faces.
# TODO(content): cover photo of the working wall (no congregation faces).
stats:
  - { value: '16 → 24', label: 'cabinets running' }
  - { value: '+50%', label: 'screen (3072 × 1536 px)' }
  - { value: '9', label: 'separate faults found and fixed' }
---

## Context

The church's LED wall started as 16 cabinets (4 × 4, 2048 × 1536 px), driven by a NovaStar VX600 over six Ethernet ports. To make it bigger, the church added 8 cabinets as two new columns: 24 cabinets, 6 × 4, 3840 × 1920 mm, P1.25 indoor. After the install, the wall no longer showed one clean picture. Sections repeated, froze or showed the wrong part of the image.

## The problem

The wall grew by 50% while its controller and configuration stayed sized for the original screen. The wall carries lyrics, sermon slides, camera close-ups and what the livestream audience sees, so services ran on a reduced layout with part of the wall dark, and the new cabinets added nothing.

- **Over capacity:** the full wall is 4,718,592 px; the VX600 is rated for 3.9 million, about 21% over.
- **Over per-port bandwidth:** six ports for 24 cabinets meant 4 cabinets (786,432 px) per chain, against about 650,000 px per Gigabit port.
- **Stale map:** the controller still held the 2048 × 1536 map.
- **Wrong module profile:** the receiving cards were set for a different module, which scrambled the picture, capped cabinet height at 256 px and ran a 480 Hz refresh that risked banding on camera.
- **Missing controller:** the packing list included a VX1000, but none was shipped.

## My role

### Analysis

- Rebuilt the specification from physical evidence (carton labels, circuit-board markings, mounting bars, the packing list) instead of trusting stored settings.
- Worked out the pixel and port maths that showed it was a hardware limit.
- Reconstructed the original installer's port map.

### Implementation

- Designed a new data topology.
- Configured the VX1000 Pro: grid, cabinets per port, map and output.
- Identified the module's driver chip and loaded the manufacturer's receiving-card profile on all 24 cards.

### Delivery

- Raised the missing controller and the profile request with the vendor under the order number.
- Kept services running on a reduced layout in the meantime.
- Validated and documented the handover.

## Process

The system is a stack of five configuration layers, each relying on the one below, and every layer held its own fault. I worked through it in six phases.

### Discovery

The physical evidence: the module label R1.25/64S 256X128; 640 mm and 955 mm mounting bars giving 640 × 480 mm, 512 × 384 px cabinets; A7s Plus cards; a 6 × 4 grid; and the VX600 still showing 2048x1536@60.

### Capacity

Cabinets per port: 2 per port is 393,216 px (60%), 3 is 589,824 px (91%), and 4 is 786,432 px (121%, over).

### Topology

8 horizontal chains of 3 cabinets. Odd ports feed the left power supply and even ports the right, so no chain crosses the power boundary.

### Controller setup

Three passes. Vertical chains failed because 3 doesn't divide 4 rows; the grid still described a 4 × 2 wall; and "Device overloaded" came from 3D being on, which halves capacity.

### Receiving cards

The cards held a generic common-chip, static-scan profile; the module is a Chipone ICND2165 PWM driver at 1/64 scan. I resisted cutting the cabinet height to clear a red warning, which would have hidden a third of every cabinet, and loaded the factory profile instead.

### Validation and handover

A Mapping walk, full-colour tests, a camera check at 1/60 and 1/120 shutter, a power cycle to confirm the settings persist, and written records.

## Architecture

![LED wall port map: a NovaStar VX1000 Pro feeds 24 cabinets in a 6 by 4 grid as 8 horizontal chains of 3; the left half runs on power supply A from odd ports, the right half on supply B from even ports.](/work/led-wall/ports-light.svg 'The final port map: 8 chains of 3 cabinets, split across two power halves.')

The VX1000 Pro feeds 8 of its 10 Gigabit ports, each carrying one horizontal chain of three cabinets at 589,824 px, 91% of a port's limit. Odd ports sit on power supply A and even ports on supply B, so a supply failure darkens exactly one half of the wall.

<!-- TODO(content): the five-layer configuration stack diagram, with the fault found at each layer. Needs the layer names from the source case study. -->

## Key decisions

### Chose a bigger controller over more tuning

No port arrangement on a VX600 could carry 24 of these cabinets.

### Chose horizontal chains of three over vertical chains

Three divides the 6 columns, not the 4 rows.

### Chose to keep each chain inside one power half

A power fault can never be mistaken for a data fault.

### Chose the manufacturer's profile over editing settings by hand

PWM driver chips need factory register settings.

<!-- TODO(content): Issues log (Symptom / Root cause / Fix, 9 rows) from the source case study: stale map and over-capacity; no controller shipped; a missing module; stranded top-row cabinets; only the top-left region addressed; "Device overloaded" from 3D; Image Mosaic and PIP left on; module size entered as cabinet size; the wrong receiving-card profile. -->

## Outcome

| Measure                | Before                             | After                                 |
| ---------------------- | ---------------------------------- | ------------------------------------- |
| Cabinets               | 24 installed, picture broken       | 24 (6 × 4) running as one canvas      |
| Canvas                 | 2048 × 1536, stale                 | 3072 × 1536 @ 60 Hz                   |
| Controller             | VX600, 21% over its 3.9M px rating | VX1000 Pro, 73% of its 6.5M px rating |
| Heaviest port load     | 786,432 px (121%)                  | 589,824 px (91%)                      |
| Ports in use           | 6 of 6                             | 8 of 10 (2 spare)                     |
| Receiving-card profile | Generic common-chip, static scan   | Chipone ICND2165, 1/64 scan           |

Settings are saved to the controller and the cards and survived a power cycle. The handover note for the church team: "If exactly half the wall goes dark, check that half's power supply first."

<!-- TODO(content): photos of the working wall, rear cabling, the Mapping test and the receiving-card self-test before and after (no congregation faces). -->

## Reflection

> **What I'd do next:** do the pixel maths before mounting anything; trust physical evidence over stored settings; test one layer at a time; treat a warning as a symptom; and ask for factory files with the order.
