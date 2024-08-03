'use strict';

/*
# The PROJECT-2
## The Excpted Behavior :
  1. When Click On Show modal (1, 2, 3) button There's Will Be Poped Modal Has <h1> and <p> elements, There's Will Be overlay behind the Modal too.
  2. You Can Close The Modal By Clicking 'X' button OR By Clicking 'Esc' Button In The Keybord.

## Problems :
  1. How To Select All Elements With The Same Class 'show-,odal' Cuz' When Clicking Them There's Will Be The Same Response ?
  2. How To Make The The Classes With hiddin class to Be Apperd (overlay & modal Divs) ?
  3. How To Configure The close-modal Button To Exit The Modal And Hide The Overlay div ?
  4. How To Configure The 'Esc' Keybord Button To Work With The close-modal Button.

## Solution :
  1. Use `document.querySelectorAll('.show-modal')`.
  2. Just Remove The Class Called hidden From The Classes List By `document.querySelector('.modal').classList.remove('hidden')`.
  3. By Adding The hidden class to modal div By `document.querySelector('.modal').classList.add('hidden')` The Same For overlay div.
  4. By Adding Event Listener To The DOM It's Type Is `keydown` And It's Callback Has Parameter That'll Receive `event` Object That'll Has class called `event.key` When It's Equal To `Escape` Call The escapeModal.
*/
const showBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function openModal() {
  // console.log(modal);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function escapeModal() {
  console.log('Worked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click', openModal);
  if (i + 1 == showBtns.length) {
    closeBtn.addEventListener('click', escapeModal);
    overlay.addEventListener('click', escapeModal);
    document.addEventListener('keydown', event => {
      event.key === 'Escape' && !modal.classList.contains('hidden')
        ? escapeModal()
        : null;
    });
  }
}
