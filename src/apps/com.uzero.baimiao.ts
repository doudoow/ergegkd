// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "白描",
  "id": "com.uzero.baimiao",
  "groups": [
    {
      "name": "功能类-自动点击截取全屏",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"截取全屏\"]",
          "activityIds": ".ui.screen.ScreenCaptureActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23054772",
          "key": 0
        }
      ]
    }
  ]
});
