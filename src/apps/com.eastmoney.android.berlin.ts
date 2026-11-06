// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "东方财富",
  "id": "com.eastmoney.android.berlin",
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
          "matches": "[id=\"com.eastmoney.android.berlin:id/tv_update_next_time\"]",
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706070",
          "key": 0
        },
        {
          "matches": "@[id=\"com.eastmoney.android.berlin:id/tv_update_next_time\"] + [id=\"com.eastmoney.android.berlin:id/tv_update_now\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"tv_update_next_time\"]",
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706070",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_single_close\"][visibleToUser=true]",
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23281792",
          "exampleUrls": "https://e.gkd.li/286da57c-7a7f-4668-aea8-7cbff63e8499",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.eastmoney.android.berlin:id/push_on_notify_delete\"]",
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706065",
          "key": 0
        },
        {
          "matches": "[vid=\"push_on_notify_delete\"]",
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706065",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-请求通知权限提示信息",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.eastmoney.android.berlin:id/push_on_notify_on\"] + [id=\"com.eastmoney.android.berlin:id/push_on_notify_delete\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求通知权限提示信息",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.eastmoney.android.berlin:id/push_on_notify_on\"] + [id=\"com.eastmoney.android.berlin:id/push_on_notify_delete\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"com.eastmoney.android.berlin:id/tv_update_next_time\"] + [id=\"com.eastmoney.android.berlin:id/tv_update_now\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限提示信息",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.eastmoney.android.berlin:id/push_on_notify_on\"] + [id=\"com.eastmoney.android.berlin:id/push_on_notify_delete\"]",
          "key": 0
        }
      ]
    }
  ]
});
