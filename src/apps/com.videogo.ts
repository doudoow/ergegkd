// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "萤石云视频",
  "id": "com.videogo",
  "groups": [
    {
      "name": "分段广告-主页广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.videogo:id/ad_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13255684"
        },
        {
          "matches": "[id=\"com.videogo:id/ad_closead_nointerest\"]",
          "preKeys": [
            2
          ],
          "snapshotUrls": "https://i.gkd.li/i/13255697",
          "key": 1
        },
        {
          "matches": "[vid=\"ad_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13255684"
        },
        {
          "matches": "[vid=\"ad_closead_nointerest\"]",
          "preKeys": [
            2
          ],
          "snapshotUrls": "https://i.gkd.li/i/13255697",
          "key": 3
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[text=\"了解并试用服务\"][visibleToUser=true]",
          "action": "back",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15338834"
        },
        {
          "matches": "[text=\"新机礼包专享\"][visibleToUser=true]",
          "action": "back",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/18843418",
            "https://i.gkd.li/i/20139706"
          ],
          "exampleUrls": "https://e.gkd.li/b9045305-ce34-43f7-ab86-b48a672281cb"
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 0
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10 && (text*=\"跳过\" || text*=\"跳過\" || text*=\"skip\" || text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || desc*=\"跳过\" || desc*=\"skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"countdown\" && vid!*=\"load\" && vid!*=\"add\" && vid!*=\"ead\" && vid!*=\"time\")]",
          "key": 1
        },
        {
          "matches": "[vid=\"ad_content\"] >n View[clickable=true]",
          "key": 2,
          "name": "穿山甲SDK",
          "snapshotUrls": "https://i.gkd.li/i/14076262"
        }
      ]
    },
    {
      "name": "未分类-主页广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.videogo:id/ad_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13255684"
        },
        {
          "matches": "[id=\"com.videogo:id/ad_closead_nointerest\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/i/13255697",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-在线值守试用弹窗",
      "desc": "点击x",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"了解并试用服务\"] <<n ViewGroup[index=0][childCount=2] > ViewGroup[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-主页广告",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.videogo:id/ad_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13255684"
        },
        {
          "matches": "[id=\"com.videogo:id/ad_closead_nointerest\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/import/13255697",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-在线值守广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "TextView[text=\"了解并试用服务\"]",
          "action": "back",
          "activityIds": ".main.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/15338834",
          "key": 0
        }
      ]
    },
    {
      "name": "主页广告",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.videogo:id/ad_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13255684"
        },
        {
          "matches": "[id=\"com.videogo:id/ad_closead_nointerest\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/import/13255697",
          "key": 1
        }
      ]
    }
  ]
});
