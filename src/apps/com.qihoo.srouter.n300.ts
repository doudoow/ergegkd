// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "360家庭防火墙",
  "id": "com.qihoo.srouter.n300",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"app_update_later_button\"]",
          "activityIds": "com.ifenglian.superapp.ui.firewall.SAMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13800011",
          "key": 0
        },
        {
          "matches": "[vid=\"app_update_later_button\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"app_update_later_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"app_update_later_button\"]",
          "key": 0
        }
      ]
    }
  ]
});
