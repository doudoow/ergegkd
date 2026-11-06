// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "ReadEra",
  "id": "org.readera",
  "groups": [
    {
      "name": "评价提示-分享提示",
      "desc": "点击右上角的x",
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"通过社交网络分享这款应用\"]",
          "action": "back",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22950138",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 1,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"][clickable=true] < * +n * >4 [text^=\"高级版\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24335645",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-高级版",
      "desc": "注意：此规则会关闭手动打开的高级版开通界面，但该界面有时会自动弹出",
      "key": 2,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"][clickable=true] < * + * >5 [text=\"ReadEra Premium\"]",
          "activityIds": "org.readera.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24981838",
          "key": 0
        },
        {
          "matches": "@[desc=\"关闭\"][clickable=true] < * + * >5 [text=\"ReadEra Premium\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24981838",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示",
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"评价此应用\"]",
            "[text=\"不了，谢谢\"][clickable=true]"
          ],
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26088076",
          "key": 0
        }
      ]
    }
  ]
});
