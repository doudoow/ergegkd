// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "新睿桥牌",
  "id": "cn.net.dascom.xrbridge",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击x掉",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "activityIds": ".ui.MainTabsActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/27314278",
            "https://i.gkd.li/i/27316178"
          ],
          "key": 0
        }
      ]
    }
  ]
});
