export const THEME_STORAGE_KEY = "zenrep-theme";

// Roda antes da pintura para aplicar o tema salvo (ou o do sistema) sem piscar.
export const themeBootScript = `try{var savedTheme=localStorage.getItem("${THEME_STORAGE_KEY}");if(savedTheme==="light"||savedTheme==="dark"){document.documentElement.dataset.theme=savedTheme}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.dataset.theme="dark"}}catch(error){}`;
