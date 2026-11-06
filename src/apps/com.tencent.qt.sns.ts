// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "掌上穿越火线",
  "id": "com.tencent.qt.sns",
  "groups": [
    {
      "name": "全屏广告-首页活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.tencent.qt.sns:id/closebtn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13497978",
          "key": 0
        },
        {
          "matches": "[vid=\"closebtn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13497978",
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
          "matches": [
            "[text=\"版本更新\" || text=\"现在升级\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": "com.tencent.gamehelper.ui.main.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13713478",
            "https://i.gkd.li/i/20851162"
          ],
          "key": 0
        },
        {
          "matches": "[text=\"版本更新\"] +4 LinearLayout > [text=\"取消\"]",
          "key": 1
        },
        {
          "matches": "[text=\"版本更新\"] +4 LinearLayout > [text=\"取消\"]",
          "activityIds": "com.tencent.gamehelper.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13713478",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-首页活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.tencent.qt.sns:id/closebtn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.tencent.qt.sns:id/closebtn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"版本更新\"] +4 LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
