const cardMain =  document.querySelector(".item-parent");
document.querySelector('.less-btn').addEventListener('click',()=>{
     document.querySelector('.less-text').style.display = "none"
     document.querySelector('.more-text').style.display = "block"
     document.querySelector('.page-btn').style.top = "187px"
})

document.querySelector('.more-btn').addEventListener('click',()=>{
     document.querySelector('.less-text').style.display = "block"
     document.querySelector('.more-text').style.display = "none"
     document.querySelector('.page-btn').style.top = "144px"
})

const card = document.createElement('div')



for(let i=0;i<50;i++){
     const card = document.createElement('div')

card.innerHTML = `
<div class="filter-items p-2 flex flex-col rounded-2xl border-2 border-border-color hover:-translate-y-1 duration-200 cursor-pointer hover:outline-8 outline-border-color ">
<!--IMG-->
<div class="mb-3 overflow-hidden relative" >
  <img class="w-full" src="./assets/Image/page-wrapper-1.png"/>
  <div class="filter-btn hidden absolute bottom-6 w-full z-20 duration-150 mx-1 ">
    <div class="flex items-center justify-center">
      <button class="bg-white text-btn-color-text h-7 sm:h-10 text-xs sm:text-sm font-bold rounded-lg px-2 py-3 sm:py-4 flex items-center justify-center mr-1 sm:mr-2 ">Buy Now</button>
      <button class="bg-white text-btn-color-text flex items-center justify-center h-7 w-6 sm:h-10 sm:w-10 rounded-lg ">
        <svg viewBox="0 0 25 24" fill="none" width="24" height="24" xlmns="http://www.w3.org/2000/svg" class="sc-gueYoa ioMJjd"><g><path d="M12.5 5V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.5 12H19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
      </button>
    </div>
  </div>
  <div class="filter-items-overal absolute top-0 bottom-0 right-0 left-0 bg-overally-items hidden z-10"></div>
  <div class="filter-icons absolute bottom-2 left-2 bg-NFT-market w-7 h-7 rounded-full flex items-center justify-center text-span-color">
    <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xlmns="http://www.w3.org/2000/svg" class="sc-gueYoa diZvQV"><path d="M20 14.7611V13.9483C20 13.8731 19.9253 13.8187 19.852 13.8394L15.904 14.9491C15.8827 14.9543 15.864 14.9659 15.8493 14.9815C15.4269 15.4352 15.0677 15.7398 14.9722 15.8209L14.9653 15.8267C14.72 16.0289 14.416 16.1391 14.096 16.1391H12.6667V14.7222H13.8027C13.832 14.7222 13.86 14.7118 13.8813 14.6937L14.028 14.5628C14.0907 14.507 14.1653 14.4396 14.2547 14.3528C14.262 14.3456 14.2695 14.3384 14.277 14.331C14.3242 14.2854 14.3746 14.2366 14.424 14.183C14.4827 14.1272 14.54 14.065 14.5933 14.0041C14.6827 13.9107 14.768 13.8135 14.8573 13.7111C14.9213 13.6437 14.98 13.5672 15.0373 13.4907C15.1013 13.4181 15.164 13.3365 15.2227 13.2587C15.2445 13.2276 15.2676 13.1961 15.2913 13.164C15.314 13.1332 15.3372 13.1018 15.36 13.0694C15.4027 13.0072 15.4453 12.9411 15.4813 12.8789C15.5933 12.7104 15.688 12.5302 15.768 12.35C15.8047 12.2728 15.8341 12.1915 15.8626 12.1125C15.8662 12.1026 15.8698 12.0928 15.8733 12.083C15.9053 11.9909 15.932 11.9041 15.952 11.812C16 11.5956 16.0107 11.3804 15.9893 11.1652C15.984 11.0978 15.9787 11.0317 15.9627 10.9694V10.9591C15.9573 10.915 15.9467 10.8657 15.932 10.8204C15.884 10.6104 15.8093 10.4004 15.7147 10.1943C15.6827 10.1178 15.6453 10.04 15.6093 9.96869C15.524 9.81446 15.4347 9.66019 15.3333 9.51111C15.313 9.47963 15.2905 9.44774 15.2681 9.4159C15.2508 9.39137 15.2336 9.36686 15.2173 9.3426C15.1533 9.24653 15.0813 9.15391 15.0114 9.06404C14.9954 9.04355 14.9796 9.02319 14.964 9.00298C14.9226 8.9501 14.8772 8.89722 14.8316 8.84399C14.8067 8.815 14.7818 8.78591 14.7573 8.75666C14.688 8.67499 14.62 8.59721 14.5507 8.52075C14.3027 8.24853 14.0427 8.00221 13.8107 7.79223C13.768 7.75074 13.7213 7.70927 13.6733 7.66906C13.4933 7.50964 13.3293 7.37093 13.192 7.26332C13.1505 7.2323 13.1133 7.20173 13.0787 7.17329C13.0555 7.15421 13.0334 7.13609 13.012 7.11943C12.9701 7.08907 12.9337 7.06214 12.9032 7.03957C12.8843 7.02554 12.8676 7.0132 12.8533 7.00276C12.8427 6.995 12.8307 6.98981 12.8187 6.98591L12.6667 6.94444V5.72075C12.6667 5.52112 12.584 5.34223 12.452 5.2113C12.32 5.08036 12.136 5 11.9333 5C11.528 5 11.2 5.32278 11.2 5.72075V6.54518L11.124 6.52443L10.9173 6.4674L10.7293 6.41685C10.7288 6.41685 10.7282 6.41663 10.7276 6.41637C10.7267 6.416 10.7256 6.41556 10.724 6.41556H10.72L9.29332 6.03963C9.23066 6.02277 9.17733 6.08889 9.20935 6.14463L9.43732 6.55427C9.45026 6.5857 9.46663 6.61713 9.48346 6.64943C9.49438 6.67041 9.5055 6.69175 9.51599 6.71369C9.55334 6.78631 9.59066 6.86277 9.62668 6.93926C9.65866 7.00666 9.69067 7.07277 9.72799 7.14537C9.74357 7.17924 9.75945 7.21352 9.77555 7.24829C9.83526 7.37717 9.89804 7.51271 9.96 7.65872L9.96051 7.65988C10.0137 7.78264 10.0668 7.90541 10.1133 8.03333C10.2413 8.35611 10.3627 8.70092 10.468 9.05482C10.4942 9.13395 10.5151 9.21054 10.5364 9.28816C10.5454 9.32115 10.5545 9.35433 10.564 9.38797L10.5787 9.45018C10.6213 9.61482 10.6587 9.77815 10.6853 9.94279C10.7067 10.0556 10.7267 10.1631 10.7373 10.272C10.7533 10.3952 10.7693 10.5183 10.7747 10.6415C10.7853 10.7543 10.7907 10.8722 10.7907 10.985C10.7907 11.2728 10.764 11.5502 10.7013 11.812C10.6975 11.826 10.6936 11.8401 10.6896 11.8543C10.672 11.9182 10.6538 11.9844 10.632 12.048C10.6123 12.116 10.5868 12.184 10.5602 12.2546C10.5509 12.2796 10.5414 12.3048 10.532 12.3305C10.5303 12.335 10.5286 12.3395 10.5269 12.344C10.5072 12.3954 10.4872 12.4478 10.4627 12.4991C10.3307 12.8076 10.1667 13.1148 9.99732 13.4026C9.74933 13.8291 9.49999 14.2037 9.32534 14.4448C9.31461 14.4605 9.30415 14.4753 9.29407 14.4896C9.28161 14.5074 9.26973 14.5242 9.25866 14.5407C9.20401 14.6159 9.25999 14.7222 9.35467 14.7222H11.2V16.1391H9.33332C8.83201 16.1391 8.36799 15.863 8.14399 15.4209C8.028 15.1993 7.98267 14.9556 8.00934 14.717C8.01601 14.6457 7.96133 14.5783 7.88666 14.5783H4.11599C4.052 14.5783 4 14.6289 4 14.6911V14.7663C4 17.1048 5.94267 19 8.33999 19H15.104C16.3719 19 17.0919 17.8767 17.7995 16.7726C17.9968 16.4648 18.1931 16.1585 18.4 15.8785C18.772 15.3756 19.6667 14.9763 19.928 14.8674C19.9707 14.8493 20 14.8078 20 14.7611Z" fill="currentColor"></path><path d="M5.0079 12.9087L4.95192 12.9942C4.90258 13.0681 4.95723 13.1666 5.05058 13.1666H8.52256C8.56124 13.1666 8.59726 13.1485 8.61857 13.1174C8.6639 13.05 8.70659 12.98 8.74523 12.9087C9.04525 12.4187 9.31192 11.8885 9.40925 11.497C9.63726 10.5455 9.15057 9.0172 8.58659 7.78829C8.54924 7.70664 8.43325 7.69885 8.3839 7.77404L5.0079 12.9087Z" fill="currentColor"></path></svg>
  </div>
</div>
<!--Text-->
<div class="flex flex-col">
  <div class="flex flex-row-reverse md:flex-col justify-between items-center md:items-stretch px-2 md:mb-2 pb-1">
    <div class="flex flex-row items-center mb-2 justify-between">
      <div class="hidden md:block">
        <div class="flex">
          <h1 class="mr-2 text-span-color2 text-sm truncate max-w-full  text-center">Bored Ape Yacht Club</h1>
          <svg display="block" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
        </div>
      </div>
      <div class="flex text-span-color2 text-sm">
        <i class="fa-solid fa-ellipsis"></i>
      </div>
     </div>
     <span class="text-white font-bold truncate  w-20 md:text-sm md:w-44 overflow-auto">BoredApeYachtClub #5723</span>
  </div>
  <div class="block md:hidden px-2">
    <span class="text-span-color2 text-xs font-bold">Price: 28 ETH</span>
   </div>
  <div class="hidden lg:block bg-a-back rounded-xl">
    <div class="flex flex-col max-w-[300px] p-3 ">
      <div class="flex items-center justify-between text-span-color2 font-medium text-xs mb-2">
        <span>Price</span>
        <span>Highest bid</span>
      </div>
      <div class="flex items-center justify-between font-medium text-xs text-white pt-2">
        <span>25.06 ETH</span>
        <span>No bids yet</span>
      </div>
    </div>
  </div>
</div>
</div>
`

     cardMain.appendChild(card)
}

