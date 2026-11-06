// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "微博轻享版",
  "id": "com.weico.international",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionCd": 500,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "anyMatches": [
            "@[clickable=true][visibleToUser=true] + ViewGroup > [text=\"跳过\"]",
            "@[clickable=true] - [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]"
          ],
          "order": -1,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14549281",
            "https://i.gkd.li/i/14549328",
            "https://i.gkd.li/i/18792649",
            "https://i.gkd.li/i/20990401"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeMatches": [
            "@[clickable=true] - [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
            "@[clickable=true][visibleToUser=true] + ViewGroup > [text=\"跳过\"]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14661654",
            "https://i.gkd.li/i/14661622"
          ]
        },
        {
          "matches": "@[clickable=true] + * > [text=\"跳过\"][visibleToUser=true]",
          "order": -1,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14549281",
            "https://i.gkd.li/i/14549328"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14661654",
            "https://i.gkd.li/i/14661622"
          ]
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "出现在主页,搜索页",
      "enable": false,
      "forcedTime": 10000,
      "matchRoot": true,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"item_timeline_ad_action\"]",
          "key": 0,
          "name": "点击卡片广告右上角[x]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12857202",
            "https://i.gkd.li/i/14444744",
            "https://i.gkd.li/i/16667201"
          ]
        },
        {
          "matches": "@View[clickable=true] > [visibleToUser=true][text=\"不感兴趣\"] <<n [vid=\"design_bottom_sheet\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/12505755",
            "https://i.gkd.li/i/12505764",
            "https://i.gkd.li/i/14798365",
            "https://i.gkd.li/i/16667202"
          ]
        },
        {
          "matches": "@View[clickable=true] > [text=\"不感兴趣\"] <<n [vid=\"design_bottom_sheet\"]",
          "preKeys": [
            0
          ],
          "key": 2,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/12505755",
            "https://i.gkd.li/i/12505764",
            "https://i.gkd.li/i/14798365"
          ]
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "action": "clickCenter",
          "preKeys": [
            0
          ],
          "key": 3,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12505755",
            "https://i.gkd.li/import/12505764",
            "https://i.gkd.li/i/14798365",
            "https://i.gkd.li/i/16667202",
            "https://i.gkd.li/i/19226502",
            "https://i.gkd.li/i/19310848"
          ]
        }
      ]
    },
    {
      "name": "局部广告-推荐流广告",
      "desc": "主页,搜索页",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@View > [text=\"不感兴趣\"]",
          "preKeys": [
            1
          ],
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12505755",
            "https://i.gkd.li/import/12505764"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.weico.international:id/item_timeline_ad_action\"]",
          "key": 1,
          "name": "点击广告卡片右上角[x]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12505753",
            "https://i.gkd.li/import/12505763",
            "https://i.gkd.li/import/12857202"
          ]
        }
      ]
    },
    {
      "name": "推荐流广告",
      "desc": "主页,搜索页",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@View > [text=\"不感兴趣\"]",
          "preKeys": [
            1
          ],
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12505755",
            "https://i.gkd.li/import/12505764"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.weico.international:id/item_timeline_ad_action\"]",
          "key": 1,
          "name": "点击广告卡片右上角[x]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12505753",
            "https://i.gkd.li/import/12505763",
            "https://i.gkd.li/import/12857202"
          ]
        }
      ]
    }
  ]
});
