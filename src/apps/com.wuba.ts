// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "58同城",
  "id": "com.wuba",
  "groups": [
    {
      "name": "更新提示",
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "Button[text*=\"立即更新\"] <n LinearLayout + ImageView[vid=\"close_btn\"]",
          "activityIds": [
            ".activity.more.MoreMainActivity",
            ".home.activity.HomeActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/25789427"
          ]
        }
      ]
    },
    {
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"去评价\"] - [text=\"取消\"]",
          "activityIds": ".home.activity.HomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25789452"
        }
      ]
    }
  ]
});
