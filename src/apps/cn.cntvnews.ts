// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "央视新闻",
  "id": "cn.cntvnews",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"btn_close\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.torch.open.homeimpl.HomeActivity",
          "fastQuery": true,
          "key": 0,
          "name": "右侧悬浮小卡片",
          "snapshotUrls": "https://i.gkd.li/i/14368501",
          "exampleUrls": "https://m.gkd.li/57941037/8c4308a3-4142-45a0-a085-af8ee89ead04"
        }
      ]
    },
    {
      "name": "功能类-个性化推荐弹窗",
      "desc": "点击[取消]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"是否开启个性化推荐？\"] +3 * > [text=\"取消\"]",
          "activityIds": "com.torch.open.homeimpl.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/14444961",
          "exampleUrls": "https://m.gkd.li/57941037/b3ee21aa-429d-4407-9b70-acecb222c354",
          "key": 0
        }
      ]
    }
  ]
});
