export function advance(distance,seconds,walking){return distance+(walking?Math.min(Math.max(seconds,0),0.05)*2.2:0)}
export function visibleBays(distance){const start=Math.max(0,Math.floor(distance/9)-2);return Array.from({length:12},(_,i)=>start+i)}
