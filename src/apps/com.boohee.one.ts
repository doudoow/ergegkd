// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "薄荷健康",
  "id": "com.boohee.one",
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
          "matches": "@[id=\"com.boohee.one:id/tv_ignore\"] + [id=\"com.boohee.one:id/tv_update\"]",
          "activityIds": "com.boohee.library.update.UpdateDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/12716918",
          "key": 0
        },
        {
          "matches": "@[id=\"com.boohee.one:id/tv_ignore\"] + [id=\"com.boohee.one:id/tv_update\"]",
          "key": 1
        },
        {
          "matches": "@[vid=\"tv_ignore\"] + [vid=\"tv_update\"]",
          "activityIds": "com.boohee.library.update.UpdateDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/12716918",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-发现页弹窗广告",
      "key": 1,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @ImageView[id=null][clickable=true] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.boohee.one:id/img_close_push\"]",
          "activityIds": ".app.account.ui.activity.MsgCategoryActivityV2",
          "snapshotUrls": "https://i.gkd.li/i/12716950",
          "key": 0
        },
        {
          "matches": "[vid=\"img_close_push\"]",
          "activityIds": ".app.account.ui.activity.MsgCategoryActivityV2",
          "snapshotUrls": "https://i.gkd.li/i/12716950",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-发现页广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @ImageView[id=null][clickable=true] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求开启通知权限弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.boohee.one:id/img_close_push\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-发现页广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @ImageView[id=null][clickable=true] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求开启通知权限弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.boohee.one:id/img_close_push\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@[id=\"com.boohee.one:id/tv_ignore\"] + [id=\"com.boohee.one:id/tv_update\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "发现页广告弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @ImageView[id=null][clickable=true] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "请求开启通知权限弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.boohee.one:id/img_close_push\"]",
          "key": 0
        }
      ]
    }
  ]
});
