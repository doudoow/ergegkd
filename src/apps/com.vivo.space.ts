// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "vivo 官网",
  "id": "com.vivo.space",
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
          "matches": "[vid=\"timer\" || vid=\"jump_over\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16775800",
            "https://i.gkd.li/i/19499311"
          ],
          "exampleUrls": "https://e.gkd.li/e531ea4e-874f-4da4-bcf1-f585887f753c",
          "key": 0
        },
        {
          "matches": "[vid=\"timer\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16775800",
          "exampleUrls": "https://e.gkd.li/e531ea4e-874f-4da4-bcf1-f585887f753c",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-活动广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "View[childCount=2] > @[index=1][clickable=true][visibleToUser=true][childCount=0] <<n [id=\"com.vivo.space:id/floating_window_web\"]",
          "activityIds": "com.vivo.space.ui.VivoSpaceTabActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218155",
            "https://i.gkd.li/i/13292907"
          ],
          "key": 0
        },
        {
          "matches": "View[childCount=2] > @[index=1][clickable=true][visibleToUser=true][childCount=0] <<n [vid=\"floating_window_web\"]",
          "activityIds": ".ui.VivoSpaceTabActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218155",
            "https://i.gkd.li/i/13292907"
          ],
          "key": 1
        },
        {
          "matches": "Image[text=\"\"] + [text=\"\"][clickable=true]",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击取消",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "Button[id=\"com.vivo.space:id/vbutton_title\"][text=\"取消\"]",
          "activityIds": ".ui.VivoSpaceTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13771581",
          "key": 0
        },
        {
          "matches": "Button[vid=\"vbutton_title\"][text=\"取消\"]",
          "activityIds": ".ui.VivoSpaceTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13771581",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-活动广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 3,
      "rules": [
        {
          "matches": "Image[text=\"\"] + [text=\"\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-消息通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "Button[id=\"com.vivo.space:id/vbutton_title\"][text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13771581",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-消息通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "Button[id=\"com.vivo.space:id/vbutton_title\"][text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/import/13771581",
          "key": 0
        }
      ]
    },
    {
      "name": "活动广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 6,
      "rules": [
        {
          "matches": "Image[text=\"\"] + [text=\"\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "消息通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "Button[id=\"com.vivo.space:id/vbutton_title\"][text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/import/13771581",
          "key": 0
        }
      ]
    }
  ]
});
