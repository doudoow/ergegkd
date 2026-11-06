// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "煎蛋",
  "id": "com.danielstudio.app.wowtu",
  "groups": [
    {
      "name": "功能类-自动查看高清图片",
      "desc": "点击图片左下角[HD]",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"hd_image\"][visibleToUser=true]",
          "activityIds": ".activity.ImageGalleryActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19643465",
          "exampleUrls": "https://e.gkd.li/ec909db9-b585-4d69-a456-aa0865cec6a7",
          "key": 0
        }
      ]
    }
  ]
});
