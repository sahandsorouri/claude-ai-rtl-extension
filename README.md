# Claude RTL Fix

Chrome/Brave extension that fixes RTL/LTR text direction for Persian text on claude.ai. It sets `direction: rtl` and right alignment on chat messages and the input box when Persian characters are detected, without changing fonts.

Narrow by design: it only runs on `claude.ai`. For a general, all-sites RTL fixer see the separate FlowDir extension (see [`flowdir-rtl-extension`](https://github.com/sahandsorouri/flowdir-rtl-extension)).

## Install (unpacked)

1. Open `chrome://extensions` (or `brave://extensions`)
2. Enable Developer mode
3. Load unpacked, select this folder

## Files

- `manifest.json` — MV3, runs `content.js` on `claude.ai`
- `content.js` — detects Persian text and applies RTL direction to messages and the input
