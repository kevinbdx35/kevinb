/************************************************************************/
/*Image Popup*/
/************************************************************************/

const imgList = document.querySelectorAll("img");

for (let i = 0; i < imgList.length; i++) {
  imgList[i].onclick = function () {
    console.log(this.src);
    window.open(this.src, "myImage", "resize = yes, width = 1000, height = 1000");
  };
}
