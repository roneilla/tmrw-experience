class Marker {
    constructor(scene, kitContext, src) {
        this.root = new THREE.Group
        scene.add(this.root)
        this.artoolkitMarker = new THREEx.ArMarkerControls(kitContext, this.root, {
            type: 'pattern',
            patternUrl: 'data/' + src
        });
    }
}

class MarkerImage {
    constructor(src) {
        this.spriteMap = new THREE.TextureLoader().load(src);
        this.spriteMaterial = new THREE.SpriteMaterial({
            map: this.spriteMap,
            color: 0xffffff
        });
        this.sprite = new THREE.Sprite(this.spriteMaterial);
    }

    setSize(x, y, z) {
        this.sprite.scale.set(x, y, z);
    }

    setPosition(x, y, z) {
        this.sprite.position.set(x, y, z);
    }

    setRotation(x, y, z) {
        this.sprite.rotation.set(x, y, z);
    }

}

class MarkerVideo {
    constructor(src) {
        this.video = document.createElement('video');
        this.video.src = src;
        this.videoImage = document.createElement('canvas');
        this.loadTexture();
        this.loadGeometry();
    }

    loadTexture() {
        this.videoImageContext = this.videoImage.getContext('2d');
        this.videoTexture = new THREE.Texture(this.videoImage);
        this.videoTexture.minFilter = THREE.LinearFilter;
        this.videoTexture.magFilter = THREE.LinearFilter;
        this.movieMaterial = new THREE.MeshBasicMaterial({
            map: this.videoTexture,
            overdraw: true,
            side: THREE.DoubleSide
        });
    }

    loadGeometry() {
        this.movieGeometry = new THREE.PlaneGeometry(1, 1);
        this.movieScreen = new THREE.Mesh(this.movieGeometry, this.movieMaterial);
        this.movieScreen.rotation.x = -Math.PI / 2;
        this.movieScreen.position.set(0, 0, 0);
        this.movieScreen.scale.y = 1;
        this.movieScreen.scale.x = 1;
    }

    setSize(width, height) {
        this.videoImage.width = width;
        this.videoImage.height = height;
    }

    load() {
        this.video.load();
        this.videoImageContext.fillStyle = '#000000';
        this.videoImageContext.fillRect(0, 0, this.videoImage.width, this.videoImage.height);
    }

    ready() {
        if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
            this.videoImageContext.drawImage(this.video, 0, 0);
            if (this.videoTexture)
                this.videoTexture.needsUpdate = true;
        }

    }


}

var biomeLoader = new THREE.ColladaLoader();
biomeLoader.options.convertUpAxis = true;
biomeLoader.load('models/biome.dae', function (collada) {
    dae = collada.scene;
    dae.scale.x = dae.scale.y = dae.scale.z = 0.25;
    dae.rotation.x = 135 * Math.PI / 180;
    dae.position.y = 2;
    dae.updateMatrix();
    markerAA.root.add(dae);
});

class MarkerModel {
    constructor() {
        this.loader = new THREE.ColladaLoader();
    }

    load(src) {
        this.loader.load(src, function (collada) {
            this.dae = collada.scene;
            this.setScale(1, 1, 1);
            this.setPosition(1, 1, 1);
            this.setRotation(1, 1, 1);
            this.updateMatrix();
        })
    }

    add(marker) {
        this.marker.root.add(this);
    }

    setScale(x, y, z) {
        this.dae.scale.x = x;
        this.dae.scale.y = y;
        this.dae.scale.z = z;
    }

    setPosition(x, y, z) {
        this.dae.position.x = x;
        this.dae.position.y = y;
        this.dae.position.z = z;
    }

    setRotation(x, y, z) {
        this.dae.rotation.x = x;
        this.dae.rotation.y = y;
        this.dae.rotation.z = z;
    }


}
