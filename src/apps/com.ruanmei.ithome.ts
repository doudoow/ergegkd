// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "IT之家",
  "id": "com.ruanmei.ithome",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeMatches": "[vid=\"iv_search_back\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16401878",
            "https://i.gkd.li/i/16401899"
          ],
          "exampleUrls": "https://e.gkd.li/49015bf7-6513-40b2-a436-d3c386ef1891",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[visibleToUser=true][text=\"关闭\"] <<n [vid=\"ll_web\"][visibleToUser=true] + [vid=\"shadowLayout\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": "com.ruanmei.ithome.ui.MainActivity",
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15413491",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15603266",
            "https://i.gkd.li/i/17516358"
          ]
        },
        {
          "matches": "[vid=\"iv_dislike\"][visibleToUser=true]",
          "activityIds": "com.ruanmei.ithome.ui.NewsInfoV8Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16972394"
        },
        {
          "matches": "@[visibleToUser=true][text=\"关闭\"] <<n [vid=\"ll_web\"][visibleToUser=true] + [vid=\"shadowLayout\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".ui.MainActivity",
          "resetMatch": "app",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15413491",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15603266",
            "https://i.gkd.li/i/17516358"
          ]
        },
        {
          "matches": "[vid=\"iv_dislike\"][visibleToUser=true]",
          "activityIds": ".ui.NewsInfoV8Activity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16972394"
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "长按广告-点击[屏蔽]-点击[不喜欢此条]",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[longClickable=true] >4 [text=\"广告 \"][visibleToUser=true]",
          "action": "longClick",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14734964",
          "excludeSnapshotUrls": "https://i.gkd.li/i/19340823"
        },
        {
          "matches": "[text*=\"屏蔽\"]",
          "preKeys": [
            3
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14734962"
        },
        {
          "matches": "[vid=\"rl_dislike\"]",
          "preKeys": [
            4
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14734987"
        },
        {
          "matches": "@[longClickable=true] >4 [text*=\"广告\"]",
          "action": "longClick",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14734964"
        },
        {
          "anyMatches": [
            "[text*=\"屏蔽\"][clickable=true]",
            "@[clickable=true] > [text*=\"屏蔽\"]"
          ],
          "preKeys": [
            3
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/14734962",
            "https://i.gkd.li/i/33722870"
          ]
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"btn_dialog_upgrade_ignore\"]",
          "activityIds": "com.ruanmei.ithome.ui.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15413494",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_dialog_upgrade_ignore\"]",
          "activityIds": ".ui.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15413494",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-资讯页-信息流广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"hongbaotips\"] +n @View > [text=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "资讯页-信息流广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"hongbaotips\"] +n @View > [text=\"关闭\"]",
          "key": 0
        }
      ]
    }
  ]
});
