const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); 
  window.deferredPrompt = event; 
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptevent = window.deferredPrompt; 
  if (!promptevent) {
    return; 
  }
  promptevent.prompt(); 
  window.deferredPrompt = null; 
  butInstall.classList.toggle('hidden', true); 

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});

// // Logic for installing the PWA
// // let deferredPrompt; // Store the deferred prompt event

// // Event handler for the 'beforeinstallprompt' event
// window.addEventListener('beforeinstallprompt', (event) => {
//   event.preventDefault();
//   window.deferredPrompt = event;
//   buttonInstall.classList.remove('hidden'); // Use remove() instead of toggle() for clarity
// });

// // Event handler for the install button click
// buttonInstall.addEventListener('click', async () => {
//   const promptEvent = window.deferredPrompt;
//   if (!promptEvent) {
//     return;
//   }
//   promptEvent.prompt();
  
//   const choiceResult = await deferredPrompt.userChoice;

//   if (choiceResult.outcome === 'accepted') {
//     console.log('User accepted the install prompt');
//   } else {
//     console.log('User dismissed the install prompt');
//   }

//   window.deferredPrompt = null;
//   buttonInstall.classList.add('hidden');
// });

// // Event handler for the 'appinstalled' event
// window.addEventListener('appinstalled', (event) => {
//   window.deferredPrompt = null;
// });