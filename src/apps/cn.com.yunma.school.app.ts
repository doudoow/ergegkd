// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "易校园",
  "id": "cn.com.yunma.school.app",
  "groups": [
    {
      "name": "功能类-打开应用后自动点击右上角扫一扫",
      "desc": "仅开屏后触发一次",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"fl_scan\"][visibleToUser=true]",
          "activityIds": "com.yunma.app.ui.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22451914",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-用水自动点击开始",
      "key": 1,
      "rules": [
        {
          "matches": "@TextView[text=\"开始\"][childCount=0] < View[childCount=1] <<n WebView[text=\"立即用水\"] <<2 [vid=\"web_parent_layout_id\"]",
          "activityIds": "com.yunma.baseextend.ui.WebActivity",
          "matchRoot": true,
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23327551",
          "key": 0
        },
        {
          "matches": "@TextView[text=\"开始\"] < [index=parent.childCount.minus(1)] <n View[childCount>6] <n View <3 View <<3 WebView[text=\"立即用水\"] <<2 [vid=\"web_parent_layout_id\"]",
          "activityIds": "com.yunma.baseextend.ui.WebActivity",
          "matchRoot": true,
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23327551",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"anythink_myoffer_btn_close_id\"][visibleToUser=true]",
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23475779",
          "exampleUrls": "https://e.gkd.li/3ddc6da8-7bbf-43f8-8d79-1fabe1180fea",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text^=\"发现新版本\"]",
            "[vid=\"ib_close\"][clickable=true]"
          ],
          "activityIds": "com.yunma.baseextend.appupdate.view.UpdateDialogActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24336659",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动点击右上角扫一扫",
      "desc": "仅开屏后触发一次",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "@[clickable=true] > [vid=\"iv_scan\"]",
          "activityIds": "com.yunma.app.ui.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22451914",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "key": 5,
      "rules": [
        {
          "matches": [
            "[text*=\"将系统通知权限开启\"]",
            "[text=\"拒绝\"][clickable=true]"
          ],
          "activityIds": "com.yunma.app.ui.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25608212",
          "key": 0
        }
      ]
    }
  ]
});
