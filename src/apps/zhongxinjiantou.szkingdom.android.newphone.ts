// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "蜻蜓点金",
  "id": "zhongxinjiantou.szkingdom.android.newphone",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击放弃通知",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"zhongxinjiantou.szkingdom.android.newphone:id/tv_notify_confirm_off\"][text=\"放弃通知\"]",
          "activityIds": "com.szkingdom.android.phone.ZXJTUserMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12924466",
          "exampleUrls": "https://m.gkd.li/57941037/642582b1-f0f1-446c-b3f4-287eac62d108",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_notify_confirm_off\"][text=\"放弃通知\"]",
          "activityIds": "com.szkingdom.android.phone.ZXJTUserMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12924466",
          "exampleUrls": "https://m.gkd.li/57941037/642582b1-f0f1-446c-b3f4-287eac62d108",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-通知权限",
      "desc": "点击放弃通知",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"zhongxinjiantou.szkingdom.android.newphone:id/tv_notify_confirm_off\"][text=\"放弃通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/12924466",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知权限",
      "desc": "点击放弃通知",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"zhongxinjiantou.szkingdom.android.newphone:id/tv_notify_confirm_off\"][text=\"放弃通知\"]",
          "snapshotUrls": "https://i.gkd.li/import/12924466",
          "key": 0
        }
      ]
    },
    {
      "name": "通知权限",
      "desc": "点击放弃通知",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"zhongxinjiantou.szkingdom.android.newphone:id/tv_notify_confirm_off\"][text=\"放弃通知\"]",
          "snapshotUrls": "https://i.gkd.li/import/12924466",
          "key": 0
        }
      ]
    }
  ]
});
