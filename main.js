const panoramaImage = new PANOLENS.ImagePanorama("images/1.jpg");
const panoramaImage2 = new PANOLENS.ImagePanorama("images/2.jpg");
const panoramaImage3 = new PANOLENS.ImagePanorama("images/3.jpg");
const panoramaImage4 = new PANOLENS.ImagePanorama("images/4.jpg");
const panoramaImage5 = new PANOLENS.ImagePanorama("images/5.jpg");
const imageContainer = document.querySelector(".image-container");

panoramaImage.link(panoramaImage2, new THREE.Vector3(200, 110, -1000));
panoramaImage2.link(panoramaImage3, new THREE.Vector3(300, 220, -1000));
panoramaImage3.link(panoramaImage4, new THREE.Vector3(300, 550, -1000));
panoramaImage4.link(panoramaImage5, new THREE.Vector3(400, 660, -1000));
panoramaImage5.link(panoramaImage, new THREE.Vector3(500, 880, -1000));
const viewer = new PANOLENS.Viewer({
  container: imageContainer,
});

viewer.add(
  panoramaImage,
  panoramaImage2,
  panoramaImage3,
  panoramaImage4,
  panoramaImage5
);
