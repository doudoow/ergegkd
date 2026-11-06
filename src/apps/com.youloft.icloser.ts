// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "心动日常",
  "id": "com.youloft.icloser",
  "groups": [
    {
      "name": "全屏广告-购买会员弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.youloft.icloser:id/tv_later_buy\"]",
          "activityIds": "com.youloft.icloser.view.dialog.VipRetainPacketDialog",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13067183",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_later_buy\"]",
          "activityIds": ".view.dialog.VipRetainPacketDialog",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13067183",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-右下角悬浮窗小广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.youloft.icloser:id/iv_close\"]",
          "activityIds": "com.youloft.icloser.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13164387",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13164387",
          "key": 1
        },
        {
          "matches": "[id=\"com.youloft.icloser:id/iv_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-购买会员-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.youloft.icloser:id/tv_later_buy\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-右下角悬浮窗小广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.youloft.icloser:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-购买会员-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.youloft.icloser:id/tv_later_buy\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "购买会员-弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.youloft.icloser:id/tv_later_buy\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "右下角悬浮窗小广告",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.youloft.icloser:id/iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
