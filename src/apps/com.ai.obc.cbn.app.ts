// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国广电",
  "id": "com.ai.obc.cbn.app",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id$=\"/ivDis\"]",
          "activityIds": [
            ".ui.other.activity.MainActivity",
            ".ui.main.fragment.MainFragment$7$1"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12617201",
            "https://i.gkd.li/i/12655061"
          ],
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.ai.obc.cbn.app:id/ivDis\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12617201",
            "https://i.gkd.li/import/12655061"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-版本弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id$=\"/ivDis\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12617201",
            "https://i.gkd.li/i/12655061"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "版本弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id$=\"/ivDis\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12617201",
            "https://i.gkd.li/import/12655061"
          ],
          "key": 0
        }
      ]
    }
  ]
});
