// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "UU远程",
  "id": "com.netease.uuremote",
  "groups": [
    {
      "name": "权限提示-通知提示",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"开启消息通知\"]",
            "[text=\"以后再说\"][clickable=true]"
          ],
          "activityIds": "com.remote.app.ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23787454",
          "key": 0
        }
      ]
    }
  ]
});
