// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "粉笔教师",
  "id": "com.fenbi.android.zhaojiao",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"广告\"] + [vid=\"close\"]",
          "activityIds": "com.fenbi.android.module.home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/31909044",
          "exampleUrls": "https://e.gkd.li/0071fce0-92a4-45a3-84fe-973351facf6e",
          "key": 0
        }
      ]
    }
  ]
});
