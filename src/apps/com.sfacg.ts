// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "菠萝包轻小说",
  "id": "com.sfacg",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text*=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19888120",
            "https://i.gkd.li/i/19888054",
            "https://i.gkd.li/i/20114219"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-新春小说折扣季/VIP新书上架",
      "desc": "点击 X",
      "enable": false,
      "matchTime": 20000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[id=\"com.sfacg:id/imgClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-消息推送权限",
      "desc": "点击【不再提醒】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "TextView[id=\"com.sfacg:id/tvCancel\"]",
          "activityIds": "com.sf.ui.message.MessageActivity",
          "snapshotUrls": "https://i.gkd.li/import/15397688",
          "key": 0
        },
        {
          "matches": "[id=\"com.sfacg:id/cancel_text\"][text=\"取消\"]",
          "activityIds": "com.sf.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/17519120",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-书库-右侧-上架预定书单浮窗",
      "desc": "点击 X",
      "enable": false,
      "matchTime": 20000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView - ImageView[id=\"com.sfacg:id/iv_home_float\"]",
          "excludeMatches": "ImageView[id=\"com.sfacg:id/imgClose\"]",
          "snapshotUrls": "https://i.gkd.li/import/15397824",
          "key": 0
        }
      ]
    }
  ]
});
