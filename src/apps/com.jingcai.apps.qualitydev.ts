// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "到梦空间",
  "id": "com.jingcai.apps.qualitydev",
  "groups": [
    {
      "name": "功能类-学习活动",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"立即参与\"][vid=\"tv_next\"] -2 [text=\"关闭\"][vid=\"tv_step\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-学习活动",
      "desc": "开屏后屏幕下方的弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[text=\"关闭\"][clickable=true][id$=\"id/tv_step\"]",
          "key": 0
        }
      ]
    }
  ]
});
