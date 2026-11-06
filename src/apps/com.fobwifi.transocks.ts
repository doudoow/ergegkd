// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Transocks",
  "id": "com.fobwifi.transocks",
  "groups": [
    {
      "name": "全屏广告-VIP弹窗",
      "desc": "点击[Finish]",
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"Finish\"] +n [visibleToUser=true] >(1,3) [text*=\"VIP\"]",
          "activityIds": ".ui.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/32761426",
          "exampleUrls": "https://e.gkd.li/1c8008a7-bd3b-4c0d-a287-ef9ab4a10fb6",
          "key": 0
        }
      ]
    }
  ]
});
