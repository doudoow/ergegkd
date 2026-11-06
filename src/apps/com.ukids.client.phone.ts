// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小小优趣",
  "id": "com.ukids.client.phone",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.ukids.client.phone:id/dialog_dismiss_btn_two\"]",
          "activityIds": "com.ukids.client.phone.parent.ParentClientHomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13400238",
          "key": 0
        },
        {
          "matches": "[vid=\"dialog_dismiss_btn_two\"]",
          "activityIds": ".parent.ParentClientHomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13400238",
          "key": 1
        },
        {
          "matches": "[id=\"com.ukids.client.phone:id/dialog_dismiss_btn_two\"]",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/import/13400238"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.ukids.client.phone:id/dialog_dismiss_btn_two\"]",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13400238"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.ukids.client.phone:id/dialog_dismiss_btn_two\"]",
          "quickFind": true,
          "snapshotUrls": [
            "https://i.gkd.li/import/13400238"
          ],
          "key": 0
        }
      ]
    }
  ]
});
