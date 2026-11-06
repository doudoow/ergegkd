// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "咪咕视频",
  "id": "com.cmcc.cmvideo",
  "groups": [
    {
      "name": "局部广告-右下角小广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/iv_right_bottom_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/btn_update_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13276116",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_update_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13276116",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13276127",
          "key": 0
        },
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/base_dialog_left_btn\"][text=\"以后再说\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"iv_big_close\"]",
          "activityIds": "com.cmcc.cmvideo.main.application.CompatibleMainActivity",
          "matchRoot": true,
          "snapshotUrls": "https://i.gkd.li/i/16503612",
          "exampleUrls": "https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_big_close\"]",
          "activityIds": "com.cmcc.cmvideo.main.application.CompatibleMainActivity",
          "matchRoot": true,
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16503612",
          "exampleUrls": "https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb",
          "key": 1
        },
        {
          "matches": "@[id=\"com.cmcc.cmvideo:id/iv_big_close\"] + [id=\"com.cmcc.cmvideo:id/sdv_big_pic\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "点击x掉",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"iv_right_bottom_close\"]",
          "activityIds": ".main.application.CompatibleMainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12498315"
        },
        {
          "matches": "@ImageView[clickable=true][width<114 && height<114] - RecyclerView[width<500 && height<500] <<(1,2) FrameLayout - [vid=\"root_view\"]",
          "activityIds": ".main.application.CompatibleMainActivity",
          "key": 1,
          "name": "首页",
          "snapshotUrls": [
            "https://i.gkd.li/i/27367393",
            "https://i.gkd.li/i/27382399"
          ]
        },
        {
          "matches": "ImageView <(1,2) @[clickable=true][width<75 && height<75][childCount=2] - [vid=\"h5_content_container\"]",
          "activityIds": ".main.application.CompatibleMainActivity",
          "key": 2,
          "name": "直播预约",
          "snapshotUrls": [
            "https://i.gkd.li/i/27367465",
            "https://i.gkd.li/i/27375928"
          ]
        },
        {
          "matches": "[vid=\"iv_close\" || text=\"广告\"][clickable=true]",
          "activityIds": "com.cmvideo.capability.vod.VodActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/27367662"
        },
        {
          "matches": "@ImageView[clickable=true][width<114 && height<114] <(2,3) FrameLayout <<(1,2) [vid=\"fl_container\"][width<500 && height<500]",
          "key": 4,
          "name": "横屏播放页",
          "snapshotUrls": [
            "https://i.gkd.li/i/27330895",
            "https://i.gkd.li/i/27382514"
          ]
        },
        {
          "matches": "[vid=\"lv_ad_mark\"][clickable=true]",
          "key": 5,
          "name": "横屏播放页",
          "snapshotUrls": "https://i.gkd.li/i/27382514"
        },
        {
          "matches": "[vid=\"gift_pop_close\"][desc*=\"关闭\"]",
          "key": 6,
          "name": "直播间",
          "snapshotUrls": "https://i.gkd.li/i/27368007"
        }
      ]
    },
    {
      "name": "全屏广告-首页",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"iv_big_close\" || vid=\"close_bg_single\"]",
          "activityIds": ".main.application.CompatibleMainActivity",
          "matchRoot": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/16503612",
            "https://i.gkd.li/i/27368845"
          ],
          "exampleUrls": [
            "https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb",
            "https://e.gkd.li/5a577aa5-7d8a-4f7b-8a4a-230263775fbc"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "@[vid=\"rating_Bar\"][childCount=5] <4 [vid=\"mg_share_dialog_root\"]",
          "action": "back",
          "activityIds": "com.cmvideo.capability.vod.VodActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27368603",
          "exampleUrls": "https://e.gkd.li/aff1fce9-4295-406f-9a56-c26090b57abb",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/btn_cancle\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-推送通知权限弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/base_dialog_left_btn\"][text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/btn_cancle\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "右下角小广告",
      "enable": false,
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/iv_right_bottom_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/btn_update_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "推送通知权限弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/base_dialog_left_btn\"][text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "@[id=\"com.cmcc.cmvideo:id/iv_big_close\"] + [id=\"com.cmcc.cmvideo:id/sdv_big_pic\"]",
          "key": 0
        }
      ]
    }
  ]
});
