// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "猫影视",
  "id": "com.github.catvod.app",
  "groups": [
    {
      "name": "功能类-应用协议弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[desc*=\"本软件仅供学习\"] + [desc=\"同意\"]",
          "key": 0
        }
      ]
    }
  ]
});
