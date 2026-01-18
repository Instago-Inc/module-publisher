## v2.0.0 - Single publish orchestrator
The publisher module now exposes one async `publish({platforms, article})` entry point that loads platform adapters on demand, keeping multi-platform delivery simple while improving observability and error resiliency for automated publishing workflows.

### Added
- Added payload validation and per-platform result reporting plus logging so each adapter call surfaces success or failure details.
- Added dynamic platform module loading to avoid hard-coded imports and to support future platform adapters easily.

### Changed
- Replaced the old per-platform exports with the consolidated async `publish()` API and documented the new orchestration-oriented workflow in the README.
