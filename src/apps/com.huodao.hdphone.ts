// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "找靓机",
  "id": "com.huodao.hdphone",
  "groups": [
    {
      "name": "全屏广告-超级补贴日弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_adv\"] + [vid=\"dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13927567",
          "key": 0
        },
        {
          "matches": "[id=\"android:id/content\"] >2 [id=\"com.huodao.hdphone:id/dialog_close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_recycle_close\"]",
          "activityIds": "com.huodao.hdphone.mvp.view.main.NewMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15052025",
          "exampleUrls": "https://m.gkd.li/57941037/dc1534ca-9ab1-4d7b-8da4-6c7992882c94",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_recycle_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"iv_recycle_close\"]",
          "activityIds": ".mvp.view.main.NewMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15052025",
          "exampleUrls": "https://m.gkd.li/57941037/dc1534ca-9ab1-4d7b-8da4-6c7992882c94",
          "key": 2
        }
      ]
    }
  ]
});
