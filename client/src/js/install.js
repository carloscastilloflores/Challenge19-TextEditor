const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt; // Store the deferred prompt event

// Event handler for the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  buttonInstall.classList.remove('hidden'); // Use remove() instead of toggle() for clarity
});

// Event handler for the install button click
buttonInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }
  deferredPrompt.prompt();
  const choiceResult = await deferredPrompt.userChoice;

  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }

  deferredPrompt = null;
  buttonInstall.classList.add('hidden');
});

// Event handler for the 'appinstalled' event
window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
});