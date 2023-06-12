const spacingSlider = document.querySelector("#spacing");
const blurSlider = document.querySelector("#blur");
const colorPick = document.querySelector("#base");
const image = document.querySelector("img");
const root = document.querySelector(":root");

spacingSlider.addEventListener("mousemove", ()=> {
    root.style.setProperty('--img-spacing-size', spacingSlider.value + "px")
})

blurSlider.addEventListener("mousemove", ()=> {
    root.style.setProperty('--blur', blurSlider.value + "px")
})

colorPick.addEventListener("change", () => {
    root.style.setProperty('--input-color', colorPick.value)
})