const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const products={
'HOB-0126':{name:'Assorted Rose / Gerbera + Chamomile',image:'flowers/HOB-0126-assorted-bouquets.png',flowers:'Rose · gerbera · chamomile',colors:'Red · blush · lavender · yellow · white · orange',description:'Available color selections shown in the collection: red, blush, lavender, yellow, white, and orange.'},
'HOB-0226':{name:'Sunflower + Fern',image:'flowers/HOB-0226-sunflower-and-fern.png',flowers:'Sunflower · fern',description:'Sunflower radiates warmth and confidence. Bright, cheerful blooms paired with greenery reflect a personality that is effortlessly self-assured and optimistic.\n\nA bouquet that celebrates clarity, strength, & sunny spirit.'},
'HOB-0326':{name:'Traditional Reds',image:'flowers/HOB-0326-traditional-reds.png',flowers:'Carnation · Ecuadorian roses · Malaysian mums · fern',description:'A tribute to grand old love, this lush arrangement overflows with rich red blooms—symbolizing devotion, passion, and enduring romance.'},
'HOB-0426':{name:'Lilac Kisses',image:'flowers/HOB-0426-lilac-kisses.png',flowers:'Gerbera · carnation · Ecuadorian roses · queen ann · gladiola',description:'Created for the modern woman drawn to pastels and dreamy romance, this bouquet features soft pinks and gentle lavenders layered in airy, feminine textures.\n\nLight, graceful, and effortlessly pretty.'},
'HOB-0526':{name:'Sunlit Blue',image:'flowers/HOB-0526-sunlit-blue.png',flowers:'Hydrangea · eryngium · tulips',description:'Sunlit Blues pairs cool blue tones with soft, yellow accents.\n\nThis arrangement reflects quiet strength & steady grace. A thoughtful choice for honoring resilience, protection, and a gentle glow that persists through life’s changes.'},
'HOB-0626':{name:'Summer Love',image:'flowers/HOB-0626-summer-love.png',flowers:'Carnation · lisianthus · tulips · golden rod',description:'Fresh, playful, and radiant, this arrangement captures the feeling of carefree days, warm smiles, and love that feels light, happy, and alive.'},
'HOB-0726':{name:'Plum + Evergreen',image:'flowers/HOB-0726-plum-and-evergreen.png',flowers:'Anthurium · calla lily · orchid · anemone',description:'For the one who values elegance, this blends deep plum tones with grounding green texture.\n\nAn arrangement that reflects understated power and thoughtful restraint—slow to open, yet rich with feeling.'}
};

const modal=document.querySelector('#productModal');
const modalImage=document.querySelector('#modalImage');
const modalCode=document.querySelector('#modalCode');
const modalTitle=document.querySelector('#modalTitle');
const modalDescription=document.querySelector('#modalDescription');
const modalFlowers=document.querySelector('#modalFlowers');
const modalColors=document.querySelector('#modalColors');
const colorBlock=document.querySelector('#colorBlock');
let lastTrigger=null;

function openProduct(code,trigger){
  const p=products[code];
  if(!p)return;
  lastTrigger=trigger||null;
  modalImage.src=p.image;
  modalImage.alt=p.name+' bouquet';
  modalCode.textContent=code;
  modalTitle.textContent=p.name;
  modalDescription.textContent=p.description;
  modalFlowers.textContent=p.flowers;
  colorBlock.hidden=!p.colors;
  modalColors.textContent=p.colors||'';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  setTimeout(()=>document.querySelector('.modal-close').focus(),40);
}
function closeProduct(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
  if(lastTrigger)lastTrigger.focus();
}

document.querySelectorAll('.product-trigger').forEach(el=>el.addEventListener('click',()=>openProduct(el.dataset.product,el)));
document.querySelector('.modal-close').addEventListener('click',closeProduct);
document.querySelector('.modal-backdrop').addEventListener('click',closeProduct);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeProduct();});