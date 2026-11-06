// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "TikTok",
  "id": "com.zhiliaoapp.musically",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > @ImageView[index=1][clickable=true] <<n [id=\"android:id/custom\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15144780"
        },
        {
          "matches": "@UIView[clickable=true] -3 FlattenUIText[text=\"Get products\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16190364"
        },
        {
          "matches": "RelativeLayout[childCount=2] > @ImageView[index=1][clickable=true] <<n [id=\"android:id/custom\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15144780",
          "exampleUrls": "https://m.gkd.li/57941037/13316f83-eaca-4081-9757-33730338a033",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击[暂时不要/稍后再说]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text*=\"通知\"][visibleToUser=true]",
            "[text=\"暂时不要\" || text=\"稍后再说\"][visibleToUser=true]"
          ],
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/15944175",
            "https://i.gkd.li/i/17963945"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout[childCount=1] >3 FrameLayout[childCount=3] > ImageView[clickable=true][childCount=0]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/16188665",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-好友推荐弹窗",
      "desc": "点击关闭",
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - [text=\"关注你的好友\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16247893",
          "exampleUrls": "https://e.gkd.li/32069d2d-032c-4278-9ead-a48a464ecdd0",
          "key": 0
        }
      ]
    }
  ]
});
