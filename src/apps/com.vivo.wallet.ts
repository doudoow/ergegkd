// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "钱包",
  "id": "com.vivo.wallet",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"取消\"]",
          "activityIds": ".bookkeep.activity.BookKeepMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13440881",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-通知权限授权弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@Button[text*=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440881",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知权限授权弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@Button[text*=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/import/13440881",
          "key": 0
        }
      ]
    },
    {
      "name": "通知权限授权弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@Button[text*=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/import/13440881",
          "key": 0
        }
      ]
    }
  ]
});
