// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Blued",
  "id": "com.soft.blued",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.soft.blued:id/fl_main\"] [id=\"com.soft.blued:id/img_close\"]",
          "activityIds": [
            "com.blued.android.core.ui.TerminalActivity",
            "com.soft.blued.ui.home.HomeActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12777097",
            "https://i.gkd.li/i/13694950",
            "https://i.gkd.li/i/13699455"
          ]
        },
        {
          "matches": "[id=\"com.soft.blued:id/ad_option\"]",
          "activityIds": "com.soft.blued.ui.home.HomeActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14149470",
          "exampleUrls": "https://m.gkd.li/57941037/65ee5632-c54b-4ef6-95e9-e57582ff7017"
        },
        {
          "matches": "[vid=\"fl_main\"] [vid=\"img_close\"]",
          "activityIds": [
            "com.blued.android.core.ui.TerminalActivity",
            ".ui.home.HomeActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12777097",
            "https://i.gkd.li/i/13694950",
            "https://i.gkd.li/i/13699455"
          ]
        },
        {
          "matches": "[vid=\"ad_option\"]",
          "activityIds": ".ui.home.HomeActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14149470",
          "exampleUrls": "https://m.gkd.li/57941037/65ee5632-c54b-4ef6-95e9-e57582ff7017"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.soft.blued:id/iv_close\"]",
          "activityIds": "com.blued.android.core.ui.TerminalActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14157519",
          "exampleUrls": "https://m.gkd.li/57941037/37ea59cf-9606-4cd6-a74a-84f353f07975"
        },
        {
          "matches": "[vid=\"nearby_common_guide_close_iv\"]",
          "activityIds": ".ui.home.HomeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17172243",
          "exampleUrls": "https://e.gkd.li/04e78fd8-9d78-48d7-b1f0-eddde80f5c52"
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "com.blued.android.core.ui.TerminalActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14157519",
          "exampleUrls": "https://m.gkd.li/57941037/37ea59cf-9606-4cd6-a74a-84f353f07975"
        }
      ]
    },
    {
      "name": "全屏广告-会员活动弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"blued_ad_layout\"] + [vid=\"img_close\"]",
          "activityIds": "com.blued.android.core.ui.TransparentActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14310618"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.soft.blued:id/fl_main\"] [id=\"com.soft.blued:id/img_close\"]",
          "activityIds": [
            "com.blued.android.core.ui.TerminalActivity",
            "com.soft.blued.ui.home.HomeActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12777097",
            "https://i.gkd.li/i/13694950",
            "https://i.gkd.li/i/13699455"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-会员购买弹窗",
      "enable": false,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"blued_ad_layout\"] +n [vid=\"img_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首充弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"fl_main\"] > [vid=\"iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-购买动态投放弹窗",
      "desc": "点击X",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.soft.blued:id/iv_close\"]",
          "activityIds": "com.blued.android.core.ui.TerminalActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14157519",
          "exampleUrls": "https://m.gkd.li/57941037/37ea59cf-9606-4cd6-a74a-84f353f07975",
          "key": 0
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.soft.blued:id/fl_main\"] [id=\"com.soft.blued:id/img_close\"]",
          "activityIds": [
            "com.blued.android.core.ui.TerminalActivity",
            "com.soft.blued.ui.home.HomeActivity"
          ],
          "quickFind": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12777097",
            "https://i.gkd.li/import/13694950",
            "https://i.gkd.li/import/13699455"
          ]
        }
      ]
    }
  ]
});
