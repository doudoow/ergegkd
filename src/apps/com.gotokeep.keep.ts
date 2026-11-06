// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Keep",
  "id": "com.gotokeep.keep",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.gotokeep.keep:id/imgCloseHomePageDialog\"]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13761641"
        },
        {
          "matches": "[vid=\"imgCloseHomePageDialog\"]",
          "activityIds": ".refactor.business.main.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13761641"
        }
      ]
    },
    {
      "name": "局部广告-首页信息流广告",
      "desc": "关闭首页信息流中的广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.gotokeep.keep:id/textAdTag\"] + [id=\"com.gotokeep.keep:id/imgClose\"]",
          "key": 0
        },
        {
          "matches": "[vid=\"textAdTag\"] + [vid=\"imgClose\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-运动购页面-弹窗广告",
      "key": 2,
      "rules": [
        {
          "matches": "ImageView + LinearLayout > ImageView[id=null][clickable=true]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12706111"
        },
        {
          "matches": "[id=\"com.gotokeep.keep:id/contentContainer\"] + [id=\"com.gotokeep.keep:id/closeImageView\"]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13766358"
        },
        {
          "matches": "ImageView + LinearLayout > ImageView[id=null][clickable=true]",
          "activityIds": ".refactor.business.main.activity.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12706111"
        },
        {
          "matches": "[vid=\"contentContainer\"] + [vid=\"closeImageView\"]",
          "activityIds": ".refactor.business.main.activity.MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13766358"
        }
      ]
    },
    {
      "name": "全屏广告-请求开启通知权限弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[text=\"暂不开启\"] +2 [text=\"开启通知权限\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击\"暂不升级\"",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.gotokeep.keep:id/text_secondary_action\"]",
          "snapshotUrls": "https://i.gkd.li/i/14126005",
          "exampleUrls": "https://m.gkd.li/57941037/6b0091e9-1bf1-49bd-be5c-e6997bc9accb",
          "key": 0
        },
        {
          "matches": "[vid=\"text_secondary_action\"]",
          "snapshotUrls": "https://i.gkd.li/i/14126005",
          "exampleUrls": "https://m.gkd.li/57941037/6b0091e9-1bf1-49bd-be5c-e6997bc9accb",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.gotokeep.keep:id/layoutLottie\"] +(1,2) [id=\"com.gotokeep.keep:id/imgCloseHomePageDialog\"]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12706102",
            "https://i.gkd.li/i/13761641"
          ]
        }
      ]
    },
    {
      "name": "未分类-首页信息流广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.gotokeep.keep:id/textAdTag\"] + [id=\"com.gotokeep.keep:id/imgClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-运动购页面-广告弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "ImageView + LinearLayout > ImageView[id=null][clickable=true]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12706111"
        },
        {
          "matches": "[id=\"com.gotokeep.keep:id/contentContainer\"] + [id=\"com.gotokeep.keep:id/closeImageView\"]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13766358"
        }
      ]
    },
    {
      "name": "未分类-请求开启通知权限弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@[text=\"暂不开启\"] +2 [text=\"开启通知权限\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "desc": "关闭首页弹出的全屏广告",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.gotokeep.keep:id/layoutLottie\"] +(1,2) [id=\"com.gotokeep.keep:id/imgCloseHomePageDialog\"]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12706102",
            "https://i.gkd.li/import/13761641"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-运动购页面广告弹窗",
      "desc": "关闭运动购物页面的弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "ImageView + LinearLayout > ImageView[id=null][clickable=true]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12706111"
        },
        {
          "matches": "[id=\"com.gotokeep.keep:id/contentContainer\"] + [id=\"com.gotokeep.keep:id/closeImageView\"]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13766358"
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[text$=\"未成年人模式\"] +2 @[clickable=true] > [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-运动购页面-广告弹窗",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "ImageView + LinearLayout > ImageView[id=null][clickable=true]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12706111"
        },
        {
          "matches": "[id=\"com.gotokeep.keep:id/contentContainer\"] + [id=\"com.gotokeep.keep:id/closeImageView\"]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13766358"
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 13,
      "rules": [
        {
          "matches": "[text$=\"未成年人模式\"] +2 @[clickable=true] > [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.gotokeep.keep:id/layoutLottie\"] +(1,2) [id=\"com.gotokeep.keep:id/imgCloseHomePageDialog\"]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12706102",
            "https://i.gkd.li/import/13761641"
          ]
        }
      ]
    },
    {
      "name": "首页信息流广告",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.gotokeep.keep:id/textAdTag\"] + [id=\"com.gotokeep.keep:id/imgClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "运动购页面-广告弹窗",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "ImageView + LinearLayout > ImageView[id=null][clickable=true]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12706111"
        },
        {
          "matches": "[id=\"com.gotokeep.keep:id/contentContainer\"] + [id=\"com.gotokeep.keep:id/closeImageView\"]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13766358"
        }
      ]
    },
    {
      "name": "请求开启通知权限弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "@[text=\"暂不开启\"] +2 [text=\"开启通知权限\"]",
          "key": 0
        }
      ]
    }
  ]
});
