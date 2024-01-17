"use strict";
(() => {
    var pe = Object.defineProperty,
        de = Object.defineProperties;
    var fe = Object.getOwnPropertyDescriptors;
    var H = Object.getOwnPropertySymbols;
    var be = Object.prototype.hasOwnProperty,
        ye = Object.prototype.propertyIsEnumerable;
    var R = (e, t, a) => t in e ? pe(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a,
        q = (e, t) => {
            for (var a in t || (t = {})) be.call(t, a) && R(e, a, t[a]);
            if (H)
                for (var a of H(t)) ye.call(t, a) && R(e, a, t[a]);
            return e
        },
        D = (e, t) => de(e, fe(t));
    var N = (e, t) => {
        e.sort(function(o, r) {
            return r.from - o.from
        });
        let a = t;
        return e.map(o => {
            let r = a - o.from <= 0 ? 0 : a - o.from;
            return a -= r, D(q({}, o), {
                taxAtBracket: r * o.rate
            })
        }).sort(function(o, r) {
            return o.from - r.from
        })
    };
    var P = [{
        year: "2020-21",
        exemption: 12300,
        basicRate: {
            residential: .18,
            other: .1
        },
        higherRate: {
            residential: .28,
            other: .2
        },
        badr: .1,
        personalAllowance: 12500,
        basicBand: 37500,
        higherBand: 15e4
    }, {
        year: "2021-22",
        exemption: 12300,
        basicRate: {
            residential: .18,
            other: .1
        },
        higherRate: {
            residential: .28,
            other: .2
        },
        badr: .1,
        personalAllowance: 12570,
        basicBand: 37700,
        higherBand: 15e4
    }, {
        year: "2022-23",
        exemption: 12300,
        basicRate: {
            residential: .18,
            other: .1
        },
        higherRate: {
            residential: .28,
            other: .2
        },
        badr: .1,
        personalAllowance: 12570,
        basicBand: 37700,
        higherBand: 15e4
    }, {
        year: "2023-24",
        exemption: 6e3,
        basicRate: {
            residential: .18,
            other: .1
        },
        higherRate: {
            residential: .28,
            other: .2
        },
        badr: .1,
        personalAllowance: 12570,
        basicBand: 37700,
        higherBand: 125140
    }];
    var S = [{
        year: "2020-21",
        rates: {
            ordinary: .075,
            upper: .325,
            additional: .381
        },
        allowances: {
            dividends: 2e3,
            personal: 12500,
            limit: 1e5
        },
        bands: {
            basic: 37500,
            higher: 15e4
        }
    }, {
        year: "2021-22",
        rates: {
            ordinary: .075,
            upper: .325,
            additional: .381
        },
        allowances: {
            dividends: 2e3,
            personal: 12570,
            limit: 1e5
        },
        bands: {
            basic: 37700,
            higher: 15e4
        }
    }, {
        year: "2022-23",
        rates: {
            ordinary: .0875,
            upper: .3375,
            additional: .3935
        },
        allowances: {
            dividends: 2e3,
            personal: 12570,
            limit: 1e5
        },
        bands: {
            basic: 37700,
            higher: 15e4
        }
    }, {
        year: "2023-24",
        rates: {
            ordinary: .0875,
            upper: .3375,
            additional: .3935
        },
        allowances: {
            dividends: 1e3,
            personal: 12570,
            limit: 1e5
        },
        bands: {
            basic: 37700,
            higher: 125140
        }
    }];
    var A = [{
        year: "2020-21",
        countries: [{
            name: "scotland",
            brackets: {
                allowance: {
                    name: "allowance",
                    rate: 0,
                    from: 0,
                    band: 12500
                },
                starter: {
                    name: "starter",
                    rate: .19,
                    from: 12500
                },
                basic: {
                    name: "basic",
                    rate: .2,
                    from: 14585
                },
                intermediate: {
                    name: "intermediate",
                    rate: .21,
                    from: 25158
                },
                higher: {
                    name: "higher",
                    rate: .41,
                    from: 43430
                },
                additional: {
                    name: "additional",
                    rate: .46,
                    from: 15e4
                }
            }
        }, {
            name: "others",
            brackets: {
                allowance: {
                    name: "allowance",
                    rate: 0,
                    from: 0,
                    band: 12500,
                    incomeLimit: 1e5
                },
                basic: {
                    name: "basic",
                    rate: .2,
                    band: 37500
                },
                higher: {
                    name: "higher",
                    rate: .4
                },
                additional: {
                    name: "additional",
                    rate: .45,
                    from: 15e4
                }
            }
        }]
    }, {
        year: "2021-22",
        countries: [{
            name: "scotland",
            brackets: {
                allowance: {
                    name: "allowance",
                    rate: 0,
                    from: 0,
                    band: 12570
                },
                starter: {
                    name: "starter",
                    rate: .19,
                    from: 12570
                },
                basic: {
                    name: "basic",
                    rate: .2,
                    from: 14667
                },
                intermediate: {
                    name: "intermediate",
                    rate: .21,
                    from: 25296
                },
                higher: {
                    name: "higher",
                    rate: .41,
                    from: 43662
                },
                additional: {
                    name: "additional",
                    rate: .46,
                    from: 15e4
                }
            }
        }, {
            name: "others",
            brackets: {
                allowance: {
                    name: "allowance",
                    rate: 0,
                    from: 0,
                    band: 12570,
                    incomeLimit: 1e5
                },
                basic: {
                    name: "basic",
                    rate: .2,
                    band: 37700
                },
                higher: {
                    name: "higher",
                    rate: .4
                },
                additional: {
                    name: "additional",
                    rate: .45,
                    from: 15e4
                }
            }
        }]
    }, {
        year: "2022-23",
        countries: [{
            name: "scotland",
            brackets: {
                allowance: {
                    name: "allowance",
                    rate: 0,
                    from: 0,
                    band: 12570
                },
                starter: {
                    name: "starter",
                    rate: .19,
                    from: 12570
                },
                basic: {
                    name: "basic",
                    rate: .2,
                    from: 14732
                },
                intermediate: {
                    name: "intermediate",
                    rate: .21,
                    from: 25688
                },
                higher: {
                    name: "higher",
                    rate: .41,
                    from: 43662
                },
                additional: {
                    name: "additional",
                    rate: .46,
                    from: 15e4
                }
            }
        }, {
            name: "others",
            brackets: {
                allowance: {
                    name: "allowance",
                    rate: 0,
                    from: 0,
                    band: 12570,
                    incomeLimit: 1e5
                },
                basic: {
                    name: "basic",
                    rate: .2,
                    band: 37700
                },
                higher: {
                    name: "higher",
                    rate: .4
                },
                additional: {
                    name: "additional",
                    rate: .45,
                    from: 15e4
                }
            }
        }]
    }, {
        year: "2023-24",
        countries: [{
            name: "scotland",
            brackets: {
                allowance: {
                    name: "allowance",
                    rate: 0,
                    from: 0,
                    band: 12570
                },
                starter: {
                    name: "starter",
                    rate: .19,
                    from: 12570
                },
                basic: {
                    name: "basic",
                    rate: .2,
                    from: 14732
                },
                intermediate: {
                    name: "intermediate",
                    rate: .21,
                    from: 25688
                },
                higher: {
                    name: "higher",
                    rate: .42,
                    from: 43662
                },
                additional: {
                    name: "additional",
                    rate: .47,
                    from: 125140
                }
            }
        }, {
            name: "others",
            brackets: {
                allowance: {
                    name: "allowance",
                    rate: 0,
                    from: 0,
                    band: 12570,
                    incomeLimit: 1e5
                },
                basic: {
                    name: "basic",
                    rate: .2,
                    band: 37700
                },
                higher: {
                    name: "higher",
                    rate: .4
                },
                additional: {
                    name: "additional",
                    rate: .45,
                    from: 125140
                }
            }
        }]
    }];
    var F = [{
        year: "2020-21",
        pre10: {
            car: .45,
            van: .45,
            motorcycle: .24,
            bicycle: .2
        },
        post10: {
            car: .25,
            van: .25,
            motorcycle: .24,
            bicycle: .2
        }
    }, {
        year: "2021-22",
        pre10: {
            car: .45,
            van: .45,
            motorcycle: .24,
            bicycle: .2
        },
        post10: {
            car: .25,
            van: .25,
            motorcycle: .24,
            bicycle: .2
        }
    }, {
        year: "2022-23",
        pre10: {
            car: .45,
            van: .45,
            motorcycle: .24,
            bicycle: .2
        },
        post10: {
            car: .25,
            van: .25,
            motorcycle: .24,
            bicycle: .2
        }
    }, {
        year: "2023-24",
        pre10: {
            car: .45,
            van: .45,
            motorcycle: .24,
            bicycle: .2
        },
        post10: {
            car: .25,
            van: .25,
            motorcycle: .24,
            bicycle: .2
        }
    }];
    var V = [{
        year: "2020-21",
        figures: {
            UPL: 5e4,
            PT: 9500,
            SPT: 6475,
            LPL: 9500,
            eNIC: 4e3
        },
        ni: {
            class1: {
                employee: {
                    belowLEL: 0,
                    LELtoPT: 0,
                    PTtoUEL: .12,
                    aboveUEL: .02
                },
                employer: {
                    belowST: 0,
                    aboveST: .138,
                    STtoUEL: 0
                }
            },
            class1a: {
                employer: .138
            },
            class2: {
                belowSPT: 0,
                SPTtoLPL: 3.05,
                LPLtoUPL: 3.05,
                aboveUPL: 3.05
            },
            class4: {
                belowSPT: 0,
                SPTtoLPL: 0,
                LPLtoUPL: .09,
                aboveUPL: .02
            }
        }
    }, {
        year: "2021-22",
        figures: {
            UPL: 50270,
            PT: 9568,
            SPT: 6515,
            LPL: 9568,
            eNIC: 4e3
        },
        ni: {
            class1: {
                employee: {
                    belowLEL: 0,
                    LELtoPT: 0,
                    PTtoUEL: .12,
                    aboveUEL: .02
                },
                employer: {
                    belowST: 0,
                    aboveST: .138,
                    STtoUEL: 0
                }
            },
            class1a: {
                employer: .138
            },
            class2: {
                belowSPT: 0,
                SPTtoLPL: 3.05,
                LPLtoUPL: 3.05,
                aboveUPL: 3.05
            },
            class4: {
                belowSPT: 0,
                SPTtoLPL: 0,
                LPLtoUPL: .09,
                aboveUPL: .02
            }
        }
    }, {
        year: "2022-23",
        figures: {
            UPL: 50270,
            PT: 11908,
            SPT: 6725,
            LPL: 11908,
            eNIC: 5e3
        },
        ni: {
            class1: {
                employee: {
                    belowLEL: 0,
                    LELtoPT: 0,
                    PTtoUEL: .1273,
                    aboveUEL: .0273
                },
                employer: {
                    belowST: 0,
                    aboveST: .1453,
                    STtoUEL: 0
                }
            },
            class1a: {
                employer: .1453
            },
            class2: {
                belowSPT: 0,
                SPTtoLPL: 0,
                LPLtoUPL: 3.15,
                aboveUPL: 3.15
            },
            class4: {
                belowSPT: 0,
                SPTtoLPL: 0,
                LPLtoUPL: .0973,
                aboveUPL: .0273
            }
        }
    }, {
        year: "2023-24",
        figures: {
            UPL: 50270,
            PT: 12570,
            SPT: 6725,
            LPL: 12570,
            eNIC: 5e3
        },
        ni: {
            class1: {
                employee: {
                    belowLEL: 0,
                    LELtoPT: 0,
                    PTtoUEL: .12,
                    aboveUEL: .02
                },
                employer: {
                    belowST: 0,
                    aboveST: .138,
                    STtoUEL: 0
                }
            },
            class1a: {
                employer: .138
            },
            class2: {
                belowSPT: 0,
                SPTtoLPL: 0,
                LPLtoUPL: 3.45,
                aboveUPL: 3.45
            },
            class4: {
                belowSPT: 0,
                SPTtoLPL: 0,
                LPLtoUPL: .09,
                aboveUPL: .02
            }
        }
    }];
    var k = [{
        year: "2020-21",
        studentLoans: {
            plan1: {
                threshold: 19390,
                rate: .09
            },
            plan2: {
                threshold: 26575,
                rate: .09
            },
            plan4: {
                threshold: 0,
                rate: 0
            }
        },
        postgraduateLoans: {
            england: {
                threshold: 21e3,
                rate: .06
            },
            scotland: {
                threshold: 18330,
                rate: .09
            },
            wales: {
                threshold: 21e3,
                rate: .06
            },
            "northern-ireland": {
                threshold: 18330,
                rate: .09
            }
        }
    }, {
        year: "2021-22",
        studentLoans: {
            plan1: {
                threshold: 19895,
                rate: .09
            },
            plan2: {
                threshold: 27295,
                rate: .09
            },
            plan4: {
                threshold: 25e3,
                rate: .09
            }
        },
        postgraduateLoans: {
            england: {
                threshold: 21e3,
                rate: .06
            },
            scotland: {
                threshold: 18330,
                rate: .09
            },
            wales: {
                threshold: 21e3,
                rate: .06
            },
            "northern-ireland": {
                threshold: 18330,
                rate: .09
            }
        }
    }, {
        year: "2022-23",
        studentLoans: {
            plan1: {
                threshold: 20195,
                rate: .09
            },
            plan2: {
                threshold: 27295,
                rate: .09
            },
            plan4: {
                threshold: 25375,
                rate: .09
            }
        },
        postgraduateLoans: {
            england: {
                threshold: 21e3,
                rate: .06
            },
            scotland: {
                threshold: 18330,
                rate: .09
            },
            wales: {
                threshold: 21e3,
                rate: .06
            },
            "northern-ireland": {
                threshold: 18330,
                rate: .09
            }
        }
    }, {
        year: "2023-24",
        studentLoans: {
            plan1: {
                threshold: 22095,
                rate: .09
            },
            plan2: {
                threshold: 27295,
                rate: .09
            },
            plan4: {
                threshold: 27660,
                rate: .09
            }
        },
        postgraduateLoans: {
            england: {
                threshold: 21e3,
                rate: .06
            },
            scotland: {
                threshold: 18330,
                rate: .09
            },
            wales: {
                threshold: 21e3,
                rate: .06
            },
            "northern-ireland": {
                threshold: 18330,
                rate: .09
            }
        }
    }];
    var w = (e, t) => e.find(a => a.year === t);
    var E = (e, t) => {
        let a;
        switch (e) {
            case "capitalGains":
                a = P;
                break;
            case "dividends":
                a = S;
                break;
            case "incomeTax":
                a = A;
                break;
            case "mileage":
                a = F;
                break;
            case "nationalInsurance":
                a = V;
                break;
            case "studentLoans":
                a = k;
                break
        }
        return w(a, t)
    };
    var v = (e, t) => {
        let a = {
            style: "currency",
            currency: "GBP"
        };
        return t || (a.maximumSignificantDigits = 21), new Intl.NumberFormat("gb-GB", a).format(e)
    };
    var M = (e, t) => {
        for (let a of Object.values(e)) {
            a.render();
            let {
                toggleOptions: n
            } = a;
            n && n.forEach(o => {
                let r = o.option.name,
                    l = a.nodeList.find(s => s.value === r);
                e[o.query.name].getValue() === o.query.value ? l.disabled = !1 : (l.disabled = !0, l.checked === !0 && a.clear())
            })
        }
        for (let a of Object.values(t)) a.render()
    };
    var h = (e, t, a, n) => {
        if (!e) return;
        let o = a(e),
            r = l => {
                let p = o.year.getValue().toString(),
                    s = w(t, p);
                if (!s) return;
                let f = n(l, o, s);
                M(o, f)
            };
        r(e), document.addEventListener("renderCalc", l => {
            let {
                name: p,
                item: s
            } = l.detail;
            p === "change" && s.type === "number" && s.getValue() === "" && s.setValue("0"), r(e)
        })
    };
    var C = (e, t) => {
        if (!e) return;
        let a = e.closest('[data-calc="wrapper"]');
        a && (t ? a.style.removeProperty("display") : a.style.display = "none")
    };
    var i = class {
        constructor(t, a) {
            this.input = a.form[t], this.isNodeList = this.input instanceof NodeList, this.nodeList = this.isNodeList ? [...this.input] : [this.input], this.type = this.nodeList[0].type, a.visibleIf && (this.visibleIf = a.visibleIf), a.toggleOptions && (this.toggleOptions = a.toggleOptions);
            let n = this.getValue();
            if (this.defaultValue = n.toString().length === 0 ? 0 : n, !this.isNodeList) {
                let o = this.input.getAttribute("data-calc-default");
                o && (this.defaultValue = o)
            }(this.defaultValue === 0 || this.defaultValue) && this.setValue(this.defaultValue), this.setVisibility(), this.nodeList.forEach(o => {
                o.addEventListener("keyup", () => {
                    document.dispatchEvent(new CustomEvent("renderCalc", {
                        detail: {
                            name: "keyup",
                            item: this
                        }
                    }))
                }), o.addEventListener("change", () => {
                    document.dispatchEvent(new CustomEvent("renderCalc", {
                        detail: {
                            name: "change",
                            item: this
                        }
                    }))
                }), this.type === "number" && (o.addEventListener("focus", () => {
                    this.getValueAsNumber() === 0 && this.setValue("")
                }), o.addEventListener("focusout", () => {
                    this.getValueAsNumber() === 0 && this.setValue("0")
                }))
            })
        }
        getValue() {
            return this.type === "checkbox" ? this.input.checked : this.input.value
        }
        getValueAsNumber() {
            if (this.type !== "number") return NaN;
            let {
                valueAsNumber: t
            } = this.input;
            return isNaN(t) ? 0 : t
        }
        getValueAsBoolean() {
            return this.type !== "checkbox" ? !1 : this.input.checked
        }
        setValue(t) {
            switch (this.type) {
                case "number":
                    this.input.value = t.toString();
                    break;
                case "select-one":
                    this.input.value = t.toString();
                    break;
                case "checkbox":
                    this.input.checked = t;
                    break;
                case "radio":
                    this.input.value = t.toString();
                    break
            }
        }
        setVisibility() {
            let t = this.nodeList[0];
            t && this.visibleIf && C(t, this.visibleIf())
        }
        toDefault() {
            this.defaultValue && this.setValue(this.defaultValue)
        }
        clear() {
            switch (this.type) {
                case "number":
                    this.input.value = "0";
                    break;
                case "select-one":
                    this.input.value = this.input.options[0].value;
                    break;
                case "checkbox":
                    this.input.checked = !1;
                    break;
                case "radio":
                    this.nodeList.forEach(t => {
                        t.checked = !1
                    });
                    break
            }
        }
        render() {
            this.setVisibility()
        }
    };
    var u = class {
        constructor(t, a) {
            var n;
            this.element = a.form.querySelector(`[data-calc="${t}"]`), this.type = ((n = this.element) == null ? void 0 : n.dataset.calcType) === "text" ? "text" : "currency", this.value = a.value, a.visibleIf && (this.visibleIf = a.visibleIf), a.labels && (this.labels = a.labels)
        }
        getValue() {
            return this.value()
        }
        getValueAsNumber() {
            return Number(this.value())
        }
        setValue() {
            if (this.element) switch (this.type) {
                case "currency":
                    this.element.textContent = v(Number(this.value()), !0);
                    break;
                case "text":
                    this.element.textContent = this.value().toString();
                    break
            }
        }
        setVisibility() {
            this.element && this.visibleIf && C(this.element, this.visibleIf())
        }
        getLabel() {
            if (!this.element) return "";
            let t = this.element.closest('[data-calc="wrapper"]');
            if (!t) return "";
            let a = t.querySelector("label");
            return a && a.textContent ? a.textContent : ""
        }
        setLabel() {
            if (!this.element) return;
            let t = this.element.closest('[data-calc="wrapper"]');
            if (!t) return;
            let a = t.querySelector("label");
            a && this.labels && (a.textContent = this.labels())
        }
        render() {
            this.setLabel(), this.setValue()
        }
    };
    var Y = e => ({
        year: new i("year", {
            form: e
        }),
        dividendIncome: new i("dividend-income", {
            form: e
        }),
        otherIncome: new i("other-income", {
            form: e
        })
    });
    var j = (e, t) => {
        let a = e.dividendIncome,
            n = (() => {
                let {
                    rates: r,
                    allowances: l,
                    bands: p
                } = t, {
                    dividendIncome: s
                } = e, {
                    otherIncome: f
                } = e, y = s + f, x = f <= l.personal ? l.personal - f : 0, c = s - x - l.dividends;
                if (c <= 0) return 0;
                let g = l.personal + p.basic,
                    b = f < g ? g - f - l.dividends : 0,
                    d = b === 0 ? 0 : c >= b ? b * r.ordinary : c * r.ordinary,
                    m = y > p.higher ? p.higher - f - l.dividends : y - p.basic - l.personal <= 0 ? 0 : y - p.basic - l.personal,
                    L = m === 0 ? 0 : c > m ? m * r.upper : (c - b) * r.upper,
                    T = c - b - m <= 0 ? 0 : (c - b - m) * r.additional;
                return d + L + T
            })(),
            o = e.dividendIncome - n;
        return {
            dividendProfits: a,
            taxToPay: n,
            profitAfterTax: o
        }
    };
    var W = (e, t, a) => {
        if (!t) return;
        let n = j({
            dividendIncome: t.dividendIncome.getValueAsNumber(),
            otherIncome: t.otherIncome.getValueAsNumber()
        }, a);
        return {
            dividendProfits: new u("dividend-profits", {
                form: e,
                value: () => n.dividendProfits
            }),
            taxToPay: new u("tax-to-pay", {
                form: e,
                value: () => n.taxToPay
            }),
            allowance: new u("allowance", {
                form: e,
                value: () => "\xA32,000 tax-free dividend allowance"
            }),
            profitAfterTax: new u("profit-after-tax", {
                form: e,
                value: () => n.profitAfterTax
            })
        }
    };
    var $ = e => {
        e && h(e, S, Y, W)
    };
    var z = e => ({
        year: new i("year", {
            form: e
        }),
        how: new i("how", {
            form: e
        }),
        capitalGains: new i("capital-gains", {
            form: e
        }),
        otherIncome: new i("other-income", {
            form: e
        })
    });
    var _ = (e, t) => {
        let a = e.capitalGains,
            n = (() => {
                let {
                    exemption: r,
                    basicBand: l,
                    personalAllowance: p,
                    basicRate: s,
                    higherRate: f,
                    badr: y
                } = t, x = e.otherIncome <= l ? e.otherIncome : l, c = p + l - x;
                c = c >= l ? l : c;
                let g = e.capitalGains - r,
                    b = g >= c ? c : g,
                    d = g - b,
                    m = 0;
                switch (e.how) {
                    case "property":
                        m = b * s.residential + d * f.residential;
                        break;
                    case "shares":
                        m = b * y + d * y;
                        break;
                    default:
                        m = b * s.other + d * f.other
                }
                return m
            })(),
            o = e.capitalGains + e.otherIncome - n;
        return {
            profit: a,
            taxToPay: n,
            profitAfterTax: o
        }
    };
    var J = (e, t, a) => {
        if (!t) return;
        let n = _({
            how: t.how.getValue(),
            capitalGains: t.capitalGains.getValueAsNumber(),
            otherIncome: t.otherIncome.getValueAsNumber()
        }, a);
        return {
            profit: new u("profit", {
                form: e,
                value: () => n.profit,
                labels: () => {
                    let r = "";
                    switch (t.how.getValue()) {
                        case "shares":
                            r = "shares";
                            break;
                        case "property":
                            r = "property";
                            break;
                        case "crypto":
                            r = "cryptocurrencies";
                            break;
                        case "other":
                            r = "other assets";
                            break
                    }
                    return `Your profit from ${r}`
                }
            }),
            allowance: new u("allowance", {
                form: e,
                value: () => `${v(a.exemption,!1)} tax-free CGT allowance`
            }),
            taxToPay: new u("tax-to-pay", {
                form: e,
                value: () => n.taxToPay
            }),
            profitAfterTax: new u("profit-after-tax", {
                form: e,
                value: () => n.profitAfterTax
            })
        }
    };
    var K = e => {
        e && h(e, P, z, J)
    };
    var Q = e => {
        let t = {
            year: new i("year", {
                form: e
            }),
            country: new i("country", {
                form: e
            }),
            isEmployed: new i("is-employed", {
                form: e
            }),
            isSelfEmployed: new i("is-self-employed", {
                form: e
            })
        };
        return t.annualSalary = new i("annual-salary", {
            form: e,
            visibleIf: () => !!t.isEmployed.getValue()
        }), t.selfEmployedIncome = new i("self-employed-income", {
            form: e,
            visibleIf: () => !!t.isSelfEmployed.getValue()
        }), t.selfEmployedExpenses = new i("self-employed-expenses", {
            form: e,
            visibleIf: () => !!t.isSelfEmployed.getValue()
        }), t
    };
    var X = (e, t) => e >= t ? t : e;
    var O = (e, t) => e <= t ? t : e;
    var U = (e, t) => {
        let {
            ni: a
        } = t, {
            UPL: n,
            PT: o,
            SPT: r,
            LPL: l,
            eNIC: p
        } = t.figures, s = (() => {
            let m = 0;
            return e.isEmployed && (m += e.annualSalary), e.isSelfEmployed && (m += e.selfEmployedIncome - X(e.selfEmployedExpenses, 1e3)), O(m, 0)
        })(), f = (() => {
            if (!e.isEmployed) return 0;
            let {
                employee: m,
                employer: L
            } = a.class1;
            return s < o ? 0 : s > n ? (n - o) * m.PTtoUEL + (s - n) * m.aboveUEL : (s - o) * m.PTtoUEL
        })(), y = (() => {
            if (!e.isSelfEmployed) return 0;
            let {
                belowSPT: m,
                SPTtoLPL: L,
                LPLtoUPL: T,
                aboveUPL: G
            } = a.class2;
            return s > r ? L * 52 : 0
        })(), x = (() => {
            if (!e.isSelfEmployed) return 0;
            let {
                belowSPT: m,
                SPTtoLPL: L,
                LPLtoUPL: T,
                aboveUPL: G
            } = a.class4;
            return s < l ? 0 : s > n ? (n - l) * T + (s - n) * G : (s - l) * T
        })(), c = f + y + x, {
            pathname: g
        } = window.location;
        if (!g.includes("/national-insurance")) return {
            totalEarnings: s,
            niClass1: f,
            niClass2: y,
            niClass4: x,
            niTotal: c
        };
        let b = (() => {
                let m = E("incomeTax", e.year);
                return B({
                    year: e.year,
                    country: e.country,
                    isEmployed: e.isEmployed,
                    isSelfEmployed: e.isSelfEmployed,
                    annualSalary: e.annualSalary,
                    selfEmployedIncome: e.selfEmployedIncome,
                    selfEmployedExpenses: e.selfEmployedExpenses
                }, m).incomeTax
            })(),
            d = e.annualSalary - b - c;
        return {
            totalEarnings: s,
            niClass1: f,
            niClass2: y,
            niClass4: x,
            niTotal: c,
            incomeTax: b,
            remains: d
        }
    };
    var B = (e, t) => {
        let a = e.country === "scotland" ? "scotland" : "others",
            n = t.countries.find(c => c.name === a),
            o = e.selfEmployedExpenses > 1e3 ? e.selfEmployedExpenses : e.selfEmployedIncome >= 1e3 ? 1e3 : e.selfEmployedIncome,
            r = (() => {
                let c = 0;
                return e.isEmployed && (c += e.annualSalary), e.isSelfEmployed && (c += e.selfEmployedIncome - o), c
            })(),
            p = (() => {
                let c = (() => {
                        let d = n == null ? void 0 : n.brackets.allowance.incomeLimit;
                        if (!d || d > e.annualSalary) return n == null ? void 0 : n.brackets.allowance.band;
                        let m = e.annualSalary - d;
                        return O(n.brackets.allowance.band - m / 2, 0)
                    })(),
                    g = [];
                for (let d of Object.values(n == null ? void 0 : n.brackets)) g.push(d);
                g.sort(function(d, m) {
                    return d.rate - m.rate
                });
                let b = [];
                return g.forEach((d, m) => {
                    if (m === 0 && c === 0) return;
                    let L = 0;
                    a === "scotland" || d.from ? L = d.from : d.name === "basic" ? L = c : d.name === "higher" && (L = c + (n == null ? void 0 : n.brackets.basic.band)), b.push({
                        name: d.name,
                        rate: d.rate,
                        from: L
                    })
                }), N(b, e.annualSalary)
            })().reduce((c, g) => c + g.taxAtBracket, 0),
            {
                pathname: s
            } = window.location;
        if (!s.includes("/income-tax")) return {
            totalEarnings: r,
            incomeTax: p
        };
        let f = (() => {
                let c = E("nationalInsurance", e.year);
                return U({
                    year: e.year,
                    country: e.country,
                    isEmployed: e.isEmployed,
                    isSelfEmployed: e.isSelfEmployed,
                    annualSalary: e.annualSalary,
                    selfEmployedIncome: e.selfEmployedIncome,
                    selfEmployedExpenses: e.selfEmployedExpenses
                }, c).niTotal
            })(),
            y = p + f,
            x = r - y;
        return {
            totalEarnings: r,
            incomeTax: p,
            nationalInsurance: f,
            taxToPay: y,
            remains: x
        }
    };
    var Z = (e, t, a) => {
        if (!t) return;
        let n = B({
            year: t.year.getValue(),
            country: t.country.getValue(),
            isEmployed: t.isEmployed.getValueAsBoolean(),
            isSelfEmployed: t.isSelfEmployed.getValueAsBoolean(),
            annualSalary: t.annualSalary.getValueAsNumber(),
            selfEmployedIncome: t.selfEmployedIncome.getValueAsNumber(),
            selfEmployedExpenses: t.selfEmployedExpenses.getValueAsNumber()
        }, a);
        return {
            totalEarnings: new u("total-earnings", {
                form: e,
                value: () => n.totalEarnings
            }),
            nationalInsurance: new u("national-insurance", {
                form: e,
                value: () => n.nationalInsurance
            }),
            incomeTax: new u("income-tax", {
                form: e,
                value: () => n.incomeTax
            }),
            taxToPay: new u("tax-to-pay", {
                form: e,
                value: () => n.taxToPay
            }),
            remains: new u("remains", {
                form: e,
                value: () => n.remains
            })
        }
    };
    var ee = e => {
        e && h(e, A, Q, Z)
    };
    var te = e => {
        let t = {
            year: new i("year", {
                form: e
            }),
            country: new i("country", {
                form: e
            }),
            isEmployed: new i("is-employed", {
                form: e
            }),
            isSelfEmployed: new i("is-self-employed", {
                form: e
            })
        };
        return t.annualSalary = new i("annual-salary", {
            form: e,
            visibleIf: () => t.isEmployed.getValueAsBoolean()
        }), t.selfEmployedIncome = new i("self-employed-income", {
            form: e,
            visibleIf: () => t.isSelfEmployed.getValueAsBoolean()
        }), t.selfEmployedExpenses = new i("self-employed-expenses", {
            form: e,
            visibleIf: () => t.isSelfEmployed.getValueAsBoolean()
        }), t
    };
    var ae = (e, t, a) => {
        if (!t) return;
        let n = U({
            year: t.year.getValue(),
            country: t.country.getValue(),
            isEmployed: t.isEmployed.getValueAsBoolean(),
            isSelfEmployed: t.isSelfEmployed.getValueAsBoolean(),
            annualSalary: t.annualSalary.getValueAsNumber() + t.selfEmployedIncome.getValueAsNumber(),
            selfEmployedIncome: t.selfEmployedIncome.getValueAsNumber(),
            selfEmployedExpenses: t.selfEmployedExpenses.getValueAsNumber()
        }, a);
        return {
            totalEarnings: new u("total-earnings", {
                form: e,
                value: () => n.totalEarnings
            }),
            allowance: new u("allowance", {
                form: e,
                value: () => "\xA31,000 tax-free Trading Allowance",
                visibleIf: () => t.isSelfEmployed.getValueAsBoolean()
            }),
            niClass1: new u("ni-class1", {
                form: e,
                value: () => n.niClass1,
                visibleIf: () => t.isEmployed.getValueAsBoolean()
            }),
            niClass2: new u("ni-class2", {
                form: e,
                value: () => n.niClass2,
                visibleIf: () => t.isSelfEmployed.getValueAsBoolean()
            }),
            niClass4: new u("ni-class4", {
                form: e,
                value: () => n.niClass4,
                visibleIf: () => t.isSelfEmployed.getValueAsBoolean()
            }),
            niTotal: new u("ni-total", {
                form: e,
                value: () => n.niTotal
            }),
            incomeTax: new u("income-tax", {
                form: e,
                value: () => n.incomeTax
            }),
            remains: new u("remains", {
                form: e,
                value: () => n.remains
            })
        }
    };
    var ne = e => {
        e && h(e, V, te, ae)
    };
    var re = e => {
        let t = {
            year: new i("year", {
                form: e
            }),
            own: new i("own", {
                form: e
            })
        };
        return t.work = new i("work", {
            form: e,
            visibleIf: () => t.own.getValue() === "yes"
        }), t.type = new i("type", {
            form: e,
            visibleIf: () => t.work.visibleIf ? t.work.visibleIf() && t.work.getValue() === "yes" : !1
        }), t.miles = new i("miles", {
            form: e,
            visibleIf: () => t.type.visibleIf ? t.type.visibleIf() && t.type.getValue() !== "" : !1
        }), t
    };
    var oe = (e, t) => ({
        claim: (() => {
            if (e.own !== "yes" || e.work !== "yes" || !e.type) return 0;
            let n = e.miles >= 1e4 ? 1e4 : e.miles,
                o = e.miles >= 1e4 ? e.miles - 1e4 : 0,
                r = t.pre10[e.type] * n,
                l = t.post10[e.type] * o;
            return r + l
        })()
    });
    var le = (e, t, a) => {
        if (!t) return;
        let n = oe({
            own: t.own.getValue(),
            work: t.work.getValue(),
            type: t.type.getValue(),
            miles: t.miles.getValueAsNumber()
        }, a);
        return {
            claim: new u("claim", {
                form: e,
                value: () => n.claim
            })
        }
    };
    var ie = e => {
        e && h(e, F, re, le)
    };
    var se = e => {
        let t = {
            year: new i("year", {
                form: e
            }),
            isStudent: new i("is-student", {
                form: e
            }),
            isPostGraduate: new i("is-post-graduate", {
                form: e
            })
        };
        return t.studentLoanPlan = new i("student-loan-plan", {
            form: e,
            visibleIf: () => !!t.isStudent.getValue(),
            toggleOptions: [{
                option: {
                    name: "plan4"
                },
                query: {
                    name: "postGraduateLoanCountry",
                    value: "scotland"
                }
            }]
        }), t.postGraduateLoanCountry = new i("post-graduate-loan-country", {
            form: e,
            visibleIf: () => !!t.isPostGraduate.getValue()
        }), t.allIncome = new i("all-income", {
            form: e,
            visibleIf: () => {
                let a = !!t.isStudent.getValue(),
                    n = !!t.isPostGraduate.getValue();
                return !a && !n ? !1 : !!(a && t.studentLoanPlan.getValue() !== "" || n && t.postGraduateLoanCountry.getValue() !== "")
            }
        }), t
    };
    var ue = (e, t) => {
        let a = (() => {
                if (!e.isStudent || !e.studentLoanPlan || e.studentLoanPlan === "plan4" && e.postGraduateLoanCountry !== "scotland") return 0;
                let {
                    threshold: r,
                    rate: l
                } = t.studentLoans[e.studentLoanPlan];
                return e.allIncome >= r ? (e.allIncome - r) * l : 0
            })(),
            n = (() => {
                if (!e.isPostGraduate || !e.postGraduateLoanCountry) return 0;
                let {
                    threshold: r,
                    rate: l
                } = t.postgraduateLoans[e.postGraduateLoanCountry];
                return e.allIncome >= r ? (e.allIncome - r) * l : 0
            })(),
            o = (() => a + n)();
        return {
            studentLoanTotal: a,
            postGraduateTotal: n,
            loanTotal: o
        }
    };
    var ce = (e, t, a) => {
        if (!t) return;
        let n = t.isStudent.getValueAsBoolean(),
            o = t.isPostGraduate.getValueAsBoolean(),
            r = t.studentLoanPlan.getValue(),
            l = t.postGraduateLoanCountry.getValue(),
            p = ue({
                allIncome: t.allIncome.getValueAsNumber(),
                isStudent: n,
                isPostGraduate: o,
                studentLoanPlan: r,
                postGraduateLoanCountry: l
            }, a);
        return {
            studentLoanTotal: new u("student-loan-total", {
                form: e,
                value: () => p.studentLoanTotal,
                visibleIf: () => !!n && !!r
            }),
            postGraduateTotal: new u("post-graduate-total", {
                form: e,
                value: () => p.postGraduateTotal,
                visibleIf: () => !!o && !!l
            }),
            loanTotal: new u("loan-total", {
                form: e,
                value: () => p.loanTotal
            })
        }
    };
    var me = e => {
        e && h(e, k, se, ce)
    };
    window.Webflow || (window.Webflow = []);
    window.Webflow.push(() => {
        let e = document.querySelector('[data-calc="wrapper"]');
        [...e == null ? void 0 : e.querySelectorAll(".calculator-input_group label")].forEach(l => {
            let p = l.getAttribute("for");
            if (p) {
                let s = p.replace(/(-)([0-9])+/g, "");
                l.setAttribute("for", s)
            } else {
                let s = l.querySelector("span"),
                    f = s.getAttribute("for");
                if (f) {
                    let y = f.replace(/(-)([0-9])+/g, "");
                    s.setAttribute("for", y)
                }
            }
        }), [...e == null ? void 0 : e.querySelectorAll("input, select")].forEach(l => {
            let p = l.id.replace(/(-)([0-9])+/g, "");
            l.id = p, l.type !== "radio" && (l.name = p)
        });
        let {
            pathname: n
        } = window.location, o = n.match(/[^\/]+/g)[1], r = document.querySelector(`[data-calc="wrapper"] [data-calc-name="${o}"]`);
        r && (n.includes("/capital-gains") && K(r), n.includes("/dividend-tax") && $(r), n.includes("/income-tax") && ee(r), n.includes("/national-insurance") && ne(r), n.includes("/mileage") && ie(r), n.includes("/student-and-post-graduate-loan-repayments") && me(r))
    });
})();
