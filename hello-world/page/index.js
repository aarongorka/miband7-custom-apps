const WIDTH = 194;

Page({
  onInit() {
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: WIDTH,
      h: 368,
      color: 0x000000,
    });

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 40,
      w: WIDTH,
      h: 60,
      text: "Hello World",
      text_size: 28,
      color: 0x00ff88,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
    });

    const counter = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 120,
      w: WIDTH,
      h: 50,
      text: "Taps: 0",
      text_size: 24,
      color: 0xffffff,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
    });

    let taps = 0;
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 17,
      y: 200,
      w: 160,
      h: 64,
      radius: 16,
      text: "Tap me",
      text_size: 24,
      normal_color: 0x1e88e5,
      press_color: 0x0d47a1,
      click_func: () => {
        taps += 1;
        counter.setProperty(hmUI.prop.TEXT, `Taps: ${taps}`);
      },
    });
  },
});
