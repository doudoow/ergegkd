// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "光大银行",
  "id": "com.cebbank.mobile.cemb",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tv_skip\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17615867",
          "exampleUrls": "https://e.gkd.li/81f951ce-39b0-4677-93a7-25b5a709b46d",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"不再提示\"] +2 [text=\"立即更新\"]",
          "activityIds": ".view.CustomizedDialog",
          "snapshotUrls": "https://i.gkd.li/i/12727241",
          "key": 0
        },
        {
          "matches": "@[text=\"不再提示\"] +2 [text=\"立即更新\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.cebbank.mobile.cemb:id/home_advertising_iv_close\"]",
          "activityIds": [
            "com.cebbank.mobile.cemb.ui.activity.SplashActivity",
            "com.cebbank.mobile.cemb.ui.activity.HomeActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12727248",
            "https://i.gkd.li/i/13471080"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"home_advertising_iv_close\"]",
          "activityIds": [
            ".ui.activity.SplashActivity",
            ".ui.activity.HomeActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12727248",
            "https://i.gkd.li/i/13471080"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.cebbank.mobile.cemb:id/home_advertising_iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.cebbank.mobile.cemb:id/home_advertising_iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"不再提示\"] +2 [text=\"立即更新\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.cebbank.mobile.cemb:id/home_advertising_iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
