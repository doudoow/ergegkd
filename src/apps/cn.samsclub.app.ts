// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "山姆会员商店",
  "id": "cn.samsclub.app",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 [id=\"cn.samsclub.app:id/advertising_container\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13609106"
        },
        {
          "matches": "@ImageView[vid=\"close_view\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15879369"
        },
        {
          "matches": "@ImageView[clickable=true] <2 [vid=\"advertising_container\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13609106"
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cn.samsclub.app:id/tips_close\"]",
          "activityIds": "cn.samsclub.app.ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13609113",
          "key": 0
        },
        {
          "matches": "[id=\"cn.samsclub.app:id/tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609113",
          "key": 1
        },
        {
          "matches": "[vid=\"tips_close\"]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13609113",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-关闭「您有一张亲友卡待赠送」通知条",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"cn.samsclub.app:id/fragment_home_window_delete_iv\"]",
          "activityIds": "cn.samsclub.app.ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13609113",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-底部横幅",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"cn.samsclub.app:id/fragment_home_window_delete_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609113",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-底部横幅广告",
      "desc": "x掉[亲友卡待赠送]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"fragment_home_window_delete_iv\"]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13609113",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-系统位置服务未打开",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": [
            "[text=\"系统位置服务未打开\"]",
            "[id=\"cn.samsclub.app:id/tips_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13609113",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-底部[您有一张亲友卡待赠送]通知条",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "@[id=\"cn.samsclub.app:id/fragment_home_window_delete_iv\"] - [text=\"赠送亲友卡\"]",
          "snapshotUrls": "https://i.gkd.li/import/13609113",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭「系统位置服务未打开」通知条",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"cn.samsclub.app:id/tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13609113",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭「您有一张亲友卡待赠送」通知条",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"cn.samsclub.app:id/fragment_home_window_delete_iv\"]",
          "snapshotUrls": "https://i.gkd.li/import/13609113",
          "key": 0
        }
      ]
    }
  ]
});
