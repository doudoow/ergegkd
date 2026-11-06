// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱企查",
  "id": "com.baidu.xin.aiqicha",
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
          "matches": "[id=\"com.baidu.xin.aiqicha:id/update_cancel\"]",
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
          "snapshotUrls": "https://i.gkd.li/i/12755738",
          "key": 0
        },
        {
          "matches": "[vid=\"update_cancel\"]",
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
          "snapshotUrls": "https://i.gkd.li/i/12755738",
          "key": 1
        },
        {
          "matches": "[id=\"com.baidu.xin.aiqicha:id/update_cancel\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "自动点击\"不允许\"/关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv\"]",
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
          "key": 0,
          "name": "点击不允许",
          "snapshotUrls": "https://i.gkd.li/i/12755733",
          "exampleUrls": "https://m.gkd.li/57941037/9c26bb3a-d770-429a-b211-46b97a47f5f0"
        },
        {
          "matches": "@[id=\"com.baidu.xin.aiqicha:id/close\"] +2 [text=\"打开消息通知\"]",
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
          "key": 1,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/12755756",
          "exampleUrls": "https://m.gkd.li/57941037/92a1bd1b-91c5-42a8-830b-9b721815d9a4"
        },
        {
          "matches": "[vid=\"notice_dialog_cancel_iv\"]",
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
          "key": 2,
          "name": "点击不允许",
          "snapshotUrls": "https://i.gkd.li/i/12755733",
          "exampleUrls": "https://m.gkd.li/57941037/9c26bb3a-d770-429a-b211-46b97a47f5f0"
        },
        {
          "matches": "@[vid=\"close\"] +2 [text=\"打开消息通知\"]",
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
          "key": 3,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/12755756",
          "exampleUrls": "https://m.gkd.li/57941037/92a1bd1b-91c5-42a8-830b-9b721815d9a4"
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "desc": "自动点击【不允许】",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求通知权限提示信息",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"com.baidu.xin.aiqicha:id/close\"] +2 [text=\"打开消息通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求通知权限弹窗",
      "desc": "自动点击【不允许】",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求通知权限提示信息",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"com.baidu.xin.aiqicha:id/close\"] +2 [text=\"打开消息通知\"]",
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
          "matches": "[id=\"com.baidu.xin.aiqicha:id/update_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "desc": "自动点击【不允许】",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限提示信息",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@[id=\"com.baidu.xin.aiqicha:id/close\"] +2 [text=\"打开消息通知\"]",
          "key": 0
        }
      ]
    }
  ]
});
