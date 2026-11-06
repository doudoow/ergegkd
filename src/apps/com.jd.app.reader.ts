// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "京东读书",
  "id": "com.jd.app.reader",
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
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14189228",
          "exampleUrls": "https://m.gkd.li/57941037/6f4561e5-b998-43f9-8848-b6b43d045a3d"
        },
        {
          "matches": "[vid=\"mJumpBtn\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16486457",
          "exampleUrls": "https://e.gkd.li/28a83ffc-ba28-4d0e-8f28-b48a4a542f23"
        },
        {
          "matches": "[id=\"com.jd.app.reader:id/animation_view\"]",
          "position": {
            "left": "width * 0.9007",
            "top": "width * 0.1603"
          },
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13264389",
          "exampleUrls": "https://m.gkd.li/57941037/ab677b66-4681-4672-a1d6-3b5938e7f374"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id=\"android:id/content\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14189228",
          "exampleUrls": "https://m.gkd.li/57941037/6f4561e5-b998-43f9-8848-b6b43d045a3d"
        },
        {
          "matches": "[vid=\"mJumpBtn\"][visibleToUser=true]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/16486457",
          "exampleUrls": "https://e.gkd.li/28a83ffc-ba28-4d0e-8f28-b48a4a542f23"
        },
        {
          "matches": "[id=\"com.jd.app.reader:id/animation_view\"]",
          "position": {
            "left": "width * 0.9007",
            "top": "width * 0.1603"
          },
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13264389",
          "exampleUrls": "https://m.gkd.li/57941037/ab677b66-4681-4672-a1d6-3b5938e7f374"
        },
        {
          "matches": "[vid=\"animation_view\"]",
          "position": {
            "left": "width * 0.9007",
            "top": "width * 0.1603"
          },
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/13264389",
          "exampleUrls": "https://m.gkd.li/57941037/ab677b66-4681-4672-a1d6-3b5938e7f374"
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"mCloseBtn\"][visibleToUser=true]",
          "activityIds": "com.jingdong.app.reader.main.ui.JdMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16486458",
          "exampleUrls": "https://e.gkd.li/ac85ef54-5180-4740-b12d-608b37ad5502",
          "key": 0
        },
        {
          "matches": "[id=\"com.jd.app.reader:id/mCardView\"] + [id=\"com.jd.app.reader:id/mCloseBtn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12686577",
            "https://i.gkd.li/import/12686664"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-阅读页面弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id$=\"ad_read_close\"]",
          "activityIds": "com.jd.read.engine.activity.EngineReaderActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12881810",
            "https://i.gkd.li/i/12893631"
          ],
          "key": 0
        },
        {
          "matches": "[id$=\"ad_read_close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[text=\"下次再说\"] +(2) [text=\"立即更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12686632"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-阅读页面广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id$=\"ad_read_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"下次再说\"] +(2) [text=\"立即更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12686632"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "首页弹窗广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.jd.app.reader:id/mCardView\"] + [id=\"com.jd.app.reader:id/mCloseBtn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12686577",
            "https://i.gkd.li/import/12686664"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "阅读页面广告弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id$=\"ad_read_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
