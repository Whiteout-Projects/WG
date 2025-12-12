const _0x48e09e = _0xe2ff;
function _0xe2ff(_0x10f495, _0x5ad0f9) {
    const _0x51d63d = _0x51d6();
    return (
        (_0xe2ff = function (_0xe2ff12, _0x4c86cc) {
            _0xe2ff12 = _0xe2ff12 - 0x1df;
            let _0x507859 = _0x51d63d[_0xe2ff12];
            return _0x507859;
        }),
        _0xe2ff(_0x10f495, _0x5ad0f9)
    );
}
(function (_0x510db1, _0x1bfbf2) {
    const _0x114d3c = _0xe2ff,
        _0x22bba7 = _0x510db1();
    while (!![]) {
        try {
            const _0x149f10 =
                parseInt(_0x114d3c(0x249)) / 0x1 +
                -parseInt(_0x114d3c(0x204)) / 0x2 +
                -parseInt(_0x114d3c(0x27f)) / 0x3 +
                -parseInt(_0x114d3c(0x20b)) / 0x4 +
                (-parseInt(_0x114d3c(0x25d)) / 0x5) * (-parseInt(_0x114d3c(0x260)) / 0x6) +
                parseInt(_0x114d3c(0x254)) / 0x7 +
                -parseInt(_0x114d3c(0x263)) / 0x8;
            if (_0x149f10 === _0x1bfbf2) break;
            else _0x22bba7["push"](_0x22bba7["shift"]());
        } catch (_0xf44a98) {
            _0x22bba7["push"](_0x22bba7["shift"]());
        }
    }
})(_0x51d6, 0x32a58),
    $(document)[_0x48e09e(0x266)](function () {
        const _0xd327e3 = _0x48e09e,
            _0x5ef824 = {
                LS_OWNED_MATERIALS_KEY: "ownedMaterials",
                LS_USED_MATERIALS_KEY: _0xd327e3(0x1fb),
                LS_GEAR_LEVELS_KEY: _0xd327e3(0x1fe),
                MAX_MATERIAL_AMOUNT: 0x98967f,
                MAX_GEAR_LEVEL: 0x3e,
                DEFAULT_LEVELS: { 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0" },
                MATERIAL_ORDER: [_0xd327e3(0x241), _0xd327e3(0x1ed), "Design_Plans", "Lunar_Amber"],
            };
        let _0x28f5c4 = {
            ownedMaterials: {},
            usedMaterials: {},
            selectedLevels: {},
            gearData: null,
            selectedGearId: null,
            customDropdowns: {},
        };
        function _0x46b338() {
            const _0x293d99 = _0xd327e3;
            (_0x28f5c4["ownedMaterials"] =
                JSON[_0x293d99(0x20d)](localStorage["getItem"](_0x5ef824[_0x293d99(0x26e)])) || {}),
                (_0x28f5c4[_0x293d99(0x1fb)] =
                    JSON["parse"](localStorage[_0x293d99(0x23a)](_0x5ef824["LS_USED_MATERIALS_KEY"])) || {}),
                (_0x28f5c4[_0x293d99(0x28c)] =
                    JSON["parse"](localStorage[_0x293d99(0x23a)](_0x5ef824[_0x293d99(0x256)])) ||
                    structuredClone(_0x5ef824[_0x293d99(0x22d)]));
        }
        function _0x2015d3(_0x942655) {
            const _0x5203a5 = _0xd327e3,
                _0x277fcb = {
                    ownedMaterials: _0x5ef824["LS_OWNED_MATERIALS_KEY"],
                    usedMaterials: _0x5ef824[_0x5203a5(0x1f1)],
                    selectedLevels: _0x5ef824[_0x5203a5(0x256)],
                };
            if (_0x277fcb[_0x942655])
                localStorage[_0x5203a5(0x218)](_0x277fcb[_0x942655], JSON["stringify"](_0x28f5c4[_0x942655]));
        }
        function _0x515bb0(_0x51a4db) {
            const _0x414953 = _0xd327e3,
                _0x2c57cc = {
                    ownedMaterials: _0x5ef824[_0x414953(0x26e)],
                    usedMaterials: _0x5ef824["LS_USED_MATERIALS_KEY"],
                    selectedLevels: _0x5ef824[_0x414953(0x256)],
                };
            _0x2c57cc[_0x51a4db] &&
                (localStorage[_0x414953(0x221)](_0x2c57cc[_0x51a4db]),
                (_0x28f5c4[_0x51a4db] =
                    _0x51a4db === _0x414953(0x28c) ? structuredClone(_0x5ef824[_0x414953(0x22d)]) : {}));
        }
        function _0x29318d(_0x2c8b7f) {
            const _0x262a9d = _0xd327e3,
                _0x3d5a94 = document[_0x262a9d(0x1f4)](_0x2c8b7f);
            _0x3d5a94 &&
                ((_0x3d5a94["currentTime"] = 0x0),
                _0x3d5a94[_0x262a9d(0x205)]()[_0x262a9d(0x245)](_0x12205d =>
                    console[_0x262a9d(0x258)](_0x262a9d(0x223) + _0x2c8b7f + ":", _0x12205d)
                ));
        }
        function _0x95bba(_0xd54d00) {
            const _0x16aab0 = _0xd327e3;
            $(_0x16aab0(0x274))["addClass"](_0x16aab0(0x236)), $(_0xd54d00)[_0x16aab0(0x216)](_0x16aab0(0x24e));
        }
        function _0x34f86d(_0x359a30) {
            const _0x433d1e = _0xd327e3;
            $(_0x433d1e(0x274))[_0x433d1e(0x216)](_0x433d1e(0x236)), $(_0x359a30)["addClass"](_0x433d1e(0x24e));
        }
        function _0x4823de(_0x38de67, _0x1e7bfc) {
            const _0x4f7da3 = _0xd327e3,
                _0x134e0e = window[_0x4f7da3(0x206)]?.[_0x38de67] || _0x1e7bfc;
            $(_0x4f7da3(0x21a))[_0x4f7da3(0x1ff)](_0x134e0e), _0x95bba(_0x4f7da3(0x28f));
        }
        function _0x26566() {
            const _0x36178e = _0xd327e3;
            if (!_0x28f5c4[_0x36178e(0x264)]) return;
            Object[_0x36178e(0x228)](_0x28f5c4["gearData"])[_0x36178e(0x27b)](_0x186d97 => {
                const _0x2b491d = _0x36178e,
                    _0x334a8a = _0x28f5c4["selectedLevels"][_0x186d97] || "0",
                    _0x4f75c6 = _0x28f5c4[_0x2b491d(0x264)][_0x186d97][_0x2b491d(0x21d)][_0x334a8a];
                $(_0x2b491d(0x226) + _0x186d97)[_0x2b491d(0x1ff)](_0x4f75c6?.["gear_tier"] || "");
                const _0x2d2ebc =
                        "gear_name_" + _0x4f75c6?.[_0x2b491d(0x214)]?.[_0x2b491d(0x202)]()[_0x2b491d(0x24a)](/ /g, "_"),
                    _0x19ad47 = window[_0x2b491d(0x206)]?.[_0x2d2ebc] || _0x4f75c6?.[_0x2b491d(0x214)];
                $("#icon-data-" + _0x186d97)[_0x2b491d(0x1ea)](
                    _0x4f75c6?.[_0x2b491d(0x229)]
                        ? _0x2b491d(0x242) + _0x4f75c6["icon"] + _0x2b491d(0x219) + _0x19ad47 + _0x2b491d(0x233)
                        : ""
                ),
                    $(_0x2b491d(0x23c) + _0x186d97)[_0x2b491d(0x1ea)](
                        _0x2b491d(0x25f)[_0x2b491d(0x235)](_0x4f75c6?.[_0x2b491d(0x262)] || 0x0)
                    );
            });
        }
        function _0x4b4a69() {
            const _0x3f82f6 = _0xd327e3,
                _0x51a4d4 = $(_0x3f82f6(0x1f9));
            if (!_0x28f5c4[_0x3f82f6(0x277)] || !_0x28f5c4[_0x3f82f6(0x264)]) {
                _0x51a4d4[_0x3f82f6(0x207)](_0x3f82f6(0x24e));
                return;
            }
            const _0x170f19 = _0x28f5c4["selectedLevels"][_0x28f5c4["selectedGearId"]] || "0",
                _0x55ea67 = _0x28f5c4[_0x3f82f6(0x264)][_0x28f5c4[_0x3f82f6(0x277)]]?.[_0x3f82f6(0x21d)]?.[_0x170f19];
            _0x170f19 > 0x0 && _0x55ea67?.[_0x3f82f6(0x220)]
                ? (_0x51a4d4[_0x3f82f6(0x1e2)](_0x3f82f6(0x25a))["attr"](_0x3f82f6(0x279), _0x55ea67[_0x3f82f6(0x220)]),
                  _0x51a4d4[_0x3f82f6(0x216)](_0x3f82f6(0x24e)))
                : _0x51a4d4[_0x3f82f6(0x207)](_0x3f82f6(0x24e));
        }
        function _0x2c3594() {
            const _0x20c38c = _0xd327e3,
                _0xdbcd0e = $(_0x20c38c(0x286)),
                _0x3707f7 = _0xdbcd0e["prev"]("h2");
            if (
                Object[_0x20c38c(0x228)](_0x28f5c4[_0x20c38c(0x1fb)])[_0x20c38c(0x284)] === 0x0 ||
                Object["values"](_0x28f5c4[_0x20c38c(0x1fb)])[_0x20c38c(0x239)](_0xa394b => _0xa394b === 0x0)
            ) {
                _0xdbcd0e[_0x20c38c(0x267)]()[_0x20c38c(0x207)](_0x20c38c(0x24e)),
                    _0x3707f7[_0x20c38c(0x207)]("hidden");
                return;
            }
            const _0x20a95c = Object[_0x20c38c(0x26d)](_0x28f5c4[_0x20c38c(0x1fb)])
                    ["filter"](([, _0xa21296]) => _0xa21296 > 0x0)
                    [_0x20c38c(0x24d)](([_0x38c6d1, _0xa9290a]) => {
                        const _0x52291c = _0x20c38c,
                            _0xa7d6f0 = _0x52291c(0x23e) + _0x38c6d1[_0x52291c(0x202)](),
                            _0x43b868 = window["translations"]?.[_0xa7d6f0] || _0x38c6d1["replace"](/_/g, "\x20");
                        return (
                            _0x52291c(0x1e4) +
                            _0x43b868 +
                            "</span><span\x20class=\x22material-total\x22>" +
                            _0xa9290a[_0x52291c(0x250)]() +
                            _0x52291c(0x227)
                        );
                    })
                    [_0x20c38c(0x22b)](""),
                _0x251b43 = window[_0x20c38c(0x206)]?.[_0x20c38c(0x240)] || _0x20c38c(0x28b);
            _0x3707f7["text"](_0x251b43)[_0x20c38c(0x216)](_0x20c38c(0x24e));
            const _0x19cf42 =
                "<div\x20class=\x22used-materials-summary-card\x22><div\x20class=\x22materials-list\x22>" +
                _0x20a95c +
                _0x20c38c(0x26a);
            _0xdbcd0e[_0x20c38c(0x1ea)](_0x19cf42)[_0x20c38c(0x216)](_0x20c38c(0x24e));
        }
        function _0x2d51ee(_0x1c5bdd) {
            const _0x4a98bd = _0xd327e3,
                _0xb66934 = $(_0x4a98bd(0x247));
            if (!_0x1c5bdd || !Object["values"](_0x1c5bdd)[_0x4a98bd(0x225)](_0x373e55 => _0x373e55 > 0x0)) {
                _0xb66934[_0x4a98bd(0x1ea)](_0x4a98bd(0x1e3)), $(_0x4a98bd(0x28d))[_0x4a98bd(0x207)](_0x4a98bd(0x24e));
                return;
            }
            $(_0x4a98bd(0x28d))[_0x4a98bd(0x216)](_0x4a98bd(0x24e));
            const _0x208662 = _0x5ef824[_0x4a98bd(0x1e8)]
                [_0x4a98bd(0x24d)](_0x4e4f44 => {
                    const _0x5e25de = _0x4a98bd,
                        _0x107f84 = _0x4e4f44[_0x5e25de(0x24a)](_0x5e25de(0x282), ""),
                        _0x5e8928 = _0x5e25de(0x23e) + _0x107f84["toLowerCase"](),
                        _0x454056 = window[_0x5e25de(0x206)]?.[_0x5e8928] || _0x107f84[_0x5e25de(0x24a)](/_/g, "\x20");
                    return (
                        _0x5e25de(0x1e1) +
                        _0x4e4f44 +
                        _0x5e25de(0x276) +
                        _0x4e4f44 +
                        _0x5e25de(0x224) +
                        _0x454056 +
                        _0x5e25de(0x23f)
                    );
                })
                [_0x4a98bd(0x22b)]("");
            _0xb66934[_0x4a98bd(0x1ea)](_0x208662),
                $(_0x4a98bd(0x1f5))["each"](function () {
                    const _0x14a059 = _0x4a98bd,
                        _0x4df870 = $(this)[_0x14a059(0x1f2)](_0x14a059(0x200)),
                        _0x7e08ee = $(this)[_0x14a059(0x1e2)](_0x14a059(0x289)),
                        _0x2f5e78 = _0x1c5bdd[_0x4df870] || 0x0,
                        _0x3ee434 = _0x28f5c4[_0x14a059(0x243)][_0x4df870] || 0x0;
                    _0x7e08ee[_0x14a059(0x1ff)](_0x3ee434[_0x14a059(0x250)]() + "/" + _0x2f5e78[_0x14a059(0x250)]()),
                        _0x7e08ee[_0x14a059(0x287)](
                            _0x14a059(0x27d),
                            _0x2f5e78 === 0x0 ? _0x14a059(0x212) : _0x3ee434 < _0x2f5e78 ? "#F76262" : _0x14a059(0x22f)
                        );
                });
        }
        function _0x432bca() {
            const _0x40efa2 = _0xd327e3;
            if (!_0x28f5c4[_0x40efa2(0x277)] || !_0x28f5c4[_0x40efa2(0x264)]) return;
            const _0x283d84 = parseInt(_0x28f5c4[_0x40efa2(0x28c)][_0x28f5c4[_0x40efa2(0x277)]], 0xa),
                _0x3320ed = (_0x283d84 + 0x1)[_0x40efa2(0x27c)](),
                _0x4b27c2 = _0x28f5c4[_0x40efa2(0x264)][_0x28f5c4[_0x40efa2(0x277)]]?.[_0x40efa2(0x21d)]?.[_0x3320ed];
            _0x2d51ee(_0x4b27c2 ? _0x4b27c2[_0x40efa2(0x283)] : null);
        }
        function _0x3dd1b3(_0x8cf823) {
            const _0x5adb2d = _0xd327e3,
                _0x5828ee = document[_0x5adb2d(0x1f4)](_0x5adb2d(0x1e5) + _0x8cf823);
            if (!_0x5828ee) return;
            _0x5828ee[_0x5adb2d(0x261)] = _0x5adb2d(0x1fd) + _0x8cf823 + _0x5adb2d(0x209);
            const _0x36558d = _0x5828ee["querySelector"](".custom-select-trigger"),
                _0x5037dd = _0x5828ee[_0x5adb2d(0x251)](_0x5adb2d(0x1f3)),
                _0x4363b3 = _0x5828ee[_0x5adb2d(0x251)](".level-input"),
                _0x4960cf = _0x36558d[_0x5adb2d(0x251)](_0x5adb2d(0x21f)),
                _0x272555 = _0x28f5c4[_0x5adb2d(0x264)][_0x8cf823]["levels"],
                _0x195d4a = window[_0x5adb2d(0x206)] || {},
                _0x2f33a6 = document[_0x5adb2d(0x275)]();
            for (let _0x874594 = 0x0; _0x874594 <= _0x5ef824[_0x5adb2d(0x232)]; _0x874594++) {
                const _0x3faeee = _0x874594[_0x5adb2d(0x27c)](),
                    _0xe82f81 = _0x272555[_0x3faeee];
                if (!_0xe82f81 && _0x874594 > 0x0) continue;
                const _0x4b89bb = document["createElement"](_0x5adb2d(0x1e9));
                _0x4b89bb[_0x5adb2d(0x20f)][_0x5adb2d(0x238)](_0x5adb2d(0x244)),
                    (_0x4b89bb[_0x5adb2d(0x278)][_0x5adb2d(0x259)] = _0x3faeee);
                const _0x3a580b = _0x5adb2d(0x1f7) + _0x3faeee,
                    _0x1e2f40 = _0x195d4a[_0x3a580b] || _0x5adb2d(0x27a) + _0x3faeee,
                    _0x53f634 = _0x874594 > 0x0 && _0xe82f81?.["icon"] ? _0xe82f81[_0x5adb2d(0x229)] : _0x5adb2d(0x1fc);
                (_0x4b89bb[_0x5adb2d(0x261)] =
                    "<img\x20src=\x22" +
                    _0x53f634 +
                    _0x5adb2d(0x219) +
                    _0x1e2f40 +
                    "\x22><span\x20class=\x22level-name\x22>" +
                    _0x1e2f40 +
                    _0x5adb2d(0x1f0)),
                    _0x4b89bb[_0x5adb2d(0x210)](_0x5adb2d(0x25c), () => _0x4bbf08(_0x4b89bb)),
                    _0x2f33a6[_0x5adb2d(0x270)](_0x4b89bb);
            }
            _0x5037dd[_0x5adb2d(0x270)](_0x2f33a6);
            function _0x4bbf08(_0x4a3033, _0x4e755d = ![]) {
                const _0xfa075a = _0x5adb2d;
                if (!_0x4a3033) return;
                const _0x229651 = _0x4a3033[_0xfa075a(0x278)]["value"];
                (_0x4363b3["value"] = _0x229651),
                    (_0x4960cf[_0xfa075a(0x261)] = _0x4a3033[_0xfa075a(0x261)]),
                    _0x5037dd["querySelector"](_0xfa075a(0x1e7))?.[_0xfa075a(0x20f)][_0xfa075a(0x269)](
                        _0xfa075a(0x213)
                    ),
                    _0x4a3033[_0xfa075a(0x20f)]["add"](_0xfa075a(0x213)),
                    !_0x4e755d &&
                        (_0x36558d[_0xfa075a(0x20f)][_0xfa075a(0x269)](_0xfa075a(0x211)),
                        _0x5037dd["classList"][_0xfa075a(0x269)](_0xfa075a(0x211)));
            }
            _0x28f5c4["customDropdowns"][_0x8cf823] = { setSelected: _0x4bbf08 };
            const _0xba9e92 = _0x28f5c4[_0x5adb2d(0x28c)][_0x8cf823] || "0",
                _0x2955d1 = _0x5037dd[_0x5adb2d(0x251)](_0x5adb2d(0x20c) + _0xba9e92 + "\x22]");
            _0x4bbf08(_0x2955d1, !![]),
                _0x36558d[_0x5adb2d(0x210)]("click", _0x56b36b => {
                    const _0x288f70 = _0x5adb2d;
                    _0x56b36b[_0x288f70(0x22e)](),
                        document[_0x288f70(0x222)](_0x288f70(0x248))[_0x288f70(0x27b)](_0xebf09f => {
                            const _0x342628 = _0x288f70;
                            _0xebf09f !== _0x36558d &&
                                (_0xebf09f[_0x342628(0x20f)][_0x342628(0x269)]("open"),
                                _0xebf09f[_0x342628(0x255)][_0x342628(0x20f)]["remove"](_0x342628(0x211)));
                        });
                    const _0x545ad9 = _0x36558d[_0x288f70(0x208)](".modal-content"),
                        _0xee2cea = _0x36558d[_0x288f70(0x203)](),
                        _0x412ff3 = _0x545ad9[_0x288f70(0x203)](),
                        _0x396364 = _0x412ff3[_0x288f70(0x24f)] - _0xee2cea["bottom"],
                        _0x9fca07 = _0xee2cea["top"] - _0x412ff3["top"],
                        _0x11e316 = Math["min"](_0x5037dd[_0x288f70(0x1f8)], 0xfa);
                    _0x396364 < _0x11e316 && _0x9fca07 > _0x396364
                        ? _0x5037dd[_0x288f70(0x20f)]["add"](_0x288f70(0x22a))
                        : _0x5037dd["classList"][_0x288f70(0x269)]("drop-up"),
                        _0x36558d["classList"][_0x288f70(0x1df)](_0x288f70(0x211)),
                        _0x5037dd[_0x288f70(0x20f)][_0x288f70(0x1df)]("open");
                });
        }
        function _0x375138() {
            const _0xdc945f = _0xd327e3;
            for (let _0xa891d1 = 0x1; _0xa891d1 <= 0x6; _0xa891d1++) {
                _0x3dd1b3(_0xa891d1[_0xdc945f(0x27c)]());
            }
        }
        document[_0xd327e3(0x210)]("click", _0x234203 => {
            const _0x358139 = _0xd327e3;
            $(_0x358139(0x248))[_0x358139(0x217)](function () {
                const _0x26e14f = _0x358139;
                !this[_0x26e14f(0x26c)][_0x26e14f(0x28a)](_0x234203[_0x26e14f(0x24c)]) &&
                    ($(this)[_0x26e14f(0x216)](_0x26e14f(0x211)),
                    $(this)[_0x26e14f(0x1e6)](_0x26e14f(0x1f3))[_0x26e14f(0x216)](_0x26e14f(0x211)));
            });
        }),
            (window[_0xd327e3(0x27e)] = function () {
                const _0x22c576 = _0xd327e3;
                if (!window[_0x22c576(0x206)] || !_0x28f5c4[_0x22c576(0x264)]) return;
                (document[_0x22c576(0x1fa)] = window[_0x22c576(0x206)]["gear_simulator_title"] || "Gear\x20Simulator"),
                    _0x26566(),
                    _0x2c3594(),
                    _0x432bca(),
                    _0x375138(),
                    document[_0x22c576(0x222)](_0x22c576(0x231))[_0x22c576(0x27b)](_0xb0e586 => {
                        const _0x526349 = _0x22c576;
                        _0xb0e586[_0x526349(0x1fa)] =
                            window[_0x526349(0x206)][_0xb0e586[_0x526349(0x230)]("data-i18n-title")] || "";
                    });
            }),
            $(".gear-box")["on"](_0xd327e3(0x25c), function () {
                const _0x1caa2b = _0xd327e3;
                _0x29318d(_0x1caa2b(0x25e)),
                    (_0x28f5c4[_0x1caa2b(0x277)] = $(this)[_0x1caa2b(0x20e)]("id")),
                    $(_0x1caa2b(0x246))[_0x1caa2b(0x216)]("glow-gold"),
                    $(this)["addClass"](_0x1caa2b(0x20a)),
                    _0x4b4a69(),
                    _0x432bca();
            }),
            $(_0xd327e3(0x28d))["on"]("click", function () {
                const _0x13a610 = _0xd327e3;
                if (!_0x28f5c4[_0x13a610(0x277)]) return _0x4823de(_0x13a610(0x272), _0x13a610(0x237));
                const _0x2c295d = parseInt(_0x28f5c4[_0x13a610(0x28c)][_0x28f5c4[_0x13a610(0x277)]], 0xa);
                if (_0x2c295d >= _0x5ef824["MAX_GEAR_LEVEL"]) return _0x4823de(_0x13a610(0x1ef), _0x13a610(0x234));
                const _0x331a04 = (_0x2c295d + 0x1)[_0x13a610(0x27c)](),
                    _0x1f08dd =
                        _0x28f5c4[_0x13a610(0x264)][_0x28f5c4["selectedGearId"]]?.[_0x13a610(0x21d)]?.[_0x331a04];
                if (!_0x1f08dd) return;
                for (const [_0x55970d, _0x52797e] of Object["entries"](_0x1f08dd[_0x13a610(0x283)])) {
                    if ((_0x28f5c4[_0x13a610(0x243)][_0x55970d] || 0x0) < _0x52797e)
                        return _0x4823de(_0x13a610(0x23b), "Not\x20enough\x20materials\x20to\x20upgrade!");
                }
                for (const [_0x1c3b02, _0x21c7a8] of Object[_0x13a610(0x26d)](_0x1f08dd[_0x13a610(0x283)])) {
                    (_0x28f5c4["ownedMaterials"][_0x1c3b02] =
                        (_0x28f5c4[_0x13a610(0x243)][_0x1c3b02] || 0x0) - _0x21c7a8),
                        (_0x28f5c4[_0x13a610(0x1fb)][_0x1c3b02] =
                            (_0x28f5c4[_0x13a610(0x1fb)][_0x1c3b02] || 0x0) + _0x21c7a8);
                }
                (_0x28f5c4["selectedLevels"][_0x28f5c4[_0x13a610(0x277)]] = _0x331a04),
                    _0x2015d3("ownedMaterials"),
                    _0x2015d3("usedMaterials"),
                    _0x2015d3(_0x13a610(0x28c)),
                    _0x29318d(_0x13a610(0x21e)),
                    _0x26566(),
                    _0x2c3594(),
                    _0x4b4a69(),
                    _0x432bca();
            }),
            $(_0xd327e3(0x257))["on"](_0xd327e3(0x25c), _0xd327e3(0x1f5), function () {
                const _0x1ef774 = _0xd327e3;
                _0x29318d(_0x1ef774(0x25e));
                const _0x5274a5 = $(this)[_0x1ef774(0x1f2)](_0x1ef774(0x200)),
                    _0x171721 = $(this)[_0x1ef774(0x1e2)](_0x1ef774(0x25a))[_0x1ef774(0x20e)](_0x1ef774(0x1eb)),
                    _0x3e8293 = (window[_0x1ef774(0x206)]?.[_0x1ef774(0x271)] || "Add") + "\x20" + _0x171721;
                $("#modal-title")[_0x1ef774(0x1ff)](_0x3e8293),
                    $("#materialInput")[_0x1ef774(0x288)]("")["data"]("mat-key", _0x5274a5),
                    _0x95bba("#materialModal");
            }),
            $("#confirmAdd")["on"]("click", function () {
                const _0x1b0b02 = _0xd327e3;
                _0x29318d("click-sound");
                const _0x3451ca = parseInt($(_0x1b0b02(0x1e0))[_0x1b0b02(0x288)](), 0xa),
                    _0x2568fc = $("#materialInput")[_0x1b0b02(0x1f2)](_0x1b0b02(0x200));
                _0x34f86d("#materialModal");
                if (!_0x2568fc || isNaN(_0x3451ca) || _0x3451ca <= 0x0) return;
                const _0x11b8a7 = (_0x28f5c4[_0x1b0b02(0x243)][_0x2568fc] || 0x0) + _0x3451ca;
                if (_0x11b8a7 > _0x5ef824[_0x1b0b02(0x21b)]) return _0x4823de(_0x1b0b02(0x215), _0x1b0b02(0x23d));
                (_0x28f5c4[_0x1b0b02(0x243)][_0x2568fc] = _0x11b8a7), _0x2015d3(_0x1b0b02(0x243));
                if (_0x28f5c4[_0x1b0b02(0x277)]) _0x432bca();
            }),
            $(_0xd327e3(0x280))["on"]("click", function () {
                const _0x4bf6b4 = _0xd327e3;
                _0x29318d(_0x4bf6b4(0x25e)), _0x515bb0(_0x4bf6b4(0x243)), _0x515bb0(_0x4bf6b4(0x1fb)), _0x2c3594();
                if (_0x28f5c4[_0x4bf6b4(0x277)]) _0x432bca();
            }),
            $(_0xd327e3(0x201))["on"](_0xd327e3(0x25c), () => {
                const _0x458d0f = _0xd327e3;
                _0x29318d(_0x458d0f(0x25e));
                for (const _0x56b3a2 in _0x28f5c4[_0x458d0f(0x28c)]) {
                    const _0x13dc7d = _0x28f5c4[_0x458d0f(0x28c)][_0x56b3a2],
                        _0x591610 = _0x28f5c4["customDropdowns"][_0x56b3a2];
                    if (_0x591610) {
                        const _0x15b5fb = $(_0x458d0f(0x21c) + _0x56b3a2 + _0x458d0f(0x1ee) + _0x13dc7d + "\x22]")[0x0];
                        _0x15b5fb && _0x591610[_0x458d0f(0x268)](_0x15b5fb, !![]);
                    }
                }
                _0x95bba(_0x458d0f(0x1ec));
            }),
            $(_0xd327e3(0x253))["on"](_0xd327e3(0x1f6), _0x4c5ced => {
                const _0x7a3bee = _0xd327e3;
                _0x4c5ced[_0x7a3bee(0x273)](), _0x29318d(_0x7a3bee(0x25e));
                const _0x4603a1 = new FormData(_0x4c5ced[_0x7a3bee(0x24c)]);
                for (const [_0x36bd6c, _0x483c3a] of _0x4603a1["entries"]()) {
                    _0x28f5c4[_0x7a3bee(0x28c)][_0x36bd6c] = _0x483c3a["toString"]();
                }
                _0x2015d3(_0x7a3bee(0x28c)),
                    _0x34f86d(_0x7a3bee(0x1ec)),
                    _0x4823de(_0x7a3bee(0x26f), _0x7a3bee(0x26b)),
                    _0x26566(),
                    _0x4b4a69();
                if (_0x28f5c4[_0x7a3bee(0x277)]) _0x432bca();
            }),
            $(_0xd327e3(0x265))["on"](_0xd327e3(0x25c), () => {
                const _0x38f43e = _0xd327e3;
                _0x29318d(_0x38f43e(0x25e)), _0x515bb0(_0x38f43e(0x28c));
                for (const _0x89eec8 in _0x28f5c4["customDropdowns"]) {
                    const _0x50f523 = _0x28f5c4[_0x38f43e(0x22c)][_0x89eec8],
                        _0x179f27 = $("#custom-select-" + _0x89eec8 + _0x38f43e(0x28e))[0x0];
                    if (_0x179f27) _0x50f523["setSelected"](_0x179f27, !![]);
                }
                $(_0x38f43e(0x1f9))["addClass"](_0x38f43e(0x24e)),
                    $(".materials")[_0x38f43e(0x267)](),
                    _0x26566(),
                    _0x4823de("alert_levels_reset", _0x38f43e(0x281));
            }),
            $("#alert-ok-btn,\x20#cancelAdd,\x20#cancelModal")["on"]("click", function () {
                const _0x65df73 = _0xd327e3;
                _0x29318d("click-sound"), _0x34f86d($(this)[_0x65df73(0x208)](".modal-overlay"));
            });
        function _0x1596a5() {
            const _0x5161b0 = _0xd327e3;
            _0x46b338(),
                $[_0x5161b0(0x285)](_0x5161b0(0x252))
                    [_0x5161b0(0x25b)](function (_0x5aa1cc) {
                        const _0x5161f6 = _0x5161b0;
                        _0x28f5c4[_0x5161f6(0x264)] = _0x5aa1cc;
                        if (window[_0x5161f6(0x27e)]) window["onLanguageChange"]();
                    })
                    [_0x5161b0(0x24b)](function (_0x59fa95, _0x176562, _0x3420c5) {
                        const _0x4b07d6 = _0x5161b0;
                        console[_0x4b07d6(0x258)](
                            "Failed\x20to\x20load\x20gears.json:\x20" + _0x176562 + ",\x20" + _0x3420c5
                        );
                    });
        }
        _0x1596a5();
    });
function _0x51d6() {
    const _0x1fe514 = [
        "parse",
        "attr",
        "classList",
        "addEventListener",
        "open",
        "gray",
        "selected",
        "gear_name",
        "alert_material_limit_exceeded",
        "removeClass",
        "each",
        "setItem",
        "\x22\x20alt=\x22",
        "#custom-alert-message",
        "MAX_MATERIAL_AMOUNT",
        "#custom-select-",
        "levels",
        "upgrade-sound",
        ".trigger-content",
        "preview",
        "removeItem",
        "querySelectorAll",
        "Audio\x20play\x20failed\x20for\x20#",
        ".png\x22\x20alt=\x22",
        "some",
        "#gear-tier-",
        "</span></div>",
        "keys",
        "icon",
        "drop-up",
        "join",
        "customDropdowns",
        "DEFAULT_LEVELS",
        "stopPropagation",
        "#55E2B4",
        "getAttribute",
        "[data-i18n-title]",
        "MAX_GEAR_LEVEL",
        "\x22\x20class=\x22gear-img\x22\x20/>",
        "Max\x20level\x20reached!",
        "repeat",
        "modal-open",
        "No\x20gear\x20selected!",
        "add",
        "every",
        "getItem",
        "alert_not_enough_materials",
        "#gear-stars-",
        "Material\x20amount\x20cannot\x20exceed\x20the\x20limit.",
        "material_",
        "\x22\x20/><div\x20class=\x22material-amount\x22>0/0</div></div>",
        "gears_total_used",
        "Hardened_Alloy",
        "<img\x20src=\x22",
        "ownedMaterials",
        "custom-option",
        "catch",
        ".gear-box",
        ".materials",
        ".custom-select-trigger.open",
        "351166VzYpTl",
        "replace",
        "fail",
        "target",
        "map",
        "hidden",
        "bottom",
        "toLocaleString",
        "querySelector",
        "assets/data/gears.json",
        "#levelForm",
        "1546615QVjdgl",
        "nextElementSibling",
        "LS_GEAR_LEVELS_KEY",
        ".card-materials",
        "error",
        "value",
        "img",
        "done",
        "click",
        "76885hXNusE",
        "click-sound",
        "<span\x20class=\x22star\x22>⭐</span>",
        "18RBElgy",
        "innerHTML",
        "stars",
        "1374688kXDseD",
        "gearData",
        "#reset-levels",
        "ready",
        "empty",
        "setSelected",
        "remove",
        "</div></div>",
        "Start\x20levels\x20saved!",
        "parentElement",
        "entries",
        "LS_OWNED_MATERIALS_KEY",
        "alert_start_levels_saved",
        "appendChild",
        "gears_add_material_button",
        "alert_no_gear_selected",
        "preventDefault",
        "body",
        "createDocumentFragment",
        "\x22><img\x20src=\x22assets/images/materials/",
        "selectedGearId",
        "dataset",
        "src",
        "Level\x20",
        "forEach",
        "toString",
        "color",
        "onLanguageChange",
        "83583rLJtTT",
        "#resetMaterialsBtn",
        "Start\x20levels\x20have\x20been\x20reset.",
        ".png",
        "materials",
        "length",
        "getJSON",
        "#used-material-summary",
        "css",
        "val",
        ".material-amount",
        "contains",
        "Total\x20Material\x20Used",
        "selectedLevels",
        "#upgrade",
        "\x20.custom-option[data-value=\x220\x22]",
        "#custom-alert",
        "toggle",
        "#materialInput",
        "<div\x20class=\x22material-box\x22\x20data-mat-key=\x22",
        "find",
        "<div\x20class=\x22max-materials\x22><span>MAX</span></div>",
        "<div\x20class=\x22material-row\x22><span\x20class=\x22material-name\x22>",
        "custom-select-",
        "siblings",
        ".custom-option.selected",
        "MATERIAL_ORDER",
        "div",
        "html",
        "alt",
        "#levelModal",
        "Polishing_Solution",
        "\x20.custom-option[data-value=\x22",
        "alert_max_level_reached",
        "</span>",
        "LS_USED_MATERIALS_KEY",
        "data",
        ".custom-options",
        "getElementById",
        ".material-box",
        "submit",
        "level_",
        "scrollHeight",
        "#gear-preview",
        "title",
        "usedMaterials",
        "assets/images/gears/default.png",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22custom-select-trigger\x22\x20tabindex=\x220\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trigger-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22assets/images/gears/default.png\x22\x20alt=\x22Level\x200\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Level\x200</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22arrow\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22custom-options\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20name=\x22",
        "gearLevels",
        "text",
        "mat-key",
        "#open-level-modal",
        "toLowerCase",
        "getBoundingClientRect",
        "181088Zhzlmh",
        "play",
        "translations",
        "addClass",
        "closest",
        "\x22\x20class=\x22level-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "glow-gold",
        "482212jsxZdb",
        ".custom-option[data-value=\x22",
    ];
    _0x51d6 = function () {
        return _0x1fe514;
    };
    return _0x51d6();
}
