// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "好游快爆",
  "id": "com.xmcy.hykb",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.xmcy.hykb:id/iv_inner_button_close\"] - RelativeLayout >n [id=\"com.xmcy.hykb:id/text_update_tip\"]",
          "activityIds": ".app.dialog.UpdateDialog",
          "snapshotUrls": [
            "https://i.gkd.li/i/12870604",
            "https://i.gkd.li/i/13297450"
          ],
          "key": 0
        },
        {
          "matches": "@[id=\"com.xmcy.hykb:id/iv_inner_button_close\"] - RelativeLayout >n [id=\"com.xmcy.hykb:id/text_update_tip\"]",
          "key": 1
        },
        {
          "matches": "@[vid=\"iv_inner_button_close\"] - RelativeLayout >n [vid=\"text_update_tip\"]",
          "activityIds": ".app.dialog.UpdateDialog",
          "snapshotUrls": [
            "https://i.gkd.li/i/12870604",
            "https://i.gkd.li/i/13297450"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.xmcy.hykb:id/dialog_home_notice_image_close\"]",
          "activityIds": "com.xmcy.hykb.app.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13259427",
          "key": 0
        },
        {
          "matches": "[vid=\"dialog_home_notice_image_close\"]",
          "activityIds": ".app.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13259427",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.xmcy.hykb:id/dialog_home_notice_image_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.xmcy.hykb:id/dialog_home_notice_image_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.xmcy.hykb:id/iv_inner_button_close\"] - RelativeLayout >n [id=\"com.xmcy.hykb:id/text_update_tip\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.xmcy.hykb:id/dialog_home_notice_image_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
