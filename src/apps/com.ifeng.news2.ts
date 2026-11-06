// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "凤凰新闻",
  "id": "com.ifeng.news2",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"img_feedback_left_of_image\"] < LinearLayout -2 LinearLayout >2 [vid=\"adv_label\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/19752573",
          "exampleUrls": "https://e.gkd.li/63216ca1-4f7c-4a95-9b9e-7ac4c894f0c0"
        },
        {
          "matches": "[vid=\"iv_item_del\" || vid=\"doc_detail_titleimg_ad_delete\" || vid=\"del_click\"][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/19752570",
            "https://i.gkd.li/i/19752567",
            "https://i.gkd.li/i/19752561"
          ],
          "exampleUrls": "https://e.gkd.li/0a199f54-70f9-45ae-8025-896b688dc8e6"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": [
            3,
            4
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/19752582",
            "https://i.gkd.li/i/19752559"
          ],
          "exampleUrls": "https://e.gkd.li/e182591a-492d-49ec-8820-20bea10495d9",
          "key": 2
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_label\"] + [id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12705500"
        },
        {
          "matches": "@[id=\"com.ifeng.news2:id/img_feedback_left_of_image\"] - LinearLayout >(2) [id=\"com.ifeng.news2:id/adv_label\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12705508"
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_icon\"] + LinearLayout[id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/12705511"
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_icon\"] + TextView + [id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/12705518"
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_label\"] + [id=\"com.ifeng.news2:id/iv_item_del\"]",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/12705520"
        },
        {
          "matches": "@[id=\"com.ifeng.news2:id/dialog_dislike_feedback_normal_item_linearlayout\"] > [text=\"不感兴趣\"]",
          "preKeys": [
            3,
            4,
            5,
            6,
            7
          ],
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/12705505"
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "点击取消",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"请求您的位置\"] + [id=\"com.ifeng.news2:id/permission_cancel\"]",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12705531",
          "key": 0
        },
        {
          "matches": "[text*=\"请求您的位置\"] + [id=\"com.ifeng.news2:id/permission_cancel\"]",
          "key": 1
        },
        {
          "matches": "[text*=\"请求您的位置\"] + [vid=\"permission_cancel\"]",
          "activityIds": ".activity.IfengTabMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12705531",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-信息流广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_label\"] + [id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12705500"
        },
        {
          "matches": "@[id=\"com.ifeng.news2:id/img_feedback_left_of_image\"] - LinearLayout >(2) [id=\"com.ifeng.news2:id/adv_label\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12705508"
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_icon\"] + LinearLayout[id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12705511"
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_icon\"] + TextView + [id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/12705518"
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_label\"] + [id=\"com.ifeng.news2:id/iv_item_del\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/import/12705520"
        },
        {
          "matches": "@[id=\"com.ifeng.news2:id/dialog_dislike_feedback_normal_item_linearlayout\"] > [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3,
            4
          ],
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/import/12705505"
        }
      ]
    },
    {
      "name": "全屏广告-请求位置权限弹窗",
      "desc": "自动点击取消",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text*=\"请求您的位置\"] + [id=\"com.ifeng.news2:id/permission_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "信息流广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_label\"] + [id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12705500"
        },
        {
          "matches": "@[id=\"com.ifeng.news2:id/img_feedback_left_of_image\"] - LinearLayout >(2) [id=\"com.ifeng.news2:id/adv_label\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12705508"
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_icon\"] + LinearLayout[id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12705511"
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_icon\"] + TextView + [id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/12705518"
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_label\"] + [id=\"com.ifeng.news2:id/iv_item_del\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/import/12705520"
        },
        {
          "matches": "@[id=\"com.ifeng.news2:id/dialog_dislike_feedback_normal_item_linearlayout\"] > [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3,
            4
          ],
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/import/12705505"
        }
      ]
    },
    {
      "name": "请求位置权限弹窗",
      "desc": "自动点击取消",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text*=\"请求您的位置\"] + [id=\"com.ifeng.news2:id/permission_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
