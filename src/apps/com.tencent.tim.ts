// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "TIM",
  "id": "com.tencent.tim",
  "groups": [
    {
      "name": "功能类-自动点击查看原图",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"查看原图\"]",
          "activityIds": [
            "com.tencent.mobileqq.richmediabrowser.AIOGalleryActivity",
            "com.tencent.richframework.gallery.QQGalleryActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/15197486",
            "https://i.gkd.li/i/17987327"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/894c5e7b-aab1-452c-a2a7-67a605506c89",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-发送图片时自动勾选[原图]",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[checked=false] + [text=\"原图\"]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.qqnt.qbasealbum.WinkHomeActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/15209768",
            "https://i.gkd.li/i/17987325"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/57b4e39f-ba48-4e57-a5de-3a461a583e60",
          "key": 0
        },
        {
          "matches": "@[checked=false] + [text=\"原图\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动查看原图",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text^=\"查看原图\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-权限申请自动授权",
      "desc": "App申请权限自动同意",
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"同意\" || text=\"确认\"][visibleToUser=true][clickable=true]",
          "actionCd": 500,
          "activityIds": "com.tencent.open.agent.PublicFragmentActivityForOpenSDK",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/24838083",
            "https://i.gkd.li/i/24838130"
          ]
        }
      ]
    }
  ]
});
