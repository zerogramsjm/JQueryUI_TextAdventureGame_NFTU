      import * as THREE from '../build/three.module.js';
      import { GUI } from '../js/jsm/libs/dat.gui.module.js';
      import { TrackballControls } from '../js/jsm/controls/TrackballControls.js';
      import { EffectComposer } from '../js/jsm/postprocessing/EffectComposer.js';
      import { RenderPass } from '../js/jsm/postprocessing/RenderPass.js';
      import { ShaderPass } from '../js/jsm/postprocessing/ShaderPass.js';
      import { PixelShader } from '../js/jsm/shaders/PixelShader.js';

      var camera, scene, renderer, gui, composer, controls, clock;
      var pixelPass, params;
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      var group;
      var mouse = new THREE.Vector2();
      var squares = new THREE.Object3D();

      var entering;
      entering=false;
      var exiting;
      exiting=false;

      export function enter(){
          entering=true;
          exiting=false;
          init();
          animate();
          $("#dwwm").show();
          $("#dwwm").animate({height:300, width:500},2000);
      }

      export function exit(){
          entering=false;
          exiting=true;
          animate();
          $("#dwwm").show();
          $("#dwwm").animate({height:300, width:500},2000);
      }

      var end=false;

      function updateGUI() {
        pixelPass.uniforms[ "pixelSize" ].value = params.pixelSize;
      }

      function resize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        pixelPass.uniforms[ "resolution" ].value.set( window.innerWidth, window.innerHeight ).multiplyScalar( window.devicePixelRatio );
      }

      function init() {

        var container = document.getElementById( 'dwwm' );
        document.body.appendChild( container );
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( 500, 285 );
        container.appendChild( renderer.domElement );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.setFocalLength(10);
        camera.position.set( 0, 0, -2000 );
        controls = new TrackballControls( camera, renderer.domElement );
        controls.rotateSpeed = 2.0;
        controls.panSpeed = 0.8;
        controls.zoomSpeed = 1.5;
        controls.enableRotate = false;
        controls.enablePan = false;

        clock = new THREE.Clock();
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x000000);

        var hemisphereLight = new THREE.HemisphereLight( 0xfceafc, 0x000000, .8 );
        scene.add( hemisphereLight );

        group = new THREE.Group();

        for (var i = 0; i <= 400; i++) {
          var geometry = new THREE.BoxGeometry( 1, 1, 1 );
          var material = new THREE.MeshLambertMaterial( { emissive: Math.random() * 0xff0000, color: Math.random() * 0xff0000 } );
          var cube = new THREE.Mesh( geometry, material );
          cube.scale.set(
            Math.round(Math.random()) * 60 - 10,Math.round(Math.random()) * 20 - 10,Math.round(Math.random()) * 10 - 1);
          cube.position.set(
            (Math.round(Math.random()) * 40 - 10),(Math.round(Math.random()) * 40 - 10),1+i*2);
          squares.add( cube );
        }

        squares.position.z = -900;
        
        scene.add(squares);

        composer = new EffectComposer( renderer );
        composer.addPass( new RenderPass( scene, camera ) );

        pixelPass = new ShaderPass( PixelShader );
        pixelPass.uniforms[ "resolution" ].value = new THREE.Vector2( window.innerWidth, window.innerHeight );
        pixelPass.uniforms[ "resolution" ].value.multiplyScalar( window.devicePixelRatio );
        composer.addPass( pixelPass );
        window.addEventListener( 'resize', resize );
        params = { pixelSize: 18,
          postprocessing: true
        };

        document.addEventListener('mousemove', onDocumentMouseMove, false);

        }

      function onDocumentMouseMove(event) {
          if (isMobile) {
            camera.position.x=0;
            camera.position.y=0;
          }
          else{
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
              if (end==false) {
              // camera.position.x=mouse.x*10;
              // camera.position.y=mouse.y*10;
              }
              // $('#dwwm').css('top',event.pageY/1.5);
              // $('#dwwm').css('left', event.pageX/1.5);
          }
      }

      function update() {
        controls.update();
        updateGUI();
      }

      function animate() {
        var delta = clock.getDelta();
        if (entering==true) {
        squares.rotation.z+=delta
          camera.position.z+=delta*150;
          if (camera.position.z>=-2) {
            camera.position.z=-2
          }
          if (camera.position.x<=-4.5) {
            camera.position.x=-4.5
          }
          if (camera.position.x>=4.5) {
            camera.position.x=4.5
          }
        }
        if (exiting==true) {
        squares.rotation.z-=delta
          camera.position.z-=delta*150;
          if (camera.position.z<=-2000) {
            camera.position.z=-2000
            $("#dwwm").hide();
          }
        }
        update();
        if ( params.postprocessing ) {
          composer.render();
        window.requestAnimationFrame( animate );
      }
    }