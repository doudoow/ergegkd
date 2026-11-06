// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "GPS工具箱",
  "id": "com.leduoworks.gpstoolbox",
  "groups": [
    {
      "name": "局部广告-首页占位广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.leduoworks.gpstoolbox:id/iv_close\"]",
          "activityIds": "com.leduoworks.gpstoolbox.frmt.MainFrmtActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13062612",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": ".frmt.MainFrmtActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13062612",
          "key": 1
        },
        {
          "matches": "[id=\"com.leduoworks.gpstoolbox:id/iv_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-首页占位广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.leduoworks.gpstoolbox:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页占位广告",
      "enable": false,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.leduoworks.gpstoolbox:id/iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
