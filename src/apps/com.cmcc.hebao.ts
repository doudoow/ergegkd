// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "和包",
  "id": "com.cmcc.hebao",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"dialog-delete\"] <<n [vid=\"rl_parent\"]",
          "activityIds": "com.cmcc.wallet.mocam.activity.home.WalletHomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14567338",
          "exampleUrls": "https://m.gkd.li/57941037/cb33c5b5-dd2e-4aa9-80d1-f7013f150305"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"dialog-delete\"][visibleToUser=true]",
          "activityIds": "com.cmcc.wallet.mocam.activity.home.WalletHomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14567338",
          "exampleUrls": "https://m.gkd.li/57941037/cb33c5b5-dd2e-4aa9-80d1-f7013f150305"
        }
      ]
    }
  ]
});
