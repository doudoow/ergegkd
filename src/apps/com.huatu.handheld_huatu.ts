// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "华图在线",
  "id": "com.huatu.handheld_huatu",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.huatu.handheld_huatu:id/main_img_adv_bg\"] + [id=\"com.huatu.handheld_huatu:id/main_img_close\"]",
          "activityIds": [
            "com.huatu.handheld_huatu.view.MainPopDialog",
            "com.huatu.handheld_huatu.business.main.MainTabActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12715702",
            "https://i.gkd.li/i/12744973"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"main_img_adv_bg\"] + [vid=\"main_img_close\"]",
          "activityIds": [
            ".view.MainPopDialog",
            ".business.main.MainTabActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12715702",
            "https://i.gkd.li/i/12744973"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"开启通知提示\"] +2 LinearLayout > [text=\"取消\"]",
          "activityIds": ".business.main.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715719",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.huatu.handheld_huatu:id/main_img_adv_bg\"] + [id=\"com.huatu.handheld_huatu:id/main_img_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text*=\"开启通知提示\"] +2 LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.huatu.handheld_huatu:id/main_img_adv_bg\"] + [id=\"com.huatu.handheld_huatu:id/main_img_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text*=\"开启通知提示\"] +2 LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.huatu.handheld_huatu:id/main_img_adv_bg\"] + [id=\"com.huatu.handheld_huatu:id/main_img_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text*=\"开启通知提示\"] +2 LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
