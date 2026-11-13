const MENUS={
traditional:[
["Rice and Grain Staples",[["Jollof Rice",3000],["Fried Rice",3500],["White Rice",2000],["Ofada Rice",4000],["Coconut Rice",4000],["Asun Rice",4000],["Native Rice",3500],["Meat Rice",4000]]],
["Swallows",[["Pounded Yam",3000],["Amala",2000],["Mashed Rice",500]]],
["Soups",[["Stew",1000],["Efo Riro",1500],["Egusi Soup",1500],["Afang Soup",1500], ["Ogbono Soup",1000], ["Ewedu & Gbegiri Soup",1500]]],
["Sides / Appetizers / Small Chops",[["Coleslaw",500],["Egg",300],["Plantain",700],["Side Caesar Salad",1000],["Potato Salad",1000],["Peppered Chicken",2500],["Peppered Beef",2000],["Chicken Wings",5000],["Asun",2500],["Suya",1000],["Puff Puff",500],["Meat Pie",500],["Sausage Rolls",700],["Samosa",300],["Egg Roll",400],["Pizza",6000],["Burger",6000],["Shawarma",4500]]]],
continental:[
["Pasta and Main Courses",[["Creamy Seafood Alfredo",20000],["Spaghetti Bolognese",9000],["Shredded Beef in Oyster Sauce",10000],["Grilled Salmon",10000]]],
["Grills and Platter Favorites",[["Beef Ribs",14000],["Chicken Caesar Salad",12000],["Club Sandwich",7000],["Fish and Chips",10000]]]]};
const fmt=n=>"\u20A6"+n.toLocaleString("en-NG");
const root=document.getElementById("menu-root");
if(root&&MENUS[root.dataset.menu]){
 MENUS[root.dataset.menu].forEach(([cat,items])=>{
  const s=document.createElement("section");
  const h=document.createElement("h2");h.className="cat";h.textContent=cat;s.appendChild(h);
  items.forEach(([n,p])=>{
   const d=document.createElement("div");d.className="item";
   d.innerHTML='<span class="nm"></span><span class="ln" aria-hidden="true"></span><span class="pr"></span>';
   d.children[0].textContent=n;d.children[2].textContent=fmt(p);s.appendChild(d);
  });
  root.appendChild(s);
 });
}
const here=location.pathname.split("/").pop()||"index.html";
document.querySelectorAll("#nav a").forEach(a=>{if(a.getAttribute("href")===here)a.setAttribute("aria-current","page")});
const t=document.getElementById("nav-toggle"),nav=document.getElementById("nav");
if(t){t.addEventListener("click",()=>{const hidden=nav.classList.toggle("hidden");t.setAttribute("aria-expanded",String(!hidden))});}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const el=document.querySelector(a.getAttribute("href"));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}}));
document.querySelectorAll(".imgbox img").forEach(i=>i.addEventListener("error",()=>i.remove()));
