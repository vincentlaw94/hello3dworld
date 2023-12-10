var ln,
  Zo,
  X0 = function () {
    return (
      ln ||
      (typeof window < "u" && (ln = window.gsap) && ln.registerPlugin && ln)
    );
  },
  Xc = function (e, n) {
    return !!(typeof e > "u" ? n : e && !~(e + "").indexOf("false"));
  },
  jw = function (e) {
    if (((ln = e || X0()), ln)) {
      Zo = ln.registerEase;
      var n = ln.parseEase(),
        r = function (o) {
          return function (a) {
            var l = 0.5 + a / 2;
            o.config = function (c) {
              return o(2 * (1 - c) * c * l + c * c);
            };
          };
        },
        i;
      for (i in n) n[i].config || r(n[i]);
      Zo("slow", Vr), Zo("expoScale", af), Zo("rough", vo);
      for (i in Zs) i !== "version" && ln.core.globals(i, Zs[i]);
    }
  },
  G0 = function (e, n, r) {
    e = Math.min(1, e || 0.7);
    var i = e < 1 ? (n || n === 0 ? n : 0.7) : 0,
      s = (1 - e) / 2,
      o = s + e,
      a = Xc(r);
    return function (l) {
      var c = l + (0.5 - l) * i;
      return l < s
        ? a
          ? 1 - (l = 1 - l / s) * l
          : c - (l = 1 - l / s) * l * l * l * c
        : l > o
        ? a
          ? l === 1
            ? 0
            : 1 - (l = (l - o) / s) * l
          : c + (l - c) * (l = (l - o) / s) * l * l * l
        : a
        ? 1
        : c;
    };
  },
  K0 = function (e, n, r) {
    var i = Math.log(n / e),
      s = n - e;
    return (
      r && (r = ln.parseEase(r)),
      function (o) {
        return (e * Math.exp(i * (r ? r(o) : o)) - e) / s;
      }
    );
  },
  $l = function (e, n, r) {
    (this.t = e),
      (this.v = n),
      r &&
        ((this.next = r),
        (r.prev = this),
        (this.c = r.v - n),
        (this.gap = r.t - e));
  },
  J0 = function (e) {
    typeof e != "object" &&
      (e = {
        points: +e || 20,
      });
    for (
      var n = e.taper || "none",
        r = [],
        i = 0,
        s = (+e.points || 20) | 0,
        o = s,
        a = Xc(e.randomize, !0),
        l = Xc(e.clamp),
        c = ln ? ln.parseEase(e.template) : 0,
        u = (+e.strength || 1) * 0.4,
        f,
        h,
        d,
        p,
        g,
        v,
        m;
      --o > -1;

    )
      (f = a ? Math.random() : (1 / s) * o),
        (h = c ? c(f) : f),
        n === "none"
          ? (d = u)
          : n === "out"
          ? ((p = 1 - f), (d = p * p * u))
          : n === "in"
          ? (d = f * f * u)
          : f < 0.5
          ? ((p = f * 2), (d = p * p * 0.5 * u))
          : ((p = (1 - f) * 2), (d = p * p * 0.5 * u)),
        a
          ? (h += Math.random() * d - d * 0.5)
          : o % 2
          ? (h += d * 0.5)
          : (h -= d * 0.5),
        l && (h > 1 ? (h = 1) : h < 0 && (h = 0)),
        (r[i++] = {
          x: f,
          y: h,
        });
    for (
      r.sort(function (_, x) {
        return _.x - x.x;
      }),
        v = new $l(1, 1, null),
        o = s;
      o--;

    )
      (g = r[o]), (v = new $l(g.x, g.y, v));
    return (
      (m = new $l(0, 0, v.t ? v : v.next)),
      function (_) {
        var x = m;
        if (_ > x.t) {
          for (; x.next && _ >= x.t; ) x = x.next;
          x = x.prev;
        } else for (; x.prev && _ <= x.t; ) x = x.prev;
        return (m = x), x.v + ((_ - x.t) / x.gap) * x.c;
      }
    );
  },
  Vr = G0(0.7);
Vr.ease = Vr;
Vr.config = G0;
var af = K0(1, 2);
af.config = K0;
var vo = J0();
vo.ease = vo;
vo.config = J0;
var Zs = {
  SlowMo: Vr,
  RoughEase: vo,
  ExpoScaleEase: af,
};
for (var cd in Zs) (Zs[cd].register = jw), (Zs[cd].version = "3.12.2");
X0() && ln.registerPlugin(Vr);
function ud(t) {
  let e = t[0],
    n = t[1],
    r = t[2];
  return Math.sqrt(e * e + n * n + r * r);
}
function Gc(t, e) {
  return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
}
function Vw(t, e, n, r) {
  return (t[0] = e), (t[1] = n), (t[2] = r), t;
}
function fd(t, e, n) {
  return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), (t[2] = e[2] + n[2]), t;
}
function hd(t, e, n) {
  return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), (t[2] = e[2] - n[2]), t;
}
function Ww(t, e, n) {
  return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), (t[2] = e[2] * n[2]), t;
}
function Qw(t, e, n) {
  return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), (t[2] = e[2] / n[2]), t;
}
function jl(t, e, n) {
  return (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t;
}
function qw(t, e) {
  let n = e[0] - t[0],
    r = e[1] - t[1],
    i = e[2] - t[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function Yw(t, e) {
  let n = e[0] - t[0],
    r = e[1] - t[1],
    i = e[2] - t[2];
  return n * n + r * r + i * i;
}
function dd(t) {
  let e = t[0],
    n = t[1],
    r = t[2];
  return e * e + n * n + r * r;
}
function Xw(t, e) {
  return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
}
function Gw(t, e) {
  return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
}
function Kc(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = n * n + r * r + i * i;
  return (
    s > 0 && (s = 1 / Math.sqrt(s)),
    (t[0] = e[0] * s),
    (t[1] = e[1] * s),
    (t[2] = e[2] * s),
    t
  );
}
function Z0(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function pd(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = n[0],
    a = n[1],
    l = n[2];
  return (
    (t[0] = i * l - s * a), (t[1] = s * o - r * l), (t[2] = r * a - i * o), t
  );
}
function Kw(t, e, n, r) {
  let i = e[0],
    s = e[1],
    o = e[2];
  return (
    (t[0] = i + r * (n[0] - i)),
    (t[1] = s + r * (n[1] - s)),
    (t[2] = o + r * (n[2] - o)),
    t
  );
}
function Jw(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = n[3] * r + n[7] * i + n[11] * s + n[15];
  return (
    (o = o || 1),
    (t[0] = (n[0] * r + n[4] * i + n[8] * s + n[12]) / o),
    (t[1] = (n[1] * r + n[5] * i + n[9] * s + n[13]) / o),
    (t[2] = (n[2] * r + n[6] * i + n[10] * s + n[14]) / o),
    t
  );
}
function Zw(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = n[3] * r + n[7] * i + n[11] * s + n[15];
  return (
    (o = o || 1),
    (t[0] = (n[0] * r + n[4] * i + n[8] * s) / o),
    (t[1] = (n[1] * r + n[5] * i + n[9] * s) / o),
    (t[2] = (n[2] * r + n[6] * i + n[10] * s) / o),
    t
  );
}
function eb(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = n[0],
    a = n[1],
    l = n[2],
    c = n[3],
    u = a * s - l * i,
    f = l * r - o * s,
    h = o * i - a * r,
    d = a * h - l * f,
    p = l * u - o * h,
    g = o * f - a * u,
    v = c * 2;
  return (
    (u *= v),
    (f *= v),
    (h *= v),
    (d *= 2),
    (p *= 2),
    (g *= 2),
    (t[0] = r + u + d),
    (t[1] = i + f + p),
    (t[2] = s + h + g),
    t
  );
}
const tb = (function () {
  const t = [0, 0, 0],
    e = [0, 0, 0];
  return function (n, r) {
    Gc(t, n), Gc(e, r), Kc(t, t), Kc(e, e);
    let i = Z0(t, e);
    return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i);
  };
})();
function nb(t, e) {
  return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
}
class nt extends Array {
  constructor(e = 0, n = e, r = e) {
    return super(e, n, r), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(e) {
    this[0] = e;
  }
  set y(e) {
    this[1] = e;
  }
  set z(e) {
    this[2] = e;
  }
  set(e, n = e, r = e) {
    return e.length ? this.copy(e) : (Vw(this, e, n, r), this);
  }
  copy(e) {
    return Gc(this, e), this;
  }
  add(e, n) {
    return n ? fd(this, e, n) : fd(this, this, e), this;
  }
  sub(e, n) {
    return n ? hd(this, e, n) : hd(this, this, e), this;
  }
  multiply(e) {
    return e.length ? Ww(this, this, e) : jl(this, this, e), this;
  }
  divide(e) {
    return e.length ? Qw(this, this, e) : jl(this, this, 1 / e), this;
  }
  inverse(e = this) {
    return Gw(this, e), this;
  }
  len() {
    return ud(this);
  }
  distance(e) {
    return e ? qw(this, e) : ud(this);
  }
  squaredLen() {
    return dd(this);
  }
  squaredDistance(e) {
    return e ? Yw(this, e) : dd(this);
  }
  negate(e = this) {
    return Xw(this, e), this;
  }
  cross(e, n) {
    return n ? pd(this, e, n) : pd(this, this, e), this;
  }
  scale(e) {
    return jl(this, this, e), this;
  }
  normalize() {
    return Kc(this, this), this;
  }
  dot(e) {
    return Z0(this, e);
  }
  equals(e) {
    return nb(this, e);
  }
  applyMatrix4(e) {
    return Jw(this, this, e), this;
  }
  scaleRotateMatrix4(e) {
    return Zw(this, this, e), this;
  }
  applyQuaternion(e) {
    return eb(this, this, e), this;
  }
  angle(e) {
    return tb(this, e);
  }
  lerp(e, n) {
    return Kw(this, this, e, n), this;
  }
  clone() {
    return new nt(this[0], this[1], this[2]);
  }
  fromArray(e, n = 0) {
    return (this[0] = e[n]), (this[1] = e[n + 1]), (this[2] = e[n + 2]), this;
  }
  toArray(e = [], n = 0) {
    return (e[n] = this[0]), (e[n + 1] = this[1]), (e[n + 2] = this[2]), e;
  }
  transformDirection(e) {
    const n = this[0],
      r = this[1],
      i = this[2];
    return (
      (this[0] = e[0] * n + e[4] * r + e[8] * i),
      (this[1] = e[1] * n + e[5] * r + e[9] * i),
      (this[2] = e[2] * n + e[6] * r + e[10] * i),
      this.normalize()
    );
  }
}
const gd = new nt();
let rb = 1,
  ib = 1,
  md = !1;
class em {
  constructor(e, n = {}) {
    e.canvas || console.error("gl not passed as first argument to Geometry"),
      (this.gl = e),
      (this.attributes = n),
      (this.id = rb++),
      (this.VAOs = {}),
      (this.drawRange = {
        start: 0,
        count: 0,
      }),
      (this.instancedCount = 0),
      this.gl.renderer.bindVertexArray(null),
      (this.gl.renderer.currentGeometry = null),
      (this.glState = this.gl.renderer.state);
    for (let r in n) this.addAttribute(r, n[r]);
  }
  addAttribute(e, n) {
    if (
      ((this.attributes[e] = n),
      (n.id = ib++),
      (n.size = n.size || 1),
      (n.type =
        n.type ||
        (n.data.constructor === Float32Array
          ? this.gl.FLOAT
          : n.data.constructor === Uint16Array
          ? this.gl.UNSIGNED_SHORT
          : this.gl.UNSIGNED_INT)),
      (n.target =
        e === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
      (n.normalized = n.normalized || !1),
      (n.stride = n.stride || 0),
      (n.offset = n.offset || 0),
      (n.count =
        n.count ||
        (n.stride ? n.data.byteLength / n.stride : n.data.length / n.size)),
      (n.divisor = n.instanced || 0),
      (n.needsUpdate = !1),
      n.buffer ||
        ((n.buffer = this.gl.createBuffer()), this.updateAttribute(n)),
      n.divisor)
    ) {
      if (
        ((this.isInstanced = !0),
        this.instancedCount && this.instancedCount !== n.count * n.divisor)
      )
        return (
          console.warn(
            "geometry has multiple instanced buffers of different length"
          ),
          (this.instancedCount = Math.min(
            this.instancedCount,
            n.count * n.divisor
          ))
        );
      this.instancedCount = n.count * n.divisor;
    } else
      e === "index"
        ? (this.drawRange.count = n.count)
        : this.attributes.index ||
          (this.drawRange.count = Math.max(this.drawRange.count, n.count));
  }
  updateAttribute(e) {
    this.glState.boundBuffer !== e.buffer &&
      (this.gl.bindBuffer(e.target, e.buffer),
      (this.glState.boundBuffer = e.buffer)),
      this.gl.bufferData(e.target, e.data, this.gl.STATIC_DRAW),
      (e.needsUpdate = !1);
  }
  setIndex(e) {
    this.addAttribute("index", e);
  }
  setDrawRange(e, n) {
    (this.drawRange.start = e), (this.drawRange.count = n);
  }
  setInstancedCount(e) {
    this.instancedCount = e;
  }
  createVAO(e) {
    (this.VAOs[e.attributeOrder] = this.gl.renderer.createVertexArray()),
      this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
      this.bindAttributes(e);
  }
  bindAttributes(e) {
    e.attributeLocations.forEach((n, { name: r, type: i }) => {
      if (!this.attributes[r]) {
        console.warn(`active attribute ${r} not being supplied`);
        return;
      }
      const s = this.attributes[r];
      this.gl.bindBuffer(s.target, s.buffer),
        (this.glState.boundBuffer = s.buffer);
      let o = 1;
      i === 35674 && (o = 2), i === 35675 && (o = 3), i === 35676 && (o = 4);
      const a = s.size / o,
        l = o === 1 ? 0 : o * o * o,
        c = o === 1 ? 0 : o * o;
      for (let u = 0; u < o; u++)
        this.gl.vertexAttribPointer(
          n + u,
          a,
          s.type,
          s.normalized,
          s.stride + l,
          s.offset + u * c
        ),
          this.gl.enableVertexAttribArray(n + u),
          this.gl.renderer.vertexAttribDivisor(n + u, s.divisor);
    }),
      this.attributes.index &&
        this.gl.bindBuffer(
          this.gl.ELEMENT_ARRAY_BUFFER,
          this.attributes.index.buffer
        );
  }
  draw({ program: e, mode: n = this.gl.TRIANGLES }) {
    this.gl.renderer.currentGeometry !== `${this.id}_ ${e.attributeOrder}` &&
      (this.VAOs[e.attributeOrder] || this.createVAO(e),
      this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
      (this.gl.renderer.currentGeometry = `${this.id}_ ${e.attributeOrder}`)),
      e.attributeLocations.forEach((r, { name: i }) => {
        const s = this.attributes[i];
        s.needsUpdate && this.updateAttribute(s);
      }),
      this.isInstanced
        ? this.attributes.index
          ? this.gl.renderer.drawElementsInstanced(
              n,
              this.drawRange.count,
              this.attributes.index.type,
              this.attributes.index.offset + this.drawRange.start * 2,
              this.instancedCount
            )
          : this.gl.renderer.drawArraysInstanced(
              n,
              this.drawRange.start,
              this.drawRange.count,
              this.instancedCount
            )
        : this.attributes.index
        ? this.gl.drawElements(
            n,
            this.drawRange.count,
            this.attributes.index.type,
            this.attributes.index.offset + this.drawRange.start * 2
          )
        : this.gl.drawArrays(n, this.drawRange.start, this.drawRange.count);
  }
  getPositionArray() {
    const e = this.attributes.position;
    if (e.data) return e.data;
    if (!md)
      return (
        console.warn("No position buffer data found to compute bounds"),
        (md = !0)
      );
  }
  computeBoundingBox(e) {
    e || (e = this.getPositionArray()),
      this.bounds ||
        (this.bounds = {
          min: new nt(),
          max: new nt(),
          center: new nt(),
          scale: new nt(),
          radius: 1 / 0,
        });
    const n = this.bounds.min,
      r = this.bounds.max,
      i = this.bounds.center,
      s = this.bounds.scale;
    n.set(1 / 0), r.set(-1 / 0);
    for (let o = 0, a = e.length; o < a; o += 3) {
      const l = e[o],
        c = e[o + 1],
        u = e[o + 2];
      (n.x = Math.min(l, n.x)),
        (n.y = Math.min(c, n.y)),
        (n.z = Math.min(u, n.z)),
        (r.x = Math.max(l, r.x)),
        (r.y = Math.max(c, r.y)),
        (r.z = Math.max(u, r.z));
    }
    s.sub(r, n), i.add(n, r).divide(2);
  }
  computeBoundingSphere(e) {
    e || (e = this.getPositionArray()),
      this.bounds || this.computeBoundingBox(e);
    let n = 0;
    for (let r = 0, i = e.length; r < i; r += 3)
      gd.fromArray(e, r),
        (n = Math.max(n, this.bounds.center.squaredDistance(gd)));
    this.bounds.radius = Math.sqrt(n);
  }
  remove() {
    this.vao && this.gl.renderer.deleteVertexArray(this.vao);
    for (let e in this.attributes)
      this.gl.deleteBuffer(this.attributes[e].buffer),
        delete this.attributes[e];
  }
}
let sb = 1;
const _d = {};
class $a {
  constructor(
    e,
    {
      vertex: n,
      fragment: r,
      uniforms: i = {},
      transparent: s = !1,
      cullFace: o = e.BACK,
      frontFace: a = e.CCW,
      depthTest: l = !0,
      depthWrite: c = !0,
      depthFunc: u = e.LESS,
    } = {}
  ) {
    e.canvas || console.error("gl not passed as fist argument to Program"),
      (this.gl = e),
      (this.uniforms = i),
      (this.id = sb++),
      n || console.warn("vertex shader not supplied"),
      r || console.warn("fragment shader not supplied"),
      (this.transparent = s),
      (this.cullFace = o),
      (this.frontFace = a),
      (this.depthTest = l),
      (this.depthWrite = c),
      (this.depthFunc = u),
      (this.blendFunc = {}),
      (this.blendEquation = {}),
      this.transparent &&
        !this.blendFunc.src &&
        (this.gl.renderer.premultipliedAlpha
          ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
          : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
    const f = e.createShader(e.VERTEX_SHADER);
    e.shaderSource(f, n),
      e.compileShader(f),
      e.getShaderInfoLog(f) !== "" &&
        console.warn(`${e.getShaderInfoLog(f)}
Vertex Shader
${yd(n)}`);
    const h = e.createShader(e.FRAGMENT_SHADER);
    if (
      (e.shaderSource(h, r),
      e.compileShader(h),
      e.getShaderInfoLog(h) !== "" &&
        console.warn(`${e.getShaderInfoLog(h)}
Fragment Shader
${yd(r)}`),
      (this.program = e.createProgram()),
      e.attachShader(this.program, f),
      e.attachShader(this.program, h),
      e.linkProgram(this.program),
      !e.getProgramParameter(this.program, e.LINK_STATUS))
    )
      return console.warn(e.getProgramInfoLog(this.program));
    e.deleteShader(f), e.deleteShader(h), (this.uniformLocations = new Map());
    let d = e.getProgramParameter(this.program, e.ACTIVE_UNIFORMS);
    for (let v = 0; v < d; v++) {
      let m = e.getActiveUniform(this.program, v);
      this.uniformLocations.set(m, e.getUniformLocation(this.program, m.name));
      const _ = m.name.match(/(\w+)/g);
      (m.uniformName = _[0]),
        _.length === 3
          ? ((m.isStructArray = !0),
            (m.structIndex = Number(_[1])),
            (m.structProperty = _[2]))
          : _.length === 2 &&
            isNaN(Number(_[1])) &&
            ((m.isStruct = !0), (m.structProperty = _[1]));
    }
    this.attributeLocations = new Map();
    const p = [],
      g = e.getProgramParameter(this.program, e.ACTIVE_ATTRIBUTES);
    for (let v = 0; v < g; v++) {
      const m = e.getActiveAttrib(this.program, v),
        _ = e.getAttribLocation(this.program, m.name);
      (p[_] = m.name), this.attributeLocations.set(m, _);
    }
    this.attributeOrder = p.join("");
  }
  setBlendFunc(e, n, r, i) {
    (this.blendFunc.src = e),
      (this.blendFunc.dst = n),
      (this.blendFunc.srcAlpha = r),
      (this.blendFunc.dstAlpha = i),
      e && (this.transparent = !0);
  }
  setBlendEquation(e, n) {
    (this.blendEquation.modeRGB = e), (this.blendEquation.modeAlpha = n);
  }
  applyState() {
    this.depthTest
      ? this.gl.renderer.enable(this.gl.DEPTH_TEST)
      : this.gl.renderer.disable(this.gl.DEPTH_TEST),
      this.cullFace
        ? this.gl.renderer.enable(this.gl.CULL_FACE)
        : this.gl.renderer.disable(this.gl.CULL_FACE),
      this.blendFunc.src
        ? this.gl.renderer.enable(this.gl.BLEND)
        : this.gl.renderer.disable(this.gl.BLEND),
      this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
      this.gl.renderer.setFrontFace(this.frontFace),
      this.gl.renderer.setDepthMask(this.depthWrite),
      this.gl.renderer.setDepthFunc(this.depthFunc),
      this.blendFunc.src &&
        this.gl.renderer.setBlendFunc(
          this.blendFunc.src,
          this.blendFunc.dst,
          this.blendFunc.srcAlpha,
          this.blendFunc.dstAlpha
        ),
      this.gl.renderer.setBlendEquation(
        this.blendEquation.modeRGB,
        this.blendEquation.modeAlpha
      );
  }
  use({ flipFaces: e = !1 } = {}) {
    let n = -1;
    this.gl.renderer.currentProgram === this.id ||
      (this.gl.useProgram(this.program),
      (this.gl.renderer.currentProgram = this.id)),
      this.uniformLocations.forEach((i, s) => {
        let o = s.uniformName,
          a = this.uniforms[o];
        if (
          (s.isStruct &&
            ((a = a[s.structProperty]), (o += `.${s.structProperty}`)),
          s.isStructArray &&
            ((a = a[s.structIndex][s.structProperty]),
            (o += `[${s.structIndex}].${s.structProperty}`)),
          !a)
        )
          return vd(`Active uniform ${o} has not been supplied`);
        if (a && a.value === void 0)
          return vd(`${o} uniform is missing a value parameter`);
        if (a.value.texture)
          return (n = n + 1), a.value.update(n), Vl(this.gl, s.type, i, n);
        if (a.value.length && a.value[0].texture) {
          const l = [];
          return (
            a.value.forEach((c) => {
              (n = n + 1), c.update(n), l.push(n);
            }),
            Vl(this.gl, s.type, i, l)
          );
        }
        Vl(this.gl, s.type, i, a.value);
      }),
      this.applyState(),
      e &&
        this.gl.renderer.setFrontFace(
          this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW
        );
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function Vl(t, e, n, r) {
  r = r.length ? ob(r) : r;
  const i = t.renderer.state.uniformLocations.get(n);
  if (r.length)
    if (i === void 0 || i.length !== r.length)
      t.renderer.state.uniformLocations.set(n, r.slice(0));
    else {
      if (ab(i, r)) return;
      i.set ? i.set(r) : lb(i, r), t.renderer.state.uniformLocations.set(n, i);
    }
  else {
    if (i === r) return;
    t.renderer.state.uniformLocations.set(n, r);
  }
  switch (e) {
    case 5126:
      return r.length ? t.uniform1fv(n, r) : t.uniform1f(n, r);
    case 35664:
      return t.uniform2fv(n, r);
    case 35665:
      return t.uniform3fv(n, r);
    case 35666:
      return t.uniform4fv(n, r);
    case 35670:
    case 5124:
    case 35678:
    case 35680:
      return r.length ? t.uniform1iv(n, r) : t.uniform1i(n, r);
    case 35671:
    case 35667:
      return t.uniform2iv(n, r);
    case 35672:
    case 35668:
      return t.uniform3iv(n, r);
    case 35673:
    case 35669:
      return t.uniform4iv(n, r);
    case 35674:
      return t.uniformMatrix2fv(n, !1, r);
    case 35675:
      return t.uniformMatrix3fv(n, !1, r);
    case 35676:
      return t.uniformMatrix4fv(n, !1, r);
  }
}
function yd(t) {
  let e = t.split(`
`);
  for (let n = 0; n < e.length; n++) e[n] = n + 1 + ": " + e[n];
  return e.join(`
`);
}
function ob(t) {
  const e = t.length,
    n = t[0].length;
  if (n === void 0) return t;
  const r = e * n;
  let i = _d[r];
  i || (_d[r] = i = new Float32Array(r));
  for (let s = 0; s < e; s++) i.set(t[s], s * n);
  return i;
}
function ab(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0, r = t.length; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function lb(t, e) {
  for (let n = 0, r = t.length; n < r; n++) t[n] = e[n];
}
let Wl = 0;
function vd(t) {
  Wl > 100 ||
    (console.warn(t),
    Wl++,
    Wl > 100 &&
      console.warn("More than 100 program warnings - stopping logs."));
}
const Ql = new nt();
let cb = 1;
class ub {
  constructor({
    canvas: e = document.createElement("canvas"),
    width: n = 300,
    height: r = 150,
    dpr: i = 1,
    alpha: s = !1,
    depth: o = !0,
    stencil: a = !1,
    antialias: l = !1,
    premultipliedAlpha: c = !1,
    preserveDrawingBuffer: u = !1,
    powerPreference: f = "default",
    autoClear: h = !0,
    webgl: d = 2,
  } = {}) {
    const p = {
      alpha: s,
      depth: o,
      stencil: a,
      antialias: l,
      premultipliedAlpha: c,
      preserveDrawingBuffer: u,
      powerPreference: f,
    };
    (this.dpr = i),
      (this.alpha = s),
      (this.color = !0),
      (this.depth = o),
      (this.stencil = a),
      (this.premultipliedAlpha = c),
      (this.autoClear = h),
      (this.id = cb++),
      d === 2 && (this.gl = e.getContext("webgl2", p)),
      (this.isWebgl2 = !!this.gl),
      this.gl ||
        (this.gl =
          e.getContext("webgl", p) || e.getContext("experimental-webgl", p)),
      this.gl || console.error("unable to create webgl context"),
      (this.gl.renderer = this),
      this.setSize(n, r),
      (this.state = {}),
      (this.state.blendFunc = {
        src: this.gl.ONE,
        dst: this.gl.ZERO,
      }),
      (this.state.blendEquation = {
        modeRGB: this.gl.FUNC_ADD,
      }),
      (this.state.cullFace = null),
      (this.state.frontFace = this.gl.CCW),
      (this.state.depthMask = !0),
      (this.state.depthFunc = this.gl.LESS),
      (this.state.premultiplyAlpha = !1),
      (this.state.flipY = !1),
      (this.state.unpackAlignment = 4),
      (this.state.framebuffer = null),
      (this.state.viewport = {
        width: null,
        height: null,
      }),
      (this.state.textureUnits = []),
      (this.state.activeTextureUnit = 0),
      (this.state.boundBuffer = null),
      (this.state.uniformLocations = new Map()),
      (this.extensions = {}),
      this.isWebgl2
        ? (this.getExtension("EXT_color_buffer_float"),
          this.getExtension("OES_texture_float_linear"))
        : (this.getExtension("OES_texture_float"),
          this.getExtension("OES_texture_float_linear"),
          this.getExtension("OES_texture_half_float"),
          this.getExtension("OES_texture_half_float_linear"),
          this.getExtension("OES_element_index_uint"),
          this.getExtension("OES_standard_derivatives"),
          this.getExtension("EXT_sRGB"),
          this.getExtension("WEBGL_depth_texture"),
          this.getExtension("WEBGL_draw_buffers")),
      (this.vertexAttribDivisor = this.getExtension(
        "ANGLE_instanced_arrays",
        "vertexAttribDivisor",
        "vertexAttribDivisorANGLE"
      )),
      (this.drawArraysInstanced = this.getExtension(
        "ANGLE_instanced_arrays",
        "drawArraysInstanced",
        "drawArraysInstancedANGLE"
      )),
      (this.drawElementsInstanced = this.getExtension(
        "ANGLE_instanced_arrays",
        "drawElementsInstanced",
        "drawElementsInstancedANGLE"
      )),
      (this.createVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "createVertexArray",
        "createVertexArrayOES"
      )),
      (this.bindVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "bindVertexArray",
        "bindVertexArrayOES"
      )),
      (this.deleteVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "deleteVertexArray",
        "deleteVertexArrayOES"
      )),
      (this.drawBuffers = this.getExtension(
        "WEBGL_draw_buffers",
        "drawBuffers",
        "drawBuffersWEBGL"
      )),
      (this.parameters = {}),
      (this.parameters.maxTextureUnits = this.gl.getParameter(
        this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS
      )),
      (this.parameters.maxAnisotropy = this.getExtension(
        "EXT_texture_filter_anisotropic"
      )
        ? this.gl.getParameter(
            this.getExtension("EXT_texture_filter_anisotropic")
              .MAX_TEXTURE_MAX_ANISOTROPY_EXT
          )
        : 0);
  }
  setSize(e, n) {
    (this.width = e),
      (this.height = n),
      (this.gl.canvas.width = e * this.dpr),
      (this.gl.canvas.height = n * this.dpr),
      Object.assign(this.gl.canvas.style, {
        width: e + "px",
        height: n + "px",
      });
  }
  setViewport(e, n) {
    (this.state.viewport.width === e && this.state.viewport.height === n) ||
      ((this.state.viewport.width = e),
      (this.state.viewport.height = n),
      this.gl.viewport(0, 0, e, n));
  }
  enable(e) {
    this.state[e] !== !0 && (this.gl.enable(e), (this.state[e] = !0));
  }
  disable(e) {
    this.state[e] !== !1 && (this.gl.disable(e), (this.state[e] = !1));
  }
  setBlendFunc(e, n, r, i) {
    (this.state.blendFunc.src === e &&
      this.state.blendFunc.dst === n &&
      this.state.blendFunc.srcAlpha === r &&
      this.state.blendFunc.dstAlpha === i) ||
      ((this.state.blendFunc.src = e),
      (this.state.blendFunc.dst = n),
      (this.state.blendFunc.srcAlpha = r),
      (this.state.blendFunc.dstAlpha = i),
      r !== void 0
        ? this.gl.blendFuncSeparate(e, n, r, i)
        : this.gl.blendFunc(e, n));
  }
  setBlendEquation(e, n) {
    (e = e || this.gl.FUNC_ADD),
      !(
        this.state.blendEquation.modeRGB === e &&
        this.state.blendEquation.modeAlpha === n
      ) &&
        ((this.state.blendEquation.modeRGB = e),
        (this.state.blendEquation.modeAlpha = n),
        n !== void 0
          ? this.gl.blendEquationSeparate(e, n)
          : this.gl.blendEquation(e));
  }
  setCullFace(e) {
    this.state.cullFace !== e &&
      ((this.state.cullFace = e), this.gl.cullFace(e));
  }
  setFrontFace(e) {
    this.state.frontFace !== e &&
      ((this.state.frontFace = e), this.gl.frontFace(e));
  }
  setDepthMask(e) {
    this.state.depthMask !== e &&
      ((this.state.depthMask = e), this.gl.depthMask(e));
  }
  setDepthFunc(e) {
    this.state.depthFunc !== e &&
      ((this.state.depthFunc = e), this.gl.depthFunc(e));
  }
  activeTexture(e) {
    this.state.activeTextureUnit !== e &&
      ((this.state.activeTextureUnit = e),
      this.gl.activeTexture(this.gl.TEXTURE0 + e));
  }
  bindFramebuffer({ target: e = this.gl.FRAMEBUFFER, buffer: n = null } = {}) {
    this.state.framebuffer !== n &&
      ((this.state.framebuffer = n), this.gl.bindFramebuffer(e, n));
  }
  getExtension(e, n, r) {
    return n && this.gl[n]
      ? this.gl[n].bind(this.gl)
      : (this.extensions[e] || (this.extensions[e] = this.gl.getExtension(e)),
        n
          ? this.extensions[e]
            ? this.extensions[e][r].bind(this.extensions[e])
            : null
          : this.extensions[e]);
  }
  sortOpaque(e, n) {
    return e.renderOrder !== n.renderOrder
      ? e.renderOrder - n.renderOrder
      : e.program.id !== n.program.id
      ? e.program.id - n.program.id
      : e.zDepth !== n.zDepth
      ? e.zDepth - n.zDepth
      : n.id - e.id;
  }
  sortTransparent(e, n) {
    return e.renderOrder !== n.renderOrder
      ? e.renderOrder - n.renderOrder
      : e.zDepth !== n.zDepth
      ? n.zDepth - e.zDepth
      : n.id - e.id;
  }
  sortUI(e, n) {
    return e.renderOrder !== n.renderOrder
      ? e.renderOrder - n.renderOrder
      : e.program.id !== n.program.id
      ? e.program.id - n.program.id
      : n.id - e.id;
  }
  getRenderList({ scene: e, camera: n, frustumCull: r, sort: i }) {
    let s = [];
    if (
      (n && r && n.updateFrustum(),
      e.traverse((o) => {
        if (!o.visible) return !0;
        o.draw &&
          ((r && o.frustumCulled && n && !n.frustumIntersectsMesh(o)) ||
            s.push(o));
      }),
      i)
    ) {
      const o = [],
        a = [],
        l = [];
      s.forEach((c) => {
        c.program.transparent
          ? c.program.depthTest
            ? a.push(c)
            : l.push(c)
          : o.push(c),
          (c.zDepth = 0),
          !(c.renderOrder !== 0 || !c.program.depthTest || !n) &&
            (c.worldMatrix.getTranslation(Ql),
            Ql.applyMatrix4(n.projectionViewMatrix),
            (c.zDepth = Ql.z));
      }),
        o.sort(this.sortOpaque),
        a.sort(this.sortTransparent),
        l.sort(this.sortUI),
        (s = o.concat(a, l));
    }
    return s;
  }
  render({
    scene: e,
    camera: n,
    target: r = null,
    update: i = !0,
    sort: s = !0,
    frustumCull: o = !0,
    clear: a,
  }) {
    r === null
      ? (this.bindFramebuffer(),
        this.setViewport(this.width * this.dpr, this.height * this.dpr))
      : (this.bindFramebuffer(r), this.setViewport(r.width, r.height)),
      (a || (this.autoClear && a !== !1)) &&
        (this.depth &&
          (!r || r.depth) &&
          (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
        this.gl.clear(
          (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
            (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
            (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
        )),
      i && e.updateMatrixWorld(),
      n && n.updateMatrixWorld(),
      this.getRenderList({
        scene: e,
        camera: n,
        frustumCull: o,
        sort: s,
      }).forEach((c) => {
        c.draw({
          camera: n,
        });
      });
  }
}
function fb(t, e) {
  return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
}
function hb(t, e, n, r, i) {
  return (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i), t;
}
function db(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = n * n + r * r + i * i + s * s;
  return (
    o > 0 && (o = 1 / Math.sqrt(o)),
    (t[0] = n * o),
    (t[1] = r * o),
    (t[2] = i * o),
    (t[3] = s * o),
    t
  );
}
function pb(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
}
function gb(t) {
  return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
}
function mb(t, e, n) {
  n = n * 0.5;
  let r = Math.sin(n);
  return (
    (t[0] = r * e[0]),
    (t[1] = r * e[1]),
    (t[2] = r * e[2]),
    (t[3] = Math.cos(n)),
    t
  );
}
function xd(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = n[0],
    l = n[1],
    c = n[2],
    u = n[3];
  return (
    (t[0] = r * u + o * a + i * c - s * l),
    (t[1] = i * u + o * l + s * a - r * c),
    (t[2] = s * u + o * c + r * l - i * a),
    (t[3] = o * u - r * a - i * l - s * c),
    t
  );
}
function _b(t, e, n) {
  n *= 0.5;
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = Math.sin(n),
    l = Math.cos(n);
  return (
    (t[0] = r * l + o * a),
    (t[1] = i * l + s * a),
    (t[2] = s * l - i * a),
    (t[3] = o * l - r * a),
    t
  );
}
function yb(t, e, n) {
  n *= 0.5;
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = Math.sin(n),
    l = Math.cos(n);
  return (
    (t[0] = r * l - s * a),
    (t[1] = i * l + o * a),
    (t[2] = s * l + r * a),
    (t[3] = o * l - i * a),
    t
  );
}
function vb(t, e, n) {
  n *= 0.5;
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = Math.sin(n),
    l = Math.cos(n);
  return (
    (t[0] = r * l + i * a),
    (t[1] = i * l - r * a),
    (t[2] = s * l + o * a),
    (t[3] = o * l - s * a),
    t
  );
}
function xb(t, e, n, r) {
  let i = e[0],
    s = e[1],
    o = e[2],
    a = e[3],
    l = n[0],
    c = n[1],
    u = n[2],
    f = n[3],
    h,
    d,
    p,
    g,
    v;
  return (
    (d = i * l + s * c + o * u + a * f),
    d < 0 && ((d = -d), (l = -l), (c = -c), (u = -u), (f = -f)),
    1 - d > 1e-6
      ? ((h = Math.acos(d)),
        (p = Math.sin(h)),
        (g = Math.sin((1 - r) * h) / p),
        (v = Math.sin(r * h) / p))
      : ((g = 1 - r), (v = r)),
    (t[0] = g * i + v * l),
    (t[1] = g * s + v * c),
    (t[2] = g * o + v * u),
    (t[3] = g * a + v * f),
    t
  );
}
function Ab(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = n * n + r * r + i * i + s * s,
    a = o ? 1 / o : 0;
  return (t[0] = -n * a), (t[1] = -r * a), (t[2] = -i * a), (t[3] = s * a), t;
}
function wb(t, e) {
  return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = e[3]), t;
}
function bb(t, e) {
  let n = e[0] + e[4] + e[8],
    r;
  if (n > 0)
    (r = Math.sqrt(n + 1)),
      (t[3] = 0.5 * r),
      (r = 0.5 / r),
      (t[0] = (e[5] - e[7]) * r),
      (t[1] = (e[6] - e[2]) * r),
      (t[2] = (e[1] - e[3]) * r);
  else {
    let i = 0;
    e[4] > e[0] && (i = 1), e[8] > e[i * 3 + i] && (i = 2);
    let s = (i + 1) % 3,
      o = (i + 2) % 3;
    (r = Math.sqrt(e[i * 3 + i] - e[s * 3 + s] - e[o * 3 + o] + 1)),
      (t[i] = 0.5 * r),
      (r = 0.5 / r),
      (t[3] = (e[s * 3 + o] - e[o * 3 + s]) * r),
      (t[s] = (e[s * 3 + i] + e[i * 3 + s]) * r),
      (t[o] = (e[o * 3 + i] + e[i * 3 + o]) * r);
  }
  return t;
}
function Eb(t, e, n = "YXZ") {
  let r = Math.sin(e[0] * 0.5),
    i = Math.cos(e[0] * 0.5),
    s = Math.sin(e[1] * 0.5),
    o = Math.cos(e[1] * 0.5),
    a = Math.sin(e[2] * 0.5),
    l = Math.cos(e[2] * 0.5);
  return (
    n === "XYZ"
      ? ((t[0] = r * o * l + i * s * a),
        (t[1] = i * s * l - r * o * a),
        (t[2] = i * o * a + r * s * l),
        (t[3] = i * o * l - r * s * a))
      : n === "YXZ"
      ? ((t[0] = r * o * l + i * s * a),
        (t[1] = i * s * l - r * o * a),
        (t[2] = i * o * a - r * s * l),
        (t[3] = i * o * l + r * s * a))
      : n === "ZXY"
      ? ((t[0] = r * o * l - i * s * a),
        (t[1] = i * s * l + r * o * a),
        (t[2] = i * o * a + r * s * l),
        (t[3] = i * o * l - r * s * a))
      : n === "ZYX"
      ? ((t[0] = r * o * l - i * s * a),
        (t[1] = i * s * l + r * o * a),
        (t[2] = i * o * a - r * s * l),
        (t[3] = i * o * l + r * s * a))
      : n === "YZX"
      ? ((t[0] = r * o * l + i * s * a),
        (t[1] = i * s * l + r * o * a),
        (t[2] = i * o * a - r * s * l),
        (t[3] = i * o * l - r * s * a))
      : n === "XZY" &&
        ((t[0] = r * o * l - i * s * a),
        (t[1] = i * s * l - r * o * a),
        (t[2] = i * o * a + r * s * l),
        (t[3] = i * o * l + r * s * a)),
    t
  );
}
const Tb = fb,
  Pb = hb,
  Sb = pb,
  Cb = db;
class Rb extends Array {
  constructor(e = 0, n = 0, r = 0, i = 1) {
    return super(e, n, r, i), (this.onChange = () => {}), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(e) {
    (this[0] = e), this.onChange();
  }
  set y(e) {
    (this[1] = e), this.onChange();
  }
  set z(e) {
    (this[2] = e), this.onChange();
  }
  set w(e) {
    (this[3] = e), this.onChange();
  }
  identity() {
    return gb(this), this.onChange(), this;
  }
  set(e, n, r, i) {
    return e.length
      ? this.copy(e)
      : (Pb(this, e, n, r, i), this.onChange(), this);
  }
  rotateX(e) {
    return _b(this, this, e), this.onChange(), this;
  }
  rotateY(e) {
    return yb(this, this, e), this.onChange(), this;
  }
  rotateZ(e) {
    return vb(this, this, e), this.onChange(), this;
  }
  inverse(e = this) {
    return Ab(this, e), this.onChange(), this;
  }
  conjugate(e = this) {
    return wb(this, e), this.onChange(), this;
  }
  copy(e) {
    return Tb(this, e), this.onChange(), this;
  }
  normalize(e = this) {
    return Cb(this, e), this.onChange(), this;
  }
  multiply(e, n) {
    return n ? xd(this, e, n) : xd(this, this, e), this.onChange(), this;
  }
  dot(e) {
    return Sb(this, e);
  }
  fromMatrix3(e) {
    return bb(this, e), this.onChange(), this;
  }
  fromEuler(e) {
    return Eb(this, e, e.order), this;
  }
  fromAxisAngle(e, n) {
    return mb(this, e, n), this;
  }
  slerp(e, n) {
    return xb(this, this, e, n), this;
  }
  fromArray(e, n = 0) {
    return (
      (this[0] = e[n]),
      (this[1] = e[n + 1]),
      (this[2] = e[n + 2]),
      (this[3] = e[n + 3]),
      this
    );
  }
  toArray(e = [], n = 0) {
    return (
      (e[n] = this[0]),
      (e[n + 1] = this[1]),
      (e[n + 2] = this[2]),
      (e[n + 3] = this[3]),
      e
    );
  }
}
const Mb = 1e-6;
function Ob(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4]),
    (t[5] = e[5]),
    (t[6] = e[6]),
    (t[7] = e[7]),
    (t[8] = e[8]),
    (t[9] = e[9]),
    (t[10] = e[10]),
    (t[11] = e[11]),
    (t[12] = e[12]),
    (t[13] = e[13]),
    (t[14] = e[14]),
    (t[15] = e[15]),
    t
  );
}
function kb(t, e, n, r, i, s, o, a, l, c, u, f, h, d, p, g, v) {
  return (
    (t[0] = e),
    (t[1] = n),
    (t[2] = r),
    (t[3] = i),
    (t[4] = s),
    (t[5] = o),
    (t[6] = a),
    (t[7] = l),
    (t[8] = c),
    (t[9] = u),
    (t[10] = f),
    (t[11] = h),
    (t[12] = d),
    (t[13] = p),
    (t[14] = g),
    (t[15] = v),
    t
  );
}
function Db(t) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = 1),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 1),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function zb(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = e[4],
    a = e[5],
    l = e[6],
    c = e[7],
    u = e[8],
    f = e[9],
    h = e[10],
    d = e[11],
    p = e[12],
    g = e[13],
    v = e[14],
    m = e[15],
    _ = n * a - r * o,
    x = n * l - i * o,
    y = n * c - s * o,
    b = r * l - i * a,
    T = r * c - s * a,
    P = i * c - s * l,
    S = u * g - f * p,
    R = u * v - h * p,
    O = u * m - d * p,
    N = f * v - h * g,
    k = f * m - d * g,
    L = h * m - d * v,
    D = _ * L - x * k + y * N + b * O - T * R + P * S;
  return D
    ? ((D = 1 / D),
      (t[0] = (a * L - l * k + c * N) * D),
      (t[1] = (i * k - r * L - s * N) * D),
      (t[2] = (g * P - v * T + m * b) * D),
      (t[3] = (h * T - f * P - d * b) * D),
      (t[4] = (l * O - o * L - c * R) * D),
      (t[5] = (n * L - i * O + s * R) * D),
      (t[6] = (v * y - p * P - m * x) * D),
      (t[7] = (u * P - h * y + d * x) * D),
      (t[8] = (o * k - a * O + c * S) * D),
      (t[9] = (r * O - n * k - s * S) * D),
      (t[10] = (p * T - g * y + m * _) * D),
      (t[11] = (f * y - u * T - d * _) * D),
      (t[12] = (a * R - o * N - l * S) * D),
      (t[13] = (n * N - r * R + i * S) * D),
      (t[14] = (g * x - p * b - v * _) * D),
      (t[15] = (u * b - f * x + h * _) * D),
      t)
    : null;
}
function Ib(t) {
  let e = t[0],
    n = t[1],
    r = t[2],
    i = t[3],
    s = t[4],
    o = t[5],
    a = t[6],
    l = t[7],
    c = t[8],
    u = t[9],
    f = t[10],
    h = t[11],
    d = t[12],
    p = t[13],
    g = t[14],
    v = t[15],
    m = e * o - n * s,
    _ = e * a - r * s,
    x = e * l - i * s,
    y = n * a - r * o,
    b = n * l - i * o,
    T = r * l - i * a,
    P = c * p - u * d,
    S = c * g - f * d,
    R = c * v - h * d,
    O = u * g - f * p,
    N = u * v - h * p,
    k = f * v - h * g;
  return m * k - _ * N + x * O + y * R - b * S + T * P;
}
function Ad(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    u = e[7],
    f = e[8],
    h = e[9],
    d = e[10],
    p = e[11],
    g = e[12],
    v = e[13],
    m = e[14],
    _ = e[15],
    x = n[0],
    y = n[1],
    b = n[2],
    T = n[3];
  return (
    (t[0] = x * r + y * a + b * f + T * g),
    (t[1] = x * i + y * l + b * h + T * v),
    (t[2] = x * s + y * c + b * d + T * m),
    (t[3] = x * o + y * u + b * p + T * _),
    (x = n[4]),
    (y = n[5]),
    (b = n[6]),
    (T = n[7]),
    (t[4] = x * r + y * a + b * f + T * g),
    (t[5] = x * i + y * l + b * h + T * v),
    (t[6] = x * s + y * c + b * d + T * m),
    (t[7] = x * o + y * u + b * p + T * _),
    (x = n[8]),
    (y = n[9]),
    (b = n[10]),
    (T = n[11]),
    (t[8] = x * r + y * a + b * f + T * g),
    (t[9] = x * i + y * l + b * h + T * v),
    (t[10] = x * s + y * c + b * d + T * m),
    (t[11] = x * o + y * u + b * p + T * _),
    (x = n[12]),
    (y = n[13]),
    (b = n[14]),
    (T = n[15]),
    (t[12] = x * r + y * a + b * f + T * g),
    (t[13] = x * i + y * l + b * h + T * v),
    (t[14] = x * s + y * c + b * d + T * m),
    (t[15] = x * o + y * u + b * p + T * _),
    t
  );
}
function Fb(t, e, n) {
  let r = n[0],
    i = n[1],
    s = n[2],
    o,
    a,
    l,
    c,
    u,
    f,
    h,
    d,
    p,
    g,
    v,
    m;
  return (
    e === t
      ? ((t[12] = e[0] * r + e[4] * i + e[8] * s + e[12]),
        (t[13] = e[1] * r + e[5] * i + e[9] * s + e[13]),
        (t[14] = e[2] * r + e[6] * i + e[10] * s + e[14]),
        (t[15] = e[3] * r + e[7] * i + e[11] * s + e[15]))
      : ((o = e[0]),
        (a = e[1]),
        (l = e[2]),
        (c = e[3]),
        (u = e[4]),
        (f = e[5]),
        (h = e[6]),
        (d = e[7]),
        (p = e[8]),
        (g = e[9]),
        (v = e[10]),
        (m = e[11]),
        (t[0] = o),
        (t[1] = a),
        (t[2] = l),
        (t[3] = c),
        (t[4] = u),
        (t[5] = f),
        (t[6] = h),
        (t[7] = d),
        (t[8] = p),
        (t[9] = g),
        (t[10] = v),
        (t[11] = m),
        (t[12] = o * r + u * i + p * s + e[12]),
        (t[13] = a * r + f * i + g * s + e[13]),
        (t[14] = l * r + h * i + v * s + e[14]),
        (t[15] = c * r + d * i + m * s + e[15])),
    t
  );
}
function Nb(t, e, n) {
  let r = n[0],
    i = n[1],
    s = n[2];
  return (
    (t[0] = e[0] * r),
    (t[1] = e[1] * r),
    (t[2] = e[2] * r),
    (t[3] = e[3] * r),
    (t[4] = e[4] * i),
    (t[5] = e[5] * i),
    (t[6] = e[6] * i),
    (t[7] = e[7] * i),
    (t[8] = e[8] * s),
    (t[9] = e[9] * s),
    (t[10] = e[10] * s),
    (t[11] = e[11] * s),
    (t[12] = e[12]),
    (t[13] = e[13]),
    (t[14] = e[14]),
    (t[15] = e[15]),
    t
  );
}
function Bb(t, e, n, r) {
  let i = r[0],
    s = r[1],
    o = r[2],
    a = Math.hypot(i, s, o),
    l,
    c,
    u,
    f,
    h,
    d,
    p,
    g,
    v,
    m,
    _,
    x,
    y,
    b,
    T,
    P,
    S,
    R,
    O,
    N,
    k,
    L,
    D,
    X;
  return Math.abs(a) < Mb
    ? null
    : ((a = 1 / a),
      (i *= a),
      (s *= a),
      (o *= a),
      (l = Math.sin(n)),
      (c = Math.cos(n)),
      (u = 1 - c),
      (f = e[0]),
      (h = e[1]),
      (d = e[2]),
      (p = e[3]),
      (g = e[4]),
      (v = e[5]),
      (m = e[6]),
      (_ = e[7]),
      (x = e[8]),
      (y = e[9]),
      (b = e[10]),
      (T = e[11]),
      (P = i * i * u + c),
      (S = s * i * u + o * l),
      (R = o * i * u - s * l),
      (O = i * s * u - o * l),
      (N = s * s * u + c),
      (k = o * s * u + i * l),
      (L = i * o * u + s * l),
      (D = s * o * u - i * l),
      (X = o * o * u + c),
      (t[0] = f * P + g * S + x * R),
      (t[1] = h * P + v * S + y * R),
      (t[2] = d * P + m * S + b * R),
      (t[3] = p * P + _ * S + T * R),
      (t[4] = f * O + g * N + x * k),
      (t[5] = h * O + v * N + y * k),
      (t[6] = d * O + m * N + b * k),
      (t[7] = p * O + _ * N + T * k),
      (t[8] = f * L + g * D + x * X),
      (t[9] = h * L + v * D + y * X),
      (t[10] = d * L + m * D + b * X),
      (t[11] = p * L + _ * D + T * X),
      e !== t &&
        ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
      t);
}
function Lb(t, e) {
  return (t[0] = e[12]), (t[1] = e[13]), (t[2] = e[14]), t;
}
function tm(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[4],
    o = e[5],
    a = e[6],
    l = e[8],
    c = e[9],
    u = e[10];
  return (
    (t[0] = Math.hypot(n, r, i)),
    (t[1] = Math.hypot(s, o, a)),
    (t[2] = Math.hypot(l, c, u)),
    t
  );
}
function Ub(t) {
  let e = t[0],
    n = t[1],
    r = t[2],
    i = t[4],
    s = t[5],
    o = t[6],
    a = t[8],
    l = t[9],
    c = t[10];
  const u = e * e + n * n + r * r,
    f = i * i + s * s + o * o,
    h = a * a + l * l + c * c;
  return Math.sqrt(Math.max(u, f, h));
}
const Hb = (function () {
  const t = [0, 0, 0];
  return function (e, n) {
    let r = t;
    tm(r, n);
    let i = 1 / r[0],
      s = 1 / r[1],
      o = 1 / r[2],
      a = n[0] * i,
      l = n[1] * s,
      c = n[2] * o,
      u = n[4] * i,
      f = n[5] * s,
      h = n[6] * o,
      d = n[8] * i,
      p = n[9] * s,
      g = n[10] * o,
      v = a + f + g,
      m = 0;
    return (
      v > 0
        ? ((m = Math.sqrt(v + 1) * 2),
          (e[3] = 0.25 * m),
          (e[0] = (h - p) / m),
          (e[1] = (d - c) / m),
          (e[2] = (l - u) / m))
        : a > f && a > g
        ? ((m = Math.sqrt(1 + a - f - g) * 2),
          (e[3] = (h - p) / m),
          (e[0] = 0.25 * m),
          (e[1] = (l + u) / m),
          (e[2] = (d + c) / m))
        : f > g
        ? ((m = Math.sqrt(1 + f - a - g) * 2),
          (e[3] = (d - c) / m),
          (e[0] = (l + u) / m),
          (e[1] = 0.25 * m),
          (e[2] = (h + p) / m))
        : ((m = Math.sqrt(1 + g - a - f) * 2),
          (e[3] = (l - u) / m),
          (e[0] = (d + c) / m),
          (e[1] = (h + p) / m),
          (e[2] = 0.25 * m)),
      e
    );
  };
})();
function $b(t, e, n, r) {
  let i = e[0],
    s = e[1],
    o = e[2],
    a = e[3],
    l = i + i,
    c = s + s,
    u = o + o,
    f = i * l,
    h = i * c,
    d = i * u,
    p = s * c,
    g = s * u,
    v = o * u,
    m = a * l,
    _ = a * c,
    x = a * u,
    y = r[0],
    b = r[1],
    T = r[2];
  return (
    (t[0] = (1 - (p + v)) * y),
    (t[1] = (h + x) * y),
    (t[2] = (d - _) * y),
    (t[3] = 0),
    (t[4] = (h - x) * b),
    (t[5] = (1 - (f + v)) * b),
    (t[6] = (g + m) * b),
    (t[7] = 0),
    (t[8] = (d + _) * T),
    (t[9] = (g - m) * T),
    (t[10] = (1 - (f + p)) * T),
    (t[11] = 0),
    (t[12] = n[0]),
    (t[13] = n[1]),
    (t[14] = n[2]),
    (t[15] = 1),
    t
  );
}
function jb(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = n + n,
    a = r + r,
    l = i + i,
    c = n * o,
    u = r * o,
    f = r * a,
    h = i * o,
    d = i * a,
    p = i * l,
    g = s * o,
    v = s * a,
    m = s * l;
  return (
    (t[0] = 1 - f - p),
    (t[1] = u + m),
    (t[2] = h - v),
    (t[3] = 0),
    (t[4] = u - m),
    (t[5] = 1 - c - p),
    (t[6] = d + g),
    (t[7] = 0),
    (t[8] = h + v),
    (t[9] = d - g),
    (t[10] = 1 - c - f),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function Vb(t, e, n, r, i) {
  let s = 1 / Math.tan(e / 2),
    o = 1 / (r - i);
  return (
    (t[0] = s / n),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = s),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = (i + r) * o),
    (t[11] = -1),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 2 * i * r * o),
    (t[15] = 0),
    t
  );
}
function Wb(t, e, n, r, i, s, o) {
  let a = 1 / (e - n),
    l = 1 / (r - i),
    c = 1 / (s - o);
  return (
    (t[0] = -2 * a),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = -2 * l),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 2 * c),
    (t[11] = 0),
    (t[12] = (e + n) * a),
    (t[13] = (i + r) * l),
    (t[14] = (o + s) * c),
    (t[15] = 1),
    t
  );
}
function Qb(t, e, n, r) {
  let i = e[0],
    s = e[1],
    o = e[2],
    a = r[0],
    l = r[1],
    c = r[2],
    u = i - n[0],
    f = s - n[1],
    h = o - n[2],
    d = u * u + f * f + h * h;
  d === 0 ? (h = 1) : ((d = 1 / Math.sqrt(d)), (u *= d), (f *= d), (h *= d));
  let p = l * h - c * f,
    g = c * u - a * h,
    v = a * f - l * u;
  return (
    (d = p * p + g * g + v * v),
    d === 0 &&
      (c ? (a += 1e-6) : l ? (c += 1e-6) : (l += 1e-6),
      (p = l * h - c * f),
      (g = c * u - a * h),
      (v = a * f - l * u),
      (d = p * p + g * g + v * v)),
    (d = 1 / Math.sqrt(d)),
    (p *= d),
    (g *= d),
    (v *= d),
    (t[0] = p),
    (t[1] = g),
    (t[2] = v),
    (t[3] = 0),
    (t[4] = f * v - h * g),
    (t[5] = h * p - u * v),
    (t[6] = u * g - f * p),
    (t[7] = 0),
    (t[8] = u),
    (t[9] = f),
    (t[10] = h),
    (t[11] = 0),
    (t[12] = i),
    (t[13] = s),
    (t[14] = o),
    (t[15] = 1),
    t
  );
}
class Br extends Array {
  constructor(
    e = 1,
    n = 0,
    r = 0,
    i = 0,
    s = 0,
    o = 1,
    a = 0,
    l = 0,
    c = 0,
    u = 0,
    f = 1,
    h = 0,
    d = 0,
    p = 0,
    g = 0,
    v = 1
  ) {
    return super(e, n, r, i, s, o, a, l, c, u, f, h, d, p, g, v), this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(e) {
    this[12] = e;
  }
  set y(e) {
    this[13] = e;
  }
  set z(e) {
    this[14] = e;
  }
  set w(e) {
    this[15] = e;
  }
  set(e, n, r, i, s, o, a, l, c, u, f, h, d, p, g, v) {
    return e.length
      ? this.copy(e)
      : (kb(this, e, n, r, i, s, o, a, l, c, u, f, h, d, p, g, v), this);
  }
  translate(e, n = this) {
    return Fb(this, n, e), this;
  }
  rotate(e, n, r = this) {
    return Bb(this, r, e, n), this;
  }
  scale(e, n = this) {
    return Nb(this, n, typeof e == "number" ? [e, e, e] : e), this;
  }
  multiply(e, n) {
    return n ? Ad(this, e, n) : Ad(this, this, e), this;
  }
  identity() {
    return Db(this), this;
  }
  copy(e) {
    return Ob(this, e), this;
  }
  fromPerspective({ fov: e, aspect: n, near: r, far: i } = {}) {
    return Vb(this, e, n, r, i), this;
  }
  fromOrthogonal({ left: e, right: n, bottom: r, top: i, near: s, far: o }) {
    return Wb(this, e, n, r, i, s, o), this;
  }
  fromQuaternion(e) {
    return jb(this, e), this;
  }
  setPosition(e) {
    return (this.x = e[0]), (this.y = e[1]), (this.z = e[2]), this;
  }
  inverse(e = this) {
    return zb(this, e), this;
  }
  compose(e, n, r) {
    return $b(this, e, n, r), this;
  }
  getRotation(e) {
    return Hb(e, this), this;
  }
  getTranslation(e) {
    return Lb(e, this), this;
  }
  getScaling(e) {
    return tm(e, this), this;
  }
  getMaxScaleOnAxis() {
    return Ub(this);
  }
  lookAt(e, n, r) {
    return Qb(this, e, n, r), this;
  }
  determinant() {
    return Ib(this);
  }
  fromArray(e, n = 0) {
    return (
      (this[0] = e[n]),
      (this[1] = e[n + 1]),
      (this[2] = e[n + 2]),
      (this[3] = e[n + 3]),
      (this[4] = e[n + 4]),
      (this[5] = e[n + 5]),
      (this[6] = e[n + 6]),
      (this[7] = e[n + 7]),
      (this[8] = e[n + 8]),
      (this[9] = e[n + 9]),
      (this[10] = e[n + 10]),
      (this[11] = e[n + 11]),
      (this[12] = e[n + 12]),
      (this[13] = e[n + 13]),
      (this[14] = e[n + 14]),
      (this[15] = e[n + 15]),
      this
    );
  }
  toArray(e = [], n = 0) {
    return (
      (e[n] = this[0]),
      (e[n + 1] = this[1]),
      (e[n + 2] = this[2]),
      (e[n + 3] = this[3]),
      (e[n + 4] = this[4]),
      (e[n + 5] = this[5]),
      (e[n + 6] = this[6]),
      (e[n + 7] = this[7]),
      (e[n + 8] = this[8]),
      (e[n + 9] = this[9]),
      (e[n + 10] = this[10]),
      (e[n + 11] = this[11]),
      (e[n + 12] = this[12]),
      (e[n + 13] = this[13]),
      (e[n + 14] = this[14]),
      (e[n + 15] = this[15]),
      e
    );
  }
}
function qb(t, e, n = "YXZ") {
  return (
    n === "XYZ"
      ? ((t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1))),
        Math.abs(e[8]) < 0.99999
          ? ((t[0] = Math.atan2(-e[9], e[10])),
            (t[2] = Math.atan2(-e[4], e[0])))
          : ((t[0] = Math.atan2(e[6], e[5])), (t[2] = 0)))
      : n === "YXZ"
      ? ((t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1))),
        Math.abs(e[9]) < 0.99999
          ? ((t[1] = Math.atan2(e[8], e[10])), (t[2] = Math.atan2(e[1], e[5])))
          : ((t[1] = Math.atan2(-e[2], e[0])), (t[2] = 0)))
      : n === "ZXY"
      ? ((t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1))),
        Math.abs(e[6]) < 0.99999
          ? ((t[1] = Math.atan2(-e[2], e[10])),
            (t[2] = Math.atan2(-e[4], e[5])))
          : ((t[1] = 0), (t[2] = Math.atan2(e[1], e[0]))))
      : n === "ZYX"
      ? ((t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1))),
        Math.abs(e[2]) < 0.99999
          ? ((t[0] = Math.atan2(e[6], e[10])), (t[2] = Math.atan2(e[1], e[0])))
          : ((t[0] = 0), (t[2] = Math.atan2(-e[4], e[5]))))
      : n === "YZX"
      ? ((t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1))),
        Math.abs(e[1]) < 0.99999
          ? ((t[0] = Math.atan2(-e[9], e[5])), (t[1] = Math.atan2(-e[2], e[0])))
          : ((t[0] = 0), (t[1] = Math.atan2(e[8], e[10]))))
      : n === "XZY" &&
        ((t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1))),
        Math.abs(e[4]) < 0.99999
          ? ((t[0] = Math.atan2(e[6], e[5])), (t[1] = Math.atan2(e[8], e[0])))
          : ((t[0] = Math.atan2(-e[9], e[10])), (t[1] = 0))),
    t
  );
}
const wd = new Br();
class Yb extends Array {
  constructor(e = 0, n = e, r = e, i = "YXZ") {
    return super(e, n, r), (this.order = i), (this.onChange = () => {}), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(e) {
    (this[0] = e), this.onChange();
  }
  set y(e) {
    (this[1] = e), this.onChange();
  }
  set z(e) {
    (this[2] = e), this.onChange();
  }
  set(e, n = e, r = e) {
    return e.length
      ? this.copy(e)
      : ((this[0] = e), (this[1] = n), (this[2] = r), this.onChange(), this);
  }
  copy(e) {
    return (
      (this[0] = e[0]),
      (this[1] = e[1]),
      (this[2] = e[2]),
      this.onChange(),
      this
    );
  }
  reorder(e) {
    return (this.order = e), this.onChange(), this;
  }
  fromRotationMatrix(e, n = this.order) {
    return qb(this, e, n), this;
  }
  fromQuaternion(e, n = this.order) {
    return wd.fromQuaternion(e), this.fromRotationMatrix(wd, n);
  }
  toArray(e = [], n = 0) {
    return (e[n] = this[0]), (e[n + 1] = this[1]), (e[n + 2] = this[2]), e;
  }
}
class lf {
  constructor() {
    (this.parent = null),
      (this.children = []),
      (this.visible = !0),
      (this.matrix = new Br()),
      (this.worldMatrix = new Br()),
      (this.matrixAutoUpdate = !0),
      (this.position = new nt()),
      (this.quaternion = new Rb()),
      (this.scale = new nt(1)),
      (this.rotation = new Yb()),
      (this.up = new nt(0, 1, 0)),
      (this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation)),
      (this.quaternion.onChange = () =>
        this.rotation.fromQuaternion(this.quaternion));
  }
  setParent(e, n = !0) {
    this.parent && e !== this.parent && this.parent.removeChild(this, !1),
      (this.parent = e),
      n && e && e.addChild(this, !1);
  }
  addChild(e, n = !0) {
    ~this.children.indexOf(e) || this.children.push(e),
      n && e.setParent(this, !1);
  }
  removeChild(e, n = !0) {
    ~this.children.indexOf(e) &&
      this.children.splice(this.children.indexOf(e), 1),
      n && e.setParent(null, !1);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.worldMatrixNeedsUpdate || e) &&
        (this.parent === null
          ? this.worldMatrix.copy(this.matrix)
          : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
        (this.worldMatrixNeedsUpdate = !1),
        (e = !0));
    for (let n = 0, r = this.children.length; n < r; n++)
      this.children[n].updateMatrixWorld(e);
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale),
      (this.worldMatrixNeedsUpdate = !0);
  }
  traverse(e) {
    if (!e(this))
      for (let n = 0, r = this.children.length; n < r; n++)
        this.children[n].traverse(e);
  }
  decompose() {
    this.matrix.getTranslation(this.position),
      this.matrix.getRotation(this.quaternion),
      this.matrix.getScaling(this.scale),
      this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(e, n = !1) {
    n
      ? this.matrix.lookAt(this.position, e, this.up)
      : this.matrix.lookAt(e, this.position, this.up),
      this.matrix.getRotation(this.quaternion),
      this.rotation.fromQuaternion(this.quaternion);
  }
}
const Xb = new Br(),
  Gb = new nt(),
  Kb = new nt();
class Jb extends lf {
  constructor(
    e,
    {
      near: n = 0.1,
      far: r = 100,
      fov: i = 45,
      aspect: s = 1,
      left: o,
      right: a,
      bottom: l,
      top: c,
      zoom: u = 1,
    } = {}
  ) {
    super(),
      Object.assign(this, {
        near: n,
        far: r,
        fov: i,
        aspect: s,
        left: o,
        right: a,
        bottom: l,
        top: c,
        zoom: u,
      }),
      (this.projectionMatrix = new Br()),
      (this.viewMatrix = new Br()),
      (this.projectionViewMatrix = new Br()),
      (this.worldPosition = new nt()),
      (this.type = o || a ? "orthographic" : "perspective"),
      this.type === "orthographic" ? this.orthographic() : this.perspective();
  }
  perspective({
    near: e = this.near,
    far: n = this.far,
    fov: r = this.fov,
    aspect: i = this.aspect,
  } = {}) {
    return (
      Object.assign(this, {
        near: e,
        far: n,
        fov: r,
        aspect: i,
      }),
      this.projectionMatrix.fromPerspective({
        fov: r * (Math.PI / 180),
        aspect: i,
        near: e,
        far: n,
      }),
      (this.type = "perspective"),
      this
    );
  }
  orthographic({
    near: e = this.near,
    far: n = this.far,
    left: r = this.left,
    right: i = this.right,
    bottom: s = this.bottom,
    top: o = this.top,
    zoom: a = this.zoom,
  } = {}) {
    return (
      Object.assign(this, {
        near: e,
        far: n,
        left: r,
        right: i,
        bottom: s,
        top: o,
        zoom: a,
      }),
      (r /= a),
      (i /= a),
      (s /= a),
      (o /= a),
      this.projectionMatrix.fromOrthogonal({
        left: r,
        right: i,
        bottom: s,
        top: o,
        near: e,
        far: n,
      }),
      (this.type = "orthographic"),
      this
    );
  }
  updateMatrixWorld() {
    return (
      super.updateMatrixWorld(),
      this.viewMatrix.inverse(this.worldMatrix),
      this.worldMatrix.getTranslation(this.worldPosition),
      this.projectionViewMatrix.multiply(
        this.projectionMatrix,
        this.viewMatrix
      ),
      this
    );
  }
  lookAt(e) {
    return super.lookAt(e, !0), this;
  }
  project(e) {
    return (
      e.applyMatrix4(this.viewMatrix),
      e.applyMatrix4(this.projectionMatrix),
      this
    );
  }
  unproject(e) {
    return (
      e.applyMatrix4(Xb.inverse(this.projectionMatrix)),
      e.applyMatrix4(this.worldMatrix),
      this
    );
  }
  updateFrustum() {
    this.frustum ||
      (this.frustum = [
        new nt(),
        new nt(),
        new nt(),
        new nt(),
        new nt(),
        new nt(),
      ]);
    const e = this.projectionViewMatrix;
    (this.frustum[0].set(e[3] - e[0], e[7] - e[4], e[11] - e[8]).constant =
      e[15] - e[12]),
      (this.frustum[1].set(e[3] + e[0], e[7] + e[4], e[11] + e[8]).constant =
        e[15] + e[12]),
      (this.frustum[2].set(e[3] + e[1], e[7] + e[5], e[11] + e[9]).constant =
        e[15] + e[13]),
      (this.frustum[3].set(e[3] - e[1], e[7] - e[5], e[11] - e[9]).constant =
        e[15] - e[13]),
      (this.frustum[4].set(e[3] - e[2], e[7] - e[6], e[11] - e[10]).constant =
        e[15] - e[14]),
      (this.frustum[5].set(e[3] + e[2], e[7] + e[6], e[11] + e[10]).constant =
        e[15] + e[14]);
    for (let n = 0; n < 6; n++) {
      const r = 1 / this.frustum[n].distance();
      this.frustum[n].multiply(r), (this.frustum[n].constant *= r);
    }
  }
  frustumIntersectsMesh(e) {
    if (
      !e.geometry.attributes.position ||
      ((!e.geometry.bounds || e.geometry.bounds.radius === 1 / 0) &&
        e.geometry.computeBoundingSphere(),
      !e.geometry.bounds)
    )
      return !0;
    const n = Gb;
    n.copy(e.geometry.bounds.center), n.applyMatrix4(e.worldMatrix);
    const r = e.geometry.bounds.radius * e.worldMatrix.getMaxScaleOnAxis();
    return this.frustumIntersectsSphere(n, r);
  }
  frustumIntersectsSphere(e, n) {
    const r = Kb;
    for (let i = 0; i < 6; i++) {
      const s = this.frustum[i];
      if (r.copy(s).dot(e) + s.constant < -n) return !1;
    }
    return !0;
  }
}
function Zb(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[4]),
    (t[4] = e[5]),
    (t[5] = e[6]),
    (t[6] = e[8]),
    (t[7] = e[9]),
    (t[8] = e[10]),
    t
  );
}
function eE(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = n + n,
    a = r + r,
    l = i + i,
    c = n * o,
    u = r * o,
    f = r * a,
    h = i * o,
    d = i * a,
    p = i * l,
    g = s * o,
    v = s * a,
    m = s * l;
  return (
    (t[0] = 1 - f - p),
    (t[3] = u - m),
    (t[6] = h + v),
    (t[1] = u + m),
    (t[4] = 1 - c - p),
    (t[7] = d - g),
    (t[2] = h - v),
    (t[5] = d + g),
    (t[8] = 1 - c - f),
    t
  );
}
function tE(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4]),
    (t[5] = e[5]),
    (t[6] = e[6]),
    (t[7] = e[7]),
    (t[8] = e[8]),
    t
  );
}
function nE(t, e, n, r, i, s, o, a, l, c) {
  return (
    (t[0] = e),
    (t[1] = n),
    (t[2] = r),
    (t[3] = i),
    (t[4] = s),
    (t[5] = o),
    (t[6] = a),
    (t[7] = l),
    (t[8] = c),
    t
  );
}
function rE(t) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 1),
    (t[5] = 0),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 1),
    t
  );
}
function iE(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = e[4],
    a = e[5],
    l = e[6],
    c = e[7],
    u = e[8],
    f = u * o - a * c,
    h = -u * s + a * l,
    d = c * s - o * l,
    p = n * f + r * h + i * d;
  return p
    ? ((p = 1 / p),
      (t[0] = f * p),
      (t[1] = (-u * r + i * c) * p),
      (t[2] = (a * r - i * o) * p),
      (t[3] = h * p),
      (t[4] = (u * n - i * l) * p),
      (t[5] = (-a * n + i * s) * p),
      (t[6] = d * p),
      (t[7] = (-c * n + r * l) * p),
      (t[8] = (o * n - r * s) * p),
      t)
    : null;
}
function bd(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    u = e[7],
    f = e[8],
    h = n[0],
    d = n[1],
    p = n[2],
    g = n[3],
    v = n[4],
    m = n[5],
    _ = n[6],
    x = n[7],
    y = n[8];
  return (
    (t[0] = h * r + d * o + p * c),
    (t[1] = h * i + d * a + p * u),
    (t[2] = h * s + d * l + p * f),
    (t[3] = g * r + v * o + m * c),
    (t[4] = g * i + v * a + m * u),
    (t[5] = g * s + v * l + m * f),
    (t[6] = _ * r + x * o + y * c),
    (t[7] = _ * i + x * a + y * u),
    (t[8] = _ * s + x * l + y * f),
    t
  );
}
function sE(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    u = e[7],
    f = e[8],
    h = n[0],
    d = n[1];
  return (
    (t[0] = r),
    (t[1] = i),
    (t[2] = s),
    (t[3] = o),
    (t[4] = a),
    (t[5] = l),
    (t[6] = h * r + d * o + c),
    (t[7] = h * i + d * a + u),
    (t[8] = h * s + d * l + f),
    t
  );
}
function oE(t, e, n) {
  let r = e[0],
    i = e[1],
    s = e[2],
    o = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    u = e[7],
    f = e[8],
    h = Math.sin(n),
    d = Math.cos(n);
  return (
    (t[0] = d * r + h * o),
    (t[1] = d * i + h * a),
    (t[2] = d * s + h * l),
    (t[3] = d * o - h * r),
    (t[4] = d * a - h * i),
    (t[5] = d * l - h * s),
    (t[6] = c),
    (t[7] = u),
    (t[8] = f),
    t
  );
}
function aE(t, e, n) {
  let r = n[0],
    i = n[1];
  return (
    (t[0] = r * e[0]),
    (t[1] = r * e[1]),
    (t[2] = r * e[2]),
    (t[3] = i * e[3]),
    (t[4] = i * e[4]),
    (t[5] = i * e[5]),
    (t[6] = e[6]),
    (t[7] = e[7]),
    (t[8] = e[8]),
    t
  );
}
function lE(t, e) {
  let n = e[0],
    r = e[1],
    i = e[2],
    s = e[3],
    o = e[4],
    a = e[5],
    l = e[6],
    c = e[7],
    u = e[8],
    f = e[9],
    h = e[10],
    d = e[11],
    p = e[12],
    g = e[13],
    v = e[14],
    m = e[15],
    _ = n * a - r * o,
    x = n * l - i * o,
    y = n * c - s * o,
    b = r * l - i * a,
    T = r * c - s * a,
    P = i * c - s * l,
    S = u * g - f * p,
    R = u * v - h * p,
    O = u * m - d * p,
    N = f * v - h * g,
    k = f * m - d * g,
    L = h * m - d * v,
    D = _ * L - x * k + y * N + b * O - T * R + P * S;
  return D
    ? ((D = 1 / D),
      (t[0] = (a * L - l * k + c * N) * D),
      (t[1] = (l * O - o * L - c * R) * D),
      (t[2] = (o * k - a * O + c * S) * D),
      (t[3] = (i * k - r * L - s * N) * D),
      (t[4] = (n * L - i * O + s * R) * D),
      (t[5] = (r * O - n * k - s * S) * D),
      (t[6] = (g * P - v * T + m * b) * D),
      (t[7] = (v * y - p * P - m * x) * D),
      (t[8] = (p * T - g * y + m * _) * D),
      t)
    : null;
}
class cE extends Array {
  constructor(e = 1, n = 0, r = 0, i = 0, s = 1, o = 0, a = 0, l = 0, c = 1) {
    return super(e, n, r, i, s, o, a, l, c), this;
  }
  set(e, n, r, i, s, o, a, l, c) {
    return e.length
      ? this.copy(e)
      : (nE(this, e, n, r, i, s, o, a, l, c), this);
  }
  translate(e, n = this) {
    return sE(this, n, e), this;
  }
  rotate(e, n = this) {
    return oE(this, n, e), this;
  }
  scale(e, n = this) {
    return aE(this, n, e), this;
  }
  multiply(e, n) {
    return n ? bd(this, e, n) : bd(this, this, e), this;
  }
  identity() {
    return rE(this), this;
  }
  copy(e) {
    return tE(this, e), this;
  }
  fromMatrix4(e) {
    return Zb(this, e), this;
  }
  fromQuaternion(e) {
    return eE(this, e), this;
  }
  fromBasis(e, n, r) {
    return this.set(e[0], e[1], e[2], n[0], n[1], n[2], r[0], r[1], r[2]), this;
  }
  inverse(e = this) {
    return iE(this, e), this;
  }
  getNormalMatrix(e) {
    return lE(this, e), this;
  }
}
let uE = 0;
class ja extends lf {
  constructor(
    e,
    {
      geometry: n,
      program: r,
      mode: i = e.TRIANGLES,
      frustumCulled: s = !0,
      renderOrder: o = 0,
    } = {}
  ) {
    super(),
      e.canvas || console.error("gl not passed as first argument to Mesh"),
      (this.gl = e),
      (this.id = uE++),
      (this.geometry = n),
      (this.program = r),
      (this.mode = i),
      (this.frustumCulled = s),
      (this.renderOrder = o),
      (this.modelViewMatrix = new Br()),
      (this.normalMatrix = new cE()),
      (this.beforeRenderCallbacks = []),
      (this.afterRenderCallbacks = []);
  }
  onBeforeRender(e) {
    return this.beforeRenderCallbacks.push(e), this;
  }
  onAfterRender(e) {
    return this.afterRenderCallbacks.push(e), this;
  }
  draw({ camera: e } = {}) {
    this.beforeRenderCallbacks.forEach(
      (r) =>
        r &&
        r({
          mesh: this,
          camera: e,
        })
    ),
      e &&
        (this.program.uniforms.modelMatrix ||
          Object.assign(this.program.uniforms, {
            modelMatrix: {
              value: null,
            },
            viewMatrix: {
              value: null,
            },
            modelViewMatrix: {
              value: null,
            },
            normalMatrix: {
              value: null,
            },
            projectionMatrix: {
              value: null,
            },
            cameraPosition: {
              value: null,
            },
          }),
        (this.program.uniforms.projectionMatrix.value = e.projectionMatrix),
        (this.program.uniforms.cameraPosition.value = e.worldPosition),
        (this.program.uniforms.viewMatrix.value = e.viewMatrix),
        this.modelViewMatrix.multiply(e.viewMatrix, this.worldMatrix),
        this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
        (this.program.uniforms.modelMatrix.value = this.worldMatrix),
        (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
        (this.program.uniforms.normalMatrix.value = this.normalMatrix));
    let n = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({
      flipFaces: n,
    }),
      this.geometry.draw({
        mode: this.mode,
        program: this.program,
      }),
      this.afterRenderCallbacks.forEach(
        (r) =>
          r &&
          r({
            mesh: this,
            camera: e,
          })
      );
  }
}
const Ed = new Uint8Array(4);
function Td(t) {
  return (t & (t - 1)) === 0;
}
let fE = 1;
class Sr {
  constructor(
    e,
    {
      image: n,
      target: r = e.TEXTURE_2D,
      type: i = e.UNSIGNED_BYTE,
      format: s = e.RGBA,
      internalFormat: o = s,
      wrapS: a = e.CLAMP_TO_EDGE,
      wrapT: l = e.CLAMP_TO_EDGE,
      generateMipmaps: c = !0,
      minFilter: u = c ? e.NEAREST_MIPMAP_LINEAR : e.LINEAR,
      magFilter: f = e.LINEAR,
      premultiplyAlpha: h = !1,
      unpackAlignment: d = 4,
      flipY: p = r == e.TEXTURE_2D,
      anisotropy: g = 0,
      level: v = 0,
      width: m,
      height: _ = m,
    } = {}
  ) {
    (this.gl = e),
      (this.id = fE++),
      (this.image = n),
      (this.target = r),
      (this.type = i),
      (this.format = s),
      (this.internalFormat = o),
      (this.minFilter = u),
      (this.magFilter = f),
      (this.wrapS = a),
      (this.wrapT = l),
      (this.generateMipmaps = c),
      (this.premultiplyAlpha = h),
      (this.unpackAlignment = d),
      (this.flipY = p),
      (this.anisotropy = Math.min(
        g,
        this.gl.renderer.parameters.maxAnisotropy
      )),
      (this.level = v),
      (this.width = m),
      (this.height = _),
      (this.texture = this.gl.createTexture()),
      (this.store = {
        image: null,
      }),
      (this.glState = this.gl.renderer.state),
      (this.state = {}),
      (this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
      (this.state.magFilter = this.gl.LINEAR),
      (this.state.wrapS = this.gl.REPEAT),
      (this.state.wrapT = this.gl.REPEAT),
      (this.state.anisotropy = 0);
  }
  bind() {
    this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id &&
      (this.gl.bindTexture(this.target, this.texture),
      (this.glState.textureUnits[this.glState.activeTextureUnit] = this.id));
  }
  update(e = 0) {
    const n = !(this.image === this.store.image && !this.needsUpdate);
    if (
      ((n || this.glState.textureUnits[e] !== this.id) &&
        (this.gl.renderer.activeTexture(e), this.bind()),
      !!n)
    ) {
      if (
        ((this.needsUpdate = !1),
        this.flipY !== this.glState.flipY &&
          (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
          (this.glState.flipY = this.flipY)),
        this.premultiplyAlpha !== this.glState.premultiplyAlpha &&
          (this.gl.pixelStorei(
            this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
            this.premultiplyAlpha
          ),
          (this.glState.premultiplyAlpha = this.premultiplyAlpha)),
        this.unpackAlignment !== this.glState.unpackAlignment &&
          (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
          (this.glState.unpackAlignment = this.unpackAlignment)),
        this.minFilter !== this.state.minFilter &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_MIN_FILTER,
            this.minFilter
          ),
          (this.state.minFilter = this.minFilter)),
        this.magFilter !== this.state.magFilter &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_MAG_FILTER,
            this.magFilter
          ),
          (this.state.magFilter = this.magFilter)),
        this.wrapS !== this.state.wrapS &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_WRAP_S,
            this.wrapS
          ),
          (this.state.wrapS = this.wrapS)),
        this.wrapT !== this.state.wrapT &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_WRAP_T,
            this.wrapT
          ),
          (this.state.wrapT = this.wrapT)),
        this.anisotropy &&
          this.anisotropy !== this.state.anisotropy &&
          (this.gl.texParameterf(
            this.target,
            this.gl.renderer.getExtension("EXT_texture_filter_anisotropic")
              .TEXTURE_MAX_ANISOTROPY_EXT,
            this.anisotropy
          ),
          (this.state.anisotropy = this.anisotropy)),
        this.image)
      ) {
        if (
          (this.image.width &&
            ((this.width = this.image.width),
            (this.height = this.image.height)),
          this.target === this.gl.TEXTURE_CUBE_MAP)
        )
          for (let r = 0; r < 6; r++)
            this.gl.texImage2D(
              this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r,
              this.level,
              this.internalFormat,
              this.format,
              this.type,
              this.image[r]
            );
        else if (ArrayBuffer.isView(this.image))
          this.gl.texImage2D(
            this.target,
            this.level,
            this.internalFormat,
            this.width,
            this.height,
            0,
            this.format,
            this.type,
            this.image
          );
        else if (this.image.isCompressedTexture)
          for (let r = 0; r < this.image.length; r++)
            this.gl.compressedTexImage2D(
              this.target,
              r,
              this.internalFormat,
              this.image[r].width,
              this.image[r].height,
              0,
              this.image[r].data
            );
        else
          this.gl.texImage2D(
            this.target,
            this.level,
            this.internalFormat,
            this.format,
            this.type,
            this.image
          );
        this.generateMipmaps &&
          (!this.gl.renderer.isWebgl2 &&
          (!Td(this.image.width) || !Td(this.image.height))
            ? ((this.generateMipmaps = !1),
              (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE),
              (this.minFilter = this.gl.LINEAR))
            : this.gl.generateMipmap(this.target)),
          this.onUpdate && this.onUpdate();
      } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
        for (let r = 0; r < 6; r++)
          this.gl.texImage2D(
            this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r,
            0,
            this.gl.RGBA,
            1,
            1,
            0,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            Ed
          );
      else
        this.width
          ? this.gl.texImage2D(
              this.target,
              this.level,
              this.internalFormat,
              this.width,
              this.height,
              0,
              this.format,
              this.type,
              null
            )
          : this.gl.texImage2D(
              this.target,
              0,
              this.gl.RGBA,
              1,
              1,
              0,
              this.gl.RGBA,
              this.gl.UNSIGNED_BYTE,
              Ed
            );
      this.store.image = this.image;
    }
  }
}
class hE {
  constructor(
    e,
    {
      width: n = e.canvas.width,
      height: r = e.canvas.height,
      target: i = e.FRAMEBUFFER,
      color: s = 1,
      depth: o = !0,
      stencil: a = !1,
      depthTexture: l = !1,
      wrapS: c = e.CLAMP_TO_EDGE,
      wrapT: u = e.CLAMP_TO_EDGE,
      minFilter: f = e.LINEAR,
      magFilter: h = f,
      type: d = e.UNSIGNED_BYTE,
      format: p = e.RGBA,
      internalFormat: g = p,
      unpackAlignment: v,
      premultiplyAlpha: m,
    } = {}
  ) {
    (this.gl = e),
      (this.width = n),
      (this.height = r),
      (this.depth = o),
      (this.buffer = this.gl.createFramebuffer()),
      (this.target = i),
      this.gl.bindFramebuffer(this.target, this.buffer),
      (this.textures = []);
    const _ = [];
    for (let x = 0; x < s; x++)
      this.textures.push(
        new Sr(e, {
          width: n,
          height: r,
          wrapS: c,
          wrapT: u,
          minFilter: f,
          magFilter: h,
          type: d,
          format: p,
          internalFormat: g,
          unpackAlignment: v,
          premultiplyAlpha: m,
          flipY: !1,
          generateMipmaps: !1,
        })
      ),
        this.textures[x].update(),
        this.gl.framebufferTexture2D(
          this.target,
          this.gl.COLOR_ATTACHMENT0 + x,
          this.gl.TEXTURE_2D,
          this.textures[x].texture,
          0
        ),
        _.push(this.gl.COLOR_ATTACHMENT0 + x);
    _.length > 1 && this.gl.renderer.drawBuffers(_),
      (this.texture = this.textures[0]),
      l &&
      (this.gl.renderer.isWebgl2 ||
        this.gl.renderer.getExtension("WEBGL_depth_texture"))
        ? ((this.depthTexture = new Sr(e, {
            width: n,
            height: r,
            minFilter: this.gl.NEAREST,
            magFilter: this.gl.NEAREST,
            format: this.gl.DEPTH_COMPONENT,
            internalFormat: e.renderer.isWebgl2
              ? this.gl.DEPTH_COMPONENT16
              : this.gl.DEPTH_COMPONENT,
            type: this.gl.UNSIGNED_INT,
          })),
          this.depthTexture.update(),
          this.gl.framebufferTexture2D(
            this.target,
            this.gl.DEPTH_ATTACHMENT,
            this.gl.TEXTURE_2D,
            this.depthTexture.texture,
            0
          ))
        : (o &&
            !a &&
            ((this.depthBuffer = this.gl.createRenderbuffer()),
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
            this.gl.renderbufferStorage(
              this.gl.RENDERBUFFER,
              this.gl.DEPTH_COMPONENT16,
              n,
              r
            ),
            this.gl.framebufferRenderbuffer(
              this.target,
              this.gl.DEPTH_ATTACHMENT,
              this.gl.RENDERBUFFER,
              this.depthBuffer
            )),
          a &&
            !o &&
            ((this.stencilBuffer = this.gl.createRenderbuffer()),
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
            this.gl.renderbufferStorage(
              this.gl.RENDERBUFFER,
              this.gl.STENCIL_INDEX8,
              n,
              r
            ),
            this.gl.framebufferRenderbuffer(
              this.target,
              this.gl.STENCIL_ATTACHMENT,
              this.gl.RENDERBUFFER,
              this.stencilBuffer
            )),
          o &&
            a &&
            ((this.depthStencilBuffer = this.gl.createRenderbuffer()),
            this.gl.bindRenderbuffer(
              this.gl.RENDERBUFFER,
              this.depthStencilBuffer
            ),
            this.gl.renderbufferStorage(
              this.gl.RENDERBUFFER,
              this.gl.DEPTH_STENCIL,
              n,
              r
            ),
            this.gl.framebufferRenderbuffer(
              this.target,
              this.gl.DEPTH_STENCIL_ATTACHMENT,
              this.gl.RENDERBUFFER,
              this.depthStencilBuffer
            ))),
      this.gl.bindFramebuffer(this.target, null);
  }
}
function dE(t, e) {
  return (t[0] = e[0]), (t[1] = e[1]), t;
}
function pE(t, e, n) {
  return (t[0] = e), (t[1] = n), t;
}
function Pd(t, e, n) {
  return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
}
function Sd(t, e, n) {
  return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
}
function gE(t, e, n) {
  return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
}
function mE(t, e, n) {
  return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
}
function ql(t, e, n) {
  return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
}
function _E(t, e) {
  var n = e[0] - t[0],
    r = e[1] - t[1];
  return Math.sqrt(n * n + r * r);
}
function yE(t, e) {
  var n = e[0] - t[0],
    r = e[1] - t[1];
  return n * n + r * r;
}
function Cd(t) {
  var e = t[0],
    n = t[1];
  return Math.sqrt(e * e + n * n);
}
function vE(t) {
  var e = t[0],
    n = t[1];
  return e * e + n * n;
}
function xE(t, e) {
  return (t[0] = -e[0]), (t[1] = -e[1]), t;
}
function AE(t, e) {
  return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
}
function wE(t, e) {
  var n = e[0],
    r = e[1],
    i = n * n + r * r;
  return (
    i > 0 && (i = 1 / Math.sqrt(i)), (t[0] = e[0] * i), (t[1] = e[1] * i), t
  );
}
function bE(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function Rd(t, e) {
  return t[0] * e[1] - t[1] * e[0];
}
function EE(t, e, n, r) {
  var i = e[0],
    s = e[1];
  return (t[0] = i + r * (n[0] - i)), (t[1] = s + r * (n[1] - s)), t;
}
function TE(t, e, n) {
  var r = e[0],
    i = e[1];
  return (
    (t[0] = n[0] * r + n[3] * i + n[6]), (t[1] = n[1] * r + n[4] * i + n[7]), t
  );
}
function PE(t, e, n) {
  let r = e[0],
    i = e[1];
  return (
    (t[0] = n[0] * r + n[4] * i + n[12]),
    (t[1] = n[1] * r + n[5] * i + n[13]),
    t
  );
}
function SE(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
class cf extends Array {
  constructor(e = 0, n = e) {
    return super(e, n), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  set x(e) {
    this[0] = e;
  }
  set y(e) {
    this[1] = e;
  }
  set(e, n = e) {
    return e.length ? this.copy(e) : (pE(this, e, n), this);
  }
  copy(e) {
    return dE(this, e), this;
  }
  add(e, n) {
    return n ? Pd(this, e, n) : Pd(this, this, e), this;
  }
  sub(e, n) {
    return n ? Sd(this, e, n) : Sd(this, this, e), this;
  }
  multiply(e) {
    return e.length ? gE(this, this, e) : ql(this, this, e), this;
  }
  divide(e) {
    return e.length ? mE(this, this, e) : ql(this, this, 1 / e), this;
  }
  inverse(e = this) {
    return AE(this, e), this;
  }
  len() {
    return Cd(this);
  }
  distance(e) {
    return e ? _E(this, e) : Cd(this);
  }
  squaredLen() {
    return this.squaredDistance();
  }
  squaredDistance(e) {
    return e ? yE(this, e) : vE(this);
  }
  negate(e = this) {
    return xE(this, e), this;
  }
  cross(e, n) {
    return n ? Rd(e, n) : Rd(this, e);
  }
  scale(e) {
    return ql(this, this, e), this;
  }
  normalize() {
    return wE(this, this), this;
  }
  dot(e) {
    return bE(this, e);
  }
  equals(e) {
    return SE(this, e);
  }
  applyMatrix3(e) {
    return TE(this, this, e), this;
  }
  applyMatrix4(e) {
    return PE(this, this, e), this;
  }
  lerp(e, n) {
    EE(this, this, e, n);
  }
  clone() {
    return new cf(this[0], this[1]);
  }
  fromArray(e, n = 0) {
    return (this[0] = e[n]), (this[1] = e[n + 1]), this;
  }
  toArray(e = [], n = 0) {
    return (e[n] = this[0]), (e[n + 1] = this[1]), e;
  }
}
class uf extends em {
  constructor(
    e,
    {
      width: n = 1,
      height: r = 1,
      widthSegments: i = 1,
      heightSegments: s = 1,
      attributes: o = {},
    } = {}
  ) {
    const a = i,
      l = s,
      c = (a + 1) * (l + 1),
      u = a * l * 6,
      f = new Float32Array(c * 3),
      h = new Float32Array(c * 3),
      d = new Float32Array(c * 2),
      p = c > 65536 ? new Uint32Array(u) : new Uint16Array(u);
    uf.buildPlane(f, h, d, p, n, r, 0, a, l),
      Object.assign(o, {
        position: {
          size: 3,
          data: f,
        },
        normal: {
          size: 3,
          data: h,
        },
        uv: {
          size: 2,
          data: d,
        },
        index: {
          data: p,
        },
      }),
      super(e, o);
  }
  static buildPlane(
    e,
    n,
    r,
    i,
    s,
    o,
    a,
    l,
    c,
    u = 0,
    f = 1,
    h = 2,
    d = 1,
    p = -1,
    g = 0,
    v = 0
  ) {
    const m = g,
      _ = s / l,
      x = o / c;
    for (let y = 0; y <= c; y++) {
      let b = y * x - o / 2;
      for (let T = 0; T <= l; T++, g++) {
        let P = T * _ - s / 2;
        if (
          ((e[g * 3 + u] = P * d),
          (e[g * 3 + f] = b * p),
          (e[g * 3 + h] = a / 2),
          (n[g * 3 + u] = 0),
          (n[g * 3 + f] = 0),
          (n[g * 3 + h] = a >= 0 ? 1 : -1),
          (r[g * 2] = T / l),
          (r[g * 2 + 1] = 1 - y / c),
          y === c || T === l)
        )
          continue;
        let S = m + T + y * (l + 1),
          R = m + T + (y + 1) * (l + 1),
          O = m + T + (y + 1) * (l + 1) + 1,
          N = m + T + y * (l + 1) + 1;
        (i[v * 6] = S),
          (i[v * 6 + 1] = R),
          (i[v * 6 + 2] = N),
          (i[v * 6 + 3] = R),
          (i[v * 6 + 4] = O),
          (i[v * 6 + 5] = N),
          v++;
      }
    }
  }
}
class CE extends em {
  constructor(e, { attributes: n = {} } = {}) {
    Object.assign(n, {
      position: {
        size: 2,
        data: new Float32Array([-1, -1, 3, -1, -1, 3]),
      },
      uv: {
        size: 2,
        data: new Float32Array([0, 0, 2, 0, 0, 2]),
      },
    }),
      super(e, n);
  }
}
var RE = `#version 300 es

precision highp float;

uniform sampler2D tMap;

in vec2 vUv;
out vec4 FragData[3];

void main(){
    vec4 color=vec4(0.);
    color.rgb=texture(tMap,vUv).rgb;
    color.a=1.;
    
    FragData[0]=vec4(0.);
    FragData[1]=color;
    FragData[2]=vec4(1.,0.,0.,1.);
}`,
  ME = `#version 300 es

in vec2 uv;
in vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main(){
    vUv=uv;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}`;
class OE {
  constructor({
    element: e,
    geometry: n,
    gl: r,
    scene: i,
    screen: s,
    viewport: o,
    camera: a,
  }) {
    (this.element = e),
      (this.image = this.element.querySelector("img")),
      (this.geometry = n),
      (this.camera = a),
      (this.gl = r),
      (this.scene = i),
      (this.screen = s),
      (this.viewport = o),
      (this.scroll = -1);
  }
  async initialize() {
    return new Promise(async (e, n) => {
      (this.textureImage = await this.loadImage(this.image)),
        this.createMesh(),
        this.createBounds(),
        this.onResize(),
        e(this);
    });
  }
  async loadImage(e) {
    return new Promise((n, r) => {
      const i = new Image();
      (i.src = e.src),
        (i.onload = (s) => {
          n(i);
        });
    });
  }
  createMesh() {
    const e = new Sr(this.gl);
    e.image = this.textureImage;
    const n = new $a(this.gl, {
      fragment: RE,
      vertex: ME,
      uniforms: {
        tMap: {
          value: e,
        },
        uScreenSizes: {
          value: [0, 0],
        },
        uImageSizes: {
          value: [0, 0],
        },
      },
      transparent: !0,
    });
    (this.plane = new ja(this.gl, {
      geometry: this.geometry,
      program: n,
    })),
      (this.plane.position.z = 1),
      this.plane.setParent(this.scene);
  }
  createBounds() {
    const e = this.camera.fov * (Math.PI / 180),
      n = 2 * Math.tan(e / 2) * this.camera.position.z - this.plane.position.z,
      r = n * this.camera.aspect;
    (this.viewport = {
      height: n,
      width: r,
    }),
      (this.bounds = this.element.getBoundingClientRect()),
      this.updateScale(),
      this.updatePosition();
  }
  updateScale() {
    (this.plane.scale.x =
      (this.viewport.width * this.bounds.width) / this.screen.width),
      (this.plane.scale.y =
        (this.viewport.height * this.bounds.height) / this.screen.height);
  }
  updatePosition() {
    (this.plane.position.y =
      this.viewport.height / 2 -
      this.plane.scale.y / 2 -
      (this.bounds.top / this.screen.height) * this.viewport.height),
      (this.plane.position.x =
        -(this.viewport.width / 2) +
        this.plane.scale.x / 2 +
        (this.bounds.left / this.screen.width) * this.viewport.width);
  }
  update(e) {
    this.plane && ((this.scroll = e), this.createBounds());
  }
  onResize(e) {
    if (e) {
      const { screen: n, viewport: r } = e;
      n && (this.screen = n);
    }
    this.createBounds();
  }
}
var kE = `#version 300 es

precision highp float;

uniform float uTime;
uniform float uIndex;
uniform int uType;
uniform float uVelocity;
uniform float uAppearOpacity;
uniform float uAppearRotate;

in vec2 vUv;
out vec4 FragData[3];

float time_factor=.3;

const int number=6;

#define PI 3.14159265359

#ifndef RANDOM_SCALE
#ifdef RANDOM_HIGHER_RANGE
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)
#else
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)
#endif
#endif

#ifndef FNC_RANDOM
#define FNC_RANDOM
float random(in float x) {
#ifdef RANDOM_SINLESS
    x = fract(x * RANDOM_SCALE.x);
    x *= x + 33.33;
    x *= x + x;
    return fract(x);
#else
    return fract(sin(x) * 43758.5453);
#endif
}

float random(in vec2 st) {
#ifdef RANDOM_SINLESS
    vec3 p3  = fract(vec3(st.xyx) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
#else
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
#endif
}

float random(in vec3 pos) {
#ifdef RANDOM_SINLESS
    pos  = fract(pos * RANDOM_SCALE.xyz);
    pos += dot(pos, pos.zyx + 31.32);
    return fract((pos.x + pos.y) * pos.z);
#else
    return fract(sin(dot(pos.xyz, vec3(70.9898, 78.233, 32.4355))) * 43758.5453123);
#endif
}

float random(in vec4 pos) {
#ifdef RANDOM_SINLESS
    pos = fract(pos * RANDOM_SCALE);
    pos += dot(pos, pos.wzxy + 33.33);
    return fract((pos.x + pos.y) * (pos.z + pos.w));
#else
    float dot_product = dot(pos, vec4(12.9898,78.233,45.164,94.673));
    return fract(sin(dot_product) * 43758.5453);
#endif
}

vec2 random2(float p) {
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec2 random2(vec2 p) {
    vec3 p3 = fract(p.xyx * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec2 random2(vec3 p3) {
    p3 = fract(p3 * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec3 random3(float p) {
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xxy + p3.yzz) * p3.zyx); 
}

vec3 random3(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yxz + 19.19);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

vec3 random3(vec3 p) {
    p = fract(p * RANDOM_SCALE.xyz);
    p += dot(p, p.yxz + 19.19);
    return fract((p.xxy + p.yzz) * p.zyx);
}

vec4 random4(float p) {
    vec4 p4 = fract(p * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);   
}

vec4 random4(vec2 p) {
    vec4 p4 = fract(p.xyxy * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

vec4 random4(vec3 p) {
    vec4 p4 = fract(p.xyzx * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

vec4 random4(vec4 p4) {
    p4 = fract(p4  * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}
#endif
#ifndef FNC_ROTATE2D
#define FNC_ROTATE2D
mat2 rotate2d(in float r){
    float c = cos(r);
    float s = sin(r);
    return mat2(c, -s, s, c);
}
#endif
#ifndef QTR_PI
#define QTR_PI 0.78539816339
#endif
#ifndef HALF_PI
#define HALF_PI 1.5707963267948966192313216916398
#endif
#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif
#ifndef TAU
#define TAU 6.2831853071795864769252867665590
#endif
#ifndef ONE_OVER_PI
#define ONE_OVER_PI 0.31830988618
#endif
#ifndef SQRT_HALF_PI
#define SQRT_HALF_PI 1.25331413732
#endif
#ifndef PHI
#define PHI 1.618033988749894848204586834
#endif
#ifndef EPSILON
#define EPSILON 0.0000001
#endif
#ifndef GOLDEN_RATIO
#define GOLDEN_RATIO 1.6180339887
#endif
#ifndef GOLDEN_RATIO_CONJUGATE 
#define GOLDEN_RATIO_CONJUGATE 0.61803398875
#endif
#ifndef GOLDEN_ANGLE 
#define GOLDEN_ANGLE 2.39996323
#endif
#ifndef FNC_SCALE
#define FNC_SCALE
vec2 scale(in float st, in float s, in vec2 center) { return (st - center) * s + center; }
vec2 scale(in float st, in float s) {
#ifdef CENTER_2D
    return scale(st,  s, CENTER_2D);
#else
    return scale(st,  s, vec2(0.5));
#endif
}

vec2 scale(in vec2 st, in vec2 s, in vec2 center) { return (st - center) * s + center; }
vec2 scale(in vec2 st, in float s, in vec2 center) { return scale(st, vec2(s), center); }
vec2 scale(in vec2 st, in vec2 s) {
#ifdef CENTER_2D
    return (st - CENTER_2D) * s + CENTER_2D;
#else
    return (st - 0.5) * s + 0.5;
#endif
}

vec2 scale(in vec2 st, in float s) {
#ifdef CENTER_2D
    return (st - CENTER_2D) * s + CENTER_2D;
#else
    return (st - 0.5) * s + 0.5;
#endif
}

vec3 scale(in vec3 st, in vec3 s, in vec3 center) { return (st - center) * s + center; }
vec3 scale(in vec3 st, in float s, in vec3 center) { return (st - center) * s + center; }
vec3 scale(in vec3 st, in vec3 s) {
#ifdef CENTER_3D
    return (st - CENTER_3D) * s + CENTER_3D;
#else
    return (st - 0.5) * s + 0.5;
#endif
}

vec3 scale(in vec3 st, in float s) {
#ifdef CENTER_3D
    return (st - CENTER_3D) * s + CENTER_3D;
#else
    return (st - 0.5) * s + 0.5;
#endif
}

vec4 scale(in vec4 st, float s) { return vec4(scale(st.xy, s), st.zw); }
vec4 scale(in vec4 st, vec2 s) { return vec4(scale(st.xy, s), st.zw); }
#endif

#ifndef FNC_STARSDF
#define FNC_STARSDF
float starSDF(in vec2 st, in int V, in float s) {
#ifdef CENTER_2D
    st -= CENTER_2D;
#else
    st -= 0.5;
#endif
    st *= 2.0;
    float a = atan(st.y, st.x) / TAU;
    float seg = a * float(V);
    a = ((floor(seg) + 0.5) / float(V) +
        mix(s, -s, step(0.5, fract(seg))))
        * TAU;
    return abs(dot(vec2(cos(a), sin(a)),
                   st));
}

float starSDF(in vec2 st, in int V) {
    return starSDF( scale(st, 12.0/float(V)), V, 0.1);
}
#endif
#ifndef QTR_PI
#define QTR_PI 0.78539816339
#endif
#ifndef HALF_PI
#define HALF_PI 1.5707963267948966192313216916398
#endif
#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif
#ifndef TAU
#define TAU 6.2831853071795864769252867665590
#endif
#ifndef ONE_OVER_PI
#define ONE_OVER_PI 0.31830988618
#endif
#ifndef SQRT_HALF_PI
#define SQRT_HALF_PI 1.25331413732
#endif
#ifndef PHI
#define PHI 1.618033988749894848204586834
#endif
#ifndef EPSILON
#define EPSILON 0.0000001
#endif
#ifndef GOLDEN_RATIO
#define GOLDEN_RATIO 1.6180339887
#endif
#ifndef GOLDEN_RATIO_CONJUGATE 
#define GOLDEN_RATIO_CONJUGATE 0.61803398875
#endif
#ifndef GOLDEN_ANGLE 
#define GOLDEN_ANGLE 2.39996323
#endif

#ifndef FNC_POLYSDF
#define FNC_POLYSDF
float polySDF(in vec2 st, in int V) {
#ifdef CENTER_2D
    st -= CENTER_2D;
    st *= 2.0;
#else
    st = st * 2.0 - 1.0;
#endif
    float a = atan(st.x, st.y) + PI;
    float r = length(st);
    float v = TAU / float(V);
    return cos(floor(.5 + a / v) * v - a ) * r;
}
#endif

mat2 scale(vec2 _scale){
    return mat2(_scale.x,0.,
    0.,_scale.y);
}

float fill(float sdf,float size){
    return 1.-step(size,sdf);
}

float petal(vec2 uv,int index){
    
    float seed=float(index)+uIndex+.3;
    
    float wiggle=random(seed)*1.2;
    wiggle*=uAppearRotate;
    
    uv-=vec2(.5);
    uv*=scale(vec2(mix(8.,1.,uAppearOpacity)));
    
    
    uv*=rotate2d((random(seed+2.)-wiggle)*PI);
    
    float floating_speed=4.;
    float floating_strength=.1;
    
    float floating=cos((uTime-float(index)*.15)*floating_speed)*floating_strength;
    floating=mix(0.,floating,uVelocity);
    
    uv*=rotate2d(floating*PI);
    
    
    uv+=vec2(.5);
    float shape;
    if(uType==1){
        
        float size=float(index+1)/float(number)*.5;
        shape=fill(starSDF(uv,7,.04),size);
    }else if(uType==2){
        
        float size=float(index+1)/float(number)*.5;
        shape=fill(polySDF(uv,4),size);
    }else if(uType==3){
        float size=float(index+1)/float(number)*.36;
        shape=fill(starSDF(uv,5,.06),size);
        
    }
    
    return shape;
}

void main(){
    vec4 color=vec4(0.);
    vec2 uv=vUv;
    
    for(int i=0;i<number+1;i++){
        float delay=float(i)*.05;
        float appear=clamp(uTime*.3-delay,0.,1.);
        
        float opacity=float(i)/10.;
        vec4 petal_final_color=vec4(1.,1.,1.,1./float(number)*.8);
        
        vec4 petal_color=mix(vec4(0.),petal_final_color,petal(uv,i)*uAppearOpacity);
        
        color+=petal_color;
        
    }
    
    FragData[0]=color;
    FragData[1]=vec4(0.);
    FragData[2]=vec4(0.,0.,1.,1.);
}`,
  DE = `#version 300 es

in vec2 uv;
in vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main(){
    vUv=uv;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}`;
class zE {
  constructor({
    element: e,
    geometry: n,
    gl: r,
    scene: i,
    screen: s,
    viewport: o,
    index: a,
    type: l,
  }) {
    (this.element = e),
      (this.index = a),
      (this.geometry = n),
      (this.gl = r),
      (this.scene = i),
      (this.screen = s),
      (this.viewport = o),
      (this.type = l),
      (this.scroll = 0),
      (this.velocity = 0),
      (this.element.dataset.opacity = 0),
      (this.element.dataset.rotate = 0),
      this.createMesh(),
      this.createBounds(),
      this.onResize();
  }
  createMesh() {
    const e = new $a(this.gl, {
      fragment: kE,
      vertex: DE,
      uniforms: {
        uTime: {
          value: 0,
        },
        uAppearOpacity: {
          value: 1,
        },
        uAppearRotate: {
          value: 1,
        },
        uIndex: {
          value: this.index,
        },
        uVelocity: {
          value: this.velocity,
        },
        uType: {
          value: this.type,
        },
      },
      transparent: !0,
    });
    (this.mesh = new ja(this.gl, {
      geometry: this.geometry,
      program: e,
    })),
      this.mesh.setParent(this.scene);
  }
  createBounds() {
    (this.bounds = this.element.getBoundingClientRect()),
      this.updateScale(),
      this.updatePosition();
  }
  updateScale() {
    (this.mesh.scale.x =
      (this.viewport.width * this.bounds.width) / this.screen.width),
      (this.mesh.scale.y =
        (this.viewport.height * this.bounds.height) / this.screen.height);
  }
  updatePosition() {
    (this.mesh.position.y =
      this.viewport.height / 2 -
      this.mesh.scale.y / 2 -
      (this.bounds.top / this.screen.height) * this.viewport.height),
      (this.mesh.position.x =
        -(this.viewport.width / 2) +
        this.mesh.scale.x / 2 +
        (this.bounds.left / this.screen.width) * this.viewport.width);
  }
  updateUniforms() {
    (this.mesh.program.uniforms.uAppearOpacity.value = parseFloat(
      this.element.dataset.opacity
    )),
      (this.mesh.program.uniforms.uAppearRotate.value = parseFloat(
        this.element.dataset.rotate
      )),
      (this.mesh.program.uniforms.uTime.value += 0.04);
  }
  update(e, n) {
    this.mesh &&
      (this.updateUniforms(),
      this.velocity !== n &&
        ((this.velocity = n), (this.mesh.program.uniforms.uVelocity.value = n)),
      e !== this.scroll && ((this.scroll = e), this.createBounds()));
  }
  onResize(e) {
    if (e) {
      const { screen: n, viewport: r } = e;
      n && (this.screen = n), r && (this.viewport = r);
    }
    this.createBounds();
  }
}
var IE = `#version 300 es
precision highp float;

uniform vec2 uImageSizes;
uniform vec2 uResolution;
uniform float uTextGutter;
uniform vec2 uPlaneSizes;
uniform vec2 uCurrentTypoSize;
uniform sampler2D tMap;

uniform float uTime;
uniform float uAppearNoiseOpacity;
uniform float uAppearTypoOpacity;
uniform float uAppearTypoScale;
uniform float uReduceScaling;
uniform float uVerticalTranslation;
uniform float uScrollOut;
uniform float uBottomMask;
uniform float uTopMask;
uniform float uHasNoise;

uniform float uNoiseThreshold;
uniform float uNoisePower;

in vec2 vUv;

out vec4 FragData[3];

#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif
#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif

#ifndef FNC_PERMUTE
#define FNC_PERMUTE

float permute(const in float v) { return mod289(((v * 34.0) + 1.0) * v); }
vec2 permute(const in vec2 v) { return mod289(((v * 34.0) + 1.0) * v); }
vec3 permute(const in vec3 v) { return mod289(((v * 34.0) + 1.0) * v); }
vec4 permute(const in vec4 v) { return mod289(((v * 34.0) + 1.0) * v); }

#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
#endif
#ifndef FNC_QUINTIC
#define FNC_QUINTIC 

float quintic(const in float v) { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec2  quintic(const in vec2 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec3  quintic(const in vec3 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec4  quintic(const in vec4 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }

#endif

#ifndef FNC_CNOISE
#define FNC_CNOISE

float cnoise(in vec2 P) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod289(Pi); 
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;

    vec4 i = permute(permute(ix) + iy);

    vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
    vec4 gy = abs(gx) - 0.5 ;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;

    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);

    vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;

    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));

    vec2 fade_xy = quintic(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

float cnoise(in vec3 P) {
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = quintic(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

float cnoise(in vec4 P) {
    vec4 Pi0 = floor(P); 
    vec4 Pi1 = Pi0 + 1.0; 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec4 Pf0 = fract(P); 
    vec4 Pf1 = Pf0 - 1.0; 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = vec4(Pi0.zzzz);
    vec4 iz1 = vec4(Pi1.zzzz);
    vec4 iw0 = vec4(Pi0.wwww);
    vec4 iw1 = vec4(Pi1.wwww);

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 ixy00 = permute(ixy0 + iw0);
    vec4 ixy01 = permute(ixy0 + iw1);
    vec4 ixy10 = permute(ixy1 + iw0);
    vec4 ixy11 = permute(ixy1 + iw1);

    vec4 gx00 = ixy00 * (1.0 / 7.0);
    vec4 gy00 = floor(gx00) * (1.0 / 7.0);
    vec4 gz00 = floor(gy00) * (1.0 / 6.0);
    gx00 = fract(gx00) - 0.5;
    gy00 = fract(gy00) - 0.5;
    gz00 = fract(gz00) - 0.5;
    vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
    vec4 sw00 = step(gw00, vec4(0.0));
    gx00 -= sw00 * (step(0.0, gx00) - 0.5);
    gy00 -= sw00 * (step(0.0, gy00) - 0.5);

    vec4 gx01 = ixy01 * (1.0 / 7.0);
    vec4 gy01 = floor(gx01) * (1.0 / 7.0);
    vec4 gz01 = floor(gy01) * (1.0 / 6.0);
    gx01 = fract(gx01) - 0.5;
    gy01 = fract(gy01) - 0.5;
    gz01 = fract(gz01) - 0.5;
    vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
    vec4 sw01 = step(gw01, vec4(0.0));
    gx01 -= sw01 * (step(0.0, gx01) - 0.5);
    gy01 -= sw01 * (step(0.0, gy01) - 0.5);

    vec4 gx10 = ixy10 * (1.0 / 7.0);
    vec4 gy10 = floor(gx10) * (1.0 / 7.0);
    vec4 gz10 = floor(gy10) * (1.0 / 6.0);
    gx10 = fract(gx10) - 0.5;
    gy10 = fract(gy10) - 0.5;
    gz10 = fract(gz10) - 0.5;
    vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
    vec4 sw10 = step(gw10, vec4(0.0));
    gx10 -= sw10 * (step(0.0, gx10) - 0.5);
    gy10 -= sw10 * (step(0.0, gy10) - 0.5);

    vec4 gx11 = ixy11 * (1.0 / 7.0);
    vec4 gy11 = floor(gx11) * (1.0 / 7.0);
    vec4 gz11 = floor(gy11) * (1.0 / 6.0);
    gx11 = fract(gx11) - 0.5;
    gy11 = fract(gy11) - 0.5;
    gz11 = fract(gz11) - 0.5;
    vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
    vec4 sw11 = step(gw11, vec4(0.0));
    gx11 -= sw11 * (step(0.0, gx11) - 0.5);
    gy11 -= sw11 * (step(0.0, gy11) - 0.5);

    vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
    vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
    vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
    vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
    vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
    vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
    vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
    vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
    vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
    vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
    vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
    vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
    vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
    vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
    vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
    vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

    vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
    g0000 *= norm00.x;
    g0100 *= norm00.y;
    g1000 *= norm00.z;
    g1100 *= norm00.w;

    vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
    g0001 *= norm01.x;
    g0101 *= norm01.y;
    g1001 *= norm01.z;
    g1101 *= norm01.w;

    vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
    g0010 *= norm10.x;
    g0110 *= norm10.y;
    g1010 *= norm10.z;
    g1110 *= norm10.w;

    vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
    g0011 *= norm11.x;
    g0111 *= norm11.y;
    g1011 *= norm11.z;
    g1111 *= norm11.w;

    float n0000 = dot(g0000, Pf0);
    float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
    float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
    float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
    float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
    float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
    float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
    float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
    float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
    float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
    float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
    float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
    float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
    float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
    float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
    float n1111 = dot(g1111, Pf1);

    vec4 fade_xyzw = quintic(Pf0);
    vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
    vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
    vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
    vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
    float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
    return 2.2 * n_xyzw;
}
#endif

float map(float value,float min1,float max1,float min2,float max2){
    return min2+(value-min1)*(max2-min2)/(max1-min1);
}

float topOffset=100.;

float scrollOutVerticalTranslation=1.2;
float scrollOutScale=.7;

vec4 typo(){
    
    vec2 uv=vUv;
    vec2 resolution=vec2(gl_FragCoord.xy/vUv.xy);
    
    
    float normalizedTopOffset=mix(topOffset/uResolution.y,0.,uScrollOut);
    uv.y=uv.y+normalizedTopOffset;
    
    /** ----- COVER ------- */
    
    
    float textureAspect=uImageSizes.x/uImageSizes.y;
    float frameAspect=uResolution.x/uResolution.y;
    float textureFrameRatio=textureAspect/frameAspect;
    vec2 textureScale=vec2(1.,textureFrameRatio);
    
    
    
    
    uv.y=(uv.y-1.)*-1.;
    float finalScale =uv.y*textureScale.y;
    
    uv.y=mix(uv.y, finalScale, uAppearTypoScale);
    
    /** ----- GUTTER ------- */
    
    
    float gutter=uTextGutter/uResolution.x;
    
    uv=uv*(1.+gutter);
    
    uv.x-=gutter/2.;
    
    
    uv.y=(uv.y-1.)*-1.;
    
    /** ----- SCROLL ANIMATION ------- */
    
    float typoMaxVerticalTranslation=1.;
    
    uv.y-=mix(0.,1.,uScrollOut);
    
    
    uv.x=(uv.x-.5)*2.;
    uv=uv*mix(1.,scrollOutScale,uScrollOut);
    uv.x=(uv.x+1.)*.5;
    
    vec4 color=texture(tMap,uv);
    float opacity=mix(color.a,mix(color.a,.4,uScrollOut),color.a);
    color.a=opacity;
    
    return color;
    
}

float noiseTexture(){
    
    float noise=cnoise(vec3(gl_FragCoord.y/300.,gl_FragCoord.x/600.,(uTime+100.)/30.));
    noise=map(noise,-1.,1.,1.,-1.);
    
    float noiseClamped=map(noise,-1.,1.,0.,.55)-.27;
    
    noiseClamped=clamp(noiseClamped,0.,1.);
    
    return noiseClamped;
}

float bottomTextMaskTexture(){
    
    float offset=200./uResolution.y*(1.-uBottomMask);
    float heightOfMask=max(50./uResolution.y-offset,0.);
    float heightOfGradient=max(150./uResolution.y-offset,0.);
    
    
    float line=smoothstep(heightOfMask,heightOfGradient+heightOfMask,vUv.y);
    
    
    
    
    line=1.-line;
    return line;
}
float topTextMaskTexture(){
    
    float offset=200./uResolution.y*(1.-uTopMask);
    float heightOfMask=max(50./uResolution.y-offset,0.);
    float heightOfGradient=max(50./uResolution.y-offset,0.);
    
    
    float line=smoothstep(heightOfMask,heightOfGradient+heightOfMask,1.-vUv.y);
    
    
    
    
    line=1.-line;
    return line;
}

float textMasksTexture(){
    float bottomTextMask=bottomTextMaskTexture();
    float topTextMask=topTextMaskTexture();
    return bottomTextMask+topTextMask;
}

void main(){
    
    vec4 fragColor=vec4(0.,0.,0.,0.);
    vec4 noise;
    noise.rgb=vec3(mix(0.,noiseTexture(),uHasNoise));
    noise.a=mix(0.,1.,uAppearNoiseOpacity);
    
    vec4 typo=typo();
    typo.a=mix(0.,typo.a,uAppearTypoOpacity);
    
    float textMasks=textMasksTexture();
    
    fragColor=mix(noise,typo,typo.a);
    
    fragColor=mix(fragColor,vec4(0.,0.,0.,0.),textMasks);
    
    FragData[0]=fragColor;
    FragData[1]=vec4(0.);
    FragData[2]=vec4(0.,0.,1.,1.);
    
}`,
  FE = `#version 300 es

in vec2 uv;
in vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main(){
    vUv=uv;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}`,
  NE = `#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;

uniform sampler2D tPrimaryMap;
uniform sampler2D tSecondaryMap;
uniform sampler2D tDitherType;

uniform sampler2D uPrimaryDitherTexture;
uniform float uPrimaryDitherTextureSize;

uniform sampler2D uSecondaryDitherTexture;
uniform float uSecondaryDitherTextureSize;

uniform float uInversedTexture;

uniform float uPixelation;
uniform float pixelRatio;
uniform float pixelated;
uniform float dithered;
uniform float uInversedPalette;

uniform sampler2D uPrimaryDitherPalette;
uniform sampler2D uSecondaryDitherPalette;
uniform float uLmRampConstrast;
uniform float uLmRampOffset;

uniform float uCmDistanceFactor;

in vec2 vUv;
out vec4 fragColor;

float colorDistance(vec3 color1,vec3 color2)
{
    return sqrt(distance(color1*color1,color2*color2));
}

vec3 findClosestColorFrom(sampler2D palette,vec3 color){
    ivec2 palette_size=textureSize(palette,0);
    int palette_width=palette_size.x/palette_size.y;
    
    float number_of_colors_in_palette=float(palette_width)-1.;
    float color_size=1./number_of_colors_in_palette;
    
    vec3 color_to_use=texture(palette,vec2(.001,.5)).rgb;
    
    for(int i=0;i<(int(palette_width));i++)
    {
        
        float color_to_test_x=color_size*float(i);
        vec3 color_to_test=texture(palette,vec2(color_to_test_x+.0001,.5)).rgb;
        
        if(colorDistance(color,color_to_test)<colorDistance(color,color_to_use))
        {
            
            color_to_use=color_to_test;
        }
    }
    
    return color_to_use;
    
}

vec3 getDitherPalette(float lum){
    
    
    ivec2 palette_size=textureSize(uPrimaryDitherPalette,0);
    int palette_width=palette_size.x/palette_size.y;
    
    float number_of_colors_in_palette=float(palette_width)-1.;
    float color_size=1./number_of_colors_in_palette;
    
    float lower_boundary_color=floor(lum*number_of_colors_in_palette)*color_size;
    float upper_boundary_color=(floor(lum*number_of_colors_in_palette)+1.)*color_size;
    float lum_scaled_between_two_boundaries=fract(lum*number_of_colors_in_palette);
    
    return vec3(lower_boundary_color,upper_boundary_color,lum_scaled_between_two_boundaries);
}

vec2 pixelateUV(vec2 startingUv,float pixelation)
{
    vec2 p=startingUv.st;
    float updatedPixelRatio=pixelRatio*10.+1.;
    float pixelationUpdated=pixelation;
    p.x-=mod(p.x,1./pixelationUpdated*updatedPixelRatio);
    p.y-=mod(p.y,1./pixelationUpdated*uResolution.x/uResolution.y);
    p=mix(startingUv,p,pixelated);
    
    return p;
}

vec3 ditherByColorMatching(vec3 color,float threshold,sampler2D palette){
    vec3 color_attempt=color+threshold*uCmDistanceFactor;
    return findClosestColorFrom(palette,color_attempt);
}

vec3 ditherByLuminanceMapping(vec3 color,float threshold){
    
    
    float lum=(color.r*.299)+(color.g*.587)+(color.b*.114);
    
    
    lum=(lum-.5+uLmRampOffset)*uLmRampConstrast+.5;
    lum=clamp(lum,0.,1.);
    
    lum=max(lum-.00001,0.);
    
    
    
    threshold=threshold*.99+.005;
    
    
    
    
    
    
    
    vec3 ditherPalette=getDitherPalette(lum);
    float lower_boundary_color=ditherPalette.x;
    float upper_boundary_color=ditherPalette.y;
    float lum_scaled_between_two_boundaries=ditherPalette.z;
    
    float boundary_to_use=lum_scaled_between_two_boundaries>threshold?1.:0.;
    
    float x_pos_of_color_to_use=mix(lower_boundary_color,upper_boundary_color,boundary_to_use);
    
    x_pos_of_color_to_use=mix(x_pos_of_color_to_use,1.-x_pos_of_color_to_use,uInversedPalette);
    
    return texture(uPrimaryDitherPalette,vec2(x_pos_of_color_to_use,.5)).rgb;
}

void main(){
    
    
    
    
    
    
    
    
    vec2 primary_uv=pixelateUV(vUv,uPixelation);
    vec2 secondary_uv_1=vUv;
    vec2 secondary_uv_2=pixelateUV(vUv,uPixelation);
    
    float imgAppear=0.;
    
    vec2 secondary_uv=mix(secondary_uv_1,secondary_uv_2,imgAppear);
    
    
    
    vec4 ditherTypeTexture=texture(tDitherType,secondary_uv);
    float ditherType=ceil(ditherTypeTexture.r);
    
    
    
    vec3 primary_pixelatedTexture=texture(tPrimaryMap,primary_uv).rgb;
    vec3 secondary_pixelatedTexture=texture(tSecondaryMap,secondary_uv).rgb;
    
    
    
    float primary_threshold=texture(uPrimaryDitherTexture,mod(gl_FragCoord.xy,uPrimaryDitherTextureSize)/uPrimaryDitherTextureSize).r;
    primary_threshold=mix(primary_threshold,1.-primary_threshold,uInversedTexture);
    
    float secondary_threshold=texture(uSecondaryDitherTexture,mod(gl_FragCoord.xy,uSecondaryDitherTextureSize)/uSecondaryDitherTextureSize).r;
    secondary_threshold=mix(secondary_threshold,1.-secondary_threshold,uInversedTexture);
    
    
    
    vec3 primary_dithering=ditherByLuminanceMapping(primary_pixelatedTexture.rgb,primary_threshold);
    vec3 secondary_dithering_1=ditherByColorMatching(secondary_pixelatedTexture.rgb,secondary_threshold,uSecondaryDitherPalette);
    
    vec3 secondary_dithering=secondary_dithering_1;
    
    
    vec3 ditherToUse=mix(primary_dithering,secondary_dithering,ditherType);
    
    
    vec4 ditheredColor=vec4(ditherToUse,1.);
    
    fragColor=ditheredColor;
    
}`,
  BE = `#version 300 es

in vec3 position;
in vec2 uv;

out vec2 vUv;

void main(){
    vUv=uv;
    gl_Position=vec4(position,1.);
}`;
const Md = "" + new URL("bagage-white.f8729363.png", import.meta.url).href,
  Od =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAgpJREFUOE9dU0ty2kAQfVNsKecqVLx14luAIAtJC5Awh5juQxgJNjOzCAycgoq3VHwVqtg6pVS3xMdeTXVP95t+r98YAA0RI3gHy4SyKHGNiTGZjMHM8M6BiFCUck/wPoDIwhwOh0YSwXtYYpRlAWKCdx5MhPGvSdfgFXheFLACEDzYEsxgMFCALMu0MMaojanETFiv1pq/v7/EUmdOp9MVgIkRd1tY2zUIwPoGwJaxjVudJMtSSL3p9/uNIPmOQpKMPnF8eVmAybb3zEiSBGSFslMq5ng86gRSIMgCIIBOY8LLYqFiBRe0YZyM9AzB66Tm6cdTI2KkWa6Fq1XdUshbTfb7Pch2IzOjqmoQW2RprpOZj49/jYiVpak21HWt3ISjrHW/219FlHxVV12cK5Dp9XpXCtZazMt5u8aOwnA4vFvjzQfBiSYE8/b2R410aSjKQicQH8gLXwFKecCKD5xSM4/fH9s1KmeLGHcqUi4+sIRltdS8cJbJ4rZbY6eROZ/PjTakrXG2MWqDAhBj+foKYm6NRYRdjLcHZI0PD99aK8tIusZEAWSNQmU2m975grr7m0bm/f2vAjgXwNwVWIILTgGm05nmLxqNkqQzlnwmgnn++dyuMct0tFVVqeNaCoTfm41+mjTP1GB1VWvdxSemaZpPn0kKBFA4i1E2GxHt9pnEJ0IxFSMx4T9304/7jk2CEgAAAABJRU5ErkJggg==",
  LE =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAAFdJREFUGFcdy8ERwCAIBdFPJUAlhsZMJ7GTiI0oVkImXnfeUn97rljYsSHCEFXQmjNZFcqM2IFYAap3Tfdx1B/MDJSZZ78ug3eHioCe1lJZ4MNRSkHExgfX8y4tMxLK3gAAAABJRU5ErkJggg==",
  UE =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABCgAwAEAAAAAQAAAAgAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAAgAEAMBEQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/3QAEAAL/2gAMAwEAAhEDEQA/AOfr/Jc/6mD+4Cv9UD/mfP/Z",
  HE =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAICAMAAABJXgScAAAAPFBMVEUAAABLVGGXqcTm5eDoy466eD2COztAJjx9VUDCny3i5peavTE8Y0c8MEU1WnqNs7Lj3qyheIZuO2o+JEfFWFO/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAOUlEQVQ4je3OtwGAMAwAMFNDaKH8/yuLXmCzLlAEHT0DIxMzhYXKysbOwUnj4ubhJTKYwQxm8N/gB1e2L4GoQrh+AAAAAElFTkSuQmCC",
  $E =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/4QDKRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAABCgAwAEAAAAAQAAAAikBgADAAAAAQAAAAAAAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIABADAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+16vJPtT/ABaa9Y+KAP/Z";
Ke.registerPlugin(Vr);
class jE {
  constructor() {
    (this.initialized = !1),
      (this.ready = !1),
      (this.params = {
        post: !0,
        pixelated: !0,
        dithered: !0,
        pixelation: 165,
        pixelRatio: 0.1,
        postProcessingType: "luminance",
        inversedPalette: !0,
        inversedTexture: !1,
        rampContrast: 1,
        rampOffset: 0,
        ditherFactor: 0.2,
        noiseThreshold: 0.2,
        noisePower: 1,
      }),
      (this.textures = {}),
      (this.scroll = {
        y: 0,
        velocity: 0,
      }),
      (this.textMasks = {
        bottom: 0,
        top: 0,
      }),
      (this.logo = {
        scaleY: 1,
        y: 0,
        scrollOut: 0,
      }),
      (this.appear = {
        typoOpacity: 0,
        typoScale: 0,
        noiseOpacity: 0,
      }),
      (this.typoAspectRatio = 0),
      (this.typoSizeInPixels = {
        width: 0,
        height: 0,
      }),
      (this.isMobile = !1);
  }
  initialize() {
    this.addEventListeners(),
      this.createRenderer(),
      this.createSceneCamera(),
      this.onResize(),
      (this.planeGeometry = new uf(this.gl)),
      this.createFullscreenPlane(),
      this.createPost(),
      this.onResize(),
      this.update(),
      (this.isMobile = window.innerWidth < 800),
      (this.initialized = !0);
  }
  async initializeHome() {
    this.textMasks = {
      bottom: 0,
      top: 1,
    };
    const e = await this.loadImages({
      bagageTypoPng: Md,
      ditherTextureBayer16: Od,
      ditherPaletteDefault: UE,
    });
    this.addTextures(e),
      (this.primaryDitherPalette = this.textures.ditherPaletteDefault),
      (this.primaryDitherTexture = this.textures.ditherTextureBayer16),
      (this.secondaryDitherPalette = this.primaryDitherPalette),
      (this.secondaryDitherTexture = this.primaryDitherTexture),
      this.initialized || this.initialize(),
      (this.fullscreenPlane.program.uniforms.uHasNoise.value = 1),
      (this.primaryDitherPaletteTexture.image = this.primaryDitherPalette),
      (this.primaryDitherTextureTexture.image = this.primaryDitherTexture),
      (this.post.program.uniforms.uPrimaryDitherTextureSize.value =
        this.primaryDitherTexture.naturalWidth),
      (this.secondaryDitherPaletteTexture.image = this.secondaryDitherPalette),
      (this.secondaryDitherTextureTexture.image = this.secondaryDitherTexture),
      (this.post.program.uniforms.uSecondaryDitherTextureSize.value =
        this.secondaryDitherTexture.naturalWidth),
      this.onResize();
  }
  async initializeAbout({ imgs: e, thingies: n }) {
    return new Promise(async (r, i) => {
      const s = await this.loadImages({
        bagageTypoPng: Md,
        ditherTextureTiles: LE,
        ditherTextureBayer16: Od,
        ditherPaletteDark: $E,
        ditherPaletteVision: HE,
      });
      this.addTextures(s),
        (this.textMasks = {
          bottom: 0,
          top: 0,
        }),
        (this.primaryDitherPalette = this.textures.ditherPaletteDark),
        (this.primaryDitherTexture = this.textures.ditherTextureTiles),
        (this.secondaryDitherPalette = this.textures.ditherPaletteVision),
        (this.secondaryDitherTexture = this.textures.ditherTextureBayer16),
        this.initialized || this.initialize(),
        (this.fullscreenPlane.program.uniforms.uHasNoise.value = 0),
        await this.createGLImages(e),
        (this.primaryDitherPaletteTexture.image = this.primaryDitherPalette),
        (this.primaryDitherTextureTexture.image = this.primaryDitherTexture),
        (this.post.program.uniforms.uPrimaryDitherTextureSize.value =
          this.primaryDitherTexture.naturalWidth),
        (this.secondaryDitherPaletteTexture.image =
          this.secondaryDitherPalette),
        (this.secondaryDitherTextureTexture.image =
          this.secondaryDitherTexture),
        (this.post.program.uniforms.uSecondaryDitherTextureSize.value =
          this.secondaryDitherTexture.naturalWidth),
        this.createThingies(n),
        this.onResize(),
        r();
    });
  }
  async loadImages(e) {
    return new Promise(async (n, r) => {
      const i = Object.keys(e),
        s = [];
      for (let a = 0; a < i.length; a++) {
        const l = e[i[a]];
        this.textures[i[a]] ||
          s.push(
            new Promise((c, u) => {
              const f = new Image();
              (f.src = l),
                (f.onload = (h) => {
                  c({
                    [i[a]]: f,
                  });
                });
            })
          );
      }
      const o = await Promise.all(s).then((a) =>
        a.reduce(
          (l, c) => ({
            ...l,
            ...c,
          }),
          {}
        )
      );
      n(o);
    });
  }
  async createGLImages(e) {
    this.imageElements = [...e];
    const n = [];
    return (
      (this.images = this.imageElements.map((r) => {
        let i = new OE({
          element: r,
          geometry: this.planeGeometry,
          camera: this.camera,
          gl: this.gl,
          scene: this.scene,
          screen: this.screen,
          viewport: this.viewport,
        });
        return n.push(i.initialize()), i;
      })),
      Promise.all(n)
    );
  }
  createThingies(e) {
    this.thingies = e.map(
      (n, r) =>
        new zE({
          element: n.el,
          type: n.type,
          geometry: this.planeGeometry,
          gl: this.gl,
          scene: this.scene,
          screen: this.screen,
          viewport: this.viewport,
          index: r,
        })
    );
  }
  createSceneCamera() {
    (this.scene = new lf()),
      (this.camera = new Jb(this.gl, {
        fov: 45,
      })),
      (this.camera.position.z = 5),
      (this.renderTarget = new hE(this.gl, {
        color: 3,
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: this.isMobile ? 1 : 0.5,
      }));
  }
  async createFullscreenPlane() {
    const e = new Sr(this.gl, {
        magFilter: this.gl.NEAREST,
        minFilter: this.gl.NEAREST,
      }),
      n = new $a(this.gl, {
        fragment: IE,
        vertex: FE,
        uniforms: {
          tMap: {
            value: e,
          },
          uPlaneSizes: {
            value: [0, 0],
          },
          uImageSizes: {
            value: [0, 0],
          },
          uTextGutter: {
            value: 0,
          },
          uResolution: this.resolution,
          uTime: {
            value: 0,
          },
          uAppearNoiseOpacity: {
            value: 0,
          },
          uAppearTypoOpacity: {
            value: 0,
          },
          uAppearTypoScale: {
            value: 0,
          },
          uReduceScaling: {
            value: this.logo.scaleY,
          },
          uVerticalTranslation: {
            value: this.logo.y,
          },
          uScrollOut: {
            value: this.logo.scrollOut,
          },
          uBottomMask: {
            value: this.textMasks.bottom,
          },
          uTopMask: {
            value: this.textMasks.top,
          },
          uNoiseThreshold: {
            value: this.params.noiseThreshold,
          },
          uNoisePower: {
            value: this.params.noisePower,
          },
          uHasNoise: {
            value: 0,
          },
        },
        transparent: !0,
      });
    (e.image = this.textures.bagageTypoPng),
      (n.uniforms.uImageSizes.value = [
        this.textures.bagageTypoPng.naturalWidth,
        this.textures.bagageTypoPng.naturalHeight,
      ]),
      (this.typoAspectRatio =
        this.textures.bagageTypoPng.naturalWidth /
        this.textures.bagageTypoPng.naturalHeight),
      this.onResize(),
      (this.ready = !0),
      (this.fullscreenPlane = new ja(this.gl, {
        geometry: this.planeGeometry,
        program: n,
      })),
      this.fullscreenPlane.setParent(this.scene);
  }
  createPost() {
    const e = new CE(this.gl);
    (this.primaryDitherTextureTexture = new Sr(this.gl, {
      image: this.primaryDitherTexture,
      magFilter: this.gl.NEAREST,
      minFilter: this.gl.NEAREST,
    })),
      (this.primaryDitherPaletteTexture = new Sr(this.gl, {
        image: this.primaryDitherpalette,
        magFilter: this.gl.NEAREST,
        minFilter: this.gl.NEAREST,
      })),
      (this.secondaryDitherTextureTexture = new Sr(this.gl, {
        image: this.secondaryDitherTexture,
        magFilter: this.gl.NEAREST,
        minFilter: this.gl.NEAREST,
      })),
      (this.secondaryDitherPaletteTexture = new Sr(this.gl, {
        image: this.secondaryDitherPalette,
        magFilter: this.gl.NEAREST,
        minFilter: this.gl.NEAREST,
      }));
    const n = new $a(this.gl, {
      vertex: BE,
      fragment: NE,
      uniforms: {
        tPrimaryMap: {
          value: this.renderTarget.textures[0],
        },
        tSecondaryMap: {
          value: this.renderTarget.textures[1],
        },
        tDitherType: {
          value: this.renderTarget.textures[2],
        },
        uPrimaryDitherTexture: {
          value: this.primaryDitherTextureTexture,
        },
        uPrimaryDitherTextureSize: {
          value: this.primaryDitherTexture.naturalWidth,
        },
        uPrimaryDitherPalette: {
          value: this.primaryDitherPaletteTexture,
        },
        uSecondaryDitherTexture: {
          value: this.secondaryDitherTextureTexture,
        },
        uSecondaryDitherTextureSize: {
          value: this.secondaryDitherPaletteTexture,
        },
        uSecondaryDitherPalette: {
          value: this.secondaryDitherPaletteTexture,
        },
        uTime: {
          value: 0,
        },
        pixelated: {
          value: 1,
        },
        uPixelation: {
          value: 100,
        },
        dithered: {
          value: 1,
        },
        uInversedPalette: {
          value: 0,
        },
        uInversedTexture: {
          value: 0,
        },
        pixelRatio: {
          value: 0,
        },
        uResolution: this.resolution,
        uLmRampConstrast: {
          value: this.params.rampContrast,
        },
        uLmRampOffset: {
          value: this.params.rampOffset,
        },
        uCmDistanceFactor: {
          value: this.params.ditherFactor,
        },
      },
    });
    this.post = new ja(this.gl, {
      geometry: e,
      program: n,
    });
  }
  createRenderer() {
    (this.renderer = new ub({
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: this.isMobile ? 1 : 0.5,
    })),
      (this.gl = this.renderer.gl),
      this.gl.clearColor(1, 1, 1, 1),
      document.getElementById("c").appendChild(this.gl.canvas);
  }
  onResize() {
    const e = window.innerWidth < 800;
    if (
      (e !== this.isMobile &&
        ((this.isMobile = e),
        (this.renderer.dpr = this.isMobile ? 1 : 0.5),
        (this.renderTarget.dpr = this.isMobile ? 1 : 0.5)),
      this.camera)
    ) {
      this.camera.perspective({
        aspect: this.gl.canvas.width / this.gl.canvas.height,
      });
      const i = this.camera.fov * (Math.PI / 180),
        s = 2 * Math.tan(i / 2) * this.camera.position.z,
        o = s * this.camera.aspect;
      this.viewport = {
        height: s,
        width: o,
      };
    }
    (this.resolution = {
      value: new cf(),
    }),
      (this.textGutter =
        parseInt(
          window
            .getComputedStyle(document.documentElement)
            .getPropertyValue("--gutter")
        ) * 2),
      (this.screen = {
        height: window.innerHeight,
        width: window.innerWidth,
      }),
      this.resolution.value.set(this.screen.width, this.screen.height),
      this.renderer.setSize(this.screen.width, this.screen.height),
      this.fullscreenPlane &&
        ((this.fullscreenPlane.scale.x = this.viewport.width),
        (this.fullscreenPlane.scale.y = this.viewport.height)),
      this.images &&
        this.images.forEach((i) =>
          i.onResize({
            screen: this.screen,
            viewport: this.viewport,
          })
        ),
      this.thingies &&
        this.thingies.forEach((i) =>
          i.onResize({
            screen: this.screen,
            viewport: this.viewport,
          })
        );
    const n = this.screen.width - this.textGutter,
      r = n / this.typoAspectRatio;
    this.typoSizeInPixels = {
      width: n,
      height: r,
    };
  }
  update() {
    this.fullscreenPlane &&
      ((this.fullscreenPlane.program.uniforms.uResolution = this.resolution),
      (this.fullscreenPlane.program.uniforms.uTextGutter.value =
        this.textGutter),
      (this.fullscreenPlane.program.uniforms.uTime.value += 0.04),
      (this.fullscreenPlane.program.uniforms.uAppearNoiseOpacity.value =
        this.appear.noiseOpacity),
      (this.fullscreenPlane.program.uniforms.uAppearTypoOpacity.value =
        this.appear.typoOpacity),
      (this.fullscreenPlane.program.uniforms.uAppearTypoScale.value =
        this.appear.typoScale),
      (this.fullscreenPlane.program.uniforms.uScrollOut.value =
        this.logo.scrollOut),
      (this.fullscreenPlane.program.uniforms.uReduceScaling.value =
        this.logo.scaleY),
      (this.fullscreenPlane.program.uniforms.uVerticalTranslation.value =
        this.logo.y),
      (this.fullscreenPlane.program.uniforms.uBottomMask.value =
        this.textMasks.bottom),
      (this.fullscreenPlane.program.uniforms.uTopMask.value =
        this.textMasks.top),
      (this.fullscreenPlane.program.uniforms.uNoiseThreshold.value =
        this.params.noiseThreshold),
      (this.fullscreenPlane.program.uniforms.uNoisePower.value =
        this.params.noisePower)),
      (this.post.program.uniforms.uResolution = this.resolution),
      (this.post.program.uniforms.uTime.value += 0.04),
      (this.post.program.uniforms.uInversedPalette.value =
        this.params.inversedPalette),
      (this.post.program.uniforms.uInversedTexture.value =
        this.params.inversedTexture),
      (this.post.program.uniforms.pixelated.value = this.params.pixelated),
      (this.post.program.uniforms.dithered.value = this.params.dithered),
      (this.post.program.uniforms.uPixelation.value = this.params.pixelation),
      (this.post.program.uniforms.pixelRatio.value = this.params.pixelRatio),
      (this.post.program.uniforms.pixelRatio.value = this.params.pixelRatio),
      (this.post.program.uniforms.uLmRampConstrast.value =
        this.params.rampContrast),
      (this.post.program.uniforms.uLmRampOffset.value = this.params.rampOffset),
      (this.post.program.uniforms.uCmDistanceFactor.value =
        this.params.ditherFactor),
      this.images && this.images.forEach((e) => e.update(this.scroll.y)),
      this.thingies &&
        this.thingies.forEach((e) =>
          e.update(this.scroll.y, this.scroll.velocity)
        ),
      this.gl.clearColor(0, 0, 0, 1),
      this.renderer.render({
        scene: this.scene,
        camera: this.camera,
        target: this.renderTarget,
      }),
      this.params.post
        ? this.renderer.render({
            scene: this.post,
          })
        : this.renderer.render({
            scene: this.scene,
            camera: this.camera,
          }),
      window.requestAnimationFrame(this.update.bind(this));
  }
  addEventListeners() {
    window.addEventListener("resize", this.onResize.bind(this));
  }
  setLogo(e) {
    this.logo = e;
  }
  setAppearValue(e) {
    this.appear = e;
  }
  setScroll({ velocity: e, y: n }) {
    this.scroll.y = n;
    const r = 70;
    this.scroll.velocity = Math.min(Math.abs(e), r) / r;
  }
  setTextMasks(e) {
    this.textMasks = e;
  }
  addTextures(e) {
    this.textures = {
      ...this.textures,
      ...e,
    };
  }
}
const lt = new jE();
function VE() {
  const t = {
    scaleY: 1,
    y: 0,
    scrollOut: 0,
  };
  return Ke.to(t, {
    scrollTrigger: {
      trigger: "#about",
      scrub: !0,
      start: "top -1px",
      end: () => `top -${lt.typoSizeInPixels.height * 1.3 + 60}px`,
      onUpdate: () => {
        lt.setLogo(t);
      },
      invalidateOnRefresh: !0,
    },
    scrollOut: 1,
    ease: "linear",
  });
}
function WE(t) {
  const e = [];
  return (
    t.forEach((n) => {
      const r = {
          opacity: 0,
          rotate: 0,
        },
        i = Ke.timeline({
          scrollTrigger: {
            trigger: n,
            scrub: !1,
            start: "top bottom-=400px",
            end: "bottom top",
          },
        });
      i
        .to(
          r,
          {
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            onUpdate: () => (n.dataset.opacity = r.opacity),
          },
          "start"
        )
        .to(
          r,
          {
            rotate: 1,
            duration: 3,
            ease: "elastic.out(1, 0.3)",
            onUpdate: () => (n.dataset.rotate = r.rotate),
          },
          "start"
        ),
        e.push(i);
    }),
    e
  );
}
function QE() {
  const t = document.getElementById("imagesProxy"),
    e = document.querySelectorAll(".image-gl-wrapper")[0],
    n = Ke.timeline({
      scrollTrigger: {
        trigger: "#imgShape",
        scrub: !0,
        start: "top 80%",
        end: () => `bottom+=${window.innerWidth * 0.2}px 30%`,
        invalidateOnRefresh: !0,
      },
    });
  return (
    n
      .to(
        "#imgWrap2",
        {
          scale: 1.3,
          duration: 1,
          xPercent: () =>
            getComputedStyle(t).getPropertyValue("--horizontalOffset") ===
            "fixed"
              ? 0
              : 100,
          x: () =>
            getComputedStyle(t).getPropertyValue("--horizontalOffset") ===
            "fixed"
              ? 230
              : 0,
          y: () =>
            getComputedStyle(e)
              .getPropertyValue("--verticalOffset")
              .split("px")[0] * -1,
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        "#imgWrap1",
        {
          scale: 1,
          duration: 1,
          y: () =>
            getComputedStyle(e)
              .getPropertyValue("--verticalOffset")
              .split("px")[0] * -1,
          xPercent: () =>
            getComputedStyle(t).getPropertyValue("--horizontalOffset") ===
            "fixed"
              ? 0
              : 100,
          x: () =>
            getComputedStyle(t).getPropertyValue("--horizontalOffset") ===
            "fixed"
              ? 230
              : 0,
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        "#imgWrap0",
        {
          scale: 1,
          duration: 1,
          y: () =>
            getComputedStyle(e)
              .getPropertyValue("--verticalOffset")
              .split("px")[0] * -1,
          xPercent: () =>
            getComputedStyle(t).getPropertyValue("--horizontalOffset") ===
            "fixed"
              ? 0
              : 100,
          x: () =>
            getComputedStyle(t).getPropertyValue("--horizontalOffset") ===
            "fixed"
              ? 230
              : 0,
          ease: "power3.inOut",
        },
        "start"
      ),
    n
  );
}
let Jc, Zc, eu;
async function qE(t, e = () => {}) {
  const n = t.querySelector("#img0"),
    r = t.querySelector("#img1"),
    i = t.querySelector("#img2"),
    s = t.querySelector("#thingyEl1"),
    o = t.querySelector("#thingyEl2"),
    a = t.querySelector("#thingyEl3"),
    l = {
      el: s,
      type: 1,
    },
    c = {
      el: o,
      type: 2,
    },
    u = {
      el: a,
      type: 3,
    };
  await lt.initializeAbout({
    imgs: [n, r, i],
    thingies: [l, c, u],
  }),
    YE(() => {
      e(), (eu = QE());
    }),
    (Jc = VE()),
    (Zc = WE([s, o, a]));
}
function YE(t) {
  const e = {
      typoOpacity: 0,
      typoScale: 0,
      noiseOpacity: 0,
    },
    n = Ke.timeline({
      paused: !0,
      onComplete: () => {
        t();
      },
    });
  n.set("#overlay", {
    backgroundColor: "transparent",
  }),
    n
      .to(
        e,
        {
          typoOpacity: 1,
          duration: 2,
          onUpdate: () => lt.setAppearValue(e),
        },
        "start"
      )
      .to(
        e,
        {
          typoScale: 1,
          duration: 2,
          ease: "power4.inOut",
          onUpdate: () => lt.setAppearValue(e),
        },
        "start"
      )
      .to(
        "#heroWithImages",
        {
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "start+=1"
      )
      .to(
        "#header",
        {
          duration: 1,
          opacity: 1,
        },
        "start+=1"
      ),
    n.play();
}
function XE(t) {
  GE();
  const e = {
      typoOpacity: 1,
      typoScale: 1,
      noiseOpacity: 0,
    },
    n = Ke.timeline({
      paused: !0,
      onComplete: () => {
        t();
      },
    });
  n
    .to(
      e,
      {
        typoOpacity: 0,
        duration: 0.4,
        onUpdate: () => lt.setAppearValue(e),
      },
      "start"
    )
    .to(
      "#heroWithImages",
      {
        y: () => `${window.innerHeight - window.innerWidth / 3}`,
        duration: 0.4,
        ease: "power3.out",
      },
      "start"
    )
    .to(
      "#header",
      {
        duration: 0.4,
        opacity: 0,
      },
      "start"
    )
    .to(
      "#overlay",
      {
        duration: 0.4,
        backgroundColor: "#F5E8E7",
      },
      "start+=0.4"
    ),
    n.play();
}
function GE() {
  Jc && Jc.kill(), eu && eu.kill(), Zc && Zc.forEach((t) => t.kill());
}
const Zt = {
  scrollToTop: !0,
  pageTransition: {
    name: "about",
    mode: "out-in",
    onEnter: (t, e) => {
      qE(t, e);
    },
    onLeave: (t, e) => {
      XE(e);
    },
  },
};
function KE() {
  Ke.registerPlugin(de, Vr);
  const t = new Tw({
    smooth: !0,
  });
  t.on("scroll", () => {
    de.update(),
      lt.setScroll({
        y: t.animatedScroll,
        velocity: t.velocity,
      });
  });
  const e = (n) => {
    t.raf(n), requestAnimationFrame(e);
  };
  return (
    requestAnimationFrame(e),
    {
      lenis: t,
    }
  );
}
function JE() {
  const t = Ke.matchMedia();
  t.add("(min-width: 1100px)", () => {
    const i = document.getElementById("projectsTitle").parentElement;
    return (
      Ke.to("#projectsTitle", {
        scrollTrigger: {
          trigger: "#projectsMonolith",
          scrub: !0,
          start: "top 220px",
          end: "top -200px",
        },
        y: -200,
        ease: "sine.out",
      }),
      Ke.fromTo(
        "#projectsTitle",
        {
          y: -200,
        },
        {
          scrollTrigger: {
            trigger: "#projectsMonolith",
            scrub: !0,
            start: () => `bottom ${550 + i.offsetHeight}px`,
            end: "bottom 200px",
          },
          y: 200,
          ease: "sine.out",
          immediateRender: !1,
        }
      ),
      [...document.querySelectorAll(".overflow-line")].forEach((o) => {
        Ke.to(o, {
          scrollTrigger: {
            trigger: o,
            scrub: !0,
            start: "top 80%",
            end: "top 30%",
          },
          scaleX: 0,
          ease: "power2.inOut",
        });
      }),
      () => {
        Ke.set("#projectsTitle", {
          y: 0,
        });
      }
    );
  });
  const e = document.getElementById("projectsMonolithBg"),
    n = function () {
      const i = parseInt(
          window
            .getComputedStyle(document.documentElement)
            .getPropertyValue("--gutter")
        ),
        s = e.offsetWidth;
      return 1 + (i * 2) / s;
    },
    r = Ke.timeline({
      scrollTrigger: {
        trigger: "#projectsMonolith",
        scrub: !0,
        start: "top 30%",
        end: "bottom 70%",
        invalidateOnRefresh: !0,
      },
    });
  return (
    r
      .to("#projectsMonolithBg", {
        duration: 1.8,
        scaleX: n,
      })
      .to("#projectsMonolithBg", {
        duration: 8,
        scaleX: n,
      })
      .to("#projectsMonolithBg", {
        duration: 1.4,
        scaleX: 1,
      }),
    {
      tl: r,
      mm: t,
    }
  );
}
function ZE() {
  const t = {
    scaleY: 1,
    y: 0,
    scrollOut: 0,
  };
  return Ke.to(t, {
    scrollTrigger: {
      trigger: "#home",
      scrub: !0,
      start: "top -1px",
      end: () => `top -${lt.typoSizeInPixels.height * 1.3 + 60}px`,
      onUpdate: () => {
        lt.setLogo(t);
      },
      invalidateOnRefresh: !0,
    },
    scrollOut: 1,
    ease: "linear",
  });
}
function eT() {
  const t = document.getElementById("manifestoTitleLineOne"),
    e = document.getElementById("manifestoTitleLineTwo"),
    n = Ke.timeline({
      repeat: -1,
    });
  n.to(
    t,
    {
      x: "-=33.3333%",
      duration: 20,
      ease: "linear",
    },
    "start"
  ).to(
    e,
    {
      x: "+=33.3333%",
      duration: 20,
      ease: "linear",
    },
    "start"
  );
  const r = de.create({
    trigger: "#manifestoTitle",
    start: "top bottom",
    end: "bottom top",
    onUpdate: function (i) {
      const o = Math.abs(i.getVelocity()) / 250;
      n.timeScale(1 + o);
    },
  });
  return {
    title: n,
    speed: r,
  };
}
function tT() {
  const t = document.querySelectorAll(".value"),
    e = [];
  return (
    [...t].forEach((n, r) => {
      const i = n.querySelector(".inner-value"),
        s = r === t.length - 1,
        o = r === 0,
        a = Ke.timeline({
          scrollTrigger: {
            trigger: n,
            scrub: !0,
            start: "top 50%",
            end: "bottom 50%",
            invalidateOnRefresh: !0,
            amrkers: !0,
          },
        });
      a
        .to(i, {
          duration: 0,
          opacity: o ? 1 : 0.2,
        })
        .to(i, {
          duration: 0,
          opacity: 1,
        })
        .to(i, {
          duration: 1,
          opacity: 1,
        })
        .to(i, {
          duration: 0,
          opacity: s ? 1 : 0.2,
        }),
        e.push(a);
    }),
    e
  );
}
function nT() {
  const t = {
      bottom: 0,
      top: 1,
    },
    e = Ke.to(t, {
      scrollTrigger: {
        trigger: "#footer.home-footer",
        scrub: !0,
        start: () => "top-=156px bottom",
        end: () => "bottom bottom",
        onUpdate: () => lt.setTextMasks(t),
        onRefresh: () => lt.setTextMasks(t),
        invalidateOnRefresh: !0,
      },
      bottom: 1,
      ease: "linear",
    }),
    n = Ke.to(t, {
      scrollTrigger: {
        trigger: "#header.home-header",
        scrub: !0,
        start: () => "top top",
        end: () => "bottom+=100px top",
        onUpdate: () => lt.setTextMasks(t),
        onRefresh: () => lt.setTextMasks(t),
        invalidateOnRefresh: !0,
      },
      top: 0,
      ease: "linear",
    });
  return {
    footerTween: e,
    headerTween: n,
  };
}
let nm, tu, rm, im, nu;
async function rT(t = () => {}) {
  await lt.initializeHome(),
    iT(t),
    (tu = ZE()),
    (rm = JE()),
    (im = eT()),
    (nu = tT()),
    (nm = nT());
}
function iT(t) {
  const e = {
      typoOpacity: 0,
      typoScale: 0,
      noiseOpacity: 0,
    },
    n = Ke.timeline({
      paused: !0,
      onComplete: () => {
        t();
      },
    });
  n.set("#overlay", {
    backgroundColor: "transparent",
  }),
    n
      .to(
        e,
        {
          noiseOpacity: 1,
          duration: 2,
          onUpdate: () => lt.setAppearValue(e),
        },
        "start"
      )
      .to(
        e,
        {
          typoOpacity: 1,
          duration: 2,
          onUpdate: () => lt.setAppearValue(e),
        },
        "start"
      )
      .to(
        e,
        {
          typoScale: 1,
          duration: 2,
          ease: "power4.inOut",
          onUpdate: () => lt.setAppearValue(e),
        },
        "start"
      )
      .to(
        "#helloMonolithWrapper",
        {
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "start+=1"
      )
      .to(
        "#header",
        {
          duration: 1,
          opacity: 1,
        },
        "start+=1"
      ),
    n.play();
}
function sT(t) {
  oT();
  const e = {
      typoOpacity: 1,
      typoScale: 1,
      noiseOpacity: 1,
    },
    n = Ke.timeline({
      paused: !0,
      onComplete: () => {
        t();
      },
    });
  n
    .to(
      e,
      {
        noiseOpacity: 0,
        duration: 0.4,
        onUpdate: () => lt.setAppearValue(e),
      },
      "start"
    )
    .to(
      e,
      {
        typoOpacity: 0,
        duration: 0.4,
        onUpdate: () => lt.setAppearValue(e),
      },
      "start"
    )
    .to(
      "#helloMonolithWrapper",
      {
        y: () => `${window.innerHeight - window.innerWidth / 3}`,
        duration: 0.4,
        ease: "power3.out",
      },
      "start"
    )
    .to(
      "#header",
      {
        duration: 0.4,
        opacity: 0,
      },
      "start"
    )
    .to(
      "#overlay",
      {
        duration: 0.4,
        backgroundColor: "#191919",
      },
      "start+=0.4"
    ),
    n.play();
}
function oT() {
  const { mm: t, tl: e } = rm;
  e && e.kill(), t && t.revert(), tu && tu.kill();
  const { title: n, speed: r } = im;
  n && n.kill(), r && r.kill(), nu && nu.forEach((o) => o.kill());
  const { footerTween: i, headerTween: s } = nm;
  i && i.kill(), s && s.kill();
}
const en = {
    scrollToTop: !0,
    pageTransition: {
      name: "home",
      mode: "out-in",
      onEnter(t, e) {
        rT(e);
      },
      onLeave: (t, e) => {
        sT(e);
      },
    },
  },
  kd = [
    {
      name: (Zt == null ? void 0 : Zt.name) ?? "about",
      path: (Zt == null ? void 0 : Zt.path) ?? "/about",
      meta: Zt || {},
      alias: (Zt == null ? void 0 : Zt.alias) || [],
      redirect: (Zt == null ? void 0 : Zt.redirect) || void 0,
      component: () =>
        Pa(
          () => import("./about.3a028ff4.js"),
          [
            "./about.3a028ff4.js",
            "./nuxt-link.fda9cd76.js",
            "./vue.f36acd1f.6a7d73bd.js",
            "./about.3a37f6be.css",
          ],
          import.meta.url
        ).then((t) => t.default || t),
    },
    {
      name: (en == null ? void 0 : en.name) ?? "index",
      path: (en == null ? void 0 : en.path) ?? "/",
      meta: en || {},
      alias: (en == null ? void 0 : en.alias) || [],
      redirect: (en == null ? void 0 : en.redirect) || void 0,
      component: () =>
        Pa(
          () => import("./index.74d456b4.js"),
          [
            "./index.74d456b4.js",
            "./nuxt-link.fda9cd76.js",
            "./vue.f36acd1f.6a7d73bd.js",
            "./index.1af4af1a.css",
          ],
          import.meta.url
        ).then((t) => t.default || t),
    },
  ],
  aT = {
    scrollBehavior(t, e, n) {
      var c;
      const r = Je(),
        i =
          ((c = Ti().options) == null ? void 0 : c.scrollBehaviorType) ??
          "auto";
      let s = n || void 0;
      const o =
        typeof t.meta.scrollToTop == "function"
          ? t.meta.scrollToTop(t, e)
          : t.meta.scrollToTop;
      if (
        (!s &&
          e &&
          t &&
          o !== !1 &&
          lT(e, t) &&
          (s = {
            left: 0,
            top: 0,
          }),
        t.path === e.path)
      ) {
        if (e.hash && !t.hash)
          return {
            left: 0,
            top: 0,
          };
        if (t.hash)
          return {
            el: t.hash,
            top: Dd(t.hash),
            behavior: i,
          };
      }
      const a = (u) => !!(u.meta.pageTransition ?? gc),
        l = a(e) && a(t) ? "page:transition:finish" : "page:finish";
      return new Promise((u) => {
        r.hooks.hookOnce(l, async () => {
          await ms(),
            t.hash &&
              (s = {
                el: t.hash,
                top: Dd(t.hash),
                behavior: i,
              }),
            u(s);
        });
      });
    },
  };
function Dd(t) {
  try {
    const e = document.querySelector(t);
    if (e) return parseFloat(getComputedStyle(e).scrollMarginTop);
  } catch {}
  return 0;
}
function lT(t, e) {
  return (
    e.path !== t.path || JSON.stringify(t.params) !== JSON.stringify(e.params)
  );
}
const cT = {},
  Ut = {
    ...cT,
    ...aT,
  },
  uT = async (t) => {
    var l;
    let e, n;
    if (!((l = t.meta) != null && l.validate)) return;
    const r = Je(),
      i = Ti();
    if (
      (([e, n] = Ta(() => Promise.resolve(t.meta.validate(t)))),
      (e = await e),
      n(),
      e) === !0
    )
      return;
    const o = Du({
        statusCode: 404,
        statusMessage: `Page Not Found: ${t.fullPath}`,
      }),
      a = i.beforeResolve((c) => {
        if ((a(), c === t)) {
          const u = i.afterEach(async () => {
            u(),
              await r.runWithContext(() => Fi(o)),
              window.history.pushState({}, "", t.fullPath);
          });
          return !1;
        }
      });
  },
  fT = [uT],
  eo = {};
function hT(t, e, n) {
  const { pathname: r, search: i, hash: s } = e,
    o = t.indexOf("#");
  if (o > -1) {
    const c = s.includes(t.slice(o)) ? t.slice(o).length : 1;
    let u = s.slice(c);
    return u[0] !== "/" && (u = "/" + u), Kf(u, "");
  }
  const a = Kf(r, t),
    l =
      !n ||
      gy(a, n, {
        trailingSlash: !0,
      })
        ? a
        : n;
  return l + (l.includes("?") ? "" : i) + s;
}
const dT = Wr({
    name: "nuxt:router",
    enforce: "pre",
    async setup(t) {
      var g, v;
      let e,
        n,
        r = ku().app.baseURL;
      Ut.hashMode && !r.includes("#") && (r += "#");
      const i =
          ((g = Ut.history) == null ? void 0 : g.call(Ut, r)) ??
          (Ut.hashMode ? bx(r) : hg(r)),
        s = ((v = Ut.routes) == null ? void 0 : v.call(Ut, kd)) ?? kd;
      let o;
      const a = hT(r, window.location, t.payload.path),
        l = oA({
          ...Ut,
          scrollBehavior: (m, _, x) => {
            var y;
            if (_ === Vn) {
              o = x;
              return;
            }
            return (
              (l.options.scrollBehavior = Ut.scrollBehavior),
              (y = Ut.scrollBehavior) == null
                ? void 0
                : y.call(Ut, m, Vn, o || x)
            );
          },
          history: i,
          routes: s,
        });
      t.vueApp.use(l);
      const c = ro(l.currentRoute.value);
      l.afterEach((m, _) => {
        c.value = _;
      }),
        Object.defineProperty(
          t.vueApp.config.globalProperties,
          "previousRoute",
          {
            get: () => c.value,
          }
        );
      const u = ro(l.resolve(a)),
        f = () => {
          u.value = l.currentRoute.value;
        };
      t.hook("page:finish", f),
        l.afterEach((m, _) => {
          var x, y, b, T;
          ((y = (x = m.matched[0]) == null ? void 0 : x.components) == null
            ? void 0
            : y.default) ===
            ((T = (b = _.matched[0]) == null ? void 0 : b.components) == null
              ? void 0
              : T.default) && f();
        });
      const h = {};
      for (const m in u.value)
        Object.defineProperty(h, m, {
          get: () => u.value[m],
        });
      (t._route = wo(h)),
        (t._middleware = t._middleware || {
          global: [],
          named: {},
        });
      const d = rl();
      try {
        ([e, n] = Ta(() => l.isReady())), await e, n();
      } catch (m) {
        ([e, n] = Ta(() => t.runWithContext(() => Fi(m)))), await e, n();
      }
      const p = t.payload.state._layout;
      return (
        l.beforeEach(async (m, _) => {
          var x;
          (m.meta = Ur(m.meta)),
            t.isHydrating && p && !xi(m.meta.layout) && (m.meta.layout = p),
            (t._processingMiddleware = !0);
          {
            const y = new Set([...fT, ...t._middleware.global]);
            for (const b of m.matched) {
              const T = b.meta.middleware;
              if (T)
                if (Array.isArray(T)) for (const P of T) y.add(P);
                else y.add(T);
            }
            for (const b of y) {
              const T =
                typeof b == "string"
                  ? t._middleware.named[b] ||
                    (await ((x = eo[b]) == null
                      ? void 0
                      : x.call(eo).then((S) => S.default || S)))
                  : b;
              if (!T) throw new Error(`Unknown route middleware: '${b}'.`);
              const P = await t.runWithContext(() => T(m, _));
              if (
                !t.payload.serverRendered &&
                t.isHydrating &&
                (P === !1 || P instanceof Error)
              ) {
                const S =
                  P ||
                  yc({
                    statusCode: 404,
                    statusMessage: `Page Not Found: ${a}`,
                  });
                return await t.runWithContext(() => Fi(S)), !1;
              }
              if (P !== !0 && (P || P === !1)) return P;
            }
          }
        }),
        l.onError(() => {
          delete t._processingMiddleware;
        }),
        l.afterEach(async (m, _, x) => {
          delete t._processingMiddleware,
            !t.isHydrating && d.value && (await t.runWithContext(ex)),
            m.matched.length === 0 &&
              (await t.runWithContext(() =>
                Fi(
                  yc({
                    statusCode: 404,
                    fatal: !1,
                    statusMessage: `Page not found: ${m.fullPath}`,
                  })
                )
              ));
        }),
        t.hooks.hookOnce("app:created", async () => {
          try {
            await l.replace({
              ...l.resolve(a),
              name: void 0,
              force: !0,
            }),
              (l.options.scrollBehavior = Ut.scrollBehavior);
          } catch (m) {
            await t.runWithContext(() => Fi(m));
          }
        }),
        {
          provide: {
            router: l,
          },
        }
      );
    },
  }),
  pT = Wr({
    name: "nuxt:payload",
    setup(t) {
      Hv() &&
        (t.hooks.hook("link:prefetch", async (e) => {
          tl(e).protocol || (await uh(e));
        }),
        Ti().beforeResolve(async (e, n) => {
          if (e.path === n.path) return;
          const r = await uh(e.path);
          r && Object.assign(t.static.data, r.data);
        }));
    },
  }),
  gT = Wr({
    name: "nuxt:global-components",
  }),
  ea = {},
  mT = Wr({
    name: "nuxt:prefetch",
    setup(t) {
      const e = Ti();
      t.hooks.hook("app:mounted", () => {
        e.beforeEach(async (n) => {
          var i;
          const r =
            (i = n == null ? void 0 : n.meta) == null ? void 0 : i.layout;
          r && typeof ea[r] == "function" && (await ea[r]());
        });
      }),
        t.hooks.hook("link:prefetch", (n) => {
          var o, a, l, c;
          if (To(n)) return;
          const r = e.resolve(n);
          if (!r) return;
          const i =
            (o = r == null ? void 0 : r.meta) == null ? void 0 : o.layout;
          let s = Array.isArray(
            (a = r == null ? void 0 : r.meta) == null ? void 0 : a.middleware
          )
            ? (l = r == null ? void 0 : r.meta) == null
              ? void 0
              : l.middleware
            : [
                (c = r == null ? void 0 : r.meta) == null
                  ? void 0
                  : c.middleware,
              ];
          s = s.filter((u) => typeof u == "string");
          for (const u of s) typeof eo[u] == "function" && eo[u]();
          i && typeof ea[i] == "function" && ea[i]();
        });
    },
  }),
  _T = Wr({
    name: "nuxt:chunk-reload",
    setup(t) {
      const e = Ti(),
        n = ku(),
        r = new Set();
      e.beforeEach(() => {
        r.clear();
      }),
        t.hook("app:chunkError", ({ error: i }) => {
          r.add(i);
        }),
        e.onError((i, s) => {
          if (r.has(i)) {
            const a =
              "href" in s && s.href.startsWith("#")
                ? n.app.baseURL + s.href
                : Po(n.app.baseURL, s.fullPath);
            rx({
              path: a,
              persistState: !0,
            });
          }
        });
    },
  }),
  yT = Wr({
    name: "scroll-client",
    hooks: {
      "page:transition:finished": () => {
        var t, e;
        (t = document.scrollingElement) == null ||
          t.scrollTo({
            left: 0,
            top: 0,
          }),
          (e = document.body) == null ||
            e.scrollTo({
              left: 0,
              top: 0,
            });
      },
    },
  }),
  vT = [nx, sx, dT, pT, gT, mT, _T, yT],
  xT = (t, e) =>
    e.path
      .replace(/(:\w+)\([^)]+\)/g, "$1")
      .replace(/(:\w+)[?+*]/g, "$1")
      .replace(/:\w+/g, (n) => {
        var r;
        return (
          ((r = t.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
        );
      }),
  ru = (t, e) => {
    const n = t.route.matched.find((i) => {
        var s;
        return (
          ((s = i.components) == null ? void 0 : s.default) === t.Component.type
        );
      }),
      r = e ?? (n == null ? void 0 : n.meta.key) ?? (n && xT(t.route, n));
    return typeof r == "function" ? r(t.route) : r;
  },
  AT = (t, e) => ({
    default: () => (t ? fr(S_, t === !0 ? {} : t, e) : e),
  }),
  wT = bo({
    name: "RouteProvider",
    props: {
      vnode: {
        type: Object,
        required: !0,
      },
      route: {
        type: Object,
        required: !0,
      },
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean,
    },
    setup(t) {
      const e = t.renderKey,
        n = t.route,
        r = {};
      for (const i in t.route)
        Object.defineProperty(r, i, {
          get: () => (e === t.renderKey ? t.route[i] : n[i]),
        });
      return (
        qi(nl, wo(r)),
        () =>
          fr(t.vnode, {
            ref: t.vnodeRef,
          })
      );
    },
  }),
  bT = (t, e, n) => (
    (e = e === !0 ? {} : e),
    {
      default: () => {
        var r;
        return e ? fr(t, e, n) : (r = n.default) == null ? void 0 : r.call(n);
      },
    }
  ),
  ET = bo({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
      },
      transition: {
        type: [Boolean, Object],
        default: void 0,
      },
      keepalive: {
        type: [Boolean, Object],
        default: void 0,
      },
      route: {
        type: Object,
      },
      pageKey: {
        type: [Function, String],
        default: null,
      },
    },
    setup(t, { attrs: e, expose: n }) {
      const r = Je(),
        i = ur(),
        s = un(nl, null);
      n({
        pageRef: i,
      });
      const o = un(Kv, null);
      let a;
      const l = r.deferHydration();
      return () =>
        fr(
          wg,
          {
            name: t.name,
            route: t.route,
            ...e,
          },
          {
            default: (c) => {
              const u = ST(s, c.route, c.Component),
                f = s && s.matched.length === c.route.matched.length;
              if (!c.Component) return a && !f ? a : void 0;
              if (a && o && !o.isCurrent(c.route)) return a;
              if (u && s && (!o || (o != null && o.isCurrent(s))))
                return f ? a : null;
              const h = ru(c, t.pageKey),
                d = !!(t.transition ?? c.route.meta.pageTransition ?? gc),
                p =
                  d &&
                  PT(
                    [
                      t.transition,
                      c.route.meta.pageTransition,
                      gc,
                      {
                        onAfterLeave: () => {
                          r.callHook("page:transition:finish", c.Component);
                        },
                      },
                    ].filter(Boolean)
                  );
              return (
                (a = bT(
                  Ru,
                  d && p,
                  AT(
                    t.keepalive ?? c.route.meta.keepalive ?? Bv,
                    fr(
                      dp,
                      {
                        suspensible: !0,
                        onPending: () => r.callHook("page:start", c.Component),
                        onResolve: () => {
                          ms(() =>
                            r.callHook("page:finish", c.Component).finally(l)
                          );
                        },
                      },
                      {
                        default: () =>
                          fr(wT, {
                            key: h,
                            vnode: c.Component,
                            route: c.route,
                            renderKey: h,
                            trackRootNodes: d,
                            vnodeRef: i,
                          }),
                      }
                    )
                  )
                ).default()),
                a
              );
            },
          }
        );
    },
  });
function TT(t) {
  return Array.isArray(t) ? t : t ? [t] : [];
}
function PT(t) {
  const e = t.map((n) => ({
    ...n,
    onAfterLeave: TT(n.onAfterLeave),
  }));
  return Wv(...e);
}
function ST(t, e, n) {
  if (!t) return !1;
  const r = e.matched.findIndex((i) => {
    var s;
    return (
      ((s = i.components) == null ? void 0 : s.default) ===
      (n == null ? void 0 : n.type)
    );
  });
  return !r || r === -1
    ? !1
    : e.matched.slice(0, r).some((i, s) => {
        var o, a, l;
        return (
          ((o = i.components) == null ? void 0 : o.default) !==
          ((l = (a = t.matched[s]) == null ? void 0 : a.components) == null
            ? void 0
            : l.default)
        );
      }) ||
        (n &&
          ru({
            route: e,
            Component: n,
          }) !==
            ru({
              route: t,
              Component: n,
            }));
}
const CT = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, i] of e) n[r] = i;
    return n;
  },
  sm = (t) => (u_("data-v-6cc35002"), (t = t()), f_(), t),
  RT = {
    id: "app",
  },
  MT = sm(() =>
    el(
      "div",
      {
        class: "overlay",
        id: "overlay",
      },
      null,
      -1
    )
  ),
  OT = sm(() =>
    el(
      "div",
      {
        class: "wrapper-animation",
        id: "c",
      },
      null,
      -1
    )
  ),
  kT = {
    key: 0,
    class: "container",
  },
  DT = n1(
    '<div class="grid" id="grid" data-v-6cc35002><div class="container" data-v-6cc35002><div class="column-block" data-v-6cc35002><div class="column-text" data-v-6cc35002></div></div><div class="column-block" data-v-6cc35002><div class="column-text" data-v-6cc35002></div></div><div class="column-block" data-v-6cc35002><div class="column-text" data-v-6cc35002></div></div><div class="column-block" data-v-6cc35002><div class="column-text" data-v-6cc35002></div></div><div class="column-block" data-v-6cc35002><div class="column-text" data-v-6cc35002></div></div><div class="column-block" data-v-6cc35002><div class="column-text" data-v-6cc35002></div></div></div></div>',
    1
  ),
  zT = [DT],
  IT = {
    __name: "app",
    setup(t) {
      const e = ur(!1),
        n = Je();
      return (
        KE(),
        window.history.scrollRestoration
          ? (window.history.scrollRestoration = "manual")
          : (window.onbeforeunload = function () {
              window.scrollTo(0, 0);
            }),
        n.$router.afterEach((r, i) => {
          window.scrollTo(0, 0);
        }),
        (r, i) => {
          const s = ET;
          return (
            Yn(),
            If("div", RT, [
              MT,
              OT,
              We(s),
              Ie(e) ? (Yn(), If("div", kT, zT)) : r1("", !0),
            ])
          );
        }
      );
    },
  },
  FT = CT(IT, [["__scopeId", "data-v-6cc35002"]]),
  NT = {
    __name: "nuxt-error-page",
    props: {
      error: Object,
    },
    setup(t) {
      const n = t.error;
      (n.stack || "")
        .split(
          `
`
        )
        .splice(1)
        .map((f) => ({
          text: f.replace("webpack:/", "").replace(".vue", ".js").trim(),
          internal:
            (f.includes("node_modules") && !f.includes(".cache")) ||
            f.includes("internal") ||
            f.includes("new Promise"),
        }))
        .map(
          (f) =>
            `<span class="stack ${f.internal ? " internal" : ""}">${
              f.text
            }</span>`
        ).join(`
`);
      const r = Number(n.statusCode || 500),
        i = r === 404,
        s = n.statusMessage ?? (i ? "Page Not Found" : "Internal Server Error"),
        o = n.message || n.toString(),
        a = void 0,
        u = i
          ? Ef(() =>
              Pa(
                () => import("./error-404.9c23fc19.js"),
                [
                  "./error-404.9c23fc19.js",
                  "./nuxt-link.fda9cd76.js",
                  "./vue.f36acd1f.6a7d73bd.js",
                  "./error-404.7fc72018.css",
                ],
                import.meta.url
              ).then((f) => f.default || f)
            )
          : Ef(() =>
              Pa(
                () => import("./error-500.d02dd58e.js"),
                [
                  "./error-500.d02dd58e.js",
                  "./vue.f36acd1f.6a7d73bd.js",
                  "./error-500.c5df6088.css",
                ],
                import.meta.url
              ).then((f) => f.default || f)
            );
      return (f, h) => (
        Yn(),
        ai(
          Ie(u),
          ym(
            Bp({
              statusCode: Ie(r),
              statusMessage: Ie(s),
              description: Ie(o),
              stack: Ie(a),
            })
          ),
          null,
          16
        )
      );
    },
  },
  BT = NT,
  LT = {
    __name: "nuxt-root",
    setup(t) {
      const e = () => null,
        n = Je(),
        r = n.deferHydration(),
        i = !1;
      qi(nl, Jv()), n.hooks.callHookWith((a) => a.map((l) => l()), "vue:setup");
      const s = rl();
      wp((a, l, c) => {
        if (
          (n.hooks
            .callHook("vue:error", a, l, c)
            .catch((u) => console.error("[nuxt] Error in `vue:error` hook", u)),
          tx(a) && (a.fatal || a.unhandled))
        )
          return n.runWithContext(() => Fi(a)), !1;
      });
      const o = !1;
      return (a, l) => (
        Yn(),
        ai(
          dp,
          {
            onResolve: Ie(r),
          },
          {
            default: fp(() => [
              Ie(s)
                ? (Yn(),
                  ai(
                    Ie(BT),
                    {
                      key: 0,
                      error: Ie(s),
                    },
                    null,
                    8,
                    ["error"]
                  ))
                : Ie(o)
                ? (Yn(),
                  ai(
                    Ie(e),
                    {
                      key: 1,
                      context: Ie(o),
                    },
                    null,
                    8,
                    ["context"]
                  ))
                : Ie(i)
                ? (Yn(),
                  ai(F_(Ie(i)), {
                    key: 2,
                  }))
                : (Yn(),
                  ai(Ie(FT), {
                    key: 3,
                  })),
            ]),
            _: 1,
          },
          8,
          ["onResolve"]
        )
      );
    },
  },
  zd = LT;
globalThis.$fetch ||
  (globalThis.$fetch = Oy.create({
    baseURL: Dy(),
  }));
let Id;
{
  let t;
  (Id = async function () {
    var s, o;
    if (t) return t;
    const r = !!(
        ((s = window.__NUXT__) != null && s.serverRendered) ||
        ((o = document.getElementById("__NUXT_DATA__")) == null
          ? void 0
          : o.dataset.ssr) === "true"
      )
        ? U1(zd)
        : L1(zd),
      i = Qy({
        vueApp: r,
      });
    try {
      await Yy(i, vT);
    } catch (a) {
      await i.callHook("app:error", a),
        (i.payload.error = i.payload.error || a);
    }
    try {
      await i.hooks.callHook("app:created", r),
        await i.hooks.callHook("app:beforeMount", r),
        r.mount(Lv),
        await i.hooks.callHook("app:mounted", r),
        await ms();
    } catch (a) {
      await i.callHook("app:error", a),
        (i.payload.error = i.payload.error || a);
    }
    return r;
  }),
    (t = Id().catch((e) => {
      console.error("Error while mounting app:", e);
    }));
}
export {
  Qp as A,
  jT as B,
  HT as C,
  Is as D,
  R_ as E,
  C_ as F,
  Pu as G,
  hc as H,
  CT as _,
  el as a,
  We as b,
  If as c,
  Lp as d,
  f_ as e,
  xu as f,
  qE as g,
  n1 as h,
  rT as i,
  Ti as j,
  bo as k,
  Nn as l,
  Au as m,
  fr as n,
  Yn as o,
  u_ as p,
  $T as q,
  ur as r,
  tl as s,
  UT as t,
  Je as u,
  ny as v,
  fp as w,
  VT as x,
  To as y,
  cc as z,
};
