// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "学习强国",
  "id": "cn.xuexi.android",
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
          "matches": "@[text=\"取消\"] + [text=\"立即升级\"]",
          "activityIds": "com.alibaba.android.rimet.biz.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715139",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"开启消息通知\"] +2 [id=\"cn.xuexi.android:id/layout_close\"]",
          "activityIds": "com.alibaba.android.rimet.biz.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715160",
          "key": 0
        },
        {
          "matches": "[text^=\"开启消息通知\"] +2 [vid=\"layout_close\"]",
          "activityIds": "com.alibaba.android.rimet.biz.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715160",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-请求开启通知权限提示信息",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text^=\"开启消息通知\"] +2 [id=\"cn.xuexi.android:id/layout_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-请求开启通知权限提示信息",
      "desc": "[x]",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@FrameLayout[id=\"cn.xuexi.android:id/layout_close\"] -2 [text=\"开启消息通知，不错过重要新消息\"]",
          "snapshotUrls": "https://i.gkd.li/import/12715160",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"立即升级\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求开启通知权限提示信息",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text^=\"开启消息通知\"] +2 [id=\"cn.xuexi.android:id/layout_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
