import {test} from 'node:test';
import assert from 'node:assert/strict';
import {advance,visibleBays} from '../dist/movement.js';
import {readFile,access} from 'node:fs/promises';
test('travel only advances; long inactive frames cannot teleport',()=>{assert.equal(advance(10,1,false),10);assert.equal(advance(10,-1,true),10);assert.equal(advance(10,100,true),10.11)});
test('infinite hallway keeps a bounded connected window',()=>{for(const distance of [0,100,1e8]){const bays=visibleBays(distance);assert.equal(bays.length,12);assert.ok(bays[0]>=0);assert.ok(bays.every((n,i)=>!i||n===bays[i-1]+1))}});
test('collection has timestamped original assets and reproducible prompts',async()=>{const art=JSON.parse(await readFile('dist/artworks.json'));assert.ok(art.length>0);assert.equal(new Set(art.map(a=>a.id)).size,art.length);for(const a of art){assert.ok(a.title&&a.description&&a.prompt);assert.ok(Number.isFinite(Date.parse(a.createdAt)));await access('dist/'+a.image)}});
