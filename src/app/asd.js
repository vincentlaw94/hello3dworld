(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    217: function (e, t) {
      var n;
      (n = navigator.userAgent).indexOf("iPhone") > 0 ||
      n.indexOf("iPod") > 0 ||
      (n.indexOf("Android") > 0 && n.indexOf("Mobile") > 0) ||
      n.indexOf("iPad") > 0 ||
      n.indexOf("Android") > 0 ||
      "iPad" == navigator.platform ||
      ("MacIntel" == navigator.platform &&
        -1 != navigator.userAgent.indexOf("Safari") &&
        -1 == navigator.userAgent.indexOf("Chrome") &&
        void 0 !== navigator.standalone)
        ? document.body.classList.add("is-touch")
        : document.body.classList.add("is-wheel"),
        -1 !== window.navigator.userAgent.toLowerCase().indexOf("windows nt") &&
          (console.log("Microsoft Windows"),
          document.body.classList.add("win"));
    },
    218: function (e, t, n) {
      "use strict";
      var o,
        r = n(305),
        l = n.n(r),
        h = n(12),
        m = n(130),
        c = n(180);
      h.b.registerPlugin(m.a, c.a),
        window.innerWidth < 769 ||
          ((o = new l.a({
            disableRaf: !0,
            disableResize: !0,
            touchScrollType: "transform",
            ease: 0.2,
            disableNativeScrollbar: !0,
          })),
          m.a.defaults({
            scroller: o.containerElement,
          }),
          m.a.scrollerProxy(o.containerElement, {
            scrollTop: function (e) {
              if (!arguments.length) return o.currentPos;
              o.currentPos = e;
            },
            getBoundingClientRect: function () {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              };
            },
          }),
          m.a.addEventListener("refresh", o.resize));
      var d = {
        transform: c.a.create(
          "transform",
          "M0,0 C0.094,0.026 0.124,0.127 0.157,0.29 0.197,0.486 0.254,0.8 0.348,0.884 0.42,0.949 0.374,1 1,1 "
        ),
        transform2: c.a.create("transform2", "M0,0,C0.296,0.418,0.22,1,1,1"),
      };
      t.a = function (e, t) {
        window.innerWidth < 769 || t("asscroll", o),
          t("gsap", h.b),
          t("ScrollTrigger", m.a),
          t("EASE", d);
      };
    },
    219: function (e, t, n) {
      n(32);
      var o = window.matchMedia("(min-width: 769px)"),
        r = function (e) {
          e.matches,
            "any" != window.name
              ? (location.reload(), (window.name = "any"))
              : (window.name = "");
        };
      o.addEventListener("change", r), r(o);
    },
    220: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return z;
      });
      var o = n(39),
        r = n(0),
        l = n(1),
        h = (n(32), n(22), n(45), n(2)),
        m = (function () {
          function e() {
            Object(r.a)(this, e);
          }
          return (
            Object(l.a)(e, null, [
              {
                key: "loadResource",
                value: function (e) {
                  return new Promise(function (t, n) {
                    fetch(e)
                      .then(function (e) {
                        return e.text();
                      })
                      .then(function (text) {
                        t(text);
                      })
                      .catch(function (e) {
                        n(e);
                      });
                  });
                },
              },
              {
                key: "lerp",
                value: function (e, t, n) {
                  return (1 - n) * e + n * t;
                },
              },
              {
                key: "offset",
                value: function (e, s) {
                  void 0 === s && (s = 0);
                  var rect = e.getBoundingClientRect(),
                    t = s;
                  return {
                    top: rect.top + t,
                    left: rect.left,
                  };
                },
              },
            ]),
            e
          );
        })(),
        c = n(300),
        d = n(301),
        f = (function () {
          function e() {
            Object(r.a)(this, e),
              (this.rendererParam = {
                clearColor: 15724527,
                width: window.innerWidth,
                height: window.innerHeight,
              }),
              (this.cameraParam = {
                fov: 60,
                near: 0.1,
                far: 10,
                lookAt: new h.ob(0, 0, 0),
                x: 0,
                y: 0,
                z: 1,
              }),
              (this.scene = null),
              (this.camera = null),
              (this.renderer = null),
              (this.webglElement = null),
              (this.isInitialized = !1);
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function () {
                  this._setScene(),
                    this._setRenderer(),
                    this._setCamera(),
                    (this.isInitialized = !0);
                },
              },
              {
                key: "_setScene",
                value: function () {
                  this.scene = new h.bb();
                },
              },
              {
                key: "_setRenderer",
                value: function () {
                  (this.renderer = new h.qb({
                    alpha: !0,
                    antialias: !0,
                  })),
                    this.renderer.setSize(
                      this.rendererParam.width,
                      this.rendererParam.height
                    ),
                    this.renderer.setPixelRatio(
                      Math.min(2, window.devicePixelRatio)
                    ),
                    (this.webglElement =
                      document.querySelector("#webglCanvas")),
                    this.webglElement.appendChild(this.renderer.domElement);
                },
              },
              {
                key: "_setCamera",
                value: function () {
                  if (!this.isInitialized) {
                    var e =
                      (2 * Math.atan(window.innerHeight / 2 / 800) * 180) /
                      Math.PI;
                    (this.camera = new h.R(
                      e,
                      window.innerWidth / window.innerHeight,
                      1,
                      1500
                    )),
                      this.camera.position.set(0, 0, 800);
                  }
                  var t = window.innerWidth,
                    n = window.innerHeight;
                  (this.camera.fov =
                    (2 * Math.atan(window.innerHeight / 2 / 800) * 180) /
                    Math.PI),
                    (this.camera.aspect = t / n),
                    this.camera.updateProjectionMatrix(),
                    this.renderer.setSize(
                      window.innerWidth,
                      window.innerHeight
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  this.renderer.render(this.scene, this.camera);
                },
              },
              {
                key: "resize",
                value: function () {
                  this._setCamera();
                },
              },
            ]),
            e
          );
        })(),
        v =
          (n(87),
          n(127),
          n(104),
          n(105),
          n(106),
          n(107),
          n(108),
          n(109),
          n(110),
          n(111),
          n(112),
          n(113),
          n(114),
          n(115),
          n(116),
          n(117),
          n(118),
          n(119),
          n(120),
          n(121),
          n(122),
          n(123),
          n(124),
          n(125),
          n(126),
          n(12)),
        w = n(5),
        x = (function () {
          function e(t, n, o) {
            Object(r.a)(this, e),
              (this.stage = t),
              (this.name = n),
              (this.gltf = o),
              (this.currentIntersect = null),
              (this.uniforms = {
                uTime: {
                  value: 0,
                },
                uScale: {
                  value: 1,
                },
                uMouse: {
                  value: {
                    x: 1,
                    y: 1,
                  },
                },
                uScroll: {
                  value: 0,
                },
                uRandomValue: {
                  value: 1,
                },
                uRandomValue2: {
                  value: 1,
                },
              }),
              (this.group = null),
              (this.group2 = null),
              (this.clock = null),
              (this.time = 0),
              (this.intersects = null),
              (this.raycaster = null),
              (this.currentIntersect = null),
              (this.isHover = !0),
              (this.scrollFlag = !1);
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function () {
                  (this.group = new h.m()),
                    (this.group2 = new h.m()),
                    (this.clock = new h.g()),
                    (this.raycaster = new h.Z()),
                    this.updateAllMaterials(),
                    this.setPosition(),
                    (this.scrollFlag = !1);
                },
              },
              {
                key: "updateAllMaterials",
                value: function () {
                  var e = this;
                  this.gltf.traverse(function (t) {
                    if (t instanceof h.G && t.material instanceof h.J) {
                      (e.mesh = t),
                        (e.mesh.material = new h.cb({
                          vertexShader:
                            "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vNormal;\nuniform float uTime;\nuniform float uScale;\nuniform float uScroll;\nattribute vec3 aRandom;\nuniform vec2 uMouse;\nuniform float uRandomValue;\nuniform float uRandomValue2;\nconst float PI = 3.1415926535897932384626433832795;\nvoid main(){\n    vUv = uv;\n    vNormal = normal;\n    vec3 pos = position;\n    vec3 randomPos = aRandom;\n\n    // vec3 newPos = mix(pos,randomPos,.1);\n    vec3 curve = vec3(\n        0.0,\n        (randomPos.x * randomPos.y * uRandomValue2) + 5.0 * uRandomValue,\n        0.\n    );\n    pos += curve;\n    \n    vec4 modelPosition = modelMatrix * vec4(pos,1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectedPosition;\n    gl_PointSize = 3.0;\n}",
                          fragmentShader:
                            "#define GLSLIFY 1\nvec2 matcap(vec3 eye, vec3 normal) {\n  vec3 reflected = reflect(eye, normal);\n  float m = 2.8284271247461903 * sqrt( reflected.z+1.0 );\n  return reflected.xy / m + 0.5;\n}\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nuniform float uTime;\n\nuniform vec2 uMouse;\nuniform sampler2D uDispTexture;\n\nfloat random(vec2 st)\n{\n    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);\n}\n\nvoid main(){\n    vec2 uvTexture = vUv;\n\n    vec2 mouseUv = uMouse;\n    float dist = distance(uvTexture,mouseUv) * 2.0 - 0.5;\n    dist *= 1.5;\n\n    vec4 dispTexture = texture2D(uDispTexture,uvTexture);\n    vec2 dispUv = vec2(uvTexture.x * (dispTexture.r * 1.0 ) , uvTexture.y * (dispTexture.r * 1.0));\n    \n    float strength = vUv.x * vUv.y;\n\n    float dispMaskX2 = step(dist,dispUv.x-0.25);\n    float dispMaskY2 = step(dist,dispUv.y-0.25);\n    float dist2 = dispMaskX2 * dispMaskY2 * -1.0;\n\n    // vec4 finalColor = vec4(vec3(strength + 0.021,strength+0.025,strength + 0.1),1.0);\n    vec4 finalColor = vec4(vec3(strength + .421,strength+.425,strength + .7),1.0);\n\n    finalColor.r += dist2 * .2;\n    finalColor.g += dist2 * .1;\n    finalColor.b += dist2 * .6;\n    \n    finalColor.r += sin((2.0 * vNormal.y + dist2 )+ uTime * .5 );\n\n    gl_FragColor = finalColor;\n\n}",
                          wireframe: !1,
                          uniforms: e.uniforms,
                        }));
                      for (
                        var n = new Float32Array(32784), i = 0;
                        i < 10928;
                        i++
                      )
                        n.set(
                          [
                            2 * Math.random() - 1,
                            2 * Math.random() - 1,
                            2 * Math.random() - 1,
                          ],
                          3 * i
                        );
                      e.mesh.geometry.setAttribute("aRandom", new h.d(n, 3)),
                        (e.mesh.visible = !1),
                        e.group.add(e.mesh),
                        e.group2.add(e.group),
                        e.stage.scene.add(e.group2);
                    }
                  });
                },
              },
              {
                key: "setPosition",
                value: function () {
                  window.innerWidth < 769
                    ? ((this.mesh.position.x = 100 + 0.05 * window.innerWidth),
                      (this.mesh.position.y = 150 + 0.04 * window.innerWidth),
                      (this.mesh.rotation.z = 0.1),
                      (this.mesh.rotation.y = Math.PI),
                      (this.mesh.scale.x = 60 + 0.05 * window.innerWidth),
                      (this.mesh.scale.y = 60 + 0.05 * window.innerWidth),
                      (this.mesh.scale.z = 60 + 0.05 * window.innerWidth))
                    : window.innerWidth < 821
                    ? ((this.mesh.position.x = 150 + 0.05 * window.innerWidth),
                      (this.mesh.position.y = 50 + 0.04 * window.innerWidth),
                      (this.mesh.rotation.z = 0.1),
                      (this.mesh.rotation.y = Math.PI),
                      (this.mesh.scale.x = 120 + 0.05 * window.innerWidth),
                      (this.mesh.scale.y = 120 + 0.05 * window.innerWidth),
                      (this.mesh.scale.z = 120 + 0.05 * window.innerWidth))
                    : ((this.mesh.position.x = 320 + 0.05 * window.innerWidth),
                      (this.mesh.position.y = -150),
                      (this.mesh.rotation.z = 0.1),
                      (this.mesh.rotation.y = Math.PI),
                      this.mesh.scale.set(220, 220, 220),
                      (this.mesh.scale.x = 220 + 0.05 * window.innerWidth),
                      (this.mesh.scale.y = 220 + 0.05 * window.innerWidth),
                      (this.mesh.scale.z = 220 + 0.05 * window.innerWidth));
                },
              },
              {
                key: "onMouseMove",
                value: function (e) {
                  window.innerWidth < 769 ||
                    (v.b.to(this.group2.position, {
                      x: 50 * -e.x,
                      y: 50 * -e.y,
                    }),
                    v.b.to(this.group2.rotation, {
                      z: 0.2 * -e.y,
                      y: 0.2 * e.x,
                    }));
                },
              },
              {
                key: "resize",
                value: function () {
                  window.innerWidth < 769
                    ? ((this.mesh.position.x = 100 + 0.05 * window.innerWidth),
                      (this.mesh.position.y = 50 + 0.04 * window.innerWidth),
                      (this.mesh.scale.x = 100 + 0.04 * window.innerWidth),
                      (this.mesh.scale.y = 100 + 0.04 * window.innerWidth),
                      (this.mesh.scale.z = 100 + 0.04 * window.innerWidth))
                    : window.innerWidth < 821
                    ? ((this.mesh.position.x = 150 + 0.05 * window.innerWidth),
                      (this.mesh.position.y = 50 + 0.04 * window.innerWidth),
                      (this.mesh.rotation.z = 0.1),
                      (this.mesh.rotation.y = Math.PI),
                      (this.mesh.scale.x = 120 + 0.05 * window.innerWidth),
                      (this.mesh.scale.y = 120 + 0.05 * window.innerWidth),
                      (this.mesh.scale.z = 120 + 0.05 * window.innerWidth))
                    : ((this.mesh.position.x = 320 + 0.04 * window.innerWidth),
                      (this.mesh.position.y = 0.04 * window.innerWidth - 150),
                      (this.mesh.scale.x = 220 + 0.04 * window.innerWidth),
                      (this.mesh.scale.y = 220 + 0.04 * window.innerWidth),
                      (this.mesh.scale.z = 220 + 0.04 * window.innerWidth));
                },
              },
              {
                key: "render",
                value: function (e) {
                  if (this.mesh) {
                    if (window.innerWidth > 768) {
                      this.raycaster.setFromCamera(e, this.stage.camera);
                      var t = this.raycaster.intersectObjects(
                        this.group.children
                      );
                      t.length
                        ? ((this.currentIntersect = t[0].object),
                          this.isHover &&
                            ((this.isHover = !1),
                            v.b.to(this.mesh.rotation, {
                              x: 0.1,
                            })),
                          this.currentIntersect &&
                            v.b.to(
                              this.currentIntersect.material.uniforms.uMouse
                                .value,
                              {
                                x: t[0].uv.x,
                                y: t[0].uv.y,
                              }
                            ))
                        : this.currentIntersect &&
                          (this.isHover ||
                            ((this.isHover = !0),
                            v.b.to(this.mesh.rotation, {
                              x: 0,
                            })),
                          v.b.to(
                            this.currentIntersect.material.uniforms.uMouse
                              .value,
                            {
                              x: 1,
                              y: 1,
                            }
                          ),
                          (this.currentIntersect = null));
                    }
                    (this.mesh.position.x += 0.05 * Math.cos(this.time)),
                      this.scrollFlag &&
                        (v.b.to(this.group.rotation, {
                          duration: 0.1,
                          y: 0.001 * z.scrollTop,
                          ease: w.b.easeOut,
                        }),
                        v.b.to(this.group.position, {
                          duration: 0.1,
                          y: 1.5 * z.scrollTop,
                          ease: w.b.easeOut,
                        }));
                  }
                  var n = this.clock.getElapsedTime();
                  (this.time = n), (this.uniforms.uTime.value = this.time);
                },
              },
              {
                key: "meshView",
                value: function () {
                  (this.scrollFlag = !0), (this.mesh.visible = !0);
                },
              },
              {
                key: "meshHide",
                value: function () {
                  (this.scrollFlag = !1),
                    (this.mesh.visible = !1),
                    (this.uniforms.uRandomValue.value = 1),
                    (this.uniforms.uRandomValue2.value = 1);
                },
              },
            ]),
            e
          );
        })(),
        M = (function () {
          function e() {
            Object(r.a)(this, e),
              (this.sun = null),
              (this.cloud = null),
              (this.flower = null);
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function () {
                  (this.sun = document.querySelector(".sun img")),
                    (this.cloud = Object(o.a)(
                      document.querySelectorAll(".cloud img")
                    ));
                },
              },
              {
                key: "onMouseMove",
                value: function (e) {
                  window.innerWidth < 769 ||
                    (this.sun &&
                      (v.b.to(this.sun, {
                        x: 50 * -e.x,
                        y: 50 * e.y,
                      }),
                      v.b.to(this.cloud[0], {
                        x: 10 * -e.x,
                        y: 10 * e.y,
                      }),
                      v.b.to(this.cloud[1], {
                        x: 20 * -e.x,
                        y: 20 * e.y,
                      }),
                      v.b.to(this.cloud[2], {
                        x: 30 * -e.x,
                        y: 30 * e.y,
                      }),
                      v.b.to(this.cloud[3], {
                        x: 10 * -e.x,
                        y: 10 * e.y,
                      })));
                },
              },
            ]),
            e
          );
        })(),
        y = (function () {
          function e() {
            Object(r.a)(this, e), (this.image1 = null), (this.image2 = null);
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function () {
                  (this.image1 = Object(o.a)(
                    document.querySelectorAll(".js-hover1 .navigation__image")
                  )),
                    (this.image2 = Object(o.a)(
                      document.querySelectorAll(".js-hover2 .navigation__image")
                    ));
                },
              },
              {
                key: "onMouseMove",
                value: function (e) {
                  window.innerWidth < 769 ||
                    (this.image1.length > 0 &&
                      (v.b.to(this.image1[0], {
                        x: 50 * -e.x,
                        y: 50 * e.y,
                      }),
                      v.b.to(this.image1[1], {
                        x: 20 * -e.x,
                        y: 20 * e.y,
                      }),
                      v.b.to(this.image1[2], {
                        x: 30 * -e.x,
                        y: 30 * e.y,
                      }),
                      v.b.to(this.image2[0], {
                        x: 50 * -e.x,
                        y: 50 * e.y,
                      }),
                      v.b.to(this.image2[1], {
                        x: 20 * -e.x,
                        y: 20 * e.y,
                      }),
                      v.b.to(this.image2[2], {
                        x: 30 * -e.x,
                        y: 30 * e.y,
                      })));
                },
              },
            ]),
            e
          );
        })(),
        I =
          "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vNormal;\nuniform float uTime;\nuniform vec2 uMouse;\nuniform float uCurveValue;\nuniform float uHoverNoiseValue;\nconst float PI = 3.14159265359;\nvoid main(){\n    vUv = uv;\n    vNormal = normal;\n    vec3 pos = position;    \n    vec3 curve = vec3(\n        sin(uv.y * PI * uHoverNoiseValue) * .2,\n        0.0,\n        0.0\n    );\n    pos += curve;\n\n    vec4 modelPosition = modelMatrix * vec4(pos,1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectedPosition;\n}",
        L =
          "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vNormal;\nuniform float uTime;\nuniform vec2 uMeshSize;\nuniform vec2 uTextureSize;\nuniform sampler2D uTexture;\nuniform vec2 uMouse;\nuniform float uHoverNoiseValue;\n\nvoid main(){\n    vec2 uvTexture = vUv;\n    vec2 resolutionRatio = vec2(\n        min((uMeshSize.x / uMeshSize.y) / (uTextureSize.x / uTextureSize.y), 1.0),\n        min((uMeshSize.y / uMeshSize.x) / (uTextureSize.y / uTextureSize.x), 1.0)\n    );\n    uvTexture -= 0.5;\n    uvTexture *= resolutionRatio;\n    uvTexture += 0.5;\n\n    vec4 baseColor = texture2D(uTexture, uvTexture);\n\n    vec2 gridUv = vec2(floor(uvTexture.x * 10.0) / 10.0, floor(uvTexture.y * 10.0) / 10.0);\n\n    baseColor.rg += gridUv * uHoverNoiseValue;\n\n    gl_FragColor = baseColor;\n}",
        O = (function () {
          function e(t, option) {
            Object(r.a)(this, e),
              (this.customEase = null),
              (this.stage = t),
              (this.option = option),
              (this.geometry = null),
              (this.material = null),
              (this.mesh = null),
              (this.windowWidth = 0),
              (this.windowHeight = 0),
              (this.windowWidthHalf = 0),
              (this.windowHeightHalf = 0),
              (this.meshWidthHalf = 0),
              (this.meshHeightHalf = 0),
              (this.uniforms = {
                uTexture: {
                  value: this.option.texture,
                },
                uTextureSize: {
                  value: {
                    x: this.option.imgWidth,
                    y: this.option.imgHeight,
                  },
                },
                uMeshSize: {
                  value: {
                    x: this.option.width,
                    y: this.option.height,
                  },
                },
                uTime: {
                  value: 0,
                },
                uHoverNoiseValue: {
                  value: 0,
                },
              }),
              (this.clock = null),
              (this.isHoverFlag = !0);
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function () {
                  (this.clock = new h.g()),
                    (this.geometry = new h.S(1, 1, 16, 16)),
                    (this.material = new h.cb({
                      uniforms: this.uniforms,
                      vertexShader: I,
                      fragmentShader: L,
                      transparent: !0,
                    })),
                    (this.mesh = new h.G(this.geometry, this.material)),
                    this.stage.scene.add(this.mesh),
                    this._setWindowSize(),
                    this.setMeshScale(),
                    this.setMeshPosition();
                },
              },
              {
                key: "_setWindowSize",
                value: function () {
                  (this.windowWidth = window.innerWidth),
                    (this.windowHeight = window.innerHeight),
                    (this.windowWidthHalf = 0.5 * this.windowWidth),
                    (this.windowHeightHalf = 0.5 * this.windowHeight);
                },
              },
              {
                key: "setMeshScale",
                value: function () {
                  this.mesh.scale.set(this.option.width, this.option.height),
                    (this.uniforms.uMeshSize.value = {
                      x: this.mesh.scale.x,
                      y: this.mesh.scale.y,
                    }),
                    (this.meshWidthHalf = 0.5 * this.mesh.scale.x),
                    (this.meshHeightHalf = 0.5 * this.mesh.scale.y);
                },
              },
              {
                key: "setMeshPosition",
                value: function () {
                  (this.mesh.position.x =
                    -this.windowWidthHalf +
                    this.meshWidthHalf +
                    this.option.left),
                    (this.mesh.position.y =
                      this.windowHeightHalf -
                      this.meshHeightHalf -
                      this.option.top +
                      z.scrollTop);
                },
              },
              {
                key: "onMouseEnter",
                value: function () {
                  v.a.to(this.uniforms.uHoverNoiseValue, {
                    duration: 0.6,
                    value: 2,
                    ease: z.customEase,
                  });
                },
              },
              {
                key: "onMouseLeave",
                value: function () {
                  v.a.to(this.uniforms.uHoverNoiseValue, {
                    duration: 0.6,
                    value: 0,
                    ease: z.customEase,
                  });
                },
              },
              {
                key: "meshHide",
                value: function () {
                  this.mesh.visible = !1;
                },
              },
              {
                key: "resize",
                value: function () {
                  this._setWindowSize(), this.setMeshScale();
                },
              },
              {
                key: "render",
                value: function () {
                  this.setMeshPosition();
                  var e = this.clock.getElapsedTime();
                  this.mesh.material.uniforms.uTime.value = e;
                },
              },
            ]),
            e
          );
        })(),
        k = (function () {
          function e(t, option) {
            Object(r.a)(this, e),
              (this.stage = t),
              (this.option = option),
              (this.geometry = null),
              (this.material = null),
              (this.mesh = null),
              (this.windowWidth = 0),
              (this.windowHeight = 0),
              (this.windowWidthHalf = 0),
              (this.windowHeightHalf = 0),
              (this.meshWidthHalf = 0),
              (this.meshHeightHalf = 0),
              (this.uniforms = {
                uTexture: {
                  value: this.option.texture,
                },
                uTextureSize: {
                  value: {
                    x: this.option.imgWidth,
                    y: this.option.imgHeight,
                  },
                },
                uMeshSize: {
                  value: {
                    x: this.option.width,
                    y: this.option.height,
                  },
                },
                uTime: {
                  value: 0,
                },
                uHoverNoiseValue: {
                  value: 0,
                },
              }),
              (this.clock = null),
              (this.isHoverFlag = !0);
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function () {
                  (this.clock = new h.g()),
                    (this.geometry = new h.S(1, 1, 16, 16)),
                    (this.material = new h.cb({
                      uniforms: this.uniforms,
                      vertexShader: I,
                      fragmentShader: L,
                      transparent: !0,
                    })),
                    (this.mesh = new h.G(this.geometry, this.material)),
                    this.stage.scene.add(this.mesh),
                    this._setWindowSize(),
                    this.setMeshScale(),
                    this.setMeshPosition();
                },
              },
              {
                key: "_setWindowSize",
                value: function () {
                  (this.windowWidth = window.innerWidth),
                    (this.windowHeight = window.innerHeight),
                    (this.windowWidthHalf = 0.5 * this.windowWidth),
                    (this.windowHeightHalf = 0.5 * this.windowHeight);
                },
              },
              {
                key: "setMeshScale",
                value: function () {
                  this.mesh.scale.set(this.option.width, this.option.height),
                    (this.uniforms.uMeshSize.value = {
                      x: this.mesh.scale.x,
                      y: this.mesh.scale.y,
                    }),
                    (this.meshWidthHalf = 0.5 * this.mesh.scale.x),
                    (this.meshHeightHalf = 0.5 * this.mesh.scale.y);
                },
              },
              {
                key: "setMeshPosition",
                value: function () {
                  (this.mesh.position.x =
                    -this.windowWidthHalf +
                    this.meshWidthHalf +
                    this.option.left),
                    (this.mesh.position.y =
                      this.windowHeightHalf -
                      this.meshHeightHalf -
                      this.option.top +
                      z.scrollTop),
                    (this.mesh.position.z = -0.1);
                },
              },
              {
                key: "meshHide",
                value: function () {
                  this.mesh.visible = !1;
                },
              },
              {
                key: "resize",
                value: function () {
                  this._setWindowSize(), this.setMeshScale();
                },
              },
              {
                key: "render",
                value: function () {
                  this.setMeshPosition();
                  var e = this.clock.getElapsedTime();
                  this.mesh.material.uniforms.uTime.value = e;
                },
              },
            ]),
            e
          );
        })(),
        T = (function () {
          function e(t, option) {
            Object(r.a)(this, e),
              (this.stage = t),
              (this.option = option),
              (this.geometry = null),
              (this.material = null),
              (this.mesh = null),
              (this.windowWidth = 0),
              (this.windowHeight = 0),
              (this.windowWidthHalf = 0),
              (this.windowHeightHalf = 0),
              (this.meshWidthHalf = 0),
              (this.meshHeightHalf = 0),
              (this.uniforms = {
                uTexture: {
                  value: this.option.texture,
                },
                uTextureSize: {
                  value: {
                    x: this.option.imgWidth,
                    y: this.option.imgHeight,
                  },
                },
                uMeshSize: {
                  value: {
                    x: this.option.width,
                    y: this.option.height,
                  },
                },
                uTime: {
                  value: 0,
                },
                uMouse: {
                  value: {
                    x: 0,
                    y: 0,
                  },
                },
                uMouseDiff: {
                  value: {
                    x: 0,
                    y: 0,
                  },
                },
                uHoverNoiseValue: {
                  value: 0,
                },
                uClickValue: {
                  value: 0,
                },
              }),
              (this.mouse = {
                x: 0,
                y: 0,
              }),
              (this.clock = null),
              (this.isHoverFlag = !0);
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function () {
                  (this.clock = new h.g()),
                    (this.geometry = new h.S(1, 1, 16, 16)),
                    (this.material = new h.cb({
                      uniforms: this.uniforms,
                      vertexShader:
                        "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vNormal;\nuniform float uTime;\nuniform vec2 uMouse;\nuniform float uClickValue;\nuniform vec2 uMouseDiff;\nvoid main(){\n    vUv = uv;\n    vNormal = normal;\n    vec3 pos = position;\n    \n    pos.x *= step(.01,cos(pos.y * 50.0));\n    pos.y *= step(.01,sin(pos.x * 50.0));\n\n    vec3 newPos = mix(position,pos,uClickValue);\n    \n    vec4 modelPosition = modelMatrix * vec4(newPos,1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectedPosition;\n    // gl_PointSize = 20.0;\n}",
                      fragmentShader:
                        "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vNormal;\nuniform float uTime;\nuniform vec2 uMeshSize;\nuniform vec2 uTextureSize;\nuniform sampler2D uTexture;\nuniform vec2 uMouse;\nuniform vec2 uMouseDiff;\nuniform float uHoverNoiseValue;\n\nfloat uvScale = .1;\n\nvoid main(){\n    vec2 uvTexture = vUv;\n    vec2 resolutionRatio = vec2(\n        min((uMeshSize.x / uMeshSize.y) / (uTextureSize.x / uTextureSize.y), 1.0),\n        min((uMeshSize.y / uMeshSize.x) / (uTextureSize.y / uTextureSize.x), 1.0)\n    );\n    uvTexture -= 0.5;\n    uvTexture *= resolutionRatio;\n    uvTexture += 0.5;\n\n    vec2 uvCircle = vUv * 2.0 - 1.0;\n    uvCircle -= uMouse;\n    vec2 uvCricleResolutionRatio = vec2(\n        min((uMeshSize.y / uMeshSize.x), 1.),\n        min((uMeshSize.x / uMeshSize.y), 1.)\n    );\n    uvCircle /= uvCricleResolutionRatio;\n    float circle = length(uvCircle);\n\n    float barrel = max(1.0 - circle * uvScale, 0.0) * uHoverNoiseValue;\n    vec2 barrelUv = uvTexture - uvCircle * barrel;\n\n    vec4 baseColor = texture2D(uTexture, uvTexture);\n    vec4 barrelColor = texture2D(uTexture, barrelUv);\n\n    vec2 v = uvTexture * 2.0 - 1.0;\n    float vig = circle - length(v);\n\n    vec4 finalColor = mix(baseColor,barrelColor,vig);\n\n    gl_FragColor = finalColor;\n}",
                    })),
                    (this.mesh = new h.G(this.geometry, this.material)),
                    this.stage.scene.add(this.mesh),
                    this._setWindowSize(),
                    this.setMeshScale(),
                    this.setMeshPosition();
                },
              },
              {
                key: "_setWindowSize",
                value: function () {
                  (this.windowWidth = window.innerWidth),
                    (this.windowHeight = window.innerHeight),
                    (this.windowWidthHalf = 0.5 * this.windowWidth),
                    (this.windowHeightHalf = 0.5 * this.windowHeight);
                },
              },
              {
                key: "setMeshScale",
                value: function () {
                  this.mesh.scale.set(this.option.width, this.option.height),
                    (this.uniforms.uMeshSize.value = {
                      x: this.mesh.scale.x,
                      y: this.mesh.scale.y,
                    }),
                    (this.meshWidthHalf = 0.5 * this.mesh.scale.x),
                    (this.meshHeightHalf = 0.5 * this.mesh.scale.y);
                },
              },
              {
                key: "setMeshPosition",
                value: function () {
                  (this.mesh.position.x =
                    -this.windowWidthHalf +
                    this.meshWidthHalf +
                    this.option.left),
                    (this.mesh.position.y =
                      this.windowHeightHalf -
                      this.meshHeightHalf -
                      this.option.top +
                      z.scrollTop);
                },
              },
              {
                key: "onMouseMove",
                value: function (e) {
                  (this.mouse.x = (e.offsetX / e.target.width) * 2 - 1),
                    (this.mouse.y = (-e.offsetY / e.target.height) * 2 + 1),
                    this.mouse.x &&
                      v.a.to(this.uniforms.uMouse.value, {
                        duration: 0.3,
                        x: this.mouse.x,
                        y: this.mouse.y,
                      });
                },
              },
              {
                key: "onMouseEnter",
                value: function () {
                  v.a.to(this.uniforms.uHoverNoiseValue, {
                    duration: 0.6,
                    value: 0.1,
                    ease: z.customEase,
                  });
                },
              },
              {
                key: "onClick",
                value: function () {
                  var e = this;
                  v.a.to(this.uniforms.uClickValue, {
                    duration: 1,
                    value: 1,
                    ease: z.customEase,
                    delay: 0.05,
                    onComplete: function () {
                      v.a.set(e.uniforms.uClickValue, {
                        value: 0,
                      });
                    },
                  });
                },
              },
              {
                key: "onMouseLeave",
                value: function () {
                  v.a.to(this.uniforms.uMouse.value, {
                    duration: 0.3,
                    x: 0,
                    y: 0,
                  }),
                    v.a.to(this.uniforms.uHoverNoiseValue, {
                      duration: 0.6,
                      value: 0,
                      ease: z.customEase,
                    });
                },
              },
              {
                key: "meshHide",
                value: function () {
                  this.mesh.visible = !1;
                },
              },
              {
                key: "resize",
                value: function () {
                  this._setWindowSize(), this.setMeshScale();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  this.setMeshPosition();
                  var n = this.clock.getElapsedTime();
                  (this.mesh.material.uniforms.uTime.value = n),
                    (this.mesh.material.uniforms.uMouseDiff.value = {
                      x: e,
                      y: t,
                    });
                },
              },
            ]),
            e
          );
        })(),
        S = (function () {
          function e(t) {
            Object(r.a)(this, e),
              (this.customEase = null),
              (this.stage = t),
              (this.geometry = null),
              (this.material = null),
              (this.mesh = null),
              (this.composer = null),
              (this.renderPass = null),
              (this.uniforms = {
                uDispTexture: {
                  value: z.dispTexture,
                },
                uDispFactor: {
                  value: 1,
                },
                uTextureCurrent: {
                  value: z.collectionTextures[0],
                },
                uTextureNext: {
                  value: z.collectionTextures[1],
                },
                uMeshSize: {
                  value: {
                    x: 400,
                    y: 240,
                  },
                },
                uTextureSize: {
                  value: {
                    x: 800,
                    y: 480,
                  },
                },
                uScale: {
                  value: 0,
                },
                uNoiseScale: {
                  value: 1,
                },
                uMouse: {
                  value: {
                    x: 0,
                    y: 0,
                  },
                },
                uMouseDiff: {
                  value: {
                    x: 0,
                    y: 0,
                  },
                },
                uTime: {
                  value: 0,
                },
              }),
              (this.clock = null);
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function () {
                  (this.clock = new h.g()),
                    (this.geometry = new h.S(1, 1, 16, 16)),
                    (this.material = new h.cb({
                      uniforms: this.uniforms,
                      vertexShader:
                        "#define GLSLIFY 1\nvarying vec2 vUv;\nuniform float uTime;\nuniform float uScale;\nuniform vec2 uMouseDiff;\n\nconst float PI = 3.1415926535897932384626433832795;\n\nvoid main(){\n    vUv = uv;\n    vec3 pos = position;\n\n    vec3 curve = vec3(\n        sin(uv.y * PI) * uMouseDiff.x,\n        sin(uv.x * PI) * uMouseDiff.y,\n        0.\n    );\n    pos += curve;\n\n    vec4 modelPosition = modelMatrix * vec4(pos,1.0);    \n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectedPosition;\n}",
                      fragmentShader:
                        "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform vec2 uMeshSize;\nuniform vec2 uTextureSize;\nuniform sampler2D uTextureCurrent;\nuniform sampler2D uTextureNext;\nuniform float uTime;\n\nuniform sampler2D uDispTexture;\nuniform float uDispFactor;\nuniform vec2 uMouseDiff;\n\nvoid main(){\n    vec2 uvTexture = vUv;\n    vec2 resolutionRatio = vec2(\n        min((uMeshSize.x / uMeshSize.y) / (uTextureSize.x / uTextureSize.y), 1.0),\n        min((uMeshSize.y / uMeshSize.x) / (uTextureSize.y / uTextureSize.x), 1.0)\n    );\n    uvTexture -= 0.5;\n    uvTexture *= resolutionRatio;\n    uvTexture += 0.5;\n\n    uvTexture += uMouseDiff * .65;\n\n    vec4 dispTexture = texture2D(uDispTexture,uvTexture);\n    vec2 dispUv = vec2(uvTexture.x * (dispTexture.r * 1.0 ) , uvTexture.y * (dispTexture.r * 1.0));\n\n    float dispMaskX = step(uDispFactor,dispUv.x);\n    float dispMaskY = step(uDispFactor,dispUv.y);\n    float dispMask = dispMaskX * dispMaskY;\n\n    vec4 textureColor = texture2D(uTextureCurrent,uvTexture);\n    vec4 baseColor = vec4(.1,0.1,0.1,0.0);\n\n    vec4 finalColor = mix(baseColor,textureColor,dispMask);\n    gl_FragColor = finalColor;\n}",
                    })),
                    (this.mesh = new h.G(this.geometry, this.material)),
                    (this.mesh.name = "collection"),
                    this.stage.scene.add(this.mesh),
                    (this.mesh.material.transparent = !0),
                    this.setMeshScale();
                },
              },
              {
                key: "setMeshScale",
                value: function () {
                  this.mesh.scale.set(
                    this.uniforms.uMeshSize.value.x,
                    this.uniforms.uMeshSize.value.y
                  );
                },
              },
              {
                key: "onMouseMove",
                value: function (e) {
                  v.b.to(this.mesh.position, {
                    duration: 0.3,
                    x:
                      -window.innerWidth / 2 +
                      this.uniforms.uMeshSize.value.x / 2 +
                      e.clientX -
                      this.uniforms.uMeshSize.value.x / 2 +
                      400,
                    y:
                      window.innerHeight / 2 -
                      this.uniforms.uMeshSize.value.y / 2 -
                      e.clientY +
                      this.uniforms.uMeshSize.value.y / 2,
                    ease: z.customEase,
                  });
                },
              },
              {
                key: "onMouseEnter",
                value: function (e) {
                  switch (e.target.dataset.img) {
                    case "collection0":
                      this.mesh.material.uniforms.uTextureNext.value =
                        z.collectionTextures[0];
                      break;
                    case "collection1":
                      this.mesh.material.uniforms.uTextureNext.value =
                        z.collectionTextures[1];
                      break;
                    case "collection2":
                      this.mesh.material.uniforms.uTextureNext.value =
                        z.collectionTextures[2];
                      break;
                    case "collection3":
                      this.mesh.material.uniforms.uTextureNext.value =
                        z.collectionTextures[3];
                      break;
                    case "collection4":
                      this.mesh.material.uniforms.uTextureNext.value =
                        z.collectionTextures[4];
                      break;
                    case "collection5":
                      this.mesh.material.uniforms.uTextureNext.value =
                        z.collectionTextures[5];
                      break;
                    case "collection6":
                      this.mesh.material.uniforms.uTextureNext.value =
                        z.collectionTextures[6];
                      break;
                    case "collection7":
                      this.mesh.material.uniforms.uTextureNext.value =
                        z.collectionTextures[7];
                  }
                  v.b.to(this.mesh.material.uniforms.uDispFactor, {
                    duration: 0.3,
                    value: 0,
                    ease: z.customEase,
                  }),
                    (this.mesh.material.uniforms.uTextureCurrent.value =
                      this.mesh.material.uniforms.uTextureNext.value);
                },
              },
              {
                key: "onMouseLeave",
                value: function () {
                  v.b.to(this.mesh.material.uniforms.uDispFactor, {
                    duration: 0.3,
                    value: 1,
                    ease: w.b.easeInOut,
                  });
                },
              },
              {
                key: "meshHide",
                value: function () {
                  v.b.set(this.mesh.material.uniforms.uDispFactor, {
                    value: 1,
                  });
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  var n = this.clock.getElapsedTime();
                  (this.mesh.material.uniforms.uTime.value = n),
                    (this.mesh.material.uniforms.uMouseDiff.value = {
                      x: e,
                      y: t,
                    });
                },
              },
            ]),
            e
          );
        })(),
        C = n(302),
        _ = (function () {
          function e(t, n, o) {
            Object(r.a)(this, e),
              (this.stage = t),
              (this.name = n),
              (this.gltf = o),
              (this.currentIntersect = null),
              (this.uniforms = {
                uTime: {
                  value: 0,
                },
                uScale: {
                  value: 1,
                },
                uMouse: {
                  value: {
                    x: 1,
                    y: 1,
                  },
                },
                uScroll: {
                  value: 0,
                },
                uRandomValue: {
                  value: 1,
                },
                uRandomValue2: {
                  value: 1,
                },
                uSizeValue: {
                  value: 250,
                },
              }),
              (this.group = null),
              (this.group2 = null),
              (this.clock = null),
              (this.time = 0),
              (this.intersects = null),
              (this.raycaster = null),
              (this.currentIntersect = null),
              (this.isHover = !0),
              (this.scrollFlag = !1);
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function () {
                  (this.group = new h.m()),
                    (this.group2 = new h.m()),
                    (this.clock = new h.g()),
                    (this.raycaster = new h.Z()),
                    this.updateAllMaterials(),
                    this.setPosition(),
                    (this.scrollFlag = !1),
                    window.innerWidth < 769 &&
                      (this.uniforms.uSizeValue.value = 150);
                },
              },
              {
                key: "updateAllMaterials",
                value: function () {
                  var e = this;
                  this.gltf.traverse(function (t) {
                    if (t instanceof h.G && t.material instanceof h.J) {
                      (e.mesh = t),
                        (e.mesh.material = new h.cb({
                          vertexShader:
                            "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vRandomPos;\nvarying float vSize;\nuniform float uTime;\nuniform float uScale;\nuniform float uScroll;\nattribute vec3 aRandom;\nattribute float size;\nuniform vec2 uMouse;\nuniform float uRandomValue;\nuniform float uRandomValue2;\nuniform float uSizeValue;\n\nconst float PI = 3.1415926535897932384626433832795;\nvoid main(){\n    vUv = uv;\n    vNormal = normal;\n    vSize = size;\n    vec3 pos = position;\n    vPosition = pos;\n    vec3 randomPos = aRandom;\n    vec3 vRandomPos = randomPos;\n    randomPos.x *= 6.0;\n    randomPos.y *= 6.0;\n\n    pos.x += sin(uTime * aRandom.x) * 0.05;\n    pos.y += cos(uTime * aRandom.y) * 0.05;\n    pos.z += sin(uTime * aRandom.z) * 0.05;\n\n    vec3 newPos = mix(pos,randomPos,uRandomValue);\n        \n    vec4 mvPosition = modelViewMatrix * vec4(newPos,1.0);\n    // vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * mvPosition;\n\n    gl_Position = projectedPosition;\n    gl_PointSize = size * ( uSizeValue / -mvPosition.z );\n}",
                          fragmentShader:
                            "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying float vSize;\nuniform float uTime;\n\nuniform vec2 uMouse;\nuniform sampler2D uDispTexture;\n\nfloat random(vec2 st)\n{\n    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);\n}\n\nvoid main(){\n    vec2 uvTexture = vUv;\n\n    vec2 mouseUv = uMouse;\n    float dist = distance(uvTexture,mouseUv) * 2.0 - 0.5;\n    dist *= 1.5;\n\n    vec4 dispTexture = texture2D(uDispTexture,uvTexture);\n    vec2 dispUv = vec2(uvTexture.x * (dispTexture.r * 1.0 ) , uvTexture.y * (dispTexture.r * 1.0));\n    \n    float strength = vUv.x * vUv.y;\n\n    float dispMaskX2 = step(dist,dispUv.x-0.25);\n    float dispMaskY2 = step(dist,dispUv.y-0.25);\n    float dist2 = dispMaskX2 * dispMaskY2 * -1.0;\n\n    // vec4 finalColor = vec4(vec3(strength + 0.021,strength+0.025,strength + 0.1),1.0);\n    vec4 finalColor = vec4(vec3(strength + .421,strength+.425,strength + .7),1.0);\n\n    finalColor.r += dist2 * .2;\n    finalColor.g += dist2 * .1;\n    finalColor.b += dist2 * .6;\n    \n    finalColor.r += sin(vSize*0.8);\n    finalColor.g += sin(vSize*0.2);\n    finalColor.b += cos(vSize*1.3);\n\n    gl_FragColor = finalColor;\n\n}",
                          wireframe: !1,
                          uniforms: e.uniforms,
                        }));
                      var n = new C.a(e.mesh).build(),
                        o = 10928;
                      e.particlesGeometry = new h.e();
                      for (
                        var r = new Float32Array(32784),
                          l = new Float32Array(32784),
                          m = new Float32Array(o),
                          i = 0;
                        i < o;
                        i++
                      ) {
                        var c = new h.ob();
                        n.sample(c),
                          r.set([c.x, c.y, c.z], 3 * i),
                          l.set(
                            [
                              2 * Math.random() - 1,
                              2 * Math.random() - 1,
                              2 * Math.random() - 1,
                            ],
                            3 * i
                          ),
                          (m[i] = 10);
                      }
                      e.particlesGeometry.setAttribute(
                        "position",
                        new h.d(r, 3)
                      ),
                        e.particlesGeometry.setAttribute(
                          "aRandom",
                          new h.d(l, 3)
                        ),
                        e.particlesGeometry.setAttribute("size", new h.d(m, 1)),
                        (e.mesh = new h.U(
                          e.particlesGeometry,
                          e.mesh.material
                        )),
                        (e.mesh.visible = !1),
                        e.group.add(e.mesh),
                        e.group2.add(e.group),
                        e.stage.scene.add(e.group2);
                    }
                  });
                },
              },
              {
                key: "setPosition",
                value: function () {
                  window.innerWidth < 769
                    ? ((this.mesh.position.x = 100 + 0.05 * window.innerWidth),
                      (this.mesh.position.y = 150 + 0.04 * window.innerWidth),
                      (this.mesh.rotation.z = 0.1),
                      (this.mesh.rotation.y = Math.PI),
                      (this.mesh.scale.x = 60 + 0.05 * window.innerWidth),
                      (this.mesh.scale.y = 60 + 0.05 * window.innerWidth),
                      (this.mesh.scale.z = 60 + 0.05 * window.innerWidth))
                    : window.innerWidth < 821
                    ? ((this.mesh.position.x = 150 + 0.05 * window.innerWidth),
                      (this.mesh.position.y = 50 + 0.04 * window.innerWidth),
                      (this.mesh.rotation.z = 0.1),
                      (this.mesh.rotation.y = Math.PI),
                      (this.mesh.scale.x = 120 + 0.05 * window.innerWidth),
                      (this.mesh.scale.y = 120 + 0.05 * window.innerWidth),
                      (this.mesh.scale.z = 120 + 0.05 * window.innerWidth))
                    : ((this.mesh.position.x = 320 + 0.05 * window.innerWidth),
                      (this.mesh.position.y = -150),
                      (this.mesh.rotation.z = 0.1),
                      (this.mesh.rotation.y = Math.PI),
                      this.mesh.scale.set(220, 220, 220),
                      (this.mesh.scale.x = 220 + 0.05 * window.innerWidth),
                      (this.mesh.scale.y = 220 + 0.05 * window.innerWidth),
                      (this.mesh.scale.z = 220 + 0.05 * window.innerWidth));
                },
              },
              {
                key: "onMouseMove",
                value: function (e) {
                  window.innerWidth < 769 ||
                    (v.b.to(this.group2.position, {
                      x: 50 * -e.x,
                      y: 50 * -e.y,
                    }),
                    v.b.to(this.group2.rotation, {
                      z: 0.2 * -e.y,
                      y: 0.2 * e.x,
                    }));
                },
              },
              {
                key: "resize",
                value: function () {
                  window.innerWidth < 769
                    ? ((this.mesh.position.x = 100 + 0.05 * window.innerWidth),
                      (this.mesh.position.y = 50 + 0.04 * window.innerWidth),
                      (this.mesh.scale.x = 100 + 0.04 * window.innerWidth),
                      (this.mesh.scale.y = 100 + 0.04 * window.innerWidth),
                      (this.mesh.scale.z = 100 + 0.04 * window.innerWidth))
                    : window.innerWidth < 821
                    ? ((this.mesh.position.x = 150 + 0.05 * window.innerWidth),
                      (this.mesh.position.y = 50 + 0.04 * window.innerWidth),
                      (this.mesh.rotation.z = 0.1),
                      (this.mesh.rotation.y = Math.PI),
                      (this.mesh.scale.x = 120 + 0.05 * window.innerWidth),
                      (this.mesh.scale.y = 120 + 0.05 * window.innerWidth),
                      (this.mesh.scale.z = 120 + 0.05 * window.innerWidth))
                    : ((this.mesh.position.x = 320 + 0.04 * window.innerWidth),
                      (this.mesh.position.y = 0.04 * window.innerWidth - 150),
                      (this.mesh.scale.x = 220 + 0.04 * window.innerWidth),
                      (this.mesh.scale.y = 220 + 0.04 * window.innerWidth),
                      (this.mesh.scale.z = 220 + 0.04 * window.innerWidth));
                },
              },
              {
                key: "render",
                value: function (e) {
                  if (this.mesh) {
                    (this.mesh.position.x += 0.05 * Math.cos(this.time)),
                      this.scrollFlag &&
                        (v.b.to(this.group.rotation, {
                          duration: 0.1,
                          y: 5e-4 * z.scrollTop,
                          ease: w.b.easeOut,
                        }),
                        v.b.to(this.group.position, {
                          duration: 0.1,
                          y: 0.1 * z.scrollTop,
                          ease: w.b.easeOut,
                        }));
                    for (
                      var t = this.mesh.geometry.attributes.size, i = 0;
                      i < t.array.length;
                      i++
                    )
                      t.array[i] =
                        10 * (1 + Math.sin(0.1 * i + 2.025 * this.time));
                    t.needsUpdate = !0;
                  }
                  var n = this.clock.getElapsedTime();
                  (this.time = n), (this.uniforms.uTime.value = this.time);
                },
              },
              {
                key: "meshView",
                value: function () {
                  (this.scrollFlag = !0), (this.mesh.visible = !0);
                },
              },
              {
                key: "meshHide",
                value: function () {
                  (this.scrollFlag = !1),
                    (this.mesh.visible = !1),
                    (this.uniforms.uRandomValue.value = 1),
                    (this.uniforms.uRandomValue2.value = 1);
                },
              },
            ]),
            e
          );
        })(),
        z = new ((function () {
          function e() {
            Object(r.a)(this, e),
              (this.isInisializ = !0),
              (this.isInisializWebMesh = !0),
              (this.stage = null),
              (this.asscroll = null),
              (this.customEase = null),
              (this.loadingManager = null),
              (this.textureLoader = null),
              (this.collectionArea = null),
              (this.collectionDomArray = null),
              (this.dispImage = "/img/disp.png"),
              (this.dispTexture = null),
              (this.webImageDOM = null),
              (this.webImages = [
                "/img/project/psy-clone/thumb-main.webp",
                "/img/project/marnon/thumb-main.webp",
                "/img/project/salonia-autumn2022/thumb-main.webp",
                "/img/project/shader-lab/thumb-main.webp",
              ]),
              (this.webTextures = []),
              (this.webImageOptionList = []),
              (this.webImageMeshList = []),
              (this.flowerImageDOM = null),
              (this.flowerImages = [
                "/img/top/flower01_sns.webp",
                "/img/top/flower02_sns.webp",
                "/img/top/flower03_sns.webp",
              ]),
              (this.flowerTextures = []),
              (this.flowerImageOptionList = []),
              (this.flowerImageMeshList = []),
              (this.mountainImageDOM = null),
              (this.mountainImages = "/img/top/mountain.webp"),
              (this.mountainTextures = []),
              (this.mountainImageOptionList = null),
              (this.mountainImageMeshList = null),
              (this.collectionImages = [
                "/img/blender/lamachan/thumb-main.webp",
                "/img/blender/bird/thumb-main.webp",
                "/img/blender/kitsunekun/thumb-main.webp",
                "/img/blender/floworld/thumb-main.webp",
                "/img/blender/room01/thumb-main.webp",
                "/img/blender/cafe/thumb-main.webp",
              ]),
              (this.collectionTextures = []),
              (this.collectionMesh = null),
              (this.lama = {
                name: "lama",
                glb: "/models/lama.glb",
                gltf: null,
                mesh: null,
              }),
              (this.particle = {
                name: "particle",
                glb: "/models/lama.glb",
                gltf: null,
                mesh: null,
              }),
              (this.flower = null),
              (this.nextprev = null),
              (this.mouse = {
                x: 0,
                y: 0,
              }),
              (this.mouseEase = {
                x: 0,
                y: 0,
              }),
              (this.mouseDiff = {
                x: 0,
                y: 0,
              }),
              (this.scrollTop = 0);
          }
          return (
            Object(l.a)(e, [
              {
                key: "load",
                value: function (e, t) {
                  var n = this;
                  (this.customEase = t),
                    (this.loadingManager = new h.C()),
                    (this.textureLoader = new h.jb(this.loadingManager)),
                    (this.dispTexture = this.textureLoader.load(
                      this.dispImage
                    ));
                  var o = new d.a();
                  o.setDecoderPath("/draco/");
                  var r = new c.a(this.loadingManager);
                  r.setDRACOLoader(o),
                    r.load(this.lama.glb, function (e) {
                      n.lama.gltf = e.scene;
                    }),
                    r.load(this.particle.glb, function (e) {
                      n.particle.gltf = e.scene;
                    });
                  for (var i = 0; i < this.webImages.length; i++)
                    this.webTextures.push(
                      this.textureLoader.load(this.webImages[i])
                    );
                  for (var l = 0; l < this.flowerImages.length; l++)
                    this.flowerTextures.push(
                      this.textureLoader.load(this.flowerImages[l])
                    );
                  this.mountainTextures.push(
                    this.textureLoader.load(this.mountainImages)
                  );
                  for (var m = 0; m < this.collectionImages.length; m++)
                    this.collectionTextures.push(
                      this.textureLoader.load(this.collectionImages[m])
                    );
                  this.loadingManager.onLoad = function () {
                    e.commit("opening/end");
                  };
                },
              },
              {
                key: "init",
                value: function (e) {
                  if (this.isInisializ)
                    (this.isInisializ = !1),
                      (this.asscroll = e),
                      (this.loadingManager = new h.C()),
                      (this.textureLoader = new h.jb(this.loadingManager)),
                      (this.dispTexture = this.textureLoader.load(
                        this.dispImage
                      )),
                      (this.stage = new f()),
                      this.stage.init(),
                      (this.lama.mesh = new x(
                        this.stage,
                        this.lama.name,
                        this.lama.gltf
                      )),
                      this.lama.mesh.init(),
                      (this.particle.mesh = new _(
                        this.stage,
                        this.particle.name,
                        this.particle.gltf
                      )),
                      this.particle.mesh.init(),
                      (this.flower = new M()),
                      this.flower.init(),
                      (this.nextprev = new y()),
                      this.nextprev.init(),
                      this.onRaf(),
                      (this.resize = this.resize.bind(this)),
                      window.addEventListener("resize", this.resize),
                      window.innerWidth < 769 ||
                        ((this.onMouseMove = this.onMouseMove.bind(this)),
                        window.addEventListener("mousemove", this.onMouseMove),
                        this.addCollectionMesh()),
                      document
                        .querySelector(".content")
                        .classList.contains("top") &&
                        (this.lama.mesh && this.lama.mesh.meshView(),
                        this.isInisializWebMesh &&
                          ((this.isInisializWebMesh = !1),
                          window.innerWidth < 769 ||
                            (this.addWebMesh(),
                            this.addMountainMesh(),
                            this.addFlowerMesh()))),
                      document
                        .querySelector(".content")
                        .classList.contains("about") &&
                        this.particle.mesh &&
                        this.particle.mesh.meshView();
                  else {
                    if (
                      document
                        .querySelector(".content")
                        .classList.contains("top")
                    ) {
                      if (this.isInisializWebMesh)
                        (this.isInisializWebMesh = !1),
                          (this.scrollTop = 0),
                          window.innerWidth < 769 ||
                            (this.addWebMesh(),
                            this.addMountainMesh(),
                            this.addFlowerMesh());
                      else if (((this.scrollTop = 0), window.innerWidth < 769));
                      else {
                        this.webImageDOM = Object(o.a)(
                          document.querySelectorAll(".webgl-webImage")
                        );
                        for (var i = 0; i < this.webImageDOM.length; i++)
                          (this.webImageMeshList[i].mesh.visible = !0),
                            (this.webImageOptionList[i].$target =
                              this.webImageDOM[i]),
                            this.webImageOptionList[i].$target.addEventListener(
                              "mousemove",
                              this.webImageMeshList[i].onMouseMove.bind(
                                this.webImageMeshList[i]
                              )
                            ),
                            this.webImageOptionList[i].$target.addEventListener(
                              "mouseenter",
                              this.webImageMeshList[i].onMouseEnter.bind(
                                this.webImageMeshList[i]
                              )
                            ),
                            this.webImageOptionList[i].$target.addEventListener(
                              "mouseleave",
                              this.webImageMeshList[i].onMouseLeave.bind(
                                this.webImageMeshList[i]
                              )
                            ),
                            this.webImageOptionList[i].$target.addEventListener(
                              "click",
                              this.webImageMeshList[i].onClick.bind(
                                this.webImageMeshList[i]
                              )
                            );
                        this.flowerImageDOM = Object(o.a)(
                          document.querySelectorAll(".webgl-flower")
                        );
                        for (var t = 0; t < this.flowerImageDOM.length; t++)
                          (this.flowerImageMeshList[t].mesh.visible = !0),
                            (this.flowerImageOptionList[t].$target =
                              this.flowerImageDOM[t]),
                            this.flowerImageOptionList[
                              t
                            ].$target.addEventListener(
                              "mouseenter",
                              this.flowerImageMeshList[t].onMouseEnter.bind(
                                this.flowerImageMeshList[t]
                              )
                            ),
                            this.flowerImageOptionList[
                              t
                            ].$target.addEventListener(
                              "mouseleave",
                              this.flowerImageMeshList[t].onMouseLeave.bind(
                                this.flowerImageMeshList[t]
                              )
                            );
                        (this.mountainImageDOM =
                          document.querySelector(".webgl-mountain")),
                          (this.mountainImageOptionList.$target =
                            this.mountainImageDOM),
                          (this.mountainImageMeshList.mesh.visible = !0);
                      }
                      if (
                        (this.flower.init(),
                        (this.collectionArea = document.querySelector(
                          ".js-webgl-collectionArea"
                        )),
                        (this.collectionDomArray = Object(o.a)(
                          document.querySelectorAll(".js-webgl-collection")
                        )),
                        this.collectionMesh)
                      ) {
                        for (var n = 0; n < this.collectionDomArray.length; n++)
                          this.collectionDomArray[n].addEventListener(
                            "mouseenter",
                            this.collectionMesh.onMouseEnter
                          );
                        this.collectionArea.addEventListener(
                          "mouseleave",
                          this.collectionMesh.onMouseLeave
                        );
                      }
                    }
                    document
                      .querySelector(".content")
                      .classList.contains("project") && this.nextprev.init();
                  }
                },
              },
              {
                key: "addWebMesh",
                value: function () {
                  var e = this;
                  this.webImageDOM = Object(o.a)(
                    document.querySelectorAll(".webgl-webImage")
                  );
                  for (var i = 0; i < this.webImageDOM.length; i++) {
                    (this.webImageOptionList[i] = {}),
                      (this.webImageOptionList[i].$target =
                        this.webImageDOM[i]),
                      (this.webImageOptionList[i].texture =
                        this.webTextures[i]),
                      (this.webImageOptionList[i].imgWidth =
                        this.webImageDOM[i].getElementsByTagName(
                          "img"
                        )[0].naturalWidth),
                      (this.webImageOptionList[i].imgHeight =
                        this.webImageDOM[i].getElementsByTagName(
                          "img"
                        )[0].naturalHeight),
                      (this.webImageOptionList[i].$target =
                        this.webImageDOM[i]),
                      (this.webImageOptionList[i].width =
                        this.webImageDOM[i].getBoundingClientRect().width),
                      (this.webImageOptionList[i].height =
                        this.webImageDOM[i].getBoundingClientRect().height);
                    var rect = this.webImageDOM[i].getBoundingClientRect(),
                      t =
                        window.pageXOffset ||
                        document.documentElement.scrollLeft;
                    (this.webImageOptionList[i].top =
                      rect.top + this.scrollTop),
                      (this.webImageOptionList[i].left = rect.left + t);
                  }
                  this.webImageOptionList.forEach(function (t, i) {
                    (e.webImageMeshList[i] = new T(e.stage, t)),
                      e.webImageMeshList[i].init(),
                      e.webImageOptionList[i].$target.addEventListener(
                        "mousemove",
                        e.webImageMeshList[i].onMouseMove.bind(
                          e.webImageMeshList[i]
                        )
                      ),
                      e.webImageOptionList[i].$target.addEventListener(
                        "mouseenter",
                        e.webImageMeshList[i].onMouseEnter.bind(
                          e.webImageMeshList[i]
                        )
                      ),
                      e.webImageOptionList[i].$target.addEventListener(
                        "mouseleave",
                        e.webImageMeshList[i].onMouseLeave.bind(
                          e.webImageMeshList[i]
                        )
                      ),
                      e.webImageOptionList[i].$target.addEventListener(
                        "click",
                        e.webImageMeshList[i].onClick.bind(
                          e.webImageMeshList[i]
                        )
                      );
                  });
                },
              },
              {
                key: "addFlowerMesh",
                value: function () {
                  var e = this;
                  this.flowerImageDOM = Object(o.a)(
                    document.querySelectorAll(".webgl-flower")
                  );
                  for (var i = 0; i < this.flowerImageDOM.length; i++) {
                    (this.flowerImageOptionList[i] = {}),
                      (this.flowerImageOptionList[i].name = "flower0".concat(
                        i
                      )),
                      (this.flowerImageOptionList[i].$target =
                        this.flowerImageDOM[i]),
                      (this.flowerImageOptionList[i].texture =
                        this.flowerTextures[i]),
                      (this.flowerImageOptionList[i].imgWidth =
                        this.flowerImageDOM[i].getElementsByTagName(
                          "img"
                        )[0].naturalWidth),
                      (this.flowerImageOptionList[i].imgHeight =
                        this.flowerImageDOM[i].getElementsByTagName(
                          "img"
                        )[0].naturalHeight),
                      (this.flowerImageOptionList[i].width =
                        this.flowerImageDOM[i].getBoundingClientRect().width),
                      (this.flowerImageOptionList[i].height =
                        this.flowerImageDOM[i].getBoundingClientRect().height);
                    var rect = this.flowerImageDOM[i].getBoundingClientRect(),
                      t =
                        window.pageXOffset ||
                        document.documentElement.scrollLeft;
                    (this.flowerImageOptionList[i].top =
                      rect.top + this.scrollTop),
                      (this.flowerImageOptionList[i].left = rect.left + t);
                  }
                  this.flowerImageOptionList.forEach(function (t, i) {
                    (e.flowerImageMeshList[i] = new O(e.stage, t)),
                      e.flowerImageMeshList[i].init(),
                      e.flowerImageOptionList[i].$target.addEventListener(
                        "mouseenter",
                        e.flowerImageMeshList[i].onMouseEnter.bind(
                          e.flowerImageMeshList[i]
                        )
                      ),
                      e.flowerImageOptionList[i].$target.addEventListener(
                        "mouseleave",
                        e.flowerImageMeshList[i].onMouseLeave.bind(
                          e.flowerImageMeshList[i]
                        )
                      );
                  });
                },
              },
              {
                key: "addMountainMesh",
                value: function () {
                  (this.mountainImageDOM =
                    document.querySelector(".webgl-mountain")),
                    (this.mountainImageOptionList = {}),
                    (this.mountainImageOptionList.name = "mountain"),
                    (this.mountainImageOptionList.$target =
                      this.mountainImageDOM),
                    (this.mountainImageOptionList.texture =
                      this.mountainTextures[0]),
                    (this.mountainImageOptionList.imgWidth =
                      this.mountainImageDOM.getElementsByTagName(
                        "img"
                      )[0].naturalWidth),
                    (this.mountainImageOptionList.imgHeight =
                      this.mountainImageDOM.getElementsByTagName(
                        "img"
                      )[0].naturalHeight),
                    (this.mountainImageOptionList.width =
                      this.mountainImageDOM.getBoundingClientRect().width),
                    (this.mountainImageOptionList.height =
                      this.mountainImageDOM.getBoundingClientRect().height);
                  var rect = this.mountainImageDOM.getBoundingClientRect(),
                    e =
                      window.pageXOffset || document.documentElement.scrollLeft;
                  (this.mountainImageOptionList.top =
                    rect.top + this.scrollTop),
                    (this.mountainImageOptionList.left = rect.left + e),
                    (this.mountainImageMeshList = new k(
                      this.stage,
                      this.mountainImageOptionList
                    )),
                    this.mountainImageMeshList.init();
                },
              },
              {
                key: "addCollectionMesh",
                value: function () {
                  if (
                    ((this.collectionMesh = new S(this.stage)),
                    this.collectionMesh.init(),
                    (this.collectionMesh.onMouseMove =
                      this.collectionMesh.onMouseMove.bind(
                        this.collectionMesh
                      )),
                    (this.collectionMesh.onMouseEnter =
                      this.collectionMesh.onMouseEnter.bind(
                        this.collectionMesh
                      )),
                    (this.collectionMesh.onMouseLeave =
                      this.collectionMesh.onMouseLeave.bind(
                        this.collectionMesh
                      )),
                    document
                      .querySelector(".content")
                      .classList.contains("top"))
                  ) {
                    (this.collectionArea = document.querySelector(
                      ".js-webgl-collectionArea"
                    )),
                      (this.collectionDomArray = Object(o.a)(
                        document.querySelectorAll(".js-webgl-collection")
                      ));
                    for (var i = 0; i < this.collectionDomArray.length; i++)
                      this.collectionDomArray[i].addEventListener(
                        "mouseenter",
                        this.collectionMesh.onMouseEnter
                      );
                    this.collectionArea.addEventListener(
                      "mouseleave",
                      this.collectionMesh.onMouseLeave
                    );
                  }
                },
              },
              {
                key: "addNextPrevMesh",
                value: function (e, t) {
                  if (this.nextPrevFlag) {
                    (this.scrollTop = 0),
                      (this.nextPrevFlag = !1),
                      (this.prevImageDOM =
                        document.querySelector(".webgl-prev")),
                      (this.prevTexture = this.webTextures[e.no_thumbnail]),
                      (this.prevImageOptionList = {
                        name: "prev",
                        texture: this.prevTexture,
                        imgWidth:
                          this.prevImageDOM.getElementsByTagName("img")[0]
                            .naturalWidth,
                        imgHeight:
                          this.prevImageDOM.getElementsByTagName("img")[0]
                            .naturalHeight,
                        width: this.prevImageDOM.getBoundingClientRect().width,
                        height:
                          this.prevImageDOM.getBoundingClientRect().height,
                      });
                    var n = this.prevImageDOM.getBoundingClientRect(),
                      o =
                        window.pageXOffset ||
                        document.documentElement.scrollLeft;
                    (this.prevImageOptionList.top = n.top + this.scrollTop),
                      (this.prevImageOptionList.left = n.left + o),
                      (this.prevMesh = new ProjectMesh(
                        this.stage,
                        this.prevImageOptionList
                      )),
                      (this.nextImageDOM =
                        document.querySelector(".webgl-next")),
                      (this.nextTexture = this.webTextures[t.no_thumbnail]),
                      (this.nextImageOptionList = {
                        name: "next",
                        texture: this.nextTexture,
                        imgWidth:
                          this.nextImageDOM.getElementsByTagName("img")[0]
                            .naturalWidth,
                        imgHeight:
                          this.nextImageDOM.getElementsByTagName("img")[0]
                            .naturalHeight,
                        width: this.nextImageDOM.getBoundingClientRect().width,
                        height:
                          this.nextImageDOM.getBoundingClientRect().height,
                      });
                    var r = this.nextImageDOM.getBoundingClientRect();
                    (this.nextImageOptionList.top = r.top + this.scrollTop),
                      (this.nextImageOptionList.left = r.left + o),
                      (this.nextMesh = new ProjectMesh(
                        this.stage,
                        this.nextImageOptionList
                      )),
                      this.prevMesh.init(),
                      this.nextMesh.init(),
                      this.prevImageDOM.addEventListener(
                        "mousemove",
                        this.prevMesh.onMouseMove.bind(this.prevMesh)
                      ),
                      this.prevImageDOM.addEventListener(
                        "mouseenter",
                        this.prevMesh.onMouseEnter.bind(this.prevMesh)
                      ),
                      this.prevImageDOM.addEventListener(
                        "mouseleave",
                        this.prevMesh.onMouseLeave.bind(this.prevMesh)
                      ),
                      this.prevImageDOM.addEventListener(
                        "click",
                        this.prevMesh.onClick.bind(this.prevMesh)
                      ),
                      this.nextImageDOM.addEventListener(
                        "mousemove",
                        this.nextMesh.onMouseMove.bind(this.nextMesh)
                      ),
                      this.nextImageDOM.addEventListener(
                        "mouseenter",
                        this.nextMesh.onMouseEnter.bind(this.nextMesh)
                      ),
                      this.nextImageDOM.addEventListener(
                        "mouseleave",
                        this.nextMesh.onMouseLeave.bind(this.nextMesh)
                      );
                  } else
                    (this.scrollTop = 0),
                      (this.prevImageDOM =
                        document.querySelector(".webgl-prev")),
                      (this.prevTexture = this.webTextures[e.no_thumbnail]),
                      (this.nextImageDOM =
                        document.querySelector(".webgl-next")),
                      (this.nextTexture = this.webTextures[t.no_thumbnail]),
                      this.prevImageDOM.addEventListener(
                        "mousemove",
                        this.prevMesh.onMouseMove.bind(this.prevMesh)
                      ),
                      this.prevImageDOM.addEventListener(
                        "mouseenter",
                        this.prevMesh.onMouseEnter.bind(this.prevMesh)
                      ),
                      this.prevImageDOM.addEventListener(
                        "mouseleave",
                        this.prevMesh.onMouseLeave.bind(this.prevMesh)
                      ),
                      this.nextImageDOM.addEventListener(
                        "mousemove",
                        this.nextMesh.onMouseMove.bind(this.nextMesh)
                      ),
                      this.nextImageDOM.addEventListener(
                        "mouseenter",
                        this.nextMesh.onMouseEnter.bind(this.nextMesh)
                      ),
                      this.nextImageDOM.addEventListener(
                        "mouseleave",
                        this.nextMesh.onMouseLeave.bind(this.nextMesh)
                      );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  (this.mouseEase.x = m.lerp(
                    this.mouseEase.x,
                    this.mouse.x,
                    0.1
                  )),
                    (this.mouseEase.y = m.lerp(
                      this.mouseEase.y,
                      this.mouse.y,
                      0.1
                    )),
                    (this.mouseDiff.x = m.lerp(
                      this.mouseDiff.x,
                      this.mouse.x - this.mouseEase.x,
                      0.1
                    )),
                    (this.mouseDiff.y = m.lerp(
                      this.mouseDiff.y,
                      this.mouse.y - this.mouseEase.y,
                      0.1
                    )),
                    window.innerWidth < 769
                      ? (this.scrollTop =
                          window.pageYOffset ||
                          document.documentElement.scrollTop)
                      : (this.asscroll.update(),
                        (this.scrollTop = this.asscroll.currentPos)),
                    this.stage.render(),
                    this.lama.mesh &&
                      this.lama.mesh.render(
                        this.mouse,
                        this.mouseDiff.x,
                        this.mouseDiff.y
                      ),
                    this.particle.mesh &&
                      this.particle.mesh.render(
                        this.mouse,
                        this.mouseDiff.x,
                        this.mouseDiff.y
                      ),
                    this.flowerImageMeshList.length > 0 &&
                      this.flowerImageMeshList.forEach(function (e) {
                        e.render();
                      }),
                    this.mountainImageMeshList &&
                      this.mountainImageMeshList.render(),
                    this.webImageMeshList.length > 0 &&
                      this.webImageMeshList.forEach(function (t) {
                        t.render(e.mouseDiff.x, e.mouseDiff.y);
                      }),
                    this.collectionMesh &&
                      this.collectionMesh.render(
                        this.mouseDiff.x,
                        this.mouseDiff.y
                      ),
                    this.prevMesh && this.prevMesh.render(),
                    this.nextMesh && this.nextMesh.render();
                },
              },
              {
                key: "resize",
                value: function () {
                  if (
                    (this.stage.resize(),
                    this.lama.mesh && this.lama.mesh.resize(),
                    this.particle.mesh && this.particle.mesh.resize(),
                    this.mountainImageMeshList)
                  ) {
                    (this.mountainImageOptionList.width =
                      this.mountainImageDOM.getBoundingClientRect().width),
                      (this.mountainImageOptionList.height =
                        this.mountainImageDOM.getBoundingClientRect().height);
                    var rect = this.mountainImageDOM.getBoundingClientRect(),
                      e =
                        window.pageXOffset ||
                        document.documentElement.scrollLeft;
                    (this.mountainImageOptionList.top =
                      rect.top + this.scrollTop),
                      (this.mountainImageOptionList.left = rect.left + e),
                      this.mountainImageMeshList.resize();
                  }
                  if (this.flowerImageMeshList.length > 0) {
                    for (var i = 0; i < this.flowerImageDOM.length; i++) {
                      (this.flowerImageOptionList[i].width =
                        this.flowerImageDOM[i].getBoundingClientRect().width),
                        (this.flowerImageOptionList[i].height =
                          this.flowerImageDOM[
                            i
                          ].getBoundingClientRect().height);
                      var t = this.flowerImageDOM[i].getBoundingClientRect(),
                        n =
                          window.pageXOffset ||
                          document.documentElement.scrollLeft;
                      (this.flowerImageOptionList[i].top =
                        t.top + this.scrollTop),
                        (this.flowerImageOptionList[i].left = t.left + n);
                    }
                    this.flowerImageMeshList.forEach(function (e) {
                      e.resize();
                    });
                  }
                  if (this.webImageMeshList.length > 0) {
                    for (var o = 0; o < this.webImageDOM.length; o++) {
                      (this.webImageOptionList[o].width =
                        this.webImageDOM[o].getBoundingClientRect().width),
                        (this.webImageOptionList[o].height =
                          this.webImageDOM[o].getBoundingClientRect().height);
                      var r = this.webImageDOM[o].getBoundingClientRect(),
                        l =
                          window.pageXOffset ||
                          document.documentElement.scrollLeft;
                      (this.webImageOptionList[o].top = r.top + this.scrollTop),
                        (this.webImageOptionList[o].left = r.left + l);
                    }
                    this.webImageMeshList.forEach(function (e) {
                      e.resize();
                    });
                  }
                  if (this.prevMesh) {
                    (this.prevImageOptionList.width =
                      this.prevImageDOM.getBoundingClientRect().width),
                      (this.prevImageOptionList.height =
                        this.prevImageDOM.getBoundingClientRect().height);
                    var h = this.prevImageDOM.getBoundingClientRect(),
                      m =
                        window.pageXOffset ||
                        document.documentElement.scrollLeft;
                    (this.prevImageOptionList.top = h.top + this.scrollTop),
                      (this.prevImageOptionList.left = h.left + m),
                      this.prevMesh.resize();
                  }
                  if (this.nextMesh) {
                    (this.nextImageOptionList.width =
                      this.nextImageDOM.getBoundingClientRect().width),
                      (this.nextImageOptionList.height =
                        this.nextImageDOM.getBoundingClientRect().height);
                    var c = this.nextImageDOM.getBoundingClientRect(),
                      d =
                        window.pageXOffset ||
                        document.documentElement.scrollLeft;
                    (this.nextImageOptionList.top = c.top + this.scrollTop),
                      (this.nextImageOptionList.left = c.left + d),
                      this.nextMesh.resize();
                  }
                },
              },
              {
                key: "onRaf",
                value: function () {
                  this.render(), requestAnimationFrame(this.onRaf.bind(this));
                },
              },
              {
                key: "onMouseMove",
                value: function (e) {
                  (this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1),
                    (this.mouse.y = (-e.clientY / window.innerHeight) * 2 + 1),
                    this.lama.mesh && this.lama.mesh.onMouseMove(this.mouse),
                    this.flower && this.flower.onMouseMove(this.mouse),
                    this.particle.mesh &&
                      this.particle.mesh.onMouseMove(this.mouse),
                    this.collectionMesh && this.collectionMesh.onMouseMove(e),
                    this.nextprev && this.nextprev.onMouseMove(this.mouse);
                },
              },
              {
                key: "meshJudgement",
                value: function (e) {
                  this.lama.mesh && this.lama.mesh.meshHide(),
                    this.particle.mesh && this.particle.mesh.meshHide(),
                    this.collectionMesh && this.collectionMesh.meshHide(),
                    this.flowerImageMeshList.length > 0 &&
                      this.flowerImageMeshList.forEach(function (e) {
                        e.meshHide();
                      }),
                    this.mountainImageMeshList &&
                      this.mountainImageMeshList.meshHide(),
                    "index" === e &&
                      (this.lama.mesh.meshView(),
                      window.innerWidth < 769 ||
                        ((this.mountainImageMeshList.mesh.visible = !0),
                        this.flowerImageMeshList.forEach(function (e) {
                          e.mesh.visible = !0;
                        }))),
                    "about" === e &&
                      (this.particle.mesh.meshView(),
                      this.webImageMeshList.length > 0 &&
                        this.webImageMeshList.forEach(function (e) {
                          e.meshHide();
                        })),
                    "project-slug" === e &&
                      this.webImageMeshList.length > 0 &&
                      this.webImageMeshList.forEach(function (e) {
                        e.meshHide();
                      }),
                    "blender-slug" === e &&
                      this.webImageMeshList.length > 0 &&
                      this.webImageMeshList.forEach(function (e) {
                        e.meshHide();
                      });
                },
              },
              {
                key: "beforeDestroy",
                value: function () {
                  if (this.collectionMesh) {
                    for (var i = 0; i < this.collectionDomArray.length; i++)
                      this.collectionDomArray[i].removeEventListener(
                        "mouseenter",
                        this.collectionMesh.onMouseEnter
                      );
                    this.collectionArea.removeEventListener(
                      "mouseleave",
                      this.collectionMesh.onMouseLeave
                    );
                  }
                },
              },
            ]),
            e
          );
        })())();
    },
    258: function (e, t, n) {
      var content = n(364);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(91).default)("17df7720", content, !0, {
        sourceMap: !1,
      });
    },
    294: function (e, t, n) {
      var content = n(419);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(91).default)("bb5364fc", content, !0, {
        sourceMap: !1,
      });
    },
    295: function (e, t, n) {
      var content = n(421);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(91).default)("c24d536e", content, !0, {
        sourceMap: !1,
      });
    },
    296: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(39),
        r = n(0),
        l = n(1),
        h = n(12),
        header = new ((function () {
          function e() {
            Object(r.a)(this, e),
              (this.customEase = null),
              (this.asscroll = null);
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function (e, t) {
                  (this.asscroll = e),
                    (this.customEase = t),
                    this.onHoverLogo(),
                    this.headerScrollHideView();
                },
              },
              {
                key: "onHoverLogo",
                value: function () {
                  var e = document.querySelector(".logo"),
                    t = Object(o.a)(document.querySelectorAll(".logo span")),
                    n = h.a.timeline({
                      paused: !0,
                    });
                  n.to(
                    t[1],
                    {
                      duration: 0.3,
                      scaleY: 0,
                      ease: this.customEase,
                    },
                    "t"
                  )
                    .to(
                      t[2],
                      {
                        duration: 0.3,
                        scaleY: 0,
                        ease: this.customEase,
                      },
                      "t"
                    )
                    .to(
                      t[3],
                      {
                        duration: 0.3,
                        scaleY: 0,
                        ease: this.customEase,
                      },
                      "t"
                    )
                    .to(
                      t[5],
                      {
                        duration: 0.3,
                        scaleY: 0,
                        ease: this.customEase,
                      },
                      "t"
                    )
                    .to(
                      t[6],
                      {
                        duration: 0.3,
                        scaleY: 0,
                        ease: this.customEase,
                      },
                      "t"
                    )
                    .to(
                      t[0],
                      {
                        duration: 0.3,
                        x: 25,
                        ease: this.customEase,
                      },
                      "t+=.2"
                    )
                    .to(
                      t[4],
                      {
                        duration: 0.3,
                        x: -5,
                        ease: this.customEase,
                      },
                      "t+=.2"
                    );
                  e.addEventListener("mouseenter", function () {
                    window.innerWidth < 769 || n.play();
                  }),
                    e.addEventListener("mouseleave", function () {
                      window.innerWidth < 769 || n.reverse();
                    });
                },
              },
              {
                key: "headerScrollHideView",
                value: function () {
                  var e,
                    t = this,
                    n = document.getElementById("global-header"),
                    o = !0,
                    r = 0,
                    l = (e =
                      window.innerWidth < 769
                        ? window.pageYOffset ||
                          document.documentElement.scrollTop
                        : this.asscroll.currentPos),
                    m = function (m) {
                      (e =
                        window.innerWidth < 769
                          ? window.pageYOffset ||
                            document.documentElement.scrollTop
                          : t.asscroll.currentPos),
                        (l = e) > r
                          ? l > 150 &&
                            o &&
                            ((o = !1),
                            h.a.to(n, {
                              duration: 0.3,
                              y: -60,
                              ease: t.customEase,
                            }))
                          : l < r - 5 &&
                            (o ||
                              ((o = !0),
                              h.a.to(n, {
                                duration: 0.3,
                                y: 0,
                                ease: t.customEase,
                              }))),
                        (r = l);
                    };
                  window.innerWidth < 769
                    ? window.addEventListener("scroll", m.bind(this))
                    : this.asscroll.on("scroll", m.bind(this));
                },
              },
            ]),
            e
          );
        })())(),
        m = {
          data: function () {
            return {
              isColor: "light",
            };
          },
          mounted: function () {
            var e = this;
            this.$nextTick(function () {
              header.init(e.$asscroll, e.$EASE.transform2);
            });
          },
          methods: {
            toggleColor: function (e) {
              e.currentTarget.classList.contains("light")
                ? ((this.isColor = "dark"),
                  document.querySelector("main").classList.remove("light"),
                  document.querySelector("main").classList.add("dark"))
                : ((this.isColor = "light"),
                  document.querySelector("main").classList.remove("dark"),
                  document.querySelector("main").classList.add("light"));
            },
          },
        },
        c = (n(420), n(61)),
        component = Object(c.a)(
          m,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "header",
              {
                attrs: {
                  id: "global-header",
                },
              },
              [
                t(
                  "div",
                  {
                    staticClass: "logo",
                  },
                  [
                    t(
                      "nuxt-link",
                      {
                        attrs: {
                          to: "/",
                        },
                      },
                      [
                        t(
                          "div",
                          {
                            staticClass: "logo__text",
                          },
                          [
                            t("span", [e._v("Y")]),
                            e._v(" "),
                            t("span", [e._v("U")]),
                            e._v(" "),
                            t("span", [e._v("T")]),
                            e._v(" "),
                            t("span", [e._v("A")]),
                            e._v(" "),
                            t("span", [e._v("A")]),
                            e._v(" "),
                            t("span", [e._v("B")]),
                            e._v(" "),
                            t("span", [e._v("E")]),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                t(
                  "div",
                  {
                    staticClass: "selectArea",
                  },
                  [
                    t("nav", [
                      t(
                        "ul",
                        {
                          staticClass: "navigation",
                        },
                        [
                          t(
                            "li",
                            [
                              t(
                                "nuxt-link",
                                {
                                  attrs: {
                                    to: "/",
                                  },
                                },
                                [e._v("PROJECTS")]
                              ),
                            ],
                            1
                          ),
                          e._v(" "),
                          t(
                            "li",
                            [
                              t(
                                "nuxt-link",
                                {
                                  attrs: {
                                    to: "/about",
                                  },
                                },
                                [e._v("ABOUT")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                    e._v(" "),
                    t(
                      "button",
                      {
                        staticClass: "switcher",
                        class: e.isColor,
                        attrs: {
                          "aria-label": "color-switcher",
                        },
                        on: {
                          click: e.toggleColor,
                        },
                      },
                      [
                        t(
                          "div",
                          {
                            staticClass: "switcher__inner",
                          },
                          [
                            t("div", {
                              staticClass: "switcher__dot",
                            }),
                            e._v(" "),
                            t(
                              "svg",
                              {
                                staticClass: "sun",
                                attrs: {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                              },
                              [
                                t("path", {
                                  attrs: {
                                    d: "M6.995 12C6.995 14.761 9.241 17.007 12.002 17.007C14.763 17.007 17.009 14.761 17.009 12C17.009 9.239 14.763 6.993 12.002 6.993C9.241 6.993 6.995 9.239 6.995 12ZM11 19H13V22H11V19ZM11 2H13V5H11V2ZM2 11H5V13H2V11ZM19 11H22V13H19V11Z",
                                  },
                                }),
                                t("path", {
                                  attrs: {
                                    d: "M5.63702 19.778L4.22302 18.364L6.34402 16.243L7.75802 17.657L5.63702 19.778Z",
                                  },
                                }),
                                t("path", {
                                  attrs: {
                                    d: "M16.242 6.34405L18.364 4.22205L19.778 5.63605L17.656 7.75805L16.242 6.34405Z",
                                  },
                                }),
                                t("path", {
                                  attrs: {
                                    d: "M6.34402 7.75902L4.22302 5.63702L5.63802 4.22302L7.75802 6.34502L6.34402 7.75902Z",
                                  },
                                }),
                                t("path", {
                                  attrs: {
                                    d: "M19.778 18.3639L18.364 19.7779L16.242 17.6559L17.656 16.2419L19.778 18.3639Z",
                                  },
                                }),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "svg",
                              {
                                staticClass: "moon",
                                attrs: {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                              },
                              [
                                t("path", {
                                  attrs: {
                                    d: "M12 11.807C10.7418 10.5483 9.88488 8.94484 9.53762 7.1993C9.19037 5.45375 9.36832 3.64444 10.049 2C8.10826 2.38205 6.3256 3.33431 4.92899 4.735C1.02399 8.64 1.02399 14.972 4.92899 18.877C8.83499 22.783 15.166 22.782 19.072 18.877C20.4723 17.4805 21.4245 15.6983 21.807 13.758C20.1625 14.4385 18.3533 14.6164 16.6077 14.2692C14.8622 13.9219 13.2588 13.0651 12 11.807V11.807Z",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "29617efa",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        Header: n(296).default,
      });
    },
    303: function (e) {
      e.exports = JSON.parse(
        '[{"no":0,"id":"psy-clone","title":"PSY-CLONE","title_array":["P","S","Y","-","C","L","O","N","E"],"overview":"\'PSY-CLONE\' is an online gallery for digital art.\\nWe will be exhibiting various projects in the future.\\nTI created a 3D world view and created the pleasure of watching the work.","year":"2022","role":"Development","link":"https://www.psy-clone.jp","main_thumbnail":"/img/project/psy-clone/thumb-main.webp","long_thumbnail":["/img/project/psy-clone/pict-long01.webp","/img/project/psy-clone/pict-long02.webp"],"big_thumbnail":["/img/project/psy-clone/pict01.webp","/img/project/psy-clone/pict02.webp"],"prev":{"no":0,"title":"Shader-lab","link":"/project/shader-lab","image":["/img/project/shader-lab/pict01.webp","/img/project/shader-lab/pict-long01.webp","/img/project/shader-lab/pict-long02.webp"]},"next":{"no":1,"title":"MARNON","link":"/project/marnon","image":["/img/project/marnon/pict01.webp","/img/project/marnon/pict-long01.webp","/img/project/marnon/pict-long02.webp"]}},{"no":1,"id":"marnon","title":"MARNON","title_array":["M","A","R","N","O","N"],"overview":"MARNON is a custom-order shoe brand featuring comfortable tailoring by Japanese craftsmen with trendy designs.\\nThe easing has been gently adjusted, and the animation has also been devised.","year":"2022","role":"Development","link":"https://marnon.jp","main_thumbnail":"/img/project/marnon/thumb-main.webp","long_thumbnail":["/img/project/marnon/pict-long01.webp","/img/project/marnon/pict-long02.webp"],"big_thumbnail":["/img/project/marnon/pict01.webp","/img/project/marnon/pict02.webp"],"prev":{"no":0,"title":"PSY-CLONE","link":"/project/psy-clone","image":["/img/project/psy-clone/pict01.webp","/img/project/psy-clone/pict-long01.webp","/img/project/psy-clone/pict-long02.webp"]},"next":{"no":1,"title":"SALONIA","link":"/project/salonia","image":["/img/project/salonia-autumn2022/pict01.webp","/img/project/salonia-autumn2022/pict-long01.webp","/img/project/salonia-autumn2022/pict-long02.webp"]}},{"no":2,"id":"salonia","title":"SALONIA","title_array":["S","A","L","O","N","I","A"],"overview":"From the beauty appliance brand \'SALONIA\', which handles hair irons, dryers, brushes, facial equipment, etc.\\n, hair irons in autumn and winter limited colors are born. \\nDeveloped a special website.","year":"2022","role":"Development","link":"https://salonia.jp/limited/autumn2022/","main_thumbnail":"/img/project/salonia-autumn2022/thumb-main.webp","long_thumbnail":["/img/project/salonia-autumn2022/pict-long01.webp","/img/project/salonia-autumn2022/pict-long02.webp"],"big_thumbnail":["/img/project/salonia-autumn2022/pict01.webp","/img/project/salonia-autumn2022/pict02.webp"],"prev":{"no":0,"title":"MARNON","link":"/project/marnon","image":["/img/project/marnon/pict01.webp","/img/project/marnon/pict-long01.webp","/img/project/marnon/pict-long02.webp"]},"next":{"no":1,"title":"Shader-lab","link":"/project/shader-lab","image":["/img/project/shader-lab/pict01.webp","/img/project/shader-lab/pict-long01.webp","/img/project/shader-lab/pict-long02.webp"]}}]'
      );
    },
    304: function (e) {
      e.exports = JSON.parse(
        '[{"no":0,"id":"lamachan","title":"LAMA-CHAN","overview":"I modeled the animal llama as a motif.\\nI wanted it to look cute.\\nModeled with reference to photos and items at home.","year":"2022","role":"Design / Modeling","main_thumbnail":"/img/blender/lamachan/thumb-main.webp","long_thumbnail":["/img/blender/lamachan/pict-long01.webp","/img/blender/lamachan/pict-long02.webp"],"big_thumbnail":["/img/blender/lamachan/pict01.webp","/img/blender/lamachan/pict02.webp"],"prev":{"no":0,"title":"CAFE","link":"/blender/cafe","image":["/img/blender/cafe/pict01.webp","/img/blender/cafe/pict-long01.webp","/img/blender/cafe/pict-long02.webp"]},"next":{"no":1,"title":"BIRD","link":"/blender/bird","image":["/img/blender/bird/pict01.webp","/img/blender/bird/pict-long01.webp","/img/blender/bird/pict-long02.webp"]}},{"no":1,"id":"bird","title":"BIRD","overview":"Modeled with the image of a simple and cute bird.\\nThis bird is unlikely to fly in the sky.","year":"2022","role":"Design / Modeling","main_thumbnail":"/img/blender/bird/thumb-main.webp","long_thumbnail":["/img/blender/bird/pict-long01.webp","/img/blender/bird/pict-long02.webp"],"big_thumbnail":["/img/blender/bird/pict01.webp","/img/blender/bird/pict02.webp"],"prev":{"no":0,"title":"LAMA-CHAN","link":"/blender/lamachan","image":["/img/blender/lamachan/pict01.webp","/img/blender/lamachan/pict-long01.webp","/img/blender/lamachan/pict-long02.webp"]},"next":{"no":1,"title":"KITSUNEKUN","link":"/blender/kitsunekun","image":["/img/blender/kitsunekun/pict01.webp","/img/blender/kitsunekun/pict-long01.webp","/img/blender/kitsunekun/pict-long02.webp"]}},{"no":2,"id":"kitsunekun","title":"KITSUNEKUN","overview":"Modeled in the image of a loose fox.\\nA muffler is wrapped as one point.\\nThis fox may be sensitive to the cold.","year":"2022","role":"Design / Modeling","main_thumbnail":"/img/blender/kitsunekun/thumb-main.webp","long_thumbnail":["/img/blender/kitsunekun/pict-long01.webp","/img/blender/kitsunekun/pict-long02.webp"],"big_thumbnail":["/img/blender/kitsunekun/pict01.webp","/img/blender/kitsunekun/pict02.webp"],"prev":{"no":0,"title":"BIRD","link":"/blender/bird","image":["/img/blender/bird/pict01.webp","/img/blender/bird/pict-long01.webp","/img/blender/bird/pict-long02.webp"]},"next":{"no":1,"title":"FLOWORLD","link":"/blender/floworld","image":["/img/blender/floworld/pict01.webp","/img/blender/floworld/pict-long01.webp","/img/blender/floworld/pict-long02.webp"]}},{"no":3,"id":"floworld","title":"FLOWORLD","overview":"I also arranged flowers, mountains, the sun and other objects \\nwith the image of a cute world view.\\nWhen you change the color, the season also changes.","year":"2022","role":"Design / Modeling","main_thumbnail":"/img/blender/floworld/thumb-main.webp","long_thumbnail":["/img/blender/floworld/pict-long01.webp","/img/blender/floworld/pict-long02.webp"],"big_thumbnail":["/img/blender/floworld/pict01.webp","/img/blender/floworld/pict02.webp"],"prev":{"no":0,"title":"KITSUNEKUN","link":"/blender/kitsunekun","image":["/img/blender/kitsunekun/pict01.webp","/img/blender/kitsunekun/pict-long01.webp","/img/blender/kitsunekun/pict-long02.webp"]},"next":{"no":1,"title":"ROOM01","link":"/blender/room01","image":["/img/blender/room01/pict01.webp","/img/blender/room01/pict-long01.webp","/img/blender/room01/pict-long02.webp"]}},{"no":4,"id":"room01","title":"ROOM01","overview":"I made the inside of the room. Not actually my room.\\nIt is decorated with llamas and bird objects.","year":"2022","role":"Design / Modeling","main_thumbnail":"/img/blender/room01/thumb-main.webp","long_thumbnail":["/img/blender/room01/pict-long01.webp","/img/blender/room01/pict-long02.webp"],"big_thumbnail":["/img/blender/room01/pict01.webp","/img/blender/room01/pict02.webp"],"prev":{"no":0,"title":"FLOWORLD","link":"/blender/floworld","image":["/img/blender/floworld/pict01.webp","/img/blender/floworld/pict-long01.webp","/img/blender/floworld/pict-long02.webp"]},"next":{"no":1,"title":"CAFE","link":"/blender/cafe","image":["/img/blender/cafe/pict01.webp","/img/blender/cafe/pict-long01.webp","/img/blender/cafe/pict-long02.webp"]}},{"no":5,"id":"cafe","title":"CAFE","overview":"Modeled with reference to photos.\\nI modeled a two-story cafe.\\nTables are placed on the wooden deck on the second floor to give the feeling of a shop.","year":"2022","role":"Design / Modeling","main_thumbnail":"/img/blender/cafe/thumb-main.webp","long_thumbnail":["/img/blender/cafe/pict-long01.webp","/img/blender/cafe/pict-long02.webp"],"big_thumbnail":["/img/blender/cafe/pict01.webp","/img/blender/cafe/pict02.webp"],"prev":{"no":0,"title":"ROOM01","link":"/blender/room01","image":["/img/blender/room01/pict01.webp","/img/blender/room01/pict-long01.webp","/img/blender/room01/pict-long02.webp"]},"next":{"no":1,"title":"LAMA-CHAN","link":"/blender/lamachan","image":["/img/blender/lamachan/pict01.webp","/img/blender/lamachan/pict-long01.webp","/img/blender/lamachan/pict-long02.webp"]}}]'
      );
    },
    308: function (e, t, n) {
      "use strict";
      var o = {
          computed: {
            isColorMode: function () {
              return this.$store.getters.isColorState;
            },
          },
        },
        r = (n(363), n(61)),
        component = Object(r.a)(
          o,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "main",
              {
                class: e.isColorMode,
              },
              [
                t("div", {
                  staticClass: "baseColor",
                }),
                e._v(" "),
                t("Opening"),
                e._v(" "),
                t("div", {
                  staticClass: "webgl-canvas",
                  attrs: {
                    id: "webglCanvas",
                  },
                }),
                e._v(" "),
                t("Header"),
                e._v(" "),
                t(
                  "div",
                  {
                    attrs: {
                      id: "smooth-wrapper",
                      "asscroll-container": "",
                    },
                  },
                  [
                    t(
                      "div",
                      {
                        attrs: {
                          id: "smooth-content",
                          asscroll: "",
                        },
                      },
                      [t("Nuxt")],
                      1
                    ),
                  ]
                ),
                e._v(" "),
                t("div", {
                  staticClass: "transitionCover",
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "59776506",
          null
        );
      t.a = component.exports;
      installComponents(component, {
        Opening: n(425).default,
        Header: n(296).default,
      });
    },
    312: function (e, t, n) {
      n(313), (e.exports = n(314));
    },
    361: function (e, t, n) {
      var content = n(362);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(91).default)("5f8fffe6", content, !0, {
        sourceMap: !1,
      });
    },
    362: function (e, t, n) {
      var o = n(90)(!1);
      o.push([
        e.i,
        '@font-face{font-family:"dugas-ultra";src:url(/fonts/dugas-pro-ultra.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"dugas-bold";src:url(/fonts/dugas-pro-bold.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}abbr,address,article,aside,audio,b,blockquote,body,canvas,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,ul,var,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;color:#262523}body{line-height:1;font-family:"Helvetica Neue",Arial,"Hiragino Sans",Meiryo,sans-serif}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent;text-decoration:none;color:#262523}ins{text-decoration:none}ins,mark{background-color:#ff9;color:#292323}mark{font-style:italic;font-weight:700}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}li,ol,ul{list-style:none}button{background-color:transparent;border:none;cursor:pointer;outline:none;padding:0;text-align:left;text-align:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#292323}html{font-size:62.5%;scroll-behavior:auto}body{background-color:#fff7f0}body,html{width:100%;min-height:100%}.asscrollbar{display:none}.page-enter-active,.page-leave-active{transition-duration:.8s}.baseColor{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;transition:background-color 1s cubic-bezier(.19,1,.22,1)}.transitionCover{z-index:100;background-color:#262523;background-color:#fff7f0;transform:translateY(-100vh)}.transitionCover,.webgl-canvas{position:fixed;top:0;width:100%;height:100vh}.webgl-canvas{left:0;z-index:-1;pointer-events:none}.mountainArea{position:fixed;width:100%;bottom:0;z-index:-10}.mountainArea__inner{position:relative;width:100%;height:100%;transform:translateY(-50%)}.section-inner{position:relative;width:100%;padding:0 7.1428571429%;margin:0 auto;box-sizing:border-box}@-webkit-keyframes infinity-scroll-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes infinity-scroll-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}.scrollText{border-top:1px solid #262523;border-bottom:1px solid #262523;padding:16px 0;overflow:hidden;pointer-events:none}.scrollText.is-active .scrollText__text{-webkit-animation:infinity-scroll-left 20s linear .5s infinite both;animation:infinity-scroll-left 20s linear .5s infinite both}.scrollText__inner{display:flex;align-items:center}.scrollText__text{font-size:6rem;letter-spacing:.06em;margin:0 6px;white-space:nowrap;font-family:"dugas-bold"}.scrollText__text span{display:inline-block;will-change:transform;position:relative;top:-7px}.dark .transitionCover{background-color:#262523}.dark .scrollText{border-top:1px solid #fff7f0;border-bottom:1px solid #fff7f0}.dark .scrollText__text{color:#fff7f0}.win .scrollText__text{margin-top:-22px}@media screen and (max-width:768px){.section-inner{padding:0 4%}.scrollText{padding:10px 0}.scrollText__text{font-size:3rem;-webkit-animation:infinity-scroll-left 30s linear .5s infinite both;animation:infinity-scroll-left 30s linear .5s infinite both}.scrollText__text span{top:-3px}}',
        "",
      ]),
        (e.exports = o);
    },
    363: function (e, t, n) {
      "use strict";
      n(258);
    },
    364: function (e, t, n) {
      var o = n(90)(!1);
      o.push([
        e.i,
        '@font-face{font-family:"dugas-ultra";src:url(/fonts/dugas-pro-ultra.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"dugas-bold";src:url(/fonts/dugas-pro-bold.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}main.dark .baseColor[data-v-59776506]{background-color:#262523}',
        "",
      ]),
        (e.exports = o);
    },
    418: function (e, t, n) {
      "use strict";
      n(294);
    },
    419: function (e, t, n) {
      var o = n(90)(!1);
      o.push([
        e.i,
        '@font-face{font-family:"dugas-ultra";src:url(/fonts/dugas-pro-ultra.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"dugas-bold";src:url(/fonts/dugas-pro-bold.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}.opening[data-v-93c0de22]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fff7f0;z-index:200}.opening__inner[data-v-93c0de22]{position:relative;width:100%;height:100%}.opening .title[data-v-93c0de22]{position:absolute;top:50%;left:51%;transform:translate(-50%,-50%);font-size:4vw;letter-spacing:.04em;font-family:"dugas-ultra"}.opening span[data-v-93c0de22]{display:inline-block;color:#262523}.opening span.text[data-v-93c0de22]{margin:0 -.25vw;transform-origin:100% 0}.opening span.text.text07[data-v-93c0de22]{margin-right:-.01vw}.opening span.lama[data-v-93c0de22]{width:1.2vw;margin-right:-.3vw;opacity:0}.opening span.lama img[data-v-93c0de22]{width:100%}@media screen and (max-width:768px){.opening .title[data-v-93c0de22]{font-size:12vw;left:56%}.opening span.text[data-v-93c0de22]{margin:0 -.8vw}.opening span.lama[data-v-93c0de22]{width:4vw}}',
        "",
      ]),
        (e.exports = o);
    },
    420: function (e, t, n) {
      "use strict";
      n(295);
    },
    421: function (e, t, n) {
      var o = n(90)(!1);
      o.push([
        e.i,
        '@font-face{font-family:"dugas-ultra";src:url(/fonts/dugas-pro-ultra.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"dugas-bold";src:url(/fonts/dugas-pro-bold.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}.dark header[data-v-29617efa]{background-color:#262523;border-bottom:1px solid #fff7f0}.dark header .navigation[data-v-29617efa]{border-right:1px solid #fff7f0}.dark header .navigation a[data-v-29617efa]{color:#fff7f0}.dark header .navigation a[data-v-29617efa]:before{background-color:#fff7f0}.dark header .logo[data-v-29617efa]{border-right:1px solid #fff7f0}.dark header .logo__text span[data-v-29617efa]{color:#fff7f0}header[data-v-29617efa]{position:fixed;top:0;left:0;width:100%;height:60px;padding:0 30px 0 0;display:flex;justify-content:space-between;z-index:110;background-color:#fff7f0;border-bottom:1px solid #262523;transform:translateY(-60px);transition:background-color 1s cubic-bezier(.19,1,.22,1)}header[data-v-29617efa],header .logo[data-v-29617efa]{box-sizing:border-box}header .logo[data-v-29617efa]{position:relative;width:100px;height:100%;border-right:1px solid #262523;overflow:hidden}header .logo__text[data-v-29617efa]{white-space:pre;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}header .logo a[data-v-29617efa]{display:block;width:100%;height:100%;box-sizing:border-box}header .logo a span[data-v-29617efa]{position:relative;display:inline-block;font-size:4rem;font-family:"dugas-ultra";transform-origin:50% 50%}header .logo img[data-v-29617efa]{width:100%}header .selectArea[data-v-29617efa]{display:flex;align-items:center}header nav[data-v-29617efa]{height:100%}header .navigation[data-v-29617efa]{display:flex;align-items:center;height:100%;margin-right:30px;padding-right:30px;padding-top:2px;box-sizing:border-box;border-right:1px solid #262523}header .navigation li[data-v-29617efa]{margin-right:24px}header .navigation li[data-v-29617efa]:last-child{margin-right:0}header .navigation a[data-v-29617efa]{position:relative;display:inline-block;font-size:1.4rem;letter-spacing:.02em;padding-bottom:1px}header .navigation a.nuxt-link-exact-active[data-v-29617efa]:before{transform:scaleX(1)}header .navigation a[data-v-29617efa]:hover:before{transform:scaleX(1);transform-origin:left}header .navigation a[data-v-29617efa]:before{content:"";width:100%;height:1px;background-color:#262523;position:absolute;bottom:0;left:0;transform:scaleX(0);transform-origin:right;transition:transform .6s cubic-bezier(.19,1,.22,1)}header .switcher[data-v-29617efa]{width:52px;height:24px;border:1px solid #262523;border-radius:25px;box-sizing:border-box;transition:background-color .6s cubic-bezier(.19,1,.22,1)}header .switcher.light[data-v-29617efa]{background-color:#fff7f0}header .switcher.light .switcher__dot[data-v-29617efa]{background-color:#262523;transform:translate(22px,-50%)}header .switcher.dark[data-v-29617efa]{border:1px solid #fff7f0}header .switcher.dark .switcher__dot[data-v-29617efa]{background-color:#fff7f0}header .switcher.dark[data-v-29617efa]{background-color:#262523}header .switcher__inner[data-v-29617efa]{position:relative;width:100%;height:100%}header .switcher__dot[data-v-29617efa]{position:absolute;top:50%;transform:translateY(-50%);width:15px;height:15px;left:6px;border-radius:50%;z-index:2;transition:transform .6s cubic-bezier(.19,1,.22,1)}header .switcher .moon[data-v-29617efa]{position:absolute;display:block;fill:#fff7f0;width:12px;height:12px;top:5px;right:5px}header .switcher .sun[data-v-29617efa]{position:absolute;display:block;fill:#262523;width:18px;height:18px;top:2px;left:5px}.win .logo__text[data-v-29617efa]{margin-top:-4px}@media screen and (max-width:768px){header[data-v-29617efa]{height:50px;padding-right:3%}header .navigation[data-v-29617efa]{margin-right:12px;padding-right:12px}header .navigation li[data-v-29617efa]{margin-right:12px}header .navigation a[data-v-29617efa]{font-size:1.2rem}}',
        "",
      ]),
        (e.exports = o);
    },
    422: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return l;
        }),
        n.d(t, "getters", function () {
          return h;
        }),
        n.d(t, "mutations", function () {
          return m;
        });
      var o = n(303),
        r = n(304),
        l = function () {
          return {
            isColor: "light",
            webData: o,
            blenderData: r,
          };
        },
        h = {
          isColorState: function (e) {
            return e.isColor;
          },
        },
        m = {
          toggleColor: function (e, t) {
            e.isColor = t;
          },
        };
    },
    423: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return o;
        }),
        n.d(t, "getters", function () {
          return r;
        }),
        n.d(t, "mutations", function () {
          return l;
        });
      var o = function () {
          return {
            isLoaded: !1,
          };
        },
        r = {
          isLoad: function (e) {
            return e.isLoaded;
          },
        },
        l = {
          loaded: function (e) {
            e.isLoaded = !0;
          },
          init: function (e) {
            e.isLoaded = !1;
          },
        };
    },
    424: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return o;
        }),
        n.d(t, "getters", function () {
          return r;
        }),
        n.d(t, "mutations", function () {
          return l;
        });
      var o = function () {
          return {
            isOpeningEnd: !1,
            isOpeningComplete: !1,
          };
        },
        r = {
          state: function (e) {
            return e.isOpeningEnd;
          },
          complete: function (e) {
            return e.isOpeningComplete;
          },
        },
        l = {
          end: function (e) {
            e.isOpeningEnd = !0;
          },
          complete: function (e) {
            e.isOpeningComplete = !0;
          },
        };
    },
    425: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(220),
        r = {
          mounted: function () {
            o.a.load(this.$store, this.$EASE.transform2);
          },
        },
        l = (n(418), n(61)),
        component = Object(l.a)(
          r,
          function () {
            this._self._c;
            return this._m(0);
          },
          [
            function () {
              var e = this,
                t = e._self._c;
              return t(
                "div",
                {
                  staticClass: "opening",
                },
                [
                  t(
                    "div",
                    {
                      staticClass: "opening__inner",
                    },
                    [
                      t(
                        "div",
                        {
                          staticClass: "title",
                        },
                        [
                          t(
                            "span",
                            {
                              staticClass: "text text01",
                            },
                            [e._v("L")]
                          ),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticClass: "text text02",
                            },
                            [e._v("O")]
                          ),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticClass: "text text03",
                            },
                            [e._v("A")]
                          ),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticClass: "text text04",
                            },
                            [e._v("D")]
                          ),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticClass: "text text05",
                            },
                            [e._v("I")]
                          ),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticClass: "text text06",
                            },
                            [e._v("N")]
                          ),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticClass: "text text07",
                            },
                            [e._v("G")]
                          ),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticClass: "lama lama01",
                            },
                            [
                              t("img", {
                                attrs: {
                                  src: "/img/loading-lama01.webp",
                                  alt: "",
                                },
                              }),
                            ]
                          ),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticClass: "lama lama02",
                            },
                            [
                              t("img", {
                                attrs: {
                                  src: "/img/loading-lama02.webp",
                                  alt: "",
                                },
                              }),
                            ]
                          ),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticClass: "lama lama03",
                            },
                            [
                              t("img", {
                                attrs: {
                                  src: "/img/loading-lama03.webp",
                                  alt: "",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              );
            },
          ],
          !1,
          null,
          "93c0de22",
          null
        );
      t.default = component.exports;
    },
  },
  [[312, 6, 1, 7]],
]);
