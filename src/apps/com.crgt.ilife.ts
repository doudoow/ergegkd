// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "国铁吉讯",
  "id": "com.crgt.ilife",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout[childCount=2] > FrameLayout[childCount=3] > @FrameLayout[childCount=1][visibleToUser=true] > ImageView[childCount=0][text=null] <<n [vid=\"home_banner\"]",
          "activityIds": "com.crgt.ilife.ui.main.MainPageView",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16450332",
          "exampleUrls": "https://e.gkd.li/3026504f-acb7-4f58-b171-ab664b2caf27"
        },
        {
          "matches": "@FrameLayout[childCount=1] - LinearLayout > [text=\"查看详情\"]",
          "activityIds": "com.crgt.ilife.ui.main.MainPageView",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16485384",
          "exampleUrls": "https://e.gkd.li/15dc994f-ab27-481f-afbe-f6b3f18dde11"
        },
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout[childCount=2] > FrameLayout[childCount=3] > @FrameLayout[childCount=1] > ImageView[childCount=0][text=null]",
          "activityIds": "com.crgt.ilife.ui.main.MainPageView",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16450332",
          "exampleUrls": "https://e.gkd.li/3026504f-acb7-4f58-b171-ab664b2caf27"
        },
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout[childCount=2] > FrameLayout[childCount=3] > @FrameLayout[childCount=1][visibleToUser=true] > ImageView[childCount=0][text=null] <<n [vid=\"home_banner\"]",
          "activityIds": ".ui.main.MainPageView",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16450332",
          "exampleUrls": "https://e.gkd.li/3026504f-acb7-4f58-b171-ab664b2caf27"
        },
        {
          "matches": "@FrameLayout[childCount=1] - LinearLayout > [text=\"查看详情\"]",
          "activityIds": ".ui.main.MainPageView",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/16485384",
          "exampleUrls": "https://e.gkd.li/15dc994f-ab27-481f-afbe-f6b3f18dde11"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "com.crgt.ilife.ui.main.MainPageView",
          "snapshotUrls": "https://i.gkd.li/i/16581549",
          "exampleUrls": "https://e.gkd.li/43ccfd78-67d7-4dba-a25f-a2f5d62f9c40",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": ".ui.main.MainPageView",
          "snapshotUrls": "https://i.gkd.li/i/16581549",
          "exampleUrls": "https://e.gkd.li/43ccfd78-67d7-4dba-a25f-a2f5d62f9c40",
          "key": 1
        }
      ]
    }
  ]
});
