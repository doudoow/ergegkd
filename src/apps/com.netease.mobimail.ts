// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网易邮箱",
  "id": "com.netease.mobimail",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10][!(id=\"com.netease.mobimail:id/ad_skip\")]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12686132",
            "https://i.gkd.li/i/13328441",
            "https://i.gkd.li/i/13800060"
          ]
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12686093"
        },
        {
          "matches": "[id=\"com.netease.mobimail:id/ad_skip\"][clickable=true]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12667519",
            "https://i.gkd.li/i/13328425"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10][id!=\"com.netease.mobimail:id/ad_skip\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12686132",
            "https://i.gkd.li/i/13328441",
            "https://i.gkd.li/i/13800060"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12686093"
        },
        {
          "matches": "[id=\"com.netease.mobimail:id/ad_skip\"][clickable=true]",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/12667519",
            "https://i.gkd.li/i/13328425"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10][!(vid=\"ad_skip\")]",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/12686132",
            "https://i.gkd.li/i/13328441",
            "https://i.gkd.li/i/13800060"
          ]
        },
        {
          "matches": "[vid=\"ad_skip\"][clickable=true]",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/12667519",
            "https://i.gkd.li/i/13328425"
          ]
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/12686093"
        }
      ]
    },
    {
      "name": "局部广告-邮件列表页面广告条目",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.netease.mobimail:id/ad_vip\" || id=\"com.netease.mobimail:id/ll_delete\"]",
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12683488",
            "https://i.gkd.li/i/12683511"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"ad_vip\" || vid=\"ll_delete\"]",
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12683488",
            "https://i.gkd.li/i/12683511"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"com.netease.mobimail:id/ad_vip\"]",
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "snapshotUrls": "https://i.gkd.li/import/12683488",
          "key": 2
        },
        {
          "matches": "[id=\"com.netease.mobimail:id/ll_delete\"]",
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "snapshotUrls": "https://i.gkd.li/import/12683511",
          "key": 3
        }
      ]
    },
    {
      "name": "未分类-邮件列表页面广告条目",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.netease.mobimail:id/ad_vip\"]",
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "snapshotUrls": "https://i.gkd.li/i/12683488",
          "key": 0
        },
        {
          "matches": "[id=\"com.netease.mobimail:id/ll_delete\"]",
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "snapshotUrls": "https://i.gkd.li/i/12683511",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-切回时的开屏广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@LinearLayout > TextView[text^=\"跳过\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-切回时的开屏广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@LinearLayout > TextView[text^=\"跳过\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "邮件列表页面广告条目",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.netease.mobimail:id/ad_vip\"]",
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "snapshotUrls": "https://i.gkd.li/import/12683488",
          "key": 0
        },
        {
          "matches": "[id=\"com.netease.mobimail:id/ll_delete\"]",
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "snapshotUrls": "https://i.gkd.li/import/12683511",
          "key": 1
        }
      ]
    },
    {
      "name": "切回时的开屏广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@LinearLayout > TextView[text^=\"跳过\"]",
          "key": 0
        }
      ]
    }
  ]
});
