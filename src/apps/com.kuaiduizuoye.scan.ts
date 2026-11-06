// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "快对",
  "id": "com.kuaiduizuoye.scan",
  "groups": [
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.kuaiduizuoye.scan:id/iv_advertisement_widget_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告",
      "desc": "①点击[关闭] ②点击[知道了]",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[width>700][height<300] >3 [text=\"关闭\"][clickable=true]",
          "key": 0,
          "name": "①点击[关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/33854308",
            "https://i.gkd.li/i/34192315"
          ],
          "exampleUrls": "https://e.gkd.li/e81f7bbd-a5ce-4b57-b09a-185bd9529c9d"
        },
        {
          "matches": "[text=\"知道了\"][clickable=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "②点击[知道了]",
          "snapshotUrls": "https://i.gkd.li/i/34192316",
          "exampleUrls": "https://e.gkd.li/fc3499a7-a8a7-4b7d-9f47-71814bf7e811"
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.kuaiduizuoye.scan:id/iv_advertisement_widget_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.kuaiduizuoye.scan:id/iv_advertisement_widget_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
