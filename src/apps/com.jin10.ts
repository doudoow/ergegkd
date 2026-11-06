// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "金十数据",
  "id": "com.jin10",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.jin10:id/update_cancel\"] + [id=\"com.jin10:id/iv_pic\"]",
          "activityIds": ".lgd.update.UpdateActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706043",
          "key": 0
        },
        {
          "matches": "@[id=\"com.jin10:id/update_cancel\"] + [id=\"com.jin10:id/iv_pic\"]",
          "key": 1
        },
        {
          "matches": "@[vid=\"update_cancel\"] + [vid=\"iv_pic\"]",
          "activityIds": ".lgd.update.UpdateActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706043",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.jin10:id/iv_body\"] + [id=\"com.jin10:id/iv_close\"]",
          "activityIds": "com.jin10.lgd.biz.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706045",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-快讯页面弹窗广告",
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"com.jin10:id/iv_close\"] + [id=\"com.jin10:id/iv_pic\"]",
          "activityIds": "com.jin10.lgd.biz.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706047",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-会员页面顶部广告",
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.jin10:id/iv_header\"] + [id=\"com.jin10:id/iv_close\"]",
          "activityIds": "com.jin10.lgd.biz.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706051",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_header\"] + [vid=\"iv_close\"]",
          "activityIds": ".lgd.biz.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706051",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.jin10:id/iv_body\"] + [id=\"com.jin10:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-快讯页面-广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"com.jin10:id/iv_close\"] + [id=\"com.jin10:id/iv_pic\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-会员页面-顶部广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.jin10:id/iv_header\"] + [id=\"com.jin10:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "key": 7,
      "rules": [
        {
          "matches": "[id$=\"iv_body\" || id$=\"iv_pic\" || vid=\"body_ad\"] <n [visibleToUser=true] > [vid=\"iv_close\"]",
          "activityIds": ".lgd.biz.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12706045",
            "https://i.gkd.li/i/12706047",
            "https://i.gkd.li/i/31375320"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.jin10:id/iv_body\"] + [id=\"com.jin10:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-快讯页面-广告弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@[id=\"com.jin10:id/iv_close\"] + [id=\"com.jin10:id/iv_pic\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-会员页面-顶部广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.jin10:id/iv_header\"] + [id=\"com.jin10:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "@[id=\"com.jin10:id/update_cancel\"] + [id=\"com.jin10:id/iv_pic\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.jin10:id/iv_body\"] + [id=\"com.jin10:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "快讯页面-广告弹窗",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "@[id=\"com.jin10:id/iv_close\"] + [id=\"com.jin10:id/iv_pic\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "会员页面-顶部广告",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.jin10:id/iv_header\"] + [id=\"com.jin10:id/iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
