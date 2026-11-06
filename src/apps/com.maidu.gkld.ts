// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "公考雷达",
  "id": "com.maidu.gkld",
  "groups": [
    {
      "name": "局部广告-首页右侧悬浮广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/fl_float\"] + [id=\"com.maidu.gkld:id/close_image_view\"]",
          "activityIds": "com.maidu.gkld.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715291",
          "key": 0
        },
        {
          "matches": "[vid=\"fl_float\"] + [vid=\"close_image_view\"]",
          "activityIds": ".ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715291",
          "key": 1
        },
        {
          "matches": "[id=\"com.maidu.gkld:id/fl_float\"] + [id=\"com.maidu.gkld:id/close_image_view\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/ll_open_app_notice\"] + [id=\"com.maidu.gkld:id/iv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715250",
          "key": 0
        },
        {
          "matches": "[vid=\"ll_open_app_notice\"] + [vid=\"iv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715250",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页右侧悬浮广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/fl_float\"] + [id=\"com.maidu.gkld:id/close_image_view\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/ll_open_app_notice\"] + [id=\"com.maidu.gkld:id/iv_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 4,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/34117369"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/tv_update_next\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/ll_open_app_notice\"] + [id=\"com.maidu.gkld:id/iv_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/tv_update_next\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页右侧悬浮广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/fl_float\"] + [id=\"com.maidu.gkld:id/close_image_view\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/ll_open_app_notice\"] + [id=\"com.maidu.gkld:id/iv_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
