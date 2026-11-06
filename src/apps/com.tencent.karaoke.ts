// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "全民K歌",
  "id": "com.tencent.karaoke",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "activityIds": "com.tencent.karaoke.module.main.ui.MainTabActivity",
          "fastQuery": true,
          "key": 0,
          "name": "动态页面-卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/13334798"
        },
        {
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "activityIds": ".module.main.ui.MainTabActivity",
          "fastQuery": true,
          "key": 1,
          "name": "动态页面-卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/13334798"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ViewGroup[childCount=0] < @ViewGroup[clickable=true][childCount=1] - ViewGroup > [desc*=\"双十一\"]",
          "activityIds": "com.tencent.karaoke.module.splash.ui.SplashBaseActivity",
          "key": 0,
          "name": "活动弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13363281"
        },
        {
          "matches": "ViewGroup[childCount=0] < @ViewGroup[clickable=true][childCount=1] - ViewGroup > [desc*=\"双十一\"]",
          "activityIds": ".module.splash.ui.SplashBaseActivity",
          "key": 1,
          "name": "活动弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13363281"
        },
        {
          "matches": "[desc$=\"霸屏的按钮\"] < ViewGroup + ViewGroup[childCount=1] > ViewGroup[childCount=0]",
          "activityIds": "com.tencent.karaoke.module.splash.ui.SplashBaseActivity",
          "key": 2,
          "name": "活动弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13363281"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "RelativeLayout > [text=\"广告\"] + ImageView",
          "activityIds": "com.tencent.karaoke.module.main.ui.MainTabActivity",
          "key": 0,
          "name": "动态页面-卡片式广告",
          "snapshotUrls": "https://i.gkd.li/i/13334798"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[desc$=\"霸屏的按钮\"] < ViewGroup + ViewGroup[childCount=1] > ViewGroup[childCount=0]",
          "activityIds": "com.tencent.karaoke.module.splash.ui.SplashBaseActivity",
          "key": 0,
          "name": "活动弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13363281"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "RelativeLayout > [text=\"广告\"] + ImageView",
          "activityIds": "com.tencent.karaoke.module.main.ui.MainTabActivity",
          "key": 0,
          "name": "动态页面-卡片式广告",
          "snapshotUrls": "https://i.gkd.li/import/13334798"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "RelativeLayout > [text=\"广告\"] + ImageView",
          "activityIds": "com.tencent.karaoke.module.main.ui.MainTabActivity",
          "key": 0,
          "name": "动态页面-卡片式广告",
          "snapshotUrls": "https://i.gkd.li/import/13334798"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[desc$=\"霸屏的按钮\"] < ViewGroup + ViewGroup[childCount=1] > ViewGroup[childCount=0]",
          "activityIds": "com.tencent.karaoke.module.splash.ui.SplashBaseActivity",
          "key": 0,
          "name": "活动弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13363281"
        }
      ]
    }
  ]
});
