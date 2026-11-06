// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "雷神加速器",
  "id": "com.nn.accelerator.box",
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
          "matches": "[vid=\"tobid_splash_skip_ll\" || vid=\"ms_skipView\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16451775",
            "https://i.gkd.li/i/18668837"
          ],
          "exampleUrls": "https://e.gkd.li/03b70de9-9e1d-4362-83df-08a95c2c224f"
        },
        {
          "matches": "ImageView[desc=\"skip_button\"] + ViewGroup > TextView[text=\"跳过\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16828285",
          "exampleUrls": "https://e.gkd.li/625debfb-faa5-438a-a5ba-5175233ea1d2"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/18668718",
          "exampleUrls": "https://e.gkd.li/d5777afa-927b-4d6d-be67-e92fd2f206cd"
        },
        {
          "matches": "@View[clickable=true] - [text=\"互动广告\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/18668852",
          "exampleUrls": "https://e.gkd.li/d32ca677-f0c4-49e4-8dfe-f105a9ab1cb9"
        },
        {
          "anyMatches": [
            "[text*=\"跳过\"][text.length<10][clickable=true][visibleToUser=true]",
            "@[clickable=true] > [text*=\"跳过\"][text.length<10][visibleToUser=true]"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/23096608",
            "https://i.gkd.li/i/24695040"
          ],
          "exampleUrls": "https://e.gkd.li/bff8f543-e262-4db1-b99b-32e2988fb47b"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_activity\"] + [vid=\"iv_close\"]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.WelcomeActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/16869245",
            "https://i.gkd.li/i/24694978"
          ],
          "exampleUrls": "https://e.gkd.li/a65304c0-0abe-4fc6-8eda-03f8d51ad62d",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text*=\"打开通知\"]",
            "[vid=\"iv_close\"]"
          ],
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16870058",
          "exampleUrls": "https://e.gkd.li/18e591d7-56cf-490d-bca8-d6eda269525d",
          "key": 0
        }
      ]
    }
  ]
});
