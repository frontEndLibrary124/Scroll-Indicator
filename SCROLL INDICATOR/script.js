let indicator = document.querySelector('.indicator');

window.onscroll = () => {
    let scrollHeight = document.documentElement.scrollTop;
    let totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    let currentWidth = (scrollHeight / totalHeight) * 100; // in percentage

    indicator.style.width = currentWidth + "%";
}