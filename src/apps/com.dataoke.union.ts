// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "大淘客联盟",
  "id": "com.dataoke.union",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text^=\"你还没有打开通知哦\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": [
            "com.dtk.plat_home_lib.index.activity.IndexActivity",
            "com.dtk.plat_web_lib.X5WebViewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13446826",
            "https://i.gkd.li/i/18094567"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"img_close\"][visibleToUser=true]",
          "activityIds": "com.dtk.plat_web_lib.X5WebViewActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18094553",
          "exampleUrls": "https://e.gkd.li/a1cfa798-0fb1-456c-9875-dd3387f5b7e0",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-开启消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[text=\"取消\"] <<n [id=\"com.dataoke.union:id/parentPanel\"] [text^=\"你还没有打开通知哦\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-开启消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[text=\"取消\"] <<n [id=\"com.dataoke.union:id/parentPanel\"] [text^=\"你还没有打开通知哦\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开启消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[text=\"取消\"] <<n [id=\"com.dataoke.union:id/parentPanel\"] [text^=\"你还没有打开通知哦\"]",
          "key": 0
        }
      ]
    }
  ]
});
