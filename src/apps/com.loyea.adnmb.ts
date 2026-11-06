// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "蓝岛",
  "id": "com.loyea.adnmb",
  "groups": [
    {
      "name": "通知提示-通知弹窗",
      "desc": "点击通知弹窗的【确定】按钮",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"不再显示该条通知\"][checked=false]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13623450",
          "exampleUrls": "https://e.gkd.li/81cc5b1b-d0a6-44e9-be99-7897cceb491a"
        },
        {
          "matches": "[text=\"确定\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13623450",
          "exampleUrls": "https://e.gkd.li/81cc5b1b-d0a6-44e9-be99-7897cceb491a"
        },
        {
          "matches": "LinearLayout > Button[text=\"确定\"||text=\"確定\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-通知弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "LinearLayout > Button[text=\"确定\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "LinearLayout > Button[text=\"确定\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知弹窗",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "LinearLayout > Button[text=\"确定\"]",
          "key": 0
        }
      ]
    }
  ]
});
