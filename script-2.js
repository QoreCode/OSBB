// Get the modal
var modal, modalImg, zoomEl;

function register(id) {
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(id);
    img.onclick = function () {
        modal.style.opacity = "0";
        modal.style.display = "flex";
        setTimeout(() => {
            modal.style.opacity = "1";
            
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            zoomEl.style.backgroundImage = `url('${this.src}')`;
        })
        
        document.body.style.overflowY = "hidden";
        document.body.style.paddingRight = "15px";
    }
}

function zoom(e) {
    console.log('lol3');
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

document.addEventListener('DOMContentLoaded', () => {
    modal = document.getElementById('myModal');
    modalImg = document.getElementById("img01");
    zoomEl = document.getElementById("zoom");
    
    zoomEl.onmousemove = zoom;

    // When the user clicks on <span> (x), close the modal
    modal.onclick = function () {
        img01.className += " out";
        setTimeout(function () {
            modal.style.display = "none";
            img01.className = "modal-content";
        }, 400);

        modal.style.opacity = "0";
        document.body.style.overflowY = "auto";
        document.body.style.paddingRight = "0";
    }
})
