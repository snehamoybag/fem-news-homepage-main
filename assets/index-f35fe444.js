(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const a=document.querySelector("#nav-bar"),n=document.querySelector("#nav-btn");let s=!1;n.addEventListener("click",()=>{s?u():l()});function l(){s=!0,n.setAttribute("aria-expanded","true"),n.classList.add("open-nav"),a.classList.add("open-nav")}function u(){s=!1,n.setAttribute("aria-expanded","false"),n.classList.remove("open-nav"),a.classList.remove("open-nav")}
