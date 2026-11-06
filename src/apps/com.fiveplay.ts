// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "5EPlay",
  "id": "com.fiveplay",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] - * > [text=\"打开消息推送\"]",
          "activityIds": ".sihp_homepage.module.main.Main2Activity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14680645",
          "exampleUrls": "https://m.gkd.li/57941037/020e18ab-1bf1-4639-b32a-777719881dcb",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页右下角浮窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.fiveplay:id/iv_ad_float_close\"]",
          "activityIds": ".sihp_homepage.module.main.Main2Activity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16825082",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_ad_float_close\"]",
          "activityIds": ".sihp_homepage.module.main.Main2Activity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16825082",
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
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"cb_ignore_version\"][checked=false][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23833318",
          "excludeSnapshotUrls": "https://i.gkd.li/i/23833319",
          "exampleUrls": "https://e.gkd.li/4833b753-6fcd-4caf-b57a-1a27fdfecd0a"
        },
        {
          "matches": "[text=\"暂不更新\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/23833318",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-请求打开消息推送弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] - * > [text=\"打开消息推送\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14680645",
          "exampleUrls": "https://m.gkd.li/57941037/020e18ab-1bf1-4639-b32a-777719881dcb",
          "key": 0
        }
      ]
    }
  ]
});
