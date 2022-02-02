import { firstMouseUp } from '@/content/handler/PageEvent'

const MOUSE_UP = 'mouseup'

fetch(chrome.runtime.getURL('/content/template.html')).then(r => r.text()).then(html => {
    alert('ddwfege')
    document.body.insertAdjacentHTML('beforeend', html);
    // not using innerHTML as it would break js event listeners of the page
});

document.addEventListener(MOUSE_UP, firstMouseUp);




