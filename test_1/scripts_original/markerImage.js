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
