// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "堆糖",
  "id": "com.duitang.main",
  "groups": [
    {
      "name": "局部广告-信息流广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"adOptionEntry\" || vid=\"adClose\"][visibleToUser=true]",
          "activityIds": [
            "com.duitang.main.business.",
            "com.duitang.main.activity."
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14232228",
            "https://i.gkd.li/i/14232332",
            "https://i.gkd.li/i/14232347",
            "https://i.gkd.li/i/14232348",
            "https://i.gkd.li/i/14232368",
            "https://i.gkd.li/i/14232218",
            "https://i.gkd.li/i/14232352"
          ]
        },
        {
          "matches": "[vid=\"adOptionEntry\" || vid=\"adClose\"][visibleToUser=true]",
          "activityIds": [
            ".business.",
            ".activity."
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14232228",
            "https://i.gkd.li/i/14232332",
            "https://i.gkd.li/i/14232347",
            "https://i.gkd.li/i/14232348",
            "https://i.gkd.li/i/14232368",
            "https://i.gkd.li/i/14232218",
            "https://i.gkd.li/i/14232352"
          ]
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "点击[下次再说]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"scoreDuitangCancel\"]",
          "activityIds": ".business.main.NAMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14273094",
          "key": 0
        },
        {
          "matches": "[vid=\"scoreDuitangCancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14273094",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-图片页弹窗广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/popUpbtnClose\"]",
          "activityIds": [
            "com.duitang.main.business.display.ImageActivity",
            "com.duitang.main.business.main.NAMainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13997011",
            "https://i.gkd.li/i/14332109"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"popUpbtnClose\"]",
          "activityIds": [
            ".business.display.ImageActivity",
            ".business.main.NAMainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13997011",
            "https://i.gkd.li/i/14332109"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[vid=\"dialogNegative\"] +2 [text=\"打开通知\"]",
          "activityIds": ".business.main.NAMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14273121",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页-推荐浏览广告",
      "desc": "关闭推荐浏览页面广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/adOptionEntry\"]",
          "snapshotUrls": "https://i.gkd.li/i/13202725",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-请求开启通知弹窗",
      "desc": "点击[x]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[vid=\"dialogNegative\"] +2 [text=\"打开通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-图片页广告弹窗",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/popUpbtnClose\"]",
          "activityIds": "com.duitang.main.business.display.ImageActivity",
          "snapshotUrls": "https://i.gkd.li/i/13997011",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "desc": "关闭青少年模式提醒弹窗",
      "enable": false,
      "actionMaximum": 1,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/teenGuideKnown\"]",
          "snapshotUrls": "https://i.gkd.li/import/13202230",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-推荐浏览广告",
      "desc": "关闭推荐浏览页面广告",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/adOptionEntry\"]",
          "snapshotUrls": "https://i.gkd.li/import/13202725",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-去商店评分",
      "desc": "点击[下次再说]",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/scoreDuitangCancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/13203217",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-推荐浏览广告",
      "desc": "关闭推荐浏览页面广告",
      "enable": false,
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/adOptionEntry\"]",
          "snapshotUrls": "https://i.gkd.li/import/13202725",
          "key": 0
        }
      ]
    },
    {
      "name": "去商店评分",
      "desc": "点击[下次再说]",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/scoreDuitangCancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/13203217",
          "key": 0
        }
      ]
    }
  ]
});
