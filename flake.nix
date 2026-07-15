{
  description = "DRM multiplayer block game development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            jdk21
            git
          ];

          shellHook = ''
            export JAVA_HOME=${pkgs.jdk21.home}
            echo "DRM dev shell: Node $(node --version), Java $(java -version 2>&1 | head -n 1)"
          '';
        };
      });
}
