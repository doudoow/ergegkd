// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "哔哩发评反诈",
  "id": "icu.freedomIntrovert.biliSendCommAntifraud",
  "groups": [
    {
      "name": "功能类-检查评论自动点击后台等待",
      "key": 0,
      "rules": [
        {
          "matches": "Button[text=\"后台等待\"][visibleToUser=true]",
          "activityIds": "icu.freedomIntrovert.biliSendCommAntifraud.ByXposedLaunchedActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25240613",
          "key": 0
        },
        {
          "matches": "Button[text=\"后台等待\"][visibleToUser=true]",
          "actionDelay": 400,
          "activityIds": ".ByXposedLaunchedActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25240613",
            "https://i.gkd.li/i/25320069"
          ],
          "key": 1
        }
      ]
    }
  ]
});
