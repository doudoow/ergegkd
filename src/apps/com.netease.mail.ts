// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网易邮箱大师",
  "id": "com.netease.mail",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeMatches": "[vid=\"ad_skip\"][clickable=false]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13195662",
            "https://i.gkd.li/i/16883928",
            "https://i.gkd.li/i/14900326"
          ]
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14046124"
        },
        {
          "matches": "[id=\"com.netease.mail:id/animation_view\"]",
          "position": {
            "left": "width * 0.9016",
            "top": "width * 0.1557"
          },
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13207736",
            "https://i.gkd.li/i/14900326",
            "https://i.gkd.li/i/16892947"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "excludeMatches": "[id=\"com.netease.mail:id/ad_skip\"][clickable=false]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12893573",
            "https://i.gkd.li/i/12923776",
            "https://i.gkd.li/i/13195662",
            "https://i.gkd.li/i/12818335",
            "https://i.gkd.li/i/13206298"
          ]
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14046124"
        },
        {
          "matches": "[id=\"com.netease.mail:id/ad_view\"]",
          "excludeMatches": "[text*=\"跳过\"][text.length<=10]",
          "position": {
            "left": "width * 0.9016",
            "top": "width * 0.1557"
          },
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13207736",
            "https://i.gkd.li/i/14900326"
          ]
        },
        {
          "matches": "[vid=\"animation_view\"]",
          "position": {
            "left": "width * 0.9016",
            "top": "width * 0.1557"
          },
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/13207736",
            "https://i.gkd.li/i/14900326",
            "https://i.gkd.li/i/16892947"
          ]
        },
        {
          "anyMatches": [
            "@TextView[text*=\"跳过\"] -n FrameLayout[id=\"com.netease.mail:id/ad_placeholder\"]",
            "@TextView[text*=\"跳过\"] <<n FrameLayout[id=\"com.netease.mail:id/ad_placeholder\"]",
            "View <(2,3) FrameLayout <(1,3) FrameLayout < [vid=\"ad_placeholder\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12818335",
            "https://i.gkd.li/import/12893573",
            "https://i.gkd.li/import/12923776",
            "https://i.gkd.li/import/13195662",
            "https://i.gkd.li/import/14046124"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/import/13206298"
          ],
          "key": 7
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "excludeMatches": "[vid=\"ad_skip\"][clickable=false]",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/13195662",
            "https://i.gkd.li/i/16883928",
            "https://i.gkd.li/i/14900326"
          ]
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/14046124"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "excludeMatches": "[id=\"com.netease.mail:id/ad_skip\"][clickable=false]",
          "quickFind": true,
          "key": 10,
          "snapshotUrls": [
            "https://i.gkd.li/import/12893573",
            "https://i.gkd.li/import/12923776",
            "https://i.gkd.li/import/13195662",
            "https://i.gkd.li/import/12818335",
            "https://i.gkd.li/import/13206298",
            "https://i.gkd.li/import/13207736"
          ]
        },
        {
          "matches": "[id$=\"tt_splash_skip_btn\"]",
          "key": 11,
          "snapshotUrls": "https://i.gkd.li/import/12999739"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView",
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/import/14046124"
        }
      ]
    },
    {
      "name": "全屏广告-邮件列表广告",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.netease.mail:id/ad_vip\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12999833"
        },
        {
          "matches": "[id=\"com.netease.mail:id/ll_delete\"]",
          "preKeys": [
            3
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12999841"
        },
        {
          "matches": "[id=\"com.netease.mail:id/ll_delete\"]",
          "preKeys": 0,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12999841"
        },
        {
          "matches": "[vid=\"ad_vip\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12999833"
        },
        {
          "matches": "[vid=\"ll_delete\"]",
          "preKeys": [
            3
          ],
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12999841"
        }
      ]
    },
    {
      "name": "其他-获得成就弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "TextView[text=\"恭喜您获得以下成就\"] - @TextView[clickable=true][text=\"\"] <<n [vid=\"browser_fragment_container\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13876817",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-查看成就",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "TextView[text=\"恭喜您获得以下成就\"] - TextView[text=\"\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.netease.mail:id/tv_ignore_this_version\"][text=\"暂不更新\"]",
          "key": 0
        }
      ]
    }
  ]
});
