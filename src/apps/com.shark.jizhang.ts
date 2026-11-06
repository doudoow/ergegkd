// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "鲨鱼记账",
  "id": "com.shark.jizhang",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.shark.jizhang:id/float_btn\"] >2 [id=\"com.shark.jizhang:id/close_view\"]",
          "activityIds": ".module.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12518517",
          "exampleUrls": "https://e.gkd.li/b64da622-2632-4140-930b-89d0f8cbdee1",
          "key": 0
        },
        {
          "matches": "[vid=\"float_btn\"] >2 [vid=\"close_view\"]",
          "activityIds": ".module.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12518517",
          "exampleUrls": "https://e.gkd.li/b64da622-2632-4140-930b-89d0f8cbdee1",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.shark.jizhang:id/sdv_image\"] + [id=\"com.shark.jizhang:id/close_view\"]",
          "activityIds": ".module.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12518500",
          "exampleUrls": "https://e.gkd.li/1cad4c8f-fdb0-4608-8398-2c22d81d435d",
          "key": 0
        },
        {
          "matches": "[vid=\"sdv_image\"] + [vid=\"close_view\"]",
          "activityIds": ".module.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12518500",
          "exampleUrls": "https://e.gkd.li/1cad4c8f-fdb0-4608-8398-2c22d81d435d",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-新用户特惠广告",
      "desc": "弹窗广告,右下角浮动广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.shark.jizhang:id/buy_later_view\"||id=\"com.shark.jizhang:id/tv_count_down\"] - [id=\"com.shark.jizhang:id/close_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12518500",
            "https://i.gkd.li/i/12518517"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-新用户特惠广告",
      "desc": "弹窗广告,右下角浮动广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.shark.jizhang:id/buy_later_view\"||id=\"com.shark.jizhang:id/tv_count_down\"] - [id=\"com.shark.jizhang:id/close_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12518500",
            "https://i.gkd.li/import/12518517"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "新用户特惠广告",
      "desc": "弹窗广告,右下角浮动广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.shark.jizhang:id/buy_later_view\"||id=\"com.shark.jizhang:id/tv_count_down\"] - [id=\"com.shark.jizhang:id/close_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12518500",
            "https://i.gkd.li/import/12518517"
          ],
          "key": 0
        }
      ]
    }
  ]
});
