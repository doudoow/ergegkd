// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "直播吧",
  "id": "android.zhibo8",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "desc": "点击[关闭]-点击[不感兴趣]",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_tip\"][clickable=true][visibleToUser=true]",
          "key": 0,
          "name": "点击关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/13786148",
            "https://i.gkd.li/i/14428863",
            "https://i.gkd.li/i/15443198"
          ]
        },
        {
          "matches": "@[clickable=true] >3 [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/i/14428912"
        }
      ]
    },
    {
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"发现新版本\"]",
            "[text$=\"不再提醒\"]"
          ],
          "activityIds": ".ui.contollers.main.MainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14395465",
            "https://i.gkd.li/i/17825255"
          ]
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
          "matches": "[vid=\"pushsetting_close_iv\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17825298",
          "exampleUrls": "https://e.gkd.li/e28aa1f2-8088-4f78-bee9-2d5832637671",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"android.zhibo8:id/iv_tip\"] - [id=\"android.zhibo8:id/tv_app_download_2\"]",
          "key": 0,
          "name": "点击[查看详情]右侧x",
          "snapshotUrls": "https://i.gkd.li/i/12841134"
        },
        {
          "matches": "@LinearLayout > [id=\"android.zhibo8:id/tv_title\"][text=\"不感兴趣\"]",
          "key": 1,
          "name": "点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/i/12841135"
        },
        {
          "matches": "[text=\"广告\"] <3 LinearLayout +2 [visibleToUser=true][id=\"android.zhibo8:id/iv_tip\"]",
          "key": 2,
          "name": "点击【广告】右侧的x",
          "snapshotUrls": "https://i.gkd.li/i/13786148"
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView[id=\"android.zhibo8:id/iv_tip\"][visibleToUser=true] -2 LinearLayout > TextView[text=\"广告\"]",
          "key": 0,
          "name": "点击[查看详情]右侧x",
          "snapshotUrls": [
            "https://i.gkd.li/import/12841134",
            "https://i.gkd.li/import/13786148"
          ]
        },
        {
          "matches": "TextView[id=\"android.zhibo8:id/tv_title\"][text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/import/12841135"
        }
      ]
    },
    {
      "name": "信息流广告",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"android.zhibo8:id/iv_tip\"] - [id=\"android.zhibo8:id/tv_app_download_2\"]",
          "key": 0,
          "name": "点击[查看详情]右侧x",
          "snapshotUrls": "https://i.gkd.li/import/12841134"
        },
        {
          "matches": "@LinearLayout > [id=\"android.zhibo8:id/tv_title\"][text=\"不感兴趣\"]",
          "key": 1,
          "name": "点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/import/12841135"
        },
        {
          "matches": "[text=\"广告\"] <3 LinearLayout +2 [visibleToUser=true][id=\"android.zhibo8:id/iv_tip\"]",
          "key": 2,
          "name": "点击【广告】右侧的x",
          "snapshotUrls": "https://i.gkd.li/import/13786148"
        }
      ]
    }
  ]
});
