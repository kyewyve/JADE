(() => {
    const RESTART_KEY = 'jade-icon-restart-executed';
    
    const alreadyExecuted = sessionStorage.getItem(RESTART_KEY);
    
    if (alreadyExecuted) {
        return;
    }
    
    sessionStorage.setItem(RESTART_KEY, 'true');
    
    setTimeout(() => {
        window.location.reload();
    }, 2000);
})();