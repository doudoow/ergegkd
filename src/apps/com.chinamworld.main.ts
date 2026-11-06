// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国建设银行",
  "id": "com.chinamworld.main",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[vid=\"ll_load\"][visibleToUser=true]",
            "[vid=\"skip\"][visibleToUser=true]"
          ],
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20649289",
          "exampleUrls": "https://e.gkd.li/69567942-f5a1-40f0-b4b6-7f8bf2348052",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[vid=\"tip_view_pager\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "activityIds": "com.ccb.start.view.startdialog.StartDialogActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20649291",
          "exampleUrls": "https://e.gkd.li/d1f24a66-8d46-4c0d-9ca9-ac5b540a6548",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-VPN风险弹窗",
      "desc": "点击[知晓风险，继续使用]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"知晓风险，继续使用\"]",
          "activityIds": "com.ccb.start.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18113538",
          "exampleUrls": "https://e.gkd.li/827582b2-d449-429c-b21d-7277c618d8bf",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-我的页面-广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.chinamworld.main:id/indicator_container_container\"] + [id=\"com.chinamworld.main:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-我的页面弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": [
            "[vid=\"tip_view_pager\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "activityIds": "com.ccb.start.view.startdialog.StartDialogActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12726961",
            "https://i.gkd.li/i/20649291"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-我的页面-广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.chinamworld.main:id/indicator_container_container\"] + [id=\"com.chinamworld.main:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "我的页面-广告弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.chinamworld.main:id/indicator_container_container\"] + [id=\"com.chinamworld.main:id/close\"]",
          "key": 0
        }
      ]
    }
  ]
});
