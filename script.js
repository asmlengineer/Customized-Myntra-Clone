let bagitem;
onload(); 

function onload(){
 let bagitemstr = localStorage.getItem('bagitem');  
  bagitem = bagitemstr ? JSON.parse(bagitemstr) : []; 
   displayItem();
   displaybagicon();
 }

function addtoBag(itemid){
   bagitem.push(itemid);
   localStorage.setItem('bagitem', JSON.stringify(bagitem));
   displaybagicon();
}

function displaybagicon(){
   let bagitemCountElement = document.querySelector
   ('.bag-item-count');
  if(bagitem.length > 0){
    bagitemCountElement.style.visibility = 'visible';  
   bagitemCountElement.innerText = bagitem.length; 
  } 
  else{
   bagitemCountElement.style.visibility = 'hidden';
  }
}

function displayItem(){
  let itemConatainerElement = document.querySelector
   ('.items-container');    
  let innerHTML = '';

   items.forEach(item => {
   innerHTML +=  `
   <div class="item-container">
      <img src=${item.image} alt="" class="item-image">                                   
      <div class="rating">
      ${item.rating.stars}${item.rating.count}
      </div>
      <div class="company-name">
      ${item.company}
      </div>  
   <div class="item-name">
      ${item.item_name}
      studs
      </div>
      <div class="price">
         <span id="current-price">${item.currentPrice}</span>
         <span id="original-price">${item.original_price}</span>
         <span id="discount">(${item.discount_percentage})</span>
         </div>
         <a  href ="file:///F:/Myntra-clone/addtobagfunctionalities/index.html" taregt =_blank><button id="add-bag" onclick="addtoBag(${item.id})"> 
         Add To Bag
         </button></a>
         </div>     
`
});
itemConatainerElement.innerHTML = innerHTML;
}

