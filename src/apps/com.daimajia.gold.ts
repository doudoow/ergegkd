// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "稀土掘金",
  "id": "com.daimajia.gold",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"发现新版本\"]",
            "[id=\"com.daimajia.gold:id/iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13498703",
          "key": 0
        },
        {
          "matches": "@[id=\"com.daimajia.gold:id/iv_close\"] -n LinearLayout [id=\"com.daimajia.gold:id/tv_title\"][text=\"发现新版本\"]",
          "key": 1
        },
        {
          "matches": [
            "[text=\"发现新版本\"]",
            "[vid=\"iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13498703",
          "key": 2
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.daimajia.gold:id/iv_close\"] -n LinearLayout [id=\"com.daimajia.gold:id/tv_title\"][text=\"发现新版本\"]",
          "key": 0
        }
      ]
    }
  ]
});
