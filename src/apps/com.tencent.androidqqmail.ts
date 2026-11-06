// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "QQ邮箱",
  "id": "com.tencent.androidqqmail",
  "groups": [
    {
      "name": "分段广告-列表卡片广告",
      "desc": "自动处理邮件列表中的卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.tencent.androidqqmail:id/advertise_view_ad\"]",
          "key": 0,
          "name": "英文版邮箱广告-点击Ads",
          "snapshotUrls": "https://i.gkd.li/i/12842757"
        },
        {
          "matches": "@FrameLayout > TextView[text=\"Not interested\"]",
          "preKeys": [
            7
          ],
          "name": "英文版邮箱广告-点击Not interested",
          "snapshotUrls": "https://i.gkd.li/i/12842775",
          "key": 1
        },
        {
          "matches": "LinearLayout > TextView + @LinearLayout[id!=null][clickable=true] > [text=\"广告\"]",
          "key": 2,
          "name": "点击[广告]",
          "snapshotUrls": "https://i.gkd.li/i/12775857"
        },
        {
          "matches": "[vid=\"btn_advertise_click_area\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/17908070",
          "exampleUrls": "https://e.gkd.li/acce3df3-9773-4b42-b468-4724a7851efe"
        },
        {
          "matches": "ImageView < LinearLayout[width<130 && height<100][id!=null] < @FrameLayout[clickable=true][id!=null] - [text=\"广告\"]",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/24559942"
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            7,
            2,
            8,
            9
          ],
          "key": 5,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775862",
            "https://i.gkd.li/i/15051479",
            "https://i.gkd.li/i/17908078"
          ]
        },
        {
          "matches": "[text=\"赞助商提供的广告\"] < * < * >2 [text=\"不感兴趣\"]",
          "preKeys": [
            7,
            2
          ],
          "key": 6,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775862",
            "https://i.gkd.li/i/15051479"
          ]
        },
        {
          "matches": "[vid=\"advertise_view_ad\"]",
          "key": 7,
          "name": "英文版邮箱广告-点击Ads",
          "snapshotUrls": "https://i.gkd.li/i/12842757"
        },
        {
          "matches": "[vid=\"btn_advertise_click_area\"]",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/17908070"
        },
        {
          "matches": "ImageView < LinearLayout[width<130 && height<100][id!=null] < @FrameLayout[clickable=true][id!=null] - [text=\"广告\"]",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/24559942"
        },
        {
          "anyMatches": [
            "[text=\"不感兴趣\"]",
            "@FrameLayout > TextView[text=\"Not interested\"]"
          ],
          "preKeys": [
            7,
            2,
            8,
            9
          ],
          "key": 10,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775862",
            "https://i.gkd.li/import/12842775",
            "https://i.gkd.li/i/15051479",
            "https://i.gkd.li/i/16824453",
            "https://i.gkd.li/i/17908078"
          ]
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"立刻开启\"] - [text=\"以后再说\"]",
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity",
          "snapshotUrls": "https://i.gkd.li/i/13043069",
          "key": 0
        },
        {
          "matches": "[text=\"立刻开启\"] - [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13043069",
          "key": 1
        }
      ]
    },
    {
      "name": "开屏广告",
      "desc": "点击跳过应用启动时的开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=3] > ImageView + @ImageView[clickable=true][visibleToUser=true] + FrameLayout[childCount>0]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-列表卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[id=\"com.tencent.androidqqmail:id/advertise_view_ad\"]"
          ],
          "key": 0,
          "name": "英文版邮箱广告-点击Ads",
          "snapshotUrls": "https://i.gkd.li/import/12842757"
        },
        {
          "matches": "@FrameLayout > TextView[text=\"Not interested\"]",
          "preKeys": [
            0
          ],
          "name": "英文版邮箱广告-点击Not interested",
          "snapshotUrls": "https://i.gkd.li/import/12842775",
          "key": 1
        },
        {
          "matches": "LinearLayout > TextView + @LinearLayout[id!=null][clickable=true] > [text=\"广告\"]",
          "key": 2,
          "name": "点击[广告]",
          "snapshotUrls": "https://i.gkd.li/import/12775857"
        },
        {
          "matches": "[text=\"赞助商提供的广告\"] < FrameLayout + @FrameLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            2
          ],
          "key": 3,
          "name": "点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/import/12775862"
        }
      ]
    },
    {
      "name": "全屏广告-开启通知提醒",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"立刻开启\"] - [text=\"以后再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13043069"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "列表卡片广告",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": [
            "[id=\"com.tencent.androidqqmail:id/advertise_view_ad\"]"
          ],
          "key": 0,
          "name": "英文版邮箱广告-点击Ads",
          "snapshotUrls": "https://i.gkd.li/import/12842757"
        },
        {
          "matches": "@FrameLayout > TextView[text=\"Not interested\"]",
          "preKeys": [
            0
          ],
          "name": "英文版邮箱广告-点击Not interested",
          "snapshotUrls": "https://i.gkd.li/import/12842775",
          "key": 1
        },
        {
          "matches": "LinearLayout > TextView + @LinearLayout[id!=null][clickable=true] > [text=\"广告\"]",
          "key": 2,
          "name": "点击[广告]",
          "snapshotUrls": "https://i.gkd.li/import/12775857"
        },
        {
          "matches": "[text=\"赞助商提供的广告\"] < FrameLayout + @FrameLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            2
          ],
          "key": 3,
          "name": "点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/import/12775862"
        }
      ]
    },
    {
      "name": "开启通知提醒",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"立刻开启\"] - [text=\"以后再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13043069"
          ],
          "key": 0
        }
      ]
    }
  ]
});
