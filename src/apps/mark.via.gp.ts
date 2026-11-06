// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Via(谷歌版)",
  "id": "mark.via.gp",
  "groups": [
    {
      "name": "功能类-自动[确认]下载",
      "desc": "自动点击下载弹窗中的[确定]按钮",
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"确定\" || text=\"確定\" || text=\"OK\"] -n [text*=\"下载\" || text*=\"下載\" || text*=\"download\"][visibleToUser=true]",
          "activityIds": "mark.via.Shell",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34131392",
          "exampleUrls": "https://e.gkd.li/5728704f-d52e-4267-b0b2-1f66fda88909",
          "key": 0
        }
      ]
    }
  ]
});
