# The Endless Atelier

An infinite 3D gallery of original imagegen artworks. Walk with W or Up, look freely with the mouse or touch drag, and click a nearby canvas to inspect it. Space toggles a stroll. Travel always follows the hallway forward regardless of viewing direction. Escape releases mouse capture or closes an artwork.

Run `npm install` then `npm start`; open http://localhost:4173. Three.js is vendored into dist so the gallery does not depend on a CDN at runtime. Static hosting uses dist. No GitHub Pages workflow is used.

The hallway recycles twelve sections. Existing paintings repeat along the infinite route while new paintings join the collection. The collection refreshes every thirty seconds without resetting the walk. Every artwork records its title, description, original generation prompt and creation instant; placards display Australia/Brisbane date and time.

Recurring creation is scheduled in this Codex chat every five minutes until stopped. Generation and network delays can make completion later than the interval. A run creates as many finished original paintings as practical, appends the manifest, tests, commits and pushes to https://github.com/ivanvonchrist/art-gallery. Keep the desktop app and computer running. Stop by asking in this chat or creating STOP_ART in the workspace.
