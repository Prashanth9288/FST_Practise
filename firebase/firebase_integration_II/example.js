const items=[
  'Item 1','Item 2','Item 3','Item 4','Item 5','Item 6','Item 7','Item 8',
  'Item 9','Item 10','Item 11','Item 12','Item 13','Item 14 ','Item 15'
];

const itemsPerPage=5;
let currentPage=1;
const totalPages=Math.ceil(items.length/itemsPerPage);

//DOM Elements

const itemList=document.getElementById('itemList');
const prevButton=document.getElementById('prevPage')