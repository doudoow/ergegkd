// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "猫眼",
  "id": "com.sankuai.movie",
  "groups": [
    {
      "name": "权限提示-开启通知弹窗",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - * > [text=\"开启通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/18455375",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"更新\"] +(3) LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text^=\"更新\"] +(3) LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
