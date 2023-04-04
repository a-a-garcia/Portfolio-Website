<script>
function changeImage() {
    var image = document.getElementById('clickphoto');
    if (image.src.match("E:\WORK STUFF\Portfolio Website\images\AboutmePhoto.png")) {
        image.src = "E:\WORK STUFF\Portfolio Website\images\PhotoOfMe.jpg";
    }
    else {
        image.src = "E:\WORK STUFF\Portfolio Website\images\AboutmePhoto.png";
    }
}
</script>