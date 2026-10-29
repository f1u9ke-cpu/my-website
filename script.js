const cfg=window.SITE_CONFIG||{};
document.querySelectorAll('[data-brand]').forEach(el=>el.textContent=cfg.brand);
document.querySelectorAll('[data-phone]').forEach(el=>{el.textContent=cfg.phone;if(el.tagName==='A')el.href='tel:'+cfg.phone.replace(/\D/g,'')});
document.querySelectorAll('[data-email]').forEach(el=>{el.textContent=cfg.email;if(el.tagName==='A')el.href='mailto:'+cfg.email});
document.querySelectorAll('[data-line]').forEach(el=>{el.textContent=cfg.lineId;if(el.tagName==='A')el.href=cfg.lineUrl});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const menu=document.querySelector('.mobile-menu');if(menu)menu.addEventListener('click',()=>{const nav=document.querySelector('.nav-links');nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});
const form=document.querySelector('#consult-form');if(form){form.addEventListener('submit',e=>{if(!cfg.googleAppsScriptUrl){e.preventDefault();document.querySelector('#form-status').textContent='示範版本尚未設定收件服務。請在 config.js 填入你自己的 Google Apps Script 網址後再送出。';return;}form.action=cfg.googleAppsScriptUrl;});}
