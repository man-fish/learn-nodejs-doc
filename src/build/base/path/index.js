"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
function getBaseName(p, ext) {
    console.log(path.basename(p, ext));
}
function delimiter() {
    var _a;
    console.log((_a = process.env.PATH) === null || _a === void 0 ? void 0 : _a.split(path.delimiter));
}
function dirname(dir) {
    console.log(path.dirname(dir));
}
function extname(file) {
    console.log(path.extname(file));
}
function format(root, dir, base, name, ext) {
    console.log(path.format({ root: root, dir: dir, base: base, name: name, ext: ext }));
}
function isAbsolute() {
    console.log(path.isAbsolute("/"));
    console.log(path.win32.isAbsolute("C://"));
    console.log(path.isAbsolute("./"));
}
function join() {
    console.log(path.join("/a/", "/b//", "../", "/c", "d"));
    console.log(path.join("//a"));
}
function normalize() {
    console.log(path.normalize("/a/a//bb"));
}
function sep() {
    console.log(path.sep);
}
function resolve() {
    console.log(path.resolve());
    console.log(path.resolve("../", "dir1"));
}
function _dir() {
    console.log(__dirname);
}
function main() {
    getBaseName("/base/api.html");
    getBaseName("/base/api.html", ".html");
    delimiter();
    dirname("/p1/p2");
    dirname("/p1/p2/");
    extname("/md.index");
    extname("/md/.index");
    isAbsolute();
    join();
    normalize();
    sep();
    resolve();
    _dir();
}
main();
