// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "联通视频彩铃",
  "id": "com.iflytek.womusicclient",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_img\"] + [vid=\"btn_close\"]",
          "activityIds": "android.womusic.com.songcomponent.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14680681",
          "exampleUrls": "https://m.gkd.li/57941037/64eb594e-f764-4080-a3e6-620e7174602f"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_img\"] + [vid=\"btn_close\"]",
          "activityIds": "android.womusic.com.songcomponent.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14680681",
          "exampleUrls": "https://m.gkd.li/57941037/64eb594e-f764-4080-a3e6-620e7174602f"
        }
      ]
    }
  ]
});
