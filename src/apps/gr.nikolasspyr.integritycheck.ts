// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Play Integrity API Checker",
  "id": "gr.nikolasspyr.integritycheck",
  "groups": [
    {
      "name": "功能类-自动[检测]设备完整性",
      "desc": "初进app时,点击1次[CHECK]",
      "key": 0,
      "rules": [
        {
          "matches": "Button[vid=\"check_btn\"][clickable=true]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 3000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/30591423",
          "exampleUrls": "https://e.gkd.li/200428fa-7a39-4ffe-86b5-2218d4e24b65",
          "key": 0
        }
      ]
    }
  ]
});
