// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "京东金融",
  "id": "com.jd.jrapp",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text^=\"打开通知\"] +2 [id=\"com.jd.jrapp:id/iv_close\"]",
          "activityIds": ".bm.mainbox.main.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13249998"
        },
        {
          "matches": "@View - * > [visibleToUser=true][text=\"开启并订阅通知\"] <<n [id=\"com.jd.jrapp:id/webview\"]",
          "activityIds": ".bm.common.web.ui.WebActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13255656"
        },
        {
          "matches": "TextView[text^=\"打开通知\"] +2 [vid=\"iv_close\"]",
          "activityIds": ".bm.mainbox.main.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13249998"
        },
        {
          "matches": "@View - * > [visibleToUser=true][text=\"开启并订阅通知\"] <<n [vid=\"webview\"]",
          "activityIds": ".bm.common.web.ui.WebActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13255656"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageButton[id=\"com.jd.jrapp:id/ib_close\"] + RelativeLayout [text^=\"发现新版本\"]",
          "activityIds": ".bm.mainbox.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13628364",
          "key": 0
        },
        {
          "matches": "@ImageButton[vid=\"ib_close\"] + RelativeLayout [text^=\"发现新版本\"]",
          "activityIds": ".bm.mainbox.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13628364",
          "key": 1
        },
        {
          "matches": "@ImageButton[id=\"com.jd.jrapp:id/ib_close\"] + RelativeLayout [text^=\"发现新版本\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "评价提示-满意度打分弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - [text$=\"满意度打几分？\"]",
          "activityIds": ".dy.api.JRDynamicPickerActivity",
          "snapshotUrls": "https://i.gkd.li/i/13804561",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-通知提醒",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "TextView[text^=\"打开通知\"] +2 [id=\"com.jd.jrapp:id/iv_close\"]",
          "activityIds": "com.jd.jrapp.bm.mainbox.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13249998",
          "key": 0
        },
        {
          "matches": "View[text=\"开启并订阅通知\"] < View + View[clickable=true]",
          "activityIds": "com.jd.jrapp.bm.common.web.ui.WebActivity",
          "snapshotUrls": "https://i.gkd.li/i/13255656",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageButton[id=\"com.jd.jrapp:id/ib_close\"] + RelativeLayout [text^=\"发现新版本\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-满意度打分弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 5,
      "rules": [
        {
          "matches": "[text*=\"满意度打几分\"] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知提醒",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "TextView[text^=\"打开通知\"] +2 [id=\"com.jd.jrapp:id/iv_close\"]",
          "activityIds": "com.jd.jrapp.bm.mainbox.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13249998",
          "key": 0
        },
        {
          "matches": "View[text=\"开启并订阅通知\"] < View + View[clickable=true]",
          "activityIds": "com.jd.jrapp.bm.common.web.ui.WebActivity",
          "snapshotUrls": "https://i.gkd.li/import/13255656",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-满意度打分弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 7,
      "rules": [
        {
          "matches": "[text*=\"满意度打几分\"] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提醒",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "TextView[text^=\"打开通知\"] +2 [id=\"com.jd.jrapp:id/iv_close\"]",
          "activityIds": "com.jd.jrapp.bm.mainbox.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13249998",
          "key": 0
        },
        {
          "matches": "View[text=\"开启并订阅通知\"] < View + View[clickable=true]",
          "activityIds": "com.jd.jrapp.bm.common.web.ui.WebActivity",
          "snapshotUrls": "https://i.gkd.li/import/13255656",
          "key": 1
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "@ImageButton[id=\"com.jd.jrapp:id/ib_close\"] + RelativeLayout [text^=\"发现新版本\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "满意度打分弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 10,
      "rules": [
        {
          "matches": "[text*=\"满意度打几分\"] + ImageView",
          "key": 0
        }
      ]
    }
  ]
});
