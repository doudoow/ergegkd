// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "QQ音乐车机版",
  "id": "com.tencent.qqmusiccar",
  "groups": [
    {
      "name": "更新提示",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text$=\"版本升级\"]",
            "[vid=\"dialog_button_close\"][clickable=true]"
          ],
          "activityIds": "com.tencent.qqmusiccar.app.activity.AppStarterActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23792987",
          "key": 0
        },
        {
          "matches": [
            "[text$=\"版本升级\"]",
            "[vid=\"dialog_button_close\"][clickable=true]"
          ],
          "activityIds": ".app.activity.AppStarterActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23792987",
          "key": 1
        }
      ]
    }
  ]
});
