// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "澎湃新闻",
  "id": "com.wondertek.paper",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.wondertek.paper:id/relative_layout\"] + [id=\"com.wondertek.paper:id/close_photo\"]",
          "activityIds": "cn.thepaper.paper.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12899226",
          "key": 0
        },
        {
          "matches": "[vid=\"relative_layout\"] + [vid=\"close_photo\"]",
          "activityIds": "cn.thepaper.paper.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12899226",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-应用内弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.wondertek.paper:id/second_num\"] <2 [id=\"com.wondertek.paper:id/relative_layout\"] + [id=\"com.wondertek.paper:id/close_photo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12899226"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.wondertek.paper:id/second_num\"] <2 [id=\"com.wondertek.paper:id/relative_layout\"] + [id=\"com.wondertek.paper:id/close_photo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12899226"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "应用内弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.wondertek.paper:id/second_num\"] <2 [id=\"com.wondertek.paper:id/relative_layout\"] + [id=\"com.wondertek.paper:id/close_photo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12899226"
          ],
          "key": 0
        }
      ]
    }
  ]
});
