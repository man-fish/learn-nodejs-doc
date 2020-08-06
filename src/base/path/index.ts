import * as path from "path";

function getBaseName(p: string, ext?: string): void {
    console.log(path.basename(p, ext));
}

function delimiter() {
    console.log(process.env.PATH?.split(path.delimiter));
}

function dirname(dir: string) {
    console.log(path.dirname(dir));
}

function extname(file: string) {
    console.log(path.extname(file));
}

function format(
    root: string,
    dir: string,
    base: string,
    name: string,
    ext: string
) {
    console.log(path.format({ root, dir, base, name, ext }));
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
