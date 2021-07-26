var vertexHeight = 15000;
var planeDefinition = 100;
var planeSize = 1245000;
var totalObjects = 15000;
var frame = 0;

var container = document.createElement('div');
document.body.appendChild(container);

var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000)
camera.position.z = 550000;
camera.position.y = 20000;
camera.lookAt(new THREE.Vector3(0, 6000, 0));


var scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x23233f, 1, 300000);

var uniforms = {
    time: {
        type: "f",
        value: 0.0
    }
};

function addStar(r, g, b) {
    function createLightMaterial(rgbString) {
        let canvasDom = document.createElement('canvas');
        canvasDom.width = 300;
        canvasDom.height = 300;
        let ctx = canvasDom.getContext('2d');
        let gradient = ctx.createRadialGradient(
            canvasDom.width / 2,
            canvasDom.height / 2,
            0,
            canvasDom.width / 2,
            canvasDom.height / 2,
            canvasDom.width / 2);
        gradient.addColorStop(0, 'rgba(' + rgbString + ' ,1)');
        gradient.addColorStop(0.1, 'rgba(' + rgbString + ',0.8)');
        gradient.addColorStop(0.4, 'rgba(' + rgbString + ',0.5)');
        gradient.addColorStop(0.6, 'rgba(' + rgbString + ',0.15)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
        let texture = new THREE.Texture(canvasDom);
        texture.needsUpdate = true;
        return texture;
    }
    var geometry = new THREE.Geometry();
    for (i = 0; i < totalObjects; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = Math.random() * planeSize - (planeSize * .5);
        vertex.y = (Math.random() * 100000) + 10000;
        vertex.z = Math.random() * planeSize - (planeSize * .5);
        geometry.vertices.push(vertex);
    }
    var material = new THREE.ParticleBasicMaterial({
        size: 300,
        map: createLightMaterial(r + "," + g + "," + b),
        transparent: true,
    });
    var particles = new THREE.ParticleSystem(geometry, material);
    scene.add(particles);
}
addStar(255, 255, 255);
addStar(254, 233, 64);
addStar(229, 24, 88);
addStar(20, 188, 255);
addStar(97, 203, 5);

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setClearAlpha(0.0);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

function render() {
    requestAnimationFrame(render);
    camera.position.z -= 150;
    uniforms.time.value = frame;
    frame += 0.04;
    renderer.render(scene, camera);
}
render();
