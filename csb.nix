with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        nodejs
        htop
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}