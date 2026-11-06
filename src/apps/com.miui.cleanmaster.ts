// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "垃圾清理",
  "id": "com.miui.cleanmaster",
  "groups": [
    {
      "name": "全屏广告-添加桌面图标提示",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text^=\"开启桌面图标\"]",
            "[text=\"不需要\"][clickable=true]"
          ],
          "activityIds": "com.miui.optimizecenter.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30698886",
          "key": 0
        }
      ]
    }
  ]
});
