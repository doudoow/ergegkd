// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "喵喵折",
  "id": "com.henzanapp.miaomiaozhe",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"更新提示\"] +(2) LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"更新提示\"] +(2) LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
