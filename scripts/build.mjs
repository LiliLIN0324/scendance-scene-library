import { packageScenePresets } from './package-scene-presets.mjs';

// Emits dist/scene-presets/<key>/{<key>.glb,preview.jpg} from the archived
// sources under scene/templates/. The source GLBs are never modified: only the
// JSON chunk is rewritten (Preset_Structure / Preset_Objects), the binary chunk
// (geometry + textures) is copied byte for byte.
await packageScenePresets(new URL('../', import.meta.url));
console.log('Built dist/scene-presets/<key>/ for 10 scenes.');
