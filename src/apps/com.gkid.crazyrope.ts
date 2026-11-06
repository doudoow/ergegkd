// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "天天跳绳",
  "id": "com.gkid.crazyrope",
  "groups": [
    {
      "name": "全屏广告-会员提示",
      "desc": "点击不需要",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.gkid.crazyrope:id/btn_close\"][text=\"暂不需要\"]",
          "snapshotUrls": "https://i.gkd.li/i/12916419",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_close\"][text=\"暂不需要\"]",
          "snapshotUrls": "https://i.gkd.li/i/12916419",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-浮窗广告",
      "desc": "点击关闭-点击关闭广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.gkid.crazyrope:id/iv_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13262845",
          "exampleUrls": "https://e.gkd.li/398c08eb-ebfb-4cf6-9349-0b0ad4b575c9"
        },
        {
          "matches": "[text=\"关闭广告\"]",
          "preKeys": [
            2
          ],
          "snapshotUrls": "https://i.gkd.li/i/13262844",
          "exampleUrls": "https://e.gkd.li/3d27d844-b552-4a0c-800b-3dc5790fb8c0",
          "key": 1
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13262845",
          "exampleUrls": "https://e.gkd.li/398c08eb-ebfb-4cf6-9349-0b0ad4b575c9"
        }
      ]
    },
    {
      "name": "未分类-会员提示",
      "desc": "点击不需要",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.gkid.crazyrope:id/btn_close\"][text=\"暂不需要\"]",
          "snapshotUrls": "https://i.gkd.li/i/12916419",
          "key": 0
        }
      ]
    },
    {
      "name": "会员提示",
      "desc": "点击不需要",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.gkid.crazyrope:id/btn_close\"][text=\"暂不需要\"]",
          "snapshotUrls": "https://i.gkd.li/import/12916419",
          "key": 0
        }
      ]
    }
  ]
});
