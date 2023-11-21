import {
  o as a,
  c as n,
  a as s,
  t as r,
  _ as p,
  p as u,
  b as _,
  F as l,
  r as d,
  d as h,
  e as f,
} from "./index-d864b8b2.js";
const m = { props: { fetchOne: { required: !0, type: Object } } },
  i = Object.assign(m, {
    __name: "PlantPage",
    setup(e) {
      return (t, o) => (
        a(),
        n("div", null, [
          s("h1", null, r(e.fetchOne.name), 1),
          s("h1", null, r(), 1),
        ])
      );
    },
  });
const v = {},
  y = (e) => (u("data-v-a7bcd8ef"), (e = e()), _(), e),
  $ = { class: "buy-wrapper" },
  b = y(() => s("h3", { class: "headers" }, "How many plants do you got?", -1)),
  g = { class: "qty-wrapper" },
  w = ["value"];
function O(e, t) {
  return (
    a(),
    n("div", $, [
      b,
      s("div", g, [
        s("input", {
          type: "button",
          value: "-",
          onClick: t[0] || (t[0] = (o) => this.$store.commit("decrease")),
        }),
        s(
          "input",
          { type: "text", value: this.$store.state.qty, size: "1" },
          null,
          8,
          w
        ),
        s("input", {
          type: "button",
          value: "+",
          onClick: t[1] || (t[1] = (o) => this.$store.commit("increase")),
        }),
      ]),
    ])
  );
}
const k = p(v, [
    ["render", O],
    ["__scopeId", "data-v-a7bcd8ef"],
  ]),
  B = {
    created() {
      this.fetchPlant(),
        this.$watch(
          () => this.$route.params,
          () => {
            this.plant = this.fetchPlant(this.$route.params);
          },
          { immediate: !0 }
        );
    },
    data() {
      return { plants: [] };
    },
    components: { "plant-page": i },
    methods: {
      async fetchPlant() {
        console.log();
        const t = await (await fetch("/plant.json/")).json();
        (this.plants = t), console.log(t);
      },
      plantMatch() {
        this.plant.id, this.$route.params.id;
      },
    },
  },
  j = Object.assign(B, {
    __name: "PlantView",
    setup(e) {
      return (t, o) => (
        a(),
        n(
          l,
          null,
          [
            s("div", null, [
              (a(!0),
              n(
                l,
                null,
                d(
                  t.plants,
                  (c) => (
                    a(),
                    f(
                      i,
                      { key: c.id, fetchOne: c, "v-if": t.plantMatch },
                      null,
                      8,
                      ["fetchOne", "v-if"]
                    )
                  )
                ),
                128
              )),
            ]),
            h(k),
          ],
          64
        )
      );
    },
  });
export { j as default };
