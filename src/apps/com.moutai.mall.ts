// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "i茅台",
  "id": "com.moutai.mall",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.moutai.mall:id/ivPic\"] + ViewGroup + [id=\"com.moutai.mall:id/vClose\"]",
          "activityIds": [
            "com.moutai.mall.MainActivity",
            "com.moutai.mall.module.splash.SplashActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12745130",
            "https://i.gkd.li/i/12745153"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"ivPic\"] + ViewGroup + [vid=\"vClose\"]",
          "activityIds": [
            ".MainActivity",
            ".module.splash.SplashActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12745130",
            "https://i.gkd.li/i/12745153"
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
          "matches": "@[id=\"com.moutai.mall:id/vClose\"] - LinearLayout > [text*=\"开通消息通知\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12745142",
          "key": 0
        },
        {
          "matches": "@[vid=\"vClose\"] - LinearLayout > [text*=\"开通消息通知\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12745142",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.moutai.mall:id/ivPic\"] + ViewGroup + [id=\"com.moutai.mall:id/vClose\"]",
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
          "matches": "@[id=\"com.moutai.mall:id/vClose\"] - LinearLayout > [text*=\"开通消息通知\"]",
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
          "matches": "[id=\"com.moutai.mall:id/ivPic\"] + ViewGroup + [id=\"com.moutai.mall:id/vClose\"]",
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
          "matches": "@[id=\"com.moutai.mall:id/vClose\"] - LinearLayout > [text*=\"开通消息通知\"]",
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
          "matches": "[id=\"com.moutai.mall:id/ivPic\"] + ViewGroup + [id=\"com.moutai.mall:id/vClose\"]",
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
          "matches": "@[id=\"com.moutai.mall:id/vClose\"] - LinearLayout > [text*=\"开通消息通知\"]",
          "key": 0
        }
      ]
    }
  ]
});
