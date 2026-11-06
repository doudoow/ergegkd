// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "广东税务",
  "id": "com.example.servyouappzhuhai",
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
          "matches": "[id=\"com.example.servyouappzhuhai:id/btn_dialog_negtive\"]",
          "activityIds": "cn.com.servyou.servyouzhuhai.activity.main.imps.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13440721",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_dialog_negtive\"]",
          "activityIds": "cn.com.servyou.servyouzhuhai.activity.main.imps.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13440721",
          "key": 1
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
          "matches": "[id=\"com.example.servyouappzhuhai:id/btn_dialog_negtive\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440721",
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
          "matches": "[id=\"com.example.servyouappzhuhai:id/btn_dialog_negtive\"]",
          "snapshotUrls": "https://i.gkd.li/import/13440721",
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
          "matches": "[id=\"com.example.servyouappzhuhai:id/btn_dialog_negtive\"]",
          "snapshotUrls": "https://i.gkd.li/import/13440721",
          "key": 0
        }
      ]
    }
  ]
});
