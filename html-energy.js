class HtmlEnergy extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement("style");
    const width = this.getAttribute("width") || "500px";
    const rotatingValue = this.getAttribute("rotating");
    const rotating = rotatingValue === "" || rotatingValue === "true";
    const speedValue = parseFloat(this.getAttribute("speed")) || 1;

    style.textContent = `
            html-energy .star {
                display: block;
                width: ${width};
                height: auto;
            }

            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }

            html-energy .star.rotating {
                -webkit-animation: spin ${100 / speedValue}s linear infinite;
            }
            `;

    const img = document.createElement("img");

    img.className = "star";
    img.src = "https://html.energy/images/star.png";
    img.alt = "html energy";

    if (rotating) {
      img.classList.add("rotating");
    }

    this.appendChild(style);
    this.appendChild(img);
  }
}

customElements.define("html-energy", HtmlEnergy);
