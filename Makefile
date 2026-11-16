ZMAKE_DIR := .tools/zmake
APP ?= hello-world

.PHONY: setup build clean

setup:
	test -d $(ZMAKE_DIR) || git clone --depth 1 https://github.com/melianmiko/zmake $(ZMAKE_DIR)
	npm install

# Writes $(APP)/dist/$(APP).bin
build: setup
	PATH="$(CURDIR)/node_modules/.bin:$$PATH" uv run --no-project --with pillow --with qrcode \
		python -c "import sys; sys.path.insert(0, '$(ZMAKE_DIR)'); sys.argv = ['zmake', '$(APP)']; from zmake.main import main; main()"

clean:
	rm -rf $(APP)/build $(APP)/dist
