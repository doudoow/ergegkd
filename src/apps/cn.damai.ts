// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "大麦",
  "id": "cn.damai",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "该规则需要在高级设置中开启[启用优化]才能生效",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 8000,
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"homepage_advert_pb\"]",
          "action": "clickCenter",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14585402",
          "exampleUrls": "https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd",
          "key": 0
        },
        {
          "matches": "[vid=\"homepage_advert_pb\"]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/14585402",
          "exampleUrls": "https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd",
          "key": 1
        },
        {
          "matches": "[id=\"cn.damai:id/homepage_advert_pb\"]",
          "key": 2
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
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cn.damai:id/homepage_popup_window_close_btn\"]",
          "activityIds": "cn.damai.homepage.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13627900"
        },
        {
          "matches": "[vid=\"homepage_popup_window_close_btn\"]",
          "activityIds": ".homepage.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13627900"
        },
        {
          "matches": "[id=\"cn.damai:id/homepage_popup_window_image\"] + [id=\"cn.damai:id/homepage_popup_window_close_btn\"]",
          "activityIds": "cn.damai.homepage.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13627900"
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"damai_theme_dialog_close_layout\"][visibleToUser=true]",
          "activityIds": ".homepage.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24213790",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"cn.damai:id/homepage_popup_window_image\"] + [id=\"cn.damai:id/homepage_popup_window_close_btn\"]",
          "activityIds": "cn.damai.homepage.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13627900"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text*=\"通知权限\"] +2 LinearLayout > [text=\"不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"cn.damai:id/homepage_popup_window_image\"] + [id=\"cn.damai:id/homepage_popup_window_close_btn\"]",
          "activityIds": "cn.damai.homepage.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13627900"
        }
      ]
    }
  ]
});
