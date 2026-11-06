// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "飞书",
  "id": "com.ss.android.lark",
  "groups": [
    {
      "name": "功能类-桌面端登录确认",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"飞书 桌面端登录确认\"] +2 [id=\"com.ss.android.lark:id/login_button\"]",
          "activityIds": "com.ss.lark.android.passport.biz.feature.sso.suite.SuiteConfirmActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13494960",
          "key": 0
        },
        {
          "matches": "[text=\"飞书 桌面端登录确认\"] +2 [vid=\"login_button\"]",
          "activityIds": "com.ss.lark.android.passport.biz.feature.sso.suite.SuiteConfirmActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13494960",
          "key": 1
        },
        {
          "matches": "[text=\"飞书 桌面端登录确认\"] +2 [id=\"com.ss.android.lark:id/login_button\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动查看原图",
      "desc": "查看图片时自动点击\"查看原图\"",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.ss.android.lark:id/look_origin_icon\"]",
          "activityIds": "com.ss.android.lark.widget.photo.preview.PhotoPagerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12840528",
          "key": 0
        },
        {
          "matches": "[vid=\"look_origin_icon\"]",
          "activityIds": ".widget.photo.preview.PhotoPagerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12840528",
          "key": 1
        },
        {
          "matches": "[id=\"com.ss.android.lark:id/look_origin_icon\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动发送原图",
      "desc": "发送图片时自动勾选\"原图\"",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"layout_original_photo\"][visibleToUser=true]",
          "activityIds": ".chatwindow.ChatWindowActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17711351",
          "exampleUrls": "https://e.gkd.li/c985a1e9-ea40-4911-a73f-8ef098909bce",
          "key": 0
        },
        {
          "matches": "@View[id$=\"original_photo\"][checked=false] + [id=\"com.ss.android.lark:id/original_label\"][text=\"原图\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-桌面端登录确认",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"飞书 桌面端登录确认\"] +2 [id=\"com.ss.android.lark:id/login_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-自动查看原图",
      "desc": "查看图片时自动点击【查看原图】",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.ss.android.lark:id/look_origin_icon\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-自动发送原图",
      "desc": "发送图片时自动勾选【原图】",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@View[id$=\"original_photo\"][checked=false] + [id=\"com.ss.android.lark:id/original_label\"][text=\"原图\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "桌面端登录确认",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"飞书 桌面端登录确认\"] +2 [id=\"com.ss.android.lark:id/login_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "自动查看原图",
      "desc": "查看图片时自动点击【查看原图】",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.ss.android.lark:id/look_origin_icon\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "自动发送原图",
      "desc": "发送图片时自动勾选【原图】",
      "enable": false,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "@View[id$=\"original_photo\"][checked=false] + [id=\"com.ss.android.lark:id/original_label\"][text=\"原图\"]",
          "key": 0
        }
      ]
    }
  ]
});
