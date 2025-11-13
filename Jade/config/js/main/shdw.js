export function custom_avatar(element) {
    const root = element.shadowRoot;
    const rootStyle = document.createElement("style");
    rootStyle.textContent = `
		:host .lol-regalia-crest-root .lol-regalia-summoner-icon-mask-container .lol-regalia-summoner-icon .local {
			background-image: var(--custom-avatar) !important;
		}
    `;
    root.appendChild(rootStyle);
}
