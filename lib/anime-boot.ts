/**
 * Inline script for the root layout's <head>. Runs before first paint and turns on the hidden start states of
 * the anime.js entrances (components/ui/Anime.tsx) — unless motion is reduced. If the motion code has not
 * arrived within 4 s, it turns them off again so nothing stays hidden.
 */
export const ANIME_BOOT = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.classList.add('anime');setTimeout(function(){if(!window.__anime)d.classList.remove('anime')},4000)}catch(e){}})();`;
