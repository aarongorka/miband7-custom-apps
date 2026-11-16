# Mi Band 7 apps

Unofficial apps for the Xiaomi Smart Band 7, built with [zmake](https://github.com/melianmiko/zmake) + esbuild.

    make build              # needs node, npm, uv, git
    make build APP=other    # another project dir

Output: `hello-world/dist/hello-world.bin`. Install it with Gadgetbridge's FW/App installer
or the MiBand7 Android app; see <https://mmk.pw/en/posts/sb7-install-guide/>.

Limits: no background running, no network.
