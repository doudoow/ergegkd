// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OurPlay加速器",
  "id": "com.excean.splay",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"发现新版本\"] +n * > [text=\"忽略\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"发现新版本\"] +n * > [text=\"忽略\"]",
          "key": 0
        }
      ]
    }
  ]
});
