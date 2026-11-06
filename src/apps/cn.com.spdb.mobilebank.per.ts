// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "浦发银行",
  "id": "cn.com.spdb.mobilebank.per",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "自动点击关闭。",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"去开启\"] + View > Image[text.length=0]",
          "activityIds": ".activity.web.stage.StageCommonWebActivity",
          "snapshotUrls": "https://i.gkd.li/i/13458535",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-消息中心-系统通知请求",
      "desc": "自动点击关闭。",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"去开启\"] + View > Image[text.length=0]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-消息中心-系统通知请求",
      "desc": "关闭消息推送开启提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"去开启\"] + View > Image[text.length=0]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-消息中心-系统通知请求",
      "desc": "自动点击关闭。",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@Image < View - TextView[text=\"去开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "消息中心-系统通知请求",
      "desc": "自动点击关闭。",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"去开启\"] + View > Image[text.length=0]",
          "key": 0
        }
      ]
    }
  ]
});
