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
