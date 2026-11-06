// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "吉林行",
  "id": "com.pandabus.android.jilinxing",
  "groups": [
    {
      "name": "全屏广告-开屏小窗广告",
      "desc": "检测到开屏穿山甲广告自动关闭",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"iv_native_dislike\"]",
          "key": 0
        }
      ]
    }
  ]
});
