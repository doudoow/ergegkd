// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "向日葵远程控制",
  "id": "com.oray.sunlogin",
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
          "matches": "[vid=\"tobid_splash_skip_text\" || vid=\"ms_skipView\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/17004919",
            "https://i.gkd.li/i/22056539"
          ],
          "exampleUrls": "https://e.gkd.li/f41b0367-9161-4329-987d-b2d0ad9ec233"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/22861457"
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] +2 LinearLayout >2 [vid=\"sig_ad_privacy_ll\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/22863334"
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] +(2,3) LinearLayout >2 [vid=\"sig_ad_privacy_ll\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/22863334",
            "https://i.gkd.li/i/25626004"
          ]
        },
        {
          "matches": "[vid=\"tobid_splash_skip_text\"][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17004919",
          "exampleUrls": "https://e.gkd.li/f41b0367-9161-4329-987d-b2d0ad9ec233",
          "key": 4
        },
        {
          "matches": "[vid=\"anythink_myoffer_splash_skip\"][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29830684",
          "key": 5
        },
        {
          "matches": "@View[clickable=true] - TextView[text=\"互动广告\"]",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/29830482",
            "https://i.gkd.li/i/29830555"
          ],
          "key": 6
        }
      ]
    },
    {
      "name": "全屏广告-瓜子会员弹窗",
      "desc": "点击右上角[关闭]",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.oray.sunlogin:id/close\"][text=\"关闭\"]",
          "activityIds": [
            "com.oray.sunlogin.application.Main",
            ".dialog.ShareDialog"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13195950",
            "https://i.gkd.li/i/12910411",
            "https://i.gkd.li/i/13197454"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.oray.sunlogin:id/close\"][text=\"关闭\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"close\"][text=\"关闭\"]",
          "activityIds": [
            ".application.Main",
            ".dialog.ShareDialog"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13195950",
            "https://i.gkd.li/i/12910411",
            "https://i.gkd.li/i/13197454"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "更新提示-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"立即更新\"] <2 * > [id=\"com.oray.sunlogin:id/button_cancel\"][text=\"以后再说\"]",
          "activityIds": ".application.Main",
          "snapshotUrls": "https://i.gkd.li/i/13195560",
          "key": 0
        },
        {
          "matches": "[text=\"立即更新\"] <2 * > [vid=\"button_cancel\"][text=\"以后再说\"]",
          "activityIds": ".application.Main",
          "snapshotUrls": "https://i.gkd.li/i/13195560",
          "key": 1
        },
        {
          "matches": "[text=\"立即更新\"] <2 * > [id=\"com.oray.sunlogin:id/button_cancel\"][text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/import/13195560",
          "key": 2
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.oray.sunlogin:id/fl_close_advertise\" || vid=\"iv_dislike\"][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13207785",
            "https://i.gkd.li/i/17159821"
          ],
          "exampleUrls": "https://e.gkd.li/2cad526b-1691-45e9-826b-eb92299cb8ee"
        },
        {
          "anyMatches": [
            "@[clickable=true] > [text=\"不感兴趣\"][clickable=false][visibleToUser=true]",
            "[text=\"不感兴趣\"][clickable=true][visibleToUser=true]"
          ],
          "preKeys": [
            2
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/22865433",
            "https://i.gkd.li/i/22941348"
          ],
          "exampleUrls": "https://e.gkd.li/55f927c7-edb5-4324-a73a-ad6dfa090eb6",
          "key": 1
        },
        {
          "matches": "[vid=\"fl_close_advertise\" || vid=\"iv_dislike\"][visibleToUser=true]",
          "action": "clickCenter",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13207785",
            "https://i.gkd.li/i/17159821"
          ],
          "exampleUrls": "https://e.gkd.li/2cad526b-1691-45e9-826b-eb92299cb8ee"
        }
      ]
    },
    {
      "name": "功能类-退出app提示",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"是否确认退出向日葵？\"] + LinearLayout > [vid=\"button_ok\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13927148",
          "key": 0
        },
        {
          "matches": "[text=\"是否确认退出向日葵？\"] + LinearLayout > [vid=\"button_ok\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-远程控制结束后的广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[vid=\"close\"][visibleToUser=true] - [vid=\"ll_remote_end\"]",
          "activityIds": ".application.Main",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17782893",
          "exampleUrls": "https://e.gkd.li/104ba188-b4cd-4922-b27e-f654085eb163",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-设备列表-卡片广告",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.oray.sunlogin:id/fl_close_advertise\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.oray.sunlogin:id/fl_close_advertise\" || vid=\"iv_dislike\"][visibleToUser=true]",
          "activityIds": "com.oray.sunlogin.application.Main",
          "snapshotUrls": [
            "https://i.gkd.li/i/13207785",
            "https://i.gkd.li/i/17159821"
          ],
          "exampleUrls": "https://e.gkd.li/2cad526b-1691-45e9-826b-eb92299cb8ee",
          "key": 0
        }
      ]
    }
  ]
});
