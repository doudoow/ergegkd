// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "简书",
  "id": "com.jianshu.haruki",
  "groups": [
    {
      "name": "全屏广告-VIP弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.jianshu.haruki:id/dialog_lucky_prize_close\"]",
          "activityIds": "com.baiji.jianshu.ui.splash.SplashScreenActivity",
          "snapshotUrls": "https://i.gkd.li/i/13327286",
          "key": 0
        },
        {
          "matches": "[vid=\"dialog_lucky_prize_close\"]",
          "activityIds": "com.baiji.jianshu.ui.splash.SplashScreenActivity",
          "snapshotUrls": "https://i.gkd.li/i/13327286",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[checked=false] + [text=\"忽略此版本\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15989275",
          "exampleUrls": "https://e.gkd.li/23662d6a-1858-4d97-9bc7-ef03ede9f316"
        },
        {
          "matches": "[text=\"取消\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15989275",
          "exampleUrls": "https://e.gkd.li/23662d6a-1858-4d97-9bc7-ef03ede9f316"
        }
      ]
    },
    {
      "name": "局部广告-首页信息流广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[vid=\"nativeAdClose\"]",
          "activityIds": "com.baiji.jianshu.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16201541",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-VIP弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.jianshu.haruki:id/dialog_lucky_prize_close\"]",
          "activityIds": "com.baiji.jianshu.ui.splash.SplashScreenActivity",
          "snapshotUrls": "https://i.gkd.li/i/13327286",
          "key": 0
        }
      ]
    },
    {
      "name": "VIP弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.jianshu.haruki:id/dialog_lucky_prize_close\"]",
          "activityIds": "com.baiji.jianshu.ui.splash.SplashScreenActivity",
          "snapshotUrls": "https://i.gkd.li/import/13327286",
          "key": 0
        }
      ]
    }
  ]
});
