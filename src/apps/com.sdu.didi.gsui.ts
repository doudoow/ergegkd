// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "滴滴车主",
  "id": "com.sdu.didi.gsui",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.sdu.didi.gsui:id/main_dialog_banner_image_close\"]",
          "activityIds": "com.sdu.didi.gsui.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13958887",
          "key": 0
        },
        {
          "matches": "[vid=\"main_dialog_banner_image_close\"]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13958887",
          "key": 1
        }
      ]
    }
  ]
});
