// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "微博极速版",
  "id": "com.sina.weibolite",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "desc": "点击卡片广告右上角x图标,点击[不感兴趣]",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"item_timeline_ad_action\"]",
          "key": 0,
          "name": "点击卡片广告右上角x图标",
          "snapshotUrls": [
            "https://i.gkd.li/i/12738110",
            "https://i.gkd.li/i/14996673",
            "https://i.gkd.li/i/23097171"
          ]
        },
        {
          "matches": "@View[clickable=true][childCount=1] > TextView[visibleToUser=true][text=\"不感兴趣\"||text$=\"interest\"] <<n [vid=\"design_bottom_sheet\"]",
          "preKeys": [
            0
          ],
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12738132",
            "https://i.gkd.li/i/13727657",
            "https://i.gkd.li/i/14996679"
          ],
          "key": 1
        },
        {
          "matches": "@View[clickable=true][childCount=1] > TextView[text=\"不感兴趣\"||text$=\"interest\"] <<n [vid=\"design_bottom_sheet\"]",
          "preKeys": 0,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12738132",
            "https://i.gkd.li/i/13727657",
            "https://i.gkd.li/i/14996679"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "评价提示-APP评分弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibolite:id/ed_btn_negative\"]",
          "activityIds": "com.weico.international.activity.MainFragmentActivity",
          "snapshotUrls": "https://i.gkd.li/i/13727728",
          "key": 0
        },
        {
          "matches": "[vid=\"ed_btn_negative\"]",
          "activityIds": "com.weico.international.activity.MainFragmentActivity",
          "snapshotUrls": "https://i.gkd.li/i/13727728",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibolite:id/ed_btn_negative\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页红小包",
      "desc": "首页右下角红小包-x掉",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"floating_window\"] >2 [vid=\"complete_layout\"][childCount=3][visibleToUser=true] + [vid=\"close\"][clickable=true]",
          "activityIds": ".MainTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26148211",
          "exampleUrls": "https://e.gkd.li/eed48574-ccd7-470d-afa0-89d87e30f6e9",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "点击广告卡片右上角x图标,点击[不感兴趣]",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibolite:id/item_timeline_ad_action\"]",
          "key": 0,
          "name": "点击广告卡片右上角x图标",
          "snapshotUrls": "https://i.gkd.li/import/12738110"
        },
        {
          "matches": "@View[clickable=true][childCount=1] > TextView[text=\"不感兴趣\"||text$=\"interest\"]",
          "preKeys": 0,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12738132",
            "https://i.gkd.li/import/13727657"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-APP评分",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibolite:id/ed_btn_negative\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "信息流广告",
      "desc": "点击广告卡片右上角x图标,点击[不感兴趣]",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibolite:id/item_timeline_ad_action\"]",
          "key": 0,
          "name": "点击广告卡片右上角x图标",
          "snapshotUrls": "https://i.gkd.li/import/12738110"
        },
        {
          "matches": "@View[clickable=true][childCount=1] > TextView[text=\"不感兴趣\"||text$=\"interest\"]",
          "preKeys": 0,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12738132",
            "https://i.gkd.li/import/13727657"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "APP评分",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibolite:id/ed_btn_negative\"]",
          "key": 0
        }
      ]
    }
  ]
});
