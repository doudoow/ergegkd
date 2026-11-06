// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "扫描全能王",
  "id": "com.intsig.camscanner",
  "groups": [
    {
      "name": "局部广告-主页面上方广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.intsig.camscanner:id/card_ad_tag\"] + [id=\"com.intsig.camscanner:id/card_close\"]",
          "key": 0
        },
        {
          "matches": "[vid=\"card_ad_tag\"] + [vid=\"card_close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-开通会员",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_cancel\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16761285",
          "exampleUrls": "https://e.gkd.li/5f628895-e214-4a0b-8344-14f3d8c20807"
        },
        {
          "matches": "[vid=\"iv_drop_cnl_close\"]",
          "activityIds": ".guide.CancelAdShowCnGuidePurchaseActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17002087",
          "exampleUrls": "https://e.gkd.li/e9a6775a-be51-4aca-b3cd-0b496efe2f0c"
        }
      ]
    },
    {
      "name": "其他-关闭[发现新截图]提示",
      "key": 2,
      "rules": [
        {
          "matches": "RelativeLayout[vid=\"rl_screenshot\"] + ImageView[vid=\"iv_esc\"]",
          "activityIds": ".mainmenu.mainactivity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16975714",
          "exampleUrls": "https://e.gkd.li/c66080aa-1758-4a69-9752-aa1373d7f2b5",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-关闭[发现新截图]提示",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "RelativeLayout[vid=\"rl_screenshot\"] + ImageView[vid=\"iv_esc\"]",
          "activityIds": ".mainmenu.mainactivity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16975714",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开屏vip提示",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=`com.intsig.camscanner:id/tv_drop_cnl_close_new`]",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏vip提示",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=`com.intsig.camscanner:id/tv_drop_cnl_close_new`]",
          "key": 0
        }
      ]
    },
    {
      "name": "主页面上方广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.intsig.camscanner:id/card_ad_tag\"] + [id=\"com.intsig.camscanner:id/card_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
