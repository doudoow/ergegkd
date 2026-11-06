// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "自考笔果题库",
  "id": "com.dep.biguo",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"取消\"] +2 [text=\"立即更新\"]",
          "activityIds": ".dialog",
          "snapshotUrls": "https://i.gkd.li/i/12708751",
          "key": 0
        },
        {
          "matches": "@[text=\"取消\"] +2 [text=\"立即更新\"]",
          "key": 1
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
          "matches": "[id=\"com.dep.biguo:id/imageView\"] + [id=\"com.dep.biguo:id/closeView\"]",
          "activityIds": "com.dep.biguo.dialog",
          "snapshotUrls": "https://i.gkd.li/i/12708756",
          "key": 0
        },
        {
          "matches": "[vid=\"imageView\"] + [vid=\"closeView\"]",
          "activityIds": ".dialog",
          "snapshotUrls": "https://i.gkd.li/i/12708756",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"定位权限\"] +2 [text=\"拒绝\"]",
          "activityIds": "com.dep.biguo.mvp.ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12708770",
          "key": 0
        },
        {
          "matches": "[text*=\"定位权限\"] +2 [text=\"拒绝\"]",
          "key": 1
        },
        {
          "matches": "[text*=\"定位权限\"] +2 [text=\"拒绝\"]",
          "activityIds": ".mvp.ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12708770",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.dep.biguo:id/imageView\"] + [id=\"com.dep.biguo:id/closeView\"]",
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
          "matches": "[id=\"com.dep.biguo:id/imageView\"] + [id=\"com.dep.biguo:id/closeView\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求定位权限弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text*=\"定位权限\"] +2 [text=\"拒绝\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@[text=\"取消\"] +2 [text=\"立即更新\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.dep.biguo:id/imageView\"] + [id=\"com.dep.biguo:id/closeView\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求定位权限弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[text*=\"定位权限\"] +2 [text=\"拒绝\"]",
          "key": 0
        }
      ]
    }
  ]
});
