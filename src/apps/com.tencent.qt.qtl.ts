// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "掌上英雄联盟",
  "id": "com.tencent.qt.qtl",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/16568456",
          "exampleUrls": "https://e.gkd.li/8e923c51-48e7-431c-abf8-e564761b772e",
          "key": 0
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/16568456",
          "exampleUrls": "https://e.gkd.li/8e923c51-48e7-431c-abf8-e564761b772e",
          "key": 1
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
          "matches": "[id=\"com.tencent.qt.qtl:id/btn_update_cancel\"]",
          "activityIds": "com.tencent.qt.module_appupdate.soft_update.impl.SoftUpdateConfirmActivity",
          "snapshotUrls": "https://i.gkd.li/i/13611286",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_update_cancel\"]",
          "activityIds": "com.tencent.qt.module_appupdate.soft_update.impl.SoftUpdateConfirmActivity",
          "snapshotUrls": "https://i.gkd.li/i/13611286",
          "key": 1
        },
        {
          "matches": "[id=\"com.tencent.qt.qtl:id/btn_update_cancel\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"notice_close_pic\"]",
          "activityIds": "com.tencent.zone.main.MainZoneHomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16581606",
          "exampleUrls": "https://e.gkd.li/d1747892-c416-4877-a706-fb3c16e5b049",
          "key": 0
        },
        {
          "matches": "[vid=\"notice_close_pic\"]",
          "activityIds": [
            "com.tencent.zone.main.MainZoneHomeActivity",
            "com.tencent.zone.main.notice.NoticeActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/16581606",
            "https://i.gkd.li/i/29888372"
          ],
          "exampleUrls": "https://e.gkd.li/d1747892-c416-4877-a706-fb3c16e5b049",
          "key": 1
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.tencent.qt.qtl:id/btn_update_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
